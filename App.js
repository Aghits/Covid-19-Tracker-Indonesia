import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';


export default class App extends React.Component {

  constructor() {
    super()
    
  this.state = {
    conf: '',
    reco: '',
    deaths: '',
    lastUp: ''
   }
  }

  componentDidMount() {
    return fetch('https://covid19.mathdro.id/api/countries/IDN/')
    .then( response => response.json() ) 
    .then( data => {
      this.setState({
        conf: data.confirmed.value,
        reco: data.recovered.value,
        deaths: data.deaths.value
      })
    }).catch((error) => {
      console.log(error)
    })
  }
  

  render() {

    return(
      <View style={styles.container}>
      <ScrollView>
      <Header centerComponent={{ text: 'Covid 19 Indonesia', style: { color: '#fff', padding: 10 } }} />
      <Text style={styles.confirmed} h2>{this.state.conf}{' '}<Icon type="font-awesome" name='plus-square'/><Text>Positif</Text></Text>
      <Text style={styles.recovered} h2>{this.state.reco}{' '}<Icon type="font-awesome" name="check"/><Text>Sembuh</Text></Text>
      <Text style={styles.deaths} h2>{this.state.deaths}{' '}<Icon type="font-awesome" name="heartbeat"/><Text>Meninggal</Text></Text>
      </ScrollView>
    </View>
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7edf5',
    alignItems: 'center',
  },
  confirmed: {
    backgroundColor: '#f5dd42',
    padding: 90,
    textAlign: 'center'
  },
  recovered: {
    backgroundColor: '#42f572',
    padding: 90,
    textAlign: 'center'
  },
  deaths: {
    backgroundColor: '#f56642',
    padding: 90,
    textAlign: 'center'
  }
});
