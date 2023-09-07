import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ItemProduct = ({item}) => {
    return (
        <View>
            <Text style={styles.list}> {item.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        marginVertical: 2,
    },
});

export default ItemProduct;