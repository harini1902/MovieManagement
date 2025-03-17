import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types'; // Import the RootStackParamList

// ✅ Fix: Ensure Props are properly defined

type Props = NativeStackScreenProps<RootStackParamList, 'ViewMovie'>;

const ViewMovieScreen: React.FC<Props> = ({route, navigation}) => {
  const {movie} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Details</Text>

      <Text style={styles.label}>Movie Name:</Text>
      <Text style={styles.value}>{movie.name}</Text>

      <Text style={styles.label}>Release Date:</Text>
      <Text style={styles.value}>{movie.releaseDate}</Text>

      <Text style={styles.label}>Actors:</Text>
      <Text style={styles.value}>{movie.actors}</Text>

      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ViewMovieScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},

  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},

  label: {fontSize: 18, fontWeight: 'bold', marginTop: 10},

  value: {fontSize: 16, marginBottom: 10},
});
