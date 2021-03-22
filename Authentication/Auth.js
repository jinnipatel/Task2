import React, { Component } from 'react'
import { AsyncStorage, TouchableOpacity, View, Text } from 'react-native'

export default class Auth extends Component {

    // saveData() {
    //     alert("hello");
    // }
    constructor(props) {
        super(props)
        this.state = {
            email: ' ',
            password: ' '
        }
    }
    componentDidMount() {
        const { email, password } = this.props.route.params;
        this.setState({ email: email, password: password })
        let obj = {
            name: 'jeeni',
            email: "jinni@gmail.com",
            password: '12345'
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
        this.check()
    }

    check = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            console.log(this.state.email + '--' + this.state.password)

            if (parsed.email === this.state.email && parsed.password === this.State.password) {
                this.props.navigation.replace("Home");
            } else {
                alert('Email or password is invalid');
                this.props.navigation.navigate('Login');
            }
        }

        catch {
            alert(error)
        }
    }
    render() {
        return (
            <View>
                <Text>Hii</Text>
            </View>
        )
    }
}
