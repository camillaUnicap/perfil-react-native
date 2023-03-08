

import { StyleSheet, Text, View, Image, ScrollView, TextInput,SafeAreaView } from 'react-native';

const Placeimage= require('./assets/perfil.jpg');
const Placeimage1 = require('./assets/praia1.jpg');
const Placeimage2 = require('./assets/praia2.jpg');

export default function App() {
  return (
    <View style={styles.device}>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image source={Placeimage} style={styles.image}/>
        </View>
        <View style={styles.inform}>
          <Text style={styles.text}>Camilla</Text>
          <Text style={styles.subText}>Sistemas para internet</Text>
        </View>
      </View>
      <ScrollView style={styles.box2}>
      <View style={styles.card}>
        <Image source={Placeimage1} style={styles.post}/>
        <SafeAreaView style={styles.sub}>
        <TextInput style={styles.input}
         placeholder="comente..."
        keyboardType="text"/>
        </SafeAreaView>
        </View>
        <View style={styles.card1}>
        <Image source={Placeimage2} style={styles.post}/>
        <SafeAreaView style={styles.sub}>
         <TextInput style={styles.input}
         placeholder="comente..."
        keyboardType="text"/>
        </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  device: {
    backgroundColor:'#808080',
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent:'center',
  },
  container: {
    top: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    width:'90%',
    height:'20%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  img: {
    width:'50%',
    height:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:80,
    height:80,
    borderRadius:50,
  },
  inform:{
    width:'50%',
    height:'20%',
    flexDirection:'column',
    alignItems:'left',
    justifyContent:'center',
  },
   text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText:{
    fontSize:16,
  },
  box2:{
    top:20,
    backgroundColor: '#fff',
    borderRadius: 30,
    width:'90%',
    height:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'column',
    marginBottom:40,
  },
  card:{
    top:30,
  },
  card1: {
    top:30,
    marginBottom:50,
  },
  post: {
    alignItems:"center",
    justifyContent:'center',
    width:220,
    borderRadius:10,
    height:150,
  },
  input: {
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    marginBottom:30,
  },
  sub: {
    top:10,
  }
});

