import {React,useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ToDo({title}) {
  return (
    <View style={styles.toDoContainer}>
      <Text style={styles.toDoText}>{title}</Text>
      <Icon name="remove" size={20} color="firebrick" />
    </View>
  );
}

const styles = StyleSheet.create({
  toDoContainer: {
    backgroundColor: 'yellow',
    margin: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  toDoText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  }
});

export default ToDo;
