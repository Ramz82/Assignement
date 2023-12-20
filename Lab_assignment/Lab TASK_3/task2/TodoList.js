import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Add a new task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholderTextColor="#000" 

      />
      <Button
        title="Add Task"
        icon={<Icon name="add" size={15}  color="white" />}
        buttonStyle={styles.addButton}
        onPress={addTask}
      />
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskItem}>
          <Text style={styles.taskText}>{task}</Text>
          <Button
            title="Remove"
            type="clear"
            onPress={() => removeTask(index)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(67, 176, 143)',

    paddingHorizontal: 16,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
    color:'black'
  },
  input:{  color: 'white', // Text color for the input field
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)', 
},
  addButton: {
    backgroundColor: 'rgba(248, 86, 9, 1)',
    marginTop:20,
    marginBottom:20,
    fontWeight:'bold',
    height:60,
    borderRadius:5
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },
});

export default TodoList;
