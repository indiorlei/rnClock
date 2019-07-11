import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeNow: this.timeNow(),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{this.timeNow()}</Text>
      </View>
    );
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 30);
  }
  
  timeNow() {
    return Moment().format('H:mm:ss');
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  time: {
    fontSize: 70,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
});