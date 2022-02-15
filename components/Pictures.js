import React, {useState, useEffect} from 'react'
import { StyleSheet, View, FlatList, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Pictures({navigation}) {

    const [gridPictures, setGridPictures] = useState([])

    
    useEffect(() => {
        async function getData() {
            const token = await AsyncStorage.getItem('token')

            const headerOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }   
            const response = await fetch('https://mobile.ect.ufrn.br:3000/gridpictures', headerOptions)
            const gridPictures = await response.json()
            setGridPictures(gridPictures)
        }
        getData()
    },[])

    function renderItem({item}) {
        return (
            <View style={styles.gridline}> 
            {
                item.map((pic) => <View style={styles.gridImageView} aspectRatio={1}>
                    <Image style={styles.gridImage} source={{uri: pic.uri}} />

                </View>
                )
            }
            </View>
        )
    }

    return (
        <View style={styles.container}>
           <FlatList 
                data={gridPictures}
                renderItem={renderItem}
                keyExtractor={items => items.id}
                showsHorizontalScrollIndicator={false}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gridline: {
        flexDirection: 'row',
        width: '100%',
    },
    gridImageView: {
        width: '33%',
        height: undefined,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 1,
    },
    gridImage: {
        width: '100%',
        height: '100%',
    }
})