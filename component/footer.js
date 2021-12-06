import React from 'react';
import { createPortal } from 'react-dom';
import {StyleSheet, Text, View} from 'react-native';

export default function Footer(){
    return (
        <View style={styles.footer}> 
            <Text style={styles.base}> Created by Penuel Technologies</Text>
        </View>
        )
    }
    const styles = StyleSheet.create({
        footer: {
            marginTop: 20,            
            backgroundColor: '#5334bc',
        },
        base:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
           // fontWeight: 'bold',
            textTransform: 'capitalize',
            padding: 10,
         },
    });