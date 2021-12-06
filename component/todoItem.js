import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
     /*pass a props - presshandler to component to perform
      delete function*/
    //return some jsx text

  // return ( //added function pressHandler to touchableopacity
  //   <TouchableOpacity onPress={()=> pressHandler(item.key)}>
  //     <Text style={styles.items}>
  //       Task: {item.task}, Time: {item.time}, Day: {item.day}
  //     </Text>
  //   </TouchableOpacity>
  // );

  return ( //added function pressHandler to touchableopacity
    <TouchableOpacity onPress={()=>pressHandler(item.key)}  >
      <Text style={styles.items}>   {item.text}</Text>    
    </TouchableOpacity>
  )
}

//create stylesheets column

const styles = StyleSheet.create({
    items:{
        padding: 16,
        marginTop: 16,
        borderColor: '#876ddd',
        borderWidth: 3,
        borderRadius: 10,
        borderStyle:'dashed',
    },


})