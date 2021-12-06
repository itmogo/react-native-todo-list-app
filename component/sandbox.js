import React from 'react';
import { StyleSheet, View, Text} from 'react-native'; 


export default function Sandbox(){
    return(
        <View style={styles.container}>
        <Text style={styles.boxOne}>One</Text> 
        <Text style={styles.boxTwo}>Two</Text> 
        <Text style={styles.boxThree}>Three</Text> 
        <Text style={styles.boxFour}>Four</Text> 
        
        </View>
    )

}


// css styles 
const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'flex-start',
        paddingTop: 60,
        backgroundColor:'#ddd',
    },

    boxOne:{
        flex: 1,
        backgroundColor:'blue',
        padding: 10,
    },
    boxTwo:{
        flex: 1,
        backgroundColor:'green',
        padding: 20,
    },

    boxThree:{
        flex: 1,
        backgroundColor:'yellow',
        padding: 30,
    },

    boxFour:{
        flex: 1,
        backgroundColor:'coral',
        padding: 40,

    },

});
