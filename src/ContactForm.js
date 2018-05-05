import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Button, Text } from 'native-base';

export default class ContactForm extends Component {
  render() {
    const { contact } = this.props.navigation.state.params
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input value={contact.name} />
          </Item>
          <Item regular>
            <Input value={contact.email} />
          </Item>
          <Item regular>
            <Input value={contact.mobile} />
          </Item>
          <Item regular>
            <Input value={contact.description} />
          </Item>

          <Button full onPress={ 
            () => 
            this.props.navigation.goBack()
          }>
            <Text>Go Back</Text>
          </Button>

          <Button full danger onPress={ 
            () => {
              console.log(this.props)
            }
          }>
            <Text>Delete</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}