import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addtodo';
//import Sandbox from './component/sandbox';
import Footer from './component/footer';



export default function App(){ 
  // create an array of objects
  const [todos, setTodos] = useState([
    
    { text: 'Go Shopping, 2pm, Monday' , key: 1},
    { text: 'Go Fishing, 3pm, Tuesday', key: 2},
    { text: 'Go Travelling, 4pm, Wednesday', key: 3},
    { text: 'Go Schooling, 5pm, Thursday', key: 4},
    { text: 'Go Walking, 6pm, Friday', key: 5},
    
  ]); 

  /*create a function 
    to interact with array when items are pressed*/

    const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo=> todo.key !=key);
      });
    }

    // added alert function to submit
    //imported alert and use if statement for alert as shown below
    const submitHandler = (text) => {
      //validating input text 
      if(text.length > 5){
        setTodos((prevTodos)=> {
          return [
              {text:text, key: Math.random().toString()},
              ...prevTodos
          ];
        });
      } else {
        Alert.alert('OOPS!','Todo can only accept not less than 3 characters long!!!!', [{text: 'Understood', onPress: () => console.log('alert closed')}
      ])
      }      
    }

  return (
   //<Sandbox />
    
    // to add touchablewithoutfeedback to dimiss keyboard
    // we import touchable and surround the return with it
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
    }} >
    <View style={styles.container}>
    
    {/*header*/}
    <Header />
    <View style={styles.content}> 
    {/*to form*/}
    <AddTodo  submitHandler={submitHandler}/>
    <View style={styles.list}>
      <FlatList // filter through the array list and display
       data={todos}
       renderItem={({item}) =>(
        
        // to replace text with a component todolitem
        //pass function as a props from app.js, to delete any item pressed
        <TodoItem  item={item} pressHandler={pressHandler}/>

       )}      
      />      
     
    </View>    
    < Footer />
    </View>
    </View> 
    </TouchableWithoutFeedback>       
  );
} 

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#a7bcdc',       
  },
  content:{
    padding: 40,
    backgroundColor: '#abcabc',
    flex: 1,
  },
  list:{
    marginTop: 20,
    backgroundColor:'#fffaaa',
    flex: 1,
    
  },
  
})