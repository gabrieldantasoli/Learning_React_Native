import React ,{ Component , useState } from "react";

import { View , Text , Image , Button , StyleSheet , TextInput, Alert, TouchableOpacity } from 'react-native';

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
    <View style={styles3.container}>
      <Text>Center</Text>
    </View>
  )
}
const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})




function biscoito() {
  const [img, setImg] = useState(require('./fechado.jpg'));
  const [frase, setFrase] = useState("");
  
  let frases = [
    "Não desista, os fracassos são apenas etapas para o sucesso.",
    "Se você acredita em si mesmo, tudo é possível.",
    "A vida é curta demais para se conformar com menos do que você merece.",
    "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
    "Não tenha medo de tentar algo novo. O fracasso é a oportunidade de começar de novo com mais experiência.",
    "A ambição é a chave para o sucesso. Sem ela, você nunca alcançará seus objetivos.",
    "Não importa o quão difícil seja, nunca desista de seus sonhos.",
    "Você é mais forte do que imagina e capaz de mais do que jamais sonhou.",
    "Não importa o quão longe você esteja de seus objetivos, nunca é tarde demais para começar de novo.",
    "A vida é uma jornada, não uma competição. Aproveite cada momento e siga em frente sem medo.",
  ];

  function quebrar() {
    while (true) {
      let randonNumber = Math.floor(Math.random() * frases.length);
      if (frases[randonNumber] !== frase) {
        setFrase(frases[randonNumber]);
        setImg(require('./aberto.jpg'))
        break;
      }
    }
    
  }

  function reiniciar() {
    setFrase("");
    setImg(require('./fechado.jpg'));
  }

  return(
    <View style={styles2.container}>
      <Image 
        source={img}
        style={styles2.img}
      />

      <Text style={styles2.frase}> {frase !== "" ? `\"${frase}\"` : ""} </Text>

      <TouchableOpacity style={styles2.botao} onPress={quebrar}>
        <View style={styles2.btnArea}>
          <Text style={styles2.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles2.botao, {marginTop: 15, borderColor: "#121212"}]} onPress={reiniciar}>
        <View style={styles2.btnArea}>
          <Text style={[styles2.btnText, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 350,
    height: 280,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 2
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 3,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})



function input() {
  const [name, setName] = useState("");

  return(
    <View style={styles1.container}>
      <TextInput 
        style={styles1.input} 
        placeholder="Enter your name !" 
        onChangeText={(text) => setName(text)} />
      <Text style={styles1.texto}>{name}</Text>
    </View>
  )
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto: {
    textAlign: "center",
    fontSize: 25
  }
})



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