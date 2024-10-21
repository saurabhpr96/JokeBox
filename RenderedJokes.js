
import React, {useState,useEffect} from 'react';
import {FlatList,Text,View,StyleSheet} from 'react-native'


const RenderedJokes=({category,number})=>{
   
const [jokes,setJokes]=useState([]);

// API call

const fetchJokes=async()=>{
    const url=`https://official-joke-api.appspot.com/jokes/${category}/${number}`;
    const result= await fetch(url,{method:'GET'});
    const json= await result.json();
   setJokes(json);
  };
  
// Component did update
useEffect(()=>{
    fetchJokes();
  },[number,category]);

  return(
   <View style={styles.container}>
    {
        jokes?  <FlatList
                data={jokes}
                scrollEnabled={true}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                <View style={styles.joke}>
                <Text style={styles.setup}>{item.setup}</Text>
                <Text style={styles.punchline}>{item.punchline}</Text>
                </View>
                 )}
                />
                :null
    }
    </View>
  );
};


const styles= StyleSheet.create({
    container:{
       flex:1,
       marginBottom:20,
    },
    joke:
    {
      flex:1,
      backgroundColor:"white",
      borderWidth:1,
      paddingBottom:1,
      marginBottom:3,
      marginTop:5,
      borderRadius:5,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowRadius: 4,
      fontWeight:5,

    },
    setup:{
      fontWeight:'bold',
      fontSize:20,
    },
    punchline:{
     fontWeight:'1',
     fontSize:20,
    },
});


export default RenderedJokes;