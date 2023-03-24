import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import instagram_logo from "../../../assets/instagram_logo.png";
import facebook_icon from "../../../assets/facebook_icon.png";


export default function Auth() {
    return <View>
        <View style={login_styles.logo_div}>
            <Image style={login_styles.logo_image} source={instagram_logo}></Image>
        </View>
        <View style={{backgroundColor: '#fffff', marginBottom: 20}}>
            <TextInput placeholder="Username" style={login_styles.login_input}>Laryssa.Reyna_Delas</TextInput>
        </View>
        <View>
            <TextInput placeholder="Password" style={login_styles.login_input}></TextInput>
        </View>
        <View style={login_styles.forgot_password_div}>
            <Text style={login_styles.forgot_password_text}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={login_styles.div_button}>
            <Text style={login_styles.login_button}>Log In</Text>
        </TouchableOpacity>
        <View style={login_styles.login_with_facebook_div}>
            <Image style={login_styles.facebook_image} source={facebook_icon}></Image>
            <Text style={login_styles.facebook_text}>Log in with Facebook</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 42}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#00000030'}}/>
            <View>
                <Text style={{width: 50, textAlign: 'center', color: '#00000030'}}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#00000030'}}/>
        </View>
        <View style={login_styles.have_account_div}>
            <Text style={{color: '#00000030', textAlign: 'center'}}>Don’t have an account? <Text
                style={{color: '#3797EF'}}>Sign up</Text>.</Text>
        </View>
    </View>
}


const login_styles = StyleSheet.create({
    have_account_div: {
        width: '100%',

    },

    facebook_text: {
        color: '#3797EF'
    },

    login_with_facebook_div: {
        marginTop: 37,
        marginBottom: 42,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    facebook_image: {
        width: 18, height: 18, marginRight: 12,
    },

    forgot_password_text: {
        color: '#3797EF'
    },

    forgot_password_div: {
        flex: 0, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 19, marginBottom: 30,
    },

    logo_div: {
        flex: 0, flexDirection: 'row', justifyContent: 'center', marginBottom: 42,
    },

    logo_image: {
        alignItems: 'center',
    },

    login_button: {
        color: "#ffff", textAlign: 'center', fontSize: 15, fontWeight: 'bold',

    },

    div_button: {
        backgroundColor: '#3797EF', paddingTop: 12, paddingBottom: 12, borderRadius: 5,
    },

    login_input: {
        backgroundColor: '#fafafa',
        borderColor: '#00000030',
        paddingTop: 10,
        borderRadius: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        borderWidth: 1,
        color: '#262626',
    },


});
  