import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



function Food({ route, navigation }) {

    const mealName = route.params.text;
    const [detail, setDetail] = useState([])

    async function fetchFood() {
        const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then(response => response.data)
            .then(data => setDetail(data.meals))
        return data
    }

    useEffect(() => {
        fetchFood()
        console.log(detail);
    }, [])


    return (
        <View>
            <Text>{detail.map((item) => {
                return (
                    <View key={item.idMeal} style={styles.container}>
                        <Text style={styles.country}>{mealName}</Text>
                        <Text style={styles.country}>Country: {item.strArea}</Text>
                        <View style={styles.description}>
                            <Text >{item.strInstructions}</Text>
                        </View>
                    </View>
                )
            })}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    country: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#BF360C'
    },
    description: {
        maxWidth: '90%',
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
    }
})


export default Food;