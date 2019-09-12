import React from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const todoItem = this.props.todoItem;
        return(
            <TouchableOpacity
            style = {StyleSheet.todoItem}
            onPress = {() => this.props.toggleDone()}
            >
                <Text style = {(todoItem.done) ? {Color :'#AAAAAA'} : { Color : '#313131'}}>
                    {todoItem.title}
                </Text>
                <Button
                    title = "Remove"
                    Color={(todoItem.done) ? 'rgba(200, 0, 0,0.5)' : 'rgba(255, 0, 0,1)'}
                    onPress={() => this.props.removeTodo()}
                />
            </TouchableOpacity>

        )
    }
   
}
const styles = StyleSheet.create({
    todoItem:{
        width:100,
        height: 40,
        borderBottomColor: '#DDD',
        boderBottomWidth: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft:15

    }
        
})