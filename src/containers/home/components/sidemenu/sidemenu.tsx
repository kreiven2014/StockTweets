/* REACT */
import React from "react";
import { View, Text, Modal, Pressable } from "react-native";

/* CUSTOM MODULES */
import { Icons } from "src/components";

/* STYLES */
import styles from "./styles";
import { COLORS } from "src/theme";

export interface Props {
  modalVisible: boolean;
  setModalVisible: (param: boolean) => void;
}

export default (props: Props): JSX.Element => {
  const { modalVisible, setModalVisible } = props;

  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Pressable style={styles.closeIconBlock} onPressIn={() => setModalVisible(false)}>
            <Icons type="material" name="close" size={24} color={COLORS.WHITE} />
          </Pressable>
        </View>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Menu1</Text>
          <Text style={styles.modalText}>Menu2</Text>
          <Text style={styles.modalText}>Menu3</Text>
        </View>
      </View>
    </Modal>
  );
};
