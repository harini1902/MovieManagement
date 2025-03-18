import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, Movie} from '../types';
import {TextInput} from 'react-native-paper';
import AppContext from './AppContext';

type Props = StackScreenProps<RootStackParamList, 'AddEditMovie'>;

const AddEditMovieScreen: React.FC<Props> = ({route, navigation}) => {
  const {dispatch} = useContext(AppContext);
  const initialMovie: Movie = {
    id: '',
    name: '',
    releaseDate: '',
    actors: '',
  };

  const [movieData, setMovieData] = useState<Movie>(
    route.params?.movie || initialMovie,
  );
  const [errors, setErrors] = useState<Record<string, string>>({}); // ✅ State for validation errors

  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!movieData.name.trim()) {
      newErrors.name = 'Movie Name is required';
    }
    if (!movieData.releaseDate.trim()) {
      newErrors.releaseDate = 'Release Date is required';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(movieData.releaseDate)) {
      newErrors.releaseDate = 'Invalid format (YYYY-MM-DD)';
    }
    if (!movieData.actors.trim()) {
      newErrors.actors = 'Actors field is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      Alert.alert('Validation Failed', 'Please fix the errors before saving.');
      return;
    }

    if (route.params?.movie) {
      dispatch({
        type: 'UPDATE_MOVIE',
        payload: {...movieData, id: Number(movieData.id)},
      });
    } else {
      dispatch({
        type: 'ADD_MOVIE',
        payload: {...movieData, id: Date.now()}, // generates unique ID
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Movie Name</Text>
      <TextInput
        style={styles.input}
        value={movieData.name}
        onChangeText={text => setMovieData({...movieData, name: text})}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>} //Error
      message
      <Text>Release Date</Text>
      <TextInput
        style={styles.input}
        value={movieData.releaseDate}
        onChangeText={text => setMovieData({...movieData, releaseDate: text})}
        placeholder="YYYY-MM-DD"
      />
      {errors.releaseDate && (
        <Text style={styles.error}>{errors.releaseDate}</Text>
      )}{' '}
      //Error message
      <Text>Actors</Text>
      <TextInput
        style={styles.input}
        value={movieData.actors}
        onChangeText={text => setMovieData({...movieData, actors: text})}
      />
      {errors.actors && <Text style={styles.error}>{errors.actors}</Text>}{' '}
      //Error message
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default AddEditMovieScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  input: {borderWidth: 1, padding: 10, marginBottom: 10},
  error: {color: 'red', marginBottom: 10}, // ✅ Style for error messages
  buttonContainer: {marginTop: 20},
});
