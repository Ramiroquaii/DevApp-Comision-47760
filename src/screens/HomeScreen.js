import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.contenedor}>
            <Text>Home</Text>
            <Image
                style={styles.imagen}
                source={{
                    uri: "https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-check-list-icon-isolated-on-abstract-background-png-image_1776830.jpg",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 40,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    imagen: {
        height: 100,
        width: 100,
        marginTop: 40,
    },
});

export default HomeScreen;