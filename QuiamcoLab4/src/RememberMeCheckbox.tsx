import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const RememberMeCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox 
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
        color="#FCB316" 
        uncheckedColor="white"
      />
      <Text style={styles.text}>Remember me?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',    
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: 40
  },
  text: {
    color: '#F5F5F5', 
    fontSize: 14,
  },
});

export default RememberMeCheckbox;
