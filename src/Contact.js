import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
        data: [
          {
            name: 'John Cena',
            email: 'johncena@gmail.com',
            mobile: '123987128371',
            description: 'You can\'t see me'
          },
          {
            name: 'Brock Lesnar',
            email: 'brocklesnar@gmail.com',
            mobile: '1239812381',
            description: 'You can see me'
          },
          {
            name: 'Franchesca',
            email: 'franchesca@gmail.com',
            mobile: '1239812381',
            description: 'You can see me'
          }
        ]
    }
  }
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <List>
        {
          this.state.data.map( (item, i) => {
            return(
              
                <ListItem button key={i} onPress={
                    () => 
                    this.props.navigation.navigate('ContactForm', {contact: item, remove: this.remove })
                }>

                <Text>{ item.name }</Text>
                </ListItem>
            )
          })
        }
        </List>
        </Content>
      </Container>
    );
  }
}