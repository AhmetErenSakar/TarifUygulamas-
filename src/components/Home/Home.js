import { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function Home({ navigation }) {

    const [items, setİtems] = useState([]);


    async function fetchItems() {
        const result = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => response.data)
            .then((data) => setİtems(data))
        return result
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Welcome To Your Kitchen !!!</Text>
            <Button color={"#FF6E40"} title='Show The Categories' onPress={() => navigation.navigate('Categories', items)} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    button: {
        color: 'white',
        backgroundColor: 'white',
    },
    Text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
})


export default Home;