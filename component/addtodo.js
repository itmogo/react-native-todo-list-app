import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({submitHandler}) {
  // create  new todos  array state
  const [text, setText] = useState('');

  // add function to add new todo
  const changeHandler = (val) => {
    setText(val);
  };

  //return new todo added to ols list
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add new task....'
        onChangeText={changeHandler}
        
      />      

      <Button onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

// create style sheet
const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  // addtodo1:{
  //     height: 40,
  //     paddingTop: 20,
  //     paddingBottom: 20
  // }
});
