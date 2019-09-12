import React from 'react';
import { Platform,StyleSheet, Text, View,FlatList} from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInput: '',
      todos:[
        { id: 0, title:'Take out the trash',done: false},
        { id: 1, title:'cook Dinner',done: false},

      ]
    }
  }

addNewTodo(){
  console.log("Test 1");
  let todos = this.state.todos;
  todos.unshift({
    id:todos.length + 1,
    title: this.state.todoInput,
    done : false
  });
  this.setState({
     todos,
     todoInput: ''

  });
  console.log(this.state);
}
toggleDone(item){
  let todos = this.state.todos;
  todos = todos.map((todo) => {
    if(todo.id == item.id){
      todo.done = !todo.done;

    }
    return todo
  })
  this.setState({todos});
}
removeTodo (item){
  let todos = this.state.todos;
  todos = todos.filter((todo) => todo.id !== item.id);
  this.setState({todos});
}
render(){
  const statusbar = (Platform.OS == 'android') ? <View style={styles.statusbar}></View> : <View></View>;
  return (
    <View style={styles.container}>
      {statusbar}
      <Header title = "Todoapp"/>
      <InputBar textChange={todoInput => this.setState({todoInput})}
      addNewTodo = {() => this.addNewTodo}/>
      <FlatList 
      data={this.state.todos}
      extraData ={this.state}
      keyExtractor={(item,index)=> index.toString()}
      renderItem={({item,index})=>{
        return(
           <TodoItem todoItem={item} toggleDone={()=> this.toggleDone(item)} removeTodo={()=> this.removeTodo(item)}/>
        )
      } }
      />
    
     <Text> {this.state.todoInput}</Text>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  statusbar: {
    
    backgroundColor: '#FFCE00',
    height: 20
  },
});
