import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import instagram_logo from "../../../assets/instagram_logo.png";
import avatar from "../../../assets/avatar.png";

export default function Auth() {
    return <>
        <View style={style.all}>
            <View style={style.container}>
                <Image source={instagram_logo} style={style.logo} />
            </View>
            <View style={style.container_diferente}>
                <Image source={avatar} />
                <Text style={style.texto_nome}>jacob_w</Text>
            </View>
            <TouchableOpacity style={style.botao}>
                <Text style={style.botao_login}>Log In</Text>
            </TouchableOpacity>
            <View style={style.container}>
                <Text style={style.texto_cor}>Switch accounts</Text>
            </View>
        </View>
        <View style={style.final}>
            <Text style={style.texto_signup}>Don't have an accounts?</Text>
            <Text style={style.texto_signup}>Sign up.</Text>
        </View>
    </>
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 35
    },
    container_diferente: {
        flexDirection: 'column',
        paddingLeft: 50,
        paddingBottom: 20,
        paddingTop: 35
    },
    all: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 25
    },
    botao: {
        paddingRight: 30,
        paddingLeft: 30,
    },
    botao_login: {
        textAlign: 'center',
        backgroundColor: '#3797EF',
        color: 'white',
        fontSize: 14,
        padding: 14,
    },
    texto_nome: {
        marginLeft: 15,
        marginTop: 10,
    },
    texto_cor: {
        color: '#3797EF',
    },
    texto_signup: {
        color: "#262626",
    },
    final: {
        flexDirection: "row",
        justifyContent: 'center',
        height: 85,
        paddingTop: 15,
    }
});