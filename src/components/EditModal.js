import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { THEME } from "../theme";

const EditModal = ({ isModalVisible, setIsMobileVisible, changeTodo, index, value }) => {

  const [inputValue, setInputValue] = useState(value)

  const changeHandler = async () => {
    if(inputValue.trim()){
      await changeTodo(index, inputValue)
      setIsMobileVisible(false)
    } else {
      Alert.alert('Todo Title Cannot Be Empty!')
    }
  } 

  const cancelHandler = () => {
    setIsMobileVisible(false)
    setInputValue(value)
  }

  return (
    <Modal 
    animationType='slide'
      visible={isModalVisible}
    >
      <View style={styles.wrap}>
        <TextInput 
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.input} 
          placeholder='New Todo Title...'
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={cancelHandler}
            >
              <Text style={styles.textColor}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={changeHandler}
            >
              <Text style={styles.textColor}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '90%'
  },
  button: {
    width: "40%",
    height: 40,
  },
  backButton: {
    backgroundColor: THEME.GREY_COLOR,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: THEME.MAIN_COLOR,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textColor: {
    color: 'white'
},
input: {
  padding: 10,
  borderBottomColor: THEME.MAIN_COLOR,
  borderBottomWidth: 2,
  width: '80%',
  marginBottom: 15
}
});

