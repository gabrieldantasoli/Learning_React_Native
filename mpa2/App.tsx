import React, { useState } from "react";
import { View , Text , StyleSheet , ScrollView, FlatList, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Pessoa from "./src/Pessoa";
import User from "./src/User";
import Slider from "@react-native-community/slider";

export default function App() {
  const [status, setStatus] = useState(false);

  return(
    <View style={styles6.container}>
      <Switch 
        value={status}
        onValueChange={ (valor) => setStatus(valor)}
        trackColor={{false: "#121212", true: "#121212"}}
        thumbColor={status ? "#00ff00" : "#ff0000"}
      />
      <Text style={styles5.text}>Status : {String(status) === "true" ? "Ativo" : "Inativo"}</Text>
    </View>
  )
}
const styles6 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
})





function slider() {
  const [kg, setKg] = useState(50);

  return(
    <View style={styles5.container}>
      <Slider 
        minimumValue={0} 
        maximumValue={100} 
        value={kg} 
        onValueChange={(kg) => setKg(kg)} 
        minimumTrackTintColor="#0000ff" 
        maximumTrackTintColor="#ff0000" 
        thumbTintColor="#0000ff"
      />

      <Text style={styles5.text}>KG : {kg.toFixed(2)}</Text>
    </View>
  )
}
const styles5 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  text: {
    color: "#000",
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  }
})



function picker() {
  const [carSelected, setCarSelected] = useState(0);
  const [cars , setCars] = useState([
    {key: 0,nome: "Golf",valor: 30500},
    {key: 1,nome: "BMW",valor: 200000},
    {key: 2,nome: "Fiat",valor: 20000},
    {key: 3,nome: "Saveiro",valor: 27000},
    {key: 4,nome: "Ferrari",valor: 3000000},
  ]);

  let carsItems = cars.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  return(
    <View style={styles4.container}>
      <Picker selectedValue={carSelected} onValueChange={ (itemValue , itemIndex) => setCarSelected(itemValue)}>
        {carsItems}
      </Picker>

      <Text >{cars[carSelected].nome}</Text>
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