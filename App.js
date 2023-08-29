import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {

  const initialState = [{ id: 1, text: "Harina" }, { id: 2, text: "Azucar" }, { id: 3, text: "Cereales" }];

  const [textInput, setTextInput] = useState("");

  const [listItems, setList] = useState(initialState);

  const [isModalVisible, setModalVisible] = useState(false);

  const [modalVisible, setModalVisible2] = useState(true);

  const onChangeInput = (t) => setTextInput(t);

  const addItem = () => {
    let newObject = { id: listItems.length + 1, text: textInput };
    listItems.push(newObject);
    setList(listItems);
    setTextInput("");
  }

  const clearList = () => {
    setList([]);
    setModalVisible(false);
  };

  return (
    <View style={styles.contenedor}>
      <Modal transparent={true} visible={isModalVisible}>
        <View>
          <Text> ¿Estas seguro que deseas eliminar la lista? </Text>

          <Pressable onPress={() => clearList()}>
            <Text>SI</Text>
          </Pressable>

          <Pressable onPress={() => setModalVisible(false)}>
            <Text> NO </Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.modalButton, styles.modalbuttonClose]}
                onPress={() => setModalVisible2(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </View>

      <Image
        style={styles.imagen}
        source={{
          uri: "https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-check-list-icon-isolated-on-abstract-background-png-image_1776830.jpg",
        }}
      />

      <Text style={styles.titulo}> Lista de compras </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Escriba aquí..." style={styles.input} value={textInput} onChangeText={onChangeInput} />
        </View>

        <Pressable style={styles.button} onPress={() => addItem()}>
          <Ionicons name="add-circle-outline" size={40} color="red" />
        </Pressable>
      </View>
      {/* <View>
        <Text style={styles.list}>Harina</Text>
        <Text style={styles.list}>Cereal</Text>
        <Text style={styles.list}>Huevos </Text>
      </View> */}

      <FlatList
        data={listItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.list}>{item.text}</Text>
        )} />

      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name="trash" size={40} color="red" />
      </Pressable>

      <Pressable
          style={[styles.modalButton, styles.modalButtonOpen]}
          onPress={() => setModalVisible2(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },
  input: {
    padding: 5,
    fontSize: 18,
    width: 180,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: "red",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
  },
  list: {
    fontSize: 20,
    marginVertical: 2,
    color: "blue",
  },
  imagen: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalButtonOpen: {
    backgroundColor: '#F194FF',
  },
  modalButtonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});