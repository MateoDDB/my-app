import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { myText: 'Un texte par défaut' };
  };
  
  onPressButton = () => {
    this.setState({ myText: 'Salut' });
    console.log('onPress');
  };

  render() {
    return (
      <View>
        <Header content="Liste des taches" />
        <Button
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
          iconRight
          title="Button with right icon"
          onPress={this.onPressButton}
        />

        <Text>{ this.state.myText }</Text>
      </View>
    );
  };
};

