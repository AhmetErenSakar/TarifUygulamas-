
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import Categorie from '../Categorie/Categorie';



function Categories({ route, navigation }) {

    const data = route.params.categories;

    const renderMeal = ({ item }) => <Categorie item={item} navigation={navigation} />;
    return (
        <View style={styles.container}>
            <FlatList data={data} keyExtractor={item => item.idCategory} renderItem={renderMeal} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
    }
})


export default Categories;