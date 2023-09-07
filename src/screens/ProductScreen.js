import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import products from '../data/products.json'
import ItemProduct from '../components/ItemProduct'

const ProductScreen = () => {
    return (
        <View style={styles.contenedor}>
            <Text>Productos</Text>
            <FlatList
                data={products}
                keyExtractor={products.id}
                renderItem={({ item }) => <ItemProduct item={item} /> } >
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

export default ProductScreen;