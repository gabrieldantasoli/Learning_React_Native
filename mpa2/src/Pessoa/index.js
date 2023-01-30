import React from "react";
import { View , Text , StyleSheet } from "react-native";

function Pessoa(props) {
    return(
        <View style={styles2.areaPessoa}>
            <Text style={styles2.textoPessoas}>Name : {props.data.name}</Text>
            <Text style={styles2.textoPessoas}>Idade : {props.data.idade}</Text>
            <Text style={styles2.textoPessoas}>E-mail : {props.data.email}</Text>
        </View>
    )
}

const styles2 = StyleSheet.create({
    areaPessoa: {
      backgroundColor: "#121212",
      height: 200,
      marginBottom: 15,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoPessoas: {
      color: "#fff",
      fontSize: 20,
      margin: 5
    }
})


export default Pessoa;
