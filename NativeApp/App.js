/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    error: false,
    loading: false,
    webviewKey: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webview}
          key={this.state.webviewKey}
          source={{
            uri: 'http://localhost:3000/'
          }}
          onLoadStart={() => {
            console.log('onLoadStart')
            this.setState(() => ({
              loading: true,
            }))
          }}
          onLoadEnd={() => {
            console.log('onLoadEnd')
            this.setState(() => ({
              loading: false,
            }))
          }}
          onError={() => {
            console.log('onError');
            this.setState(() => ({
              error: true,
              loading: false,
            }))
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loading: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    backgroundColor: "#000",
    width :375,
    marginLeft:0,
    marginTop: 30
  },
});
