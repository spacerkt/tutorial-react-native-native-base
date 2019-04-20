import React, {Component} from 'react';
import { View } from 'react-native';
import { Root, Container, Header, Left, Body, Right, Title, Button, Toast , Text } from 'native-base'

export default class App extends Component {

  state = {
    counter: 0
  }

  incrementNumber = () => {
      this.setState({ counter: this.state.counter + 1 });
      Toast.show({
        text: "Número atualizado!",
        position: "bottom",
        duration: 2000
      })
  }

  render() {
    return (
      <Root>
       <Container>
         <Header>
          <Left/>
          <Body>
            <Title>Fantastic Project</Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
          <Text>{this.state.counter}</Text>
          <Button onPress={this.incrementNumber} style={{alignSelf: "center", marginTop: 20}} rounded>
            <Text>Incrementar!</Text>
          </Button>
        </View>
       </Container>
      </Root>
    );
  }
}
