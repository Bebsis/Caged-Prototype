import * as React from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, TextInput, Image, ImageBackground,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default class App extends React.Component {
state={
nameInput: 'You',
initialPageDisplay: 'block',
secondPageDisplay: 'none',
}
enterPress =()=>
this.setState(
state=>({
 initialPageDisplay:'none',
 secondPageDisplay:'block', 
}));


 
render() {
 return (
   <View style={styles.container}>
   <View style={{ display: this.state.initialPageDisplay }}>
   <View style={styles.contentContainer}>
     <ImageBackground style={styles.background}
     source={{uri: 'https://wallpaperaccess.com/full/6313.jpg'}}
     >
        <Image style={styles.logo}
        source={{uri: 'https://www.freelogodesign.org/file/app/client/thumb/a583d148-9419-435d-bfad-b9de21d149a4_200x200.png?1587500957900'}}
        style={{height: 200, width: 200}}
        />
        
        <TouchableHighlight style={styles.enterButton}
       onPress= {this.enterPress}
       >
        <View style={styles.buttonStyle}>
            <Text style={styles.text}>
               Enter
            </Text>
        </View>
       </TouchableHighlight>
     </ImageBackground>
     </View>
   </View>
   
   <View style={{ display: this.state.secondPageDisplay }}>
     <ImageBackground style={styles.background}
     source={{uri: 'https://wallpaperset.com/w/full/8/a/4/473215.jpg'}}
     >
     
     
  
     </ImageBackground>
   </View>
 </View>
 );
}}

const styles = StyleSheet.create({
container: {
 height: deviceHeight,
 width: deviceWidth, 
 alignItems: 'center',
 justifyContent: 'center',
},
contentContainer: {
 height: deviceHeight,
 width: deviceWidth,
 alignItems: 'center',
 justifyContent: 'center',
},
background: {
 height: deviceHeight,
 width: deviceWidth,
  alignItems: 'center',
 justifyContent: 'center',
},
characterAndEverythingElseContainer:{
 height: (9*deviceHeight)/12,
 alignItems: 'center',
 justifyContent: 'center',
},
speechContainer:{
 height: deviceHeight/4,
},
textContainer:{
 height: deviceHeight/6,
 width: 300,
 borderWidth: 2,
 margin: 5,
 backgroundColor: 'white',
},
 nameContainer:{
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   height: deviceHeight/22,
   width: deviceWidth/4,
   margin: 2,
 },
nameInput:{
 textAlign: 'center',
},
buttonStyle:{
    width: 90,
    height: 100,
    marginTop: 150,
    
},
text:{
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 1,
    backgroundColor: 'purple',
    color: 'white',
    
},
});
