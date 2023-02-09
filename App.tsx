/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React,useState} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToDo from './components/ToDo';

function App() {
  const [toDoList, setToDoList] = useState([
    {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Prier'},
    {id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Jeuner'},
    {id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Adorer'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>This is Raect Native</Text>
      <TextInput style={styles.textInputStyle} />
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Add A to do task</Text>
        <Icon name="plus" size={20} color="black" />
      </View>
      <FlatList
        data={toDoList}
        renderItem={({item}) => <ToDo title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  textTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
    textAlign: 'center',
  },
  container: {
    padding: 3,
    backgroundColor: 'green',
  },
  textInputStyle: {
    backgroundColor: 'white',
    fontSize: 16,
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'darkgreen',
  },
});
