import React ,{ Component , useState } from "react";

import { View , Text , Image , Button , StyleSheet } from 'react-native';

/*
  COMPONENTE DE CLASSE
export default class App extends Component {
  render() {
    return(
      <View>
        <Text>Olá , Mundo!</Text>
      </View>
    )
  }
}*/

export default function App() {

  return(
    <View>
      <Text>WORKING</Text>
    </View>
  )
}


function alinhamentos() {
  return(
    <View style={{flex: 1, flexDirection: "column",justifyContent: "space-between", alignItems: "center"}}>
      <View style={{height: 60, width: 60, backgroundColor: "#121212"}}></View>
      <View style={{height: 60, width: 60, backgroundColor: "#ff0000"}}></View>
      <View style={{height: 60, width: 60, backgroundColor: "#00ff22"}}></View>
    </View>
  )
}


// Estilos de gripos comecam aqui
const styles = StyleSheet.create({
  area: {
    backgroundColor: "#b5b0b0",
    margin: 10,
    padding: 10
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 16,
    color: "#f00",
  },
  align: {
    textAlign: "center"
  }
})
function styleDeGrupos() {
  return(
    <View style={styles.area}>
      <Text style={[styles.text,styles.align]}>USando grupo de estilos .</Text>
      <Text style={styles.text}>Para que ?</Text>
      <Text style={[styles.paragraph,styles.align]}>Melhor estilização e organização do codigo.</Text>
    </View>
  )
}
// Estilos de gripos terminam aqui



function useStado() {
  const [name , setName] = useState("UNKNOWN");
  const [age , setAge] = useState(18);

  function changeName(name,age) {
    setName(name);
    setAge(age)
  }

  return(
    <View>
      <Text style={{fontSize: 30, color: "#000", margin: 10}}>Hello , {name} !</Text>
      <Text style={{fontSize: 30, color: "#000", margin: 10}}>Age : {age}</Text>
      <Button title="Change Name" onPress={() => changeName("GDO",20)} />
    </View>
  )
}



function FirstApp() {
  let name = "Gabriel";
  return(
    <View style={{backgroundColor: "#cfd0b9"}}> 
      <Text>Hello , World !</Text>
        <Text style={{color: "red", fontSize: 25, margin: 15}}>My first App!</Text>
        <Text style={{fontSize: 30, color:"green", fontWeight: "bold", margin: 15}}>My name is Gabriel</Text>
        <Logo l={350} w={250}/>
        <Text style={{margin: 10, color: "blue", fontSize: 30}}>{name}</Text>
    </View>
  )
}

function Logo(props) {

  return(
    <Image source={{ uri: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/06/shrek-0.jpg?quality=100&strip=info&w=1200&h=720&crop=1"}} style={{width: props.l, height: props.w, margin: "auto"}} alt="Shreck"/>
  )
}