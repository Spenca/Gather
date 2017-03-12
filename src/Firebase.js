// this probably doesn't work

import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase';
import firebaseui from 'firebase';

var config = {
  apiKey: "AIzaSyAY-D_-soA5vffZRv_-DXG4_D7wo16AKTI",
  authDomain: "gather-98218.firebaseapp.com",
  databaseURL: "https://gather-98218.firebaseio.com",
  storageBucket: "gather-98218.appspot.com",
};
var app = firebase.initializeApp(config);
var authUi = new firebaseui.auth.AuthUI(firebase.auth());

module.exports = React.createClass({
  componentDidMount: function() {
    var self = this;
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  },
  componentWillUnmount: function() {
    authUi.reset();
  },
  render: function() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
});

export default app;