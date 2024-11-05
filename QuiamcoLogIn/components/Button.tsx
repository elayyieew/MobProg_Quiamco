import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button 
    mode= 'contained'
    onPress={() => console.log('Pressed')}
    style= {{ width: '90%', borderRadius: 8}}
    buttonColor= '#FCB316'
    textColor='white'
    >
    Log-In
  </Button>
);

export default MyComponent;