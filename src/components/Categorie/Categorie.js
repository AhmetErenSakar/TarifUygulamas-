import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';


function Categorie({ item, navigation }) {

    const [text, setText] = useState('');

    useEffect(() => {
        setText(item.strCategory);
    }, [])


    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Cards', { text })}>
            <Image style={styles.Image} source={{ uri: item.strCategoryThumb }} />
            <View style={styles.opacity}>
                <Text style={styles.Text}>{item.strCategory}</Text>
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
        fontSize: 25,
    }
})

export default Categorie;



//bireysel yemek componentleri kaldı
//
