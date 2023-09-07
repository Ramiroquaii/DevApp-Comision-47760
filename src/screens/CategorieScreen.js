import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'

const CategorieScreen = () => {
    return (
        <View style={styles.contenedor}>
            <Text>Categorias</Text>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.list}>{item}</Text>} >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 40,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    list: {
        fontSize: 20,
        marginVertical: 2,
    },
});

export default CategorieScreen;