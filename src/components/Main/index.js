import React ,{Component} from 'react'
import {View, StyleSheet, BackAndroid} from 'react-native'
import {Container,Content, Text, Button,Header,Title} from 'native-base'
export default class Main extends Component {
    buttonHandle (e) {
    this.props.navigator.push({
      name: e
    })
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigator.getCurrentRoutes().length > 1) {
        this.props.navigator.pop()
        return true // do not exit app
      } else {
        return false // exit app
      }
    })
  }
    render(){
        return (<Container style={style.Container}>
        <Header>
        <Title>
        Main Activity
        </Title>
        </Header>
        <Content style={style.Content}>
       <Button block primary style={style.buttons}> Login </Button>
                    <Button block warning style={style.buttons} onPress={this.buttonHandle.bind(this, 'signup')}> Signup </Button>
         </Content></Container>)
    }
}

const style = StyleSheet.create({
 Container : {
    backgroundColor: 'white'

 },
 Content:{
     padding:10
 },
 buttons: {
     marginTop:50
 }
})