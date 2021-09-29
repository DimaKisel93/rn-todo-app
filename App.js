import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar}from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (title) => {
   
    setTodos((prevTodos)=>[...prevTodos, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => setTodos((prevTodos)=> prevTodos.filter(todo => todo.id !== id))
  
  return (
    <View >
      <Navbar title='Todo app'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
           <Todo todo={item} onRemove={removeTodo}/>
          )
         }
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical:20
  },
});
