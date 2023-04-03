import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';


function Card({ item, navigation }) {

    const text = item.strMeal

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Food', { text })}>
            <Image style={styles.Image} source={{ uri: item.strMealThumb }} />
            <View style={styles.opacity}>
                <Text style={styles.Text}>{item.strMeal}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: Dimensions.get('screen').height / 9,
        borderWidth: 1,
        borderTopLeftRadius: 50,
        borderBottomStartRadius: 50,
        margin: 8,
        backgroundColor: '#fff'
    },
    opacity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').height / 9,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        borderRadius: 100,
        backgroundColor: 'white',
    },
    Text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        flexWrap: 'wrap',
    }
})

export default Card;