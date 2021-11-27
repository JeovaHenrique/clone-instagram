import React from 'react';
import { StyleSheet, Image, View, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.ufrngram} source={require('../assets/ufrngram.png')} />
            <FontAwesome5 name="paper-plane" size={24} color='black' />
        </View>
    );
}
const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        padding: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ufrngram: {
        height: 25,
        width: 110,
    },
});