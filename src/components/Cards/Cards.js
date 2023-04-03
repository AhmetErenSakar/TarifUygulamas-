import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card/Card';



function Cards({ route, navigation }) {

    const categorieName = route.params.text
    const [foods, setFoods] = useState([]);



    async function fetchData() {
        const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorieName}`)
            .then((response) => response.data)
            .then((data) => setFoods(data.meals))
        return data;
    }

    const renderFoods = ({ item }) => <Card item={item} navigation={navigation} />;


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <View style={styles.container}>
            <FlatList data={foods} keyExtractor={item => item.idCategory} renderItem={renderFoods} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
    }
})

export default Cards;