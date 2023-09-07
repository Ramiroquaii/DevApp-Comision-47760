import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "./src/screens/ProductScreen.js"
import HomeScreen from './src/screens/HomeScreen.js';
import CategorieScreen from './src/screens/CategorieScreen.js';


export default function App() {

  const [screen, setScreen] = useState("home");

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedor}>
        <Pressable onPress={() => setScreen("home")}>
          <Text style={styles.titulo}>HOME</Text>
        </Pressable>

        <Pressable onPress={() => setScreen("categories")}>
          <Text style={styles.titulo}>CATEGORIAS</Text>
        </Pressable>

        <Pressable onPress={() => setScreen("products")}>
          <Text style={styles.titulo}>PRODUCTOS</Text>
        </Pressable>
      </View>

      <View style={styles.contenedor}>
        {screen === "home" && <HomeScreen></HomeScreen>}
        {screen === "categories" && <CategorieScreen></CategorieScreen>}
        {screen === "products" && <ProductScreen></ProductScreen>}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 40,
    paddingTop:40,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },
  imagen: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
});