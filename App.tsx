import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function App (){

  const HandleButton =()=>{
    console.log("Button Handler");
  }
  return(
    <SafeAreaView>
   <View>
    <Text>Hello World!</Text>
    <Text>Hello World!</Text>
    
    </View> 
  </SafeAreaView>
  )
}

export default App;

