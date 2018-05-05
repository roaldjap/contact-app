import React, { Component } from 'react';
import Contact from './src/Contact';
import ContactForm from './src/ContactForm'
import { createStackNavigator } from 'react-navigation';

const AppStack = createStackNavigator(
  {
    Contact:{ screen: Contact },
    ContactForm:{ screen: ContactForm }
  },
  // Remove the annoying whitebar: headerMode: 'none'
  { initialRouteName: 'Contact', headerMode: 'none' }
)

export default class App extends Component {
  
  render () {
    return(
      <AppStack />
    )
  }

}