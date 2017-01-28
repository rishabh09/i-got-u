import React , { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Container, Content, Title, Text, Header, InputGroup, Input, Icon, Button } from 'native-base'
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
import bcrypt from 'react-native-bcrypt'
import uuid from 'uuid'
export default class Signup extends Component {
  submitButton () {
    const salt = bcrypt.genSaltSync(10)
    if (!this.state || !this.state.fullname || !this.state.password || !this.state.cpassword) {
      Alert.alert('Please Fill all the Details')
    }else if (!emailRegex.test(this.state.email)) {
      Alert.alert('Please Enter Valid Email')
    }else if (!/^\d{10}$/.test(this.state.mobile)) {
      Alert.alert('Enter Valid Mobile Number')
    }else {
      const userid = uuid.v1()
      const hash = bcrypt.hashSync(this.state.password, salt)
      if (bcrypt.compareSync(this.state.cpassword, hash)) {
        console.log(this.state, hash,userid)
      }else {
        Alert.alert('Password does not match')
      }
    }
  }
  render () {
    return (
      <Container>
        <Header>
          <Title>
            Signup
          </Title>
        </Header>
        <Content style={{padding: 17}}>
          <InputGroup borderType='underline' style={style.elements}>
            <Icon name='ios-person' style={style.icons} />
            <Input placeholder='Full Name' onChangeText={text => this.setState({fullname: text.trim()})} />
          </InputGroup>
          <InputGroup borderType='underline' style={style.elements}>
            <Icon name='ios-at-outline' style={style.icons} />
            <Input placeholder='Email' onChangeText={text => this.setState({email: text.trim()})} />
          </InputGroup>
          <InputGroup borderType='underline' style={style.elements}>
            <Icon name='ios-call' style={style.icons} />
            <Input placeholder='Mobile Number' keyboardType='numeric' onChangeText={text => this.setState({mobile: text})} />
          </InputGroup>
          <InputGroup borderType='underline' style={style.elements}>
            <Icon name='ios-lock-outline' style={style.icons} />
            <Input placeholder='Password' secureTextEntry onChangeText={text => this.setState({password: text})} />
          </InputGroup>
          <InputGroup borderType='underline' style={style.elements}>
            <Icon name='ios-lock' style={style.icons} />
            <Input placeholder='Confirm Password' secureTextEntry onChangeText={text => this.setState({cpassword: text})} />
          </InputGroup>
          <Button
            block
            success
            style={style.button}
            onPress={this.submitButton.bind(this)}>
            Sign Up
          </Button>
        </Content>
      </Container>
    )
  }
}
const style = StyleSheet.create({
  elements: {
    marginBottom: 10
  },
  button: {
    marginTop: 15
  },
  icons: {
    color: '#384850'
  }
})
