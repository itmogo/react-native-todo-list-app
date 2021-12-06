import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


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
      {/*adding icons in app*/}
    <View style={styles.items}>
      <MaterialIcons name='delete' size={18} color='#333' />
      <Text style={styles.itemText}>{item.text}</Text>  
      </View>       
    </TouchableOpacity>
  )
}

//create stylesheets column

const styles = StyleSheet.create({
    items:{
        padding: 16,
        marginTop: 16,
        borderColor: '#876ddd',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle:'dashed',
        flexDirection: 'row',
    },

    itemText:{
      marginLeft: 10,
    },


})