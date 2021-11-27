import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    const [feed, setFeed] = useState([])

    useEffect(function() {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3000/feed')
            const feedServidor = await response.json()
            setFeed(feedServidor)
        }
        getData()
    },[])
 
    function renderItem({ item }) {
        return <View style={styles.post}>
            <View style={styles.HeaderFeed}>
                <View style={styles.HeaderFeedLeft}>
                    <Image style={styles.HeaderFeedImage} source={{uri: item.imgPerfilUri}} />
                    <Text>{item.nomeUsuario}</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={16} color='black' />
            </View>
            <Image style={styles.ImageFeed} aspectRatio={item.aspectRatio} source={{uri: item.imgPostUri}} />
            <View style={styles.footer}>
                <FontAwesome5 style={styles.footerIcons} name="heart" size={36} color='black' />
                <FontAwesome5 style={styles.footerIcons} name="comment" size={36} color='black' />
            </View>
        </View>
    }
    return (
        <View style={styles.feed}>
           <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
           />
        </View>
    );
}
const styles = StyleSheet.create({

    feed: {
        flex: 1,
        backgroundColor: '#fff',
    },
    HeaderFeed: {
        flexDirection: 'row',
        height: 60,
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderFeedLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    HeaderFeedImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 5,
    },
    ImageFeed: {
        width: '100%',
        height: undefined,
    },
    footer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerIcons: {
        padding: 5,
    }
});
