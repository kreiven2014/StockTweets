/* MODULES */
import axios from "axios";
import qs from "qs";

/* CUSTOM MODULES */
import logger from "src/utils/logger";

/* CONFIGS */
import { MAIN_CONFIG } from "src/configs";

/* TYPES */
type TRequestType = "get" | "post" | "put" | "patch" | "delete";
type TResponse = { status: number; statusText: string; data?: any } & Object;

const ENABLE_REQUEST_LOGS = true;

let TOKEN = "";
let appStore = null; // eslint-disable-line @typescript-eslint/no-unused-vars

export function setToken(token: string) {
  TOKEN = token;
}

export function getToken(): string | null {
  if (!TOKEN) {
    return null;
  }

  return TOKEN;
}

export function setAppStore(store: {}) {
  appStore = store;
}

/**
 * Base request
 *
 * @param {_t_requestType} requestType - request type
 * @param {string} url - request url
 * @param {Object} [body] - request body
 * @param {Object} [queryParams] - request query params
 * @param {Object} [addHeaders] - additional headers for request
 *
 * @returns {Promise}
 */
async function _baseRequest(
  requestType: TRequestType,
  url: string,
  body?: {} | null,
  queryParams?: {} | null,
  addHeaders?: {} | null,
  isFormData?: boolean,
): Promise<any> {
  if (ENABLE_REQUEST_LOGS) {
    logger.info("TOKEN ===== ", getToken());
    logger.info(`REQUEST TYPE =====> ${requestType}`);
    logger.info(
      `REQUEST URL =====> ${MAIN_CONFIG.API_URL}${url}${queryParams ? `?${qs.stringify(queryParams)}` : ""
      }`,
    );
    logger.info(`REQUEST BODY =====> `, body);
  }

  const _token = getToken();
  /**
   * @Note: add token to authorization if user is logged in
   * @Note: if have requests where don't need token - can exclude them as in comment below
   */
  const _authorization = _token // && !url.includes("login") && !url.includes("register")
    ? {
      authorization: `Token ${_token}`,
    }
    : null;

  const headers = {
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    ..._authorization,
    ...addHeaders,
  };

  /**
   * Check internet connection before send request
   * TODO(Anyone): will be implemented if need it!
   */
  // if (!appStore || !appStore.isNetworkConnected)) {
  //   return Promise.reject({ data: `No network!` });
  // }

  return axios({
    method: requestType,
    url: `${MAIN_CONFIG.API_URL}${url}${queryParams ? `?${qs.stringify(queryParams)}` : ""
      }`,
    data: body && !isFormData ? JSON.stringify(body) : body,
    headers,
  })
    .then((response) => {
      if (MAIN_CONFIG.ENABLE_LOGS && ENABLE_REQUEST_LOGS) {
        logger.log(`response URL - ${url} ===== `, response);
      }
      if (typeof response === "string" || !response) {
        logger.warn("Response is a string!");
        return response;
      }

      return response.data || null;
    })
    .catch(async (error) => {
      if (ENABLE_REQUEST_LOGS) {
        logger.warn(`Error when go to ${url} ===== `, error);
      }

      if (error.response) {
        const { status } = error.response;
        /**
         * If get 403 or 401 error (but not from logout endpoint) - logout user
         */
        // if (error && (status === 403 || status === 401) && !url.includes("logout") && appStore) {
        //   appStore.logout();
        // }

        return Promise.reject({
          status,
          data: error.response.data,
          statusText: error.response.statusText || "",
        });
      }

      return Promise.reject(error);
    });
}

/**
 * Common GET request
 *
 * @export
 * @param {string} url - url for request
 *
 * @returns {Promise}
 */
export function getRequest(url: string, queryParams?: Object): Promise<any> {
  return _baseRequest("get", url, null, queryParams);
}

/**
 * Common POST request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} body - data
 * @param {Object | null} queryParams - query params for request
 * @param {Object | null} addHeaders - headers for request
 *
 * @returns {Promise}
 */
export function postRequest(
  url: string,
  body?: {} | null,
  queryParams?: {} | null,
  addHeaders?: {} | null,
  isFormData?: boolean,
): Promise<any> {
  return _baseRequest("post", url, body, queryParams, addHeaders, isFormData);
}

/**
 * Common PUT request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} queryParams - query params for request
 * @param {Object} body - data
 *
 * @returns {Promise}
 */
export function putRequest(
  url: string,
  body?: Object,
  queryParams?: {} | null,
  addHeaders?: {} | null,
  isFormData?: boolean,
): Promise<TResponse> {
  return _baseRequest("put", url, body, queryParams, addHeaders, isFormData);
}

/**
 * Common PATCH request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} queryParams - query params for request
 * @param {Object} body - data
 *
 * @returns {Promise}
 */
export function patchRequest(
  url: string,
  body?: Object,
  queryParams?: {} | null,
  addHeaders?: {} | null,
  isFormData?: boolean,
): Promise<TResponse> {
  return _baseRequest("patch", url, body, queryParams, addHeaders, isFormData);
}

/**
 * Common DELETE request
 *
 * @export
 * @param {any} url - url for request
 * @param {(Object | null)} [queryParams] - query params for request
 *
 * @returns {Promise}
 */
export function deleteRequest(
  url: string,
  queryParams?: {} | null,
): Promise<TResponse> {
  return _baseRequest("delete", url, null, queryParams);
}
