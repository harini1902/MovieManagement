import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SimpleScreen = () => {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Simple Screen</Text>
      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
    </View>
  );
};

export default SimpleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
