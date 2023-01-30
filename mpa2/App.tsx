import React, { useState } from "react";
import { View , Text , StyleSheet , ScrollView, FlatList } from "react-native";
import Pessoa from "./src/Pessoa";
import User from "./src/User";

export default function App() {
  return(
    <View style={styles4.container}>
      
    </View>
  )
}
const styles4 = StyleSheet.create({
  container: {
    flex: 1
  }
})







function user() {
  return(
    <View style={styles3.container}>
      <User data={{name: "Gabriel", cargo: "Pleno"}}/>
    </View>
  )
}
const styles3 = StyleSheet.create({
  container: {
    flex: 1
  }
})




function flat() {
  const [feed, setFeed] = useState([
    {id: '1', name: 'maria', idade: 40, email: 'maria@gmail.com'},
    {id: '2', name: 'gabriel', idade: 19, email: 'dantas@gmail.com'},
    {id: '3', name: 'sergio', idade: 23, email: 'sergio@gmail.com'},
    {id: '4', name: 'toin', idade: 57, email: 'toin@gmail.com'},
    {id: '5', name: 'samuel', idade: 14, email: 'muca@gmail.com'},
    {id: '6', name: 'larissa', idade: 19, email: 'larissa@gmail.com'},
  ]);

  return(
    <View style={styles2.container}>
      <FlatList 
        data={feed} 
        renderItem={ ({item}) => <Pessoa data={item} /> }
      />
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  }
})




function scroll() {
  return(
    <View style={styles.container}>
      <ScrollView /*horizontal={true}*/ showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    height: 250,
    backgroundColor: 'red'
  },
  box2: {
    height: 250,
    backgroundColor: 'green'
  },
  box3: {
    height: 250,
    backgroundColor: 'yellow'
  },
  box4: {
    height: 250,
    backgroundColor: 'blue'
  },
});