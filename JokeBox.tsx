import React, {useState,useEffect} from 'react';
import { Text, TextInput, ScrollView,View, StyleSheet,FlatList,Pressable } from 'react-native';
import RenderedJokes from './RenderedJokes';
const JokeBox=()=> {

  
//Hooks
  const [number,setNumber]=useState('');
  const [category,setCategory]=useState("random");
  const [LocalNumber,setLocalNumber]=useState('');
  const [LocalCategory,setLocalCategory]=useState("");
  
  //on press pressable submit
  const handlePress=()=>{
  setNumber(LocalNumber);
  setCategory(LocalCategory);
  setLocalNumber('');
  setLocalCategory("");
  };
  return (
    
   <View style={styles.container}>
    <TextInput style={styles.input} placeholder="Enter Number of Jokes" value={LocalNumber} onChangeText={(text)=>{setLocalNumber(text);}}/>
    <TextInput style={styles.input} placeholder="Enter Category" value={LocalCategory} onChangeText={(text)=>{setLocalCategory(text);}}/>
    <Pressable style={styles.pressableButton} onPress={handlePress}><Text style={styles.submitButton}>SUBMIT</Text></Pressable>
    <RenderedJokes category={category} number={number}/>
   </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginTop:30,
  },
   input:{
     paddingLeft:5,
     borderWidth:1,
     borderRadius:5,
     marginBottom:20,
     fontSize: 18,
     fontWeight:"bold",
  },
  pressableButton:{
    marginTop:5,
    backgroundColor:"green",
    justifyContent:"center",
    borderRadius:5,
    
  },
  submitButton:{
    paddingLeft:'41%',
   fontSize:18,
  }
});
export default JokeBox;