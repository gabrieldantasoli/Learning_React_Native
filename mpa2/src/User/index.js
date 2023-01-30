import React from "react";
import { View , Text , StyleSheet} from "react-native";

export default function User(props) {
    return(
        <View>
            <Text style={styles.text}>Seja bem vindo</Text>
            <View style={styles.user}>
                <Text style={styles.userText}>Name : {props.data.name}</Text>
                <Text style={styles.userText}>Cargo : {props.data.cargo}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: "#fff",
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    user: {
        backgroundColor: "#4073ff",
        paddingLeft: 15,
        paddingTop: 30,
        paddingBottom: 30
    },
    userText: {
        fontSize: 25,
        color: "#fff",
    }
})