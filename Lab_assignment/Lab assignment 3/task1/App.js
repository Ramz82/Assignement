import React, { useState } from "react"; 
import { View, Text,  
         TextInput, TouchableOpacity,  
         StyleSheet } from "react-native"; 
  
const App = () => { 
    const [counter, setCounter] = useState(0); 
    const [initialCount, setInitialCount] = useState(0); 
  
    const handleInitialCountChange = (value) => { 
        setInitialCount(Number(value)); 
    }; 
  
    const handleReset = () => { 
        setCounter(initialCount); 
    }; 
  
    const handleClick1 = () => { 
        setCounter(counter + 1); 
    }; 
  
    const handleClick2 = () => { 
        setCounter(counter - 1); 
    }; 
  
    return ( 
        <View style={styles.container}> 
            <Text style={styles.heading}> 
                RAMZA BATOOL 
            </Text> 
            <Text style={styles.counterValue}> 
                {counter} 
            </Text> 
            <View style={styles.buttons}> 
                <TouchableOpacity style={styles.button}  
                                  onPress={handleClick1}> 
                    <Text>Increment</Text> 
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button}  
                                  onPress={handleClick2}> 
                    <Text>Decrement</Text> 
                </TouchableOpacity> 
            </View> 
            <View style={{ margin: 15 }}> 
                <TextInput 
                    keyboardType="numeric"
                    value={initialCount.toString()} 
                    onChangeText={handleInitialCountChange} 
                    style={{ padding: 10,  
                             fontSize: 16,  
                             borderRadius: 8,  
                             borderColor: 'black',  
                             borderWidth: 1 }} 
                /> 
                <TouchableOpacity 
                    onPress={handleReset} 
                    style={styles.setInitialCountButton} 
                > 
                    <Text style={{ color: "#fff", fontSize: 16 }}> 
                        Set Initial Count 
                    </Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 
}; 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#f8f8f8", 
    }, 
    heading: { 
        color: "green", 
        fontSize: 35, 
    }, 
    counterValue: { 
        fontSize: 36, 
        fontWeight: "bold", 
        marginVertical: 10, 
        color: "rgba(248, 86, 9, 1)", 
    }, 
    buttons: { 
        flexDirection: "row", 
        justifyContent: "center", 
    }, 
    button: { 
        fontSize: 16, 
        padding: 13, 
        margin: 5, 
        borderRadius: 8, 
        backgroundColor: "rgba(248, 86, 9, 1)", 
        borderWidth:2,
        borderColor:'white',
        elevation: 20, 
    }, 
    setInitialCountButton: { 
        padding: 10, 
        fontSize: 16, 
        margin: 15, 
        borderRadius: 8, 
         borderWidth:2,
        borderColor:'white',
        backgroundColor: "rgba(248, 86, 9, 1)", 
        elevation: 20, 
    }, 
}); 
  
export default App;