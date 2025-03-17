import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppContext from './AppContext';

type Movie = {
  id: number;
  name: string;
  releaseDate: string;
  actors: string;
};

type RootStackParamList = {
  Home: undefined;
  AddEditMovie: {movie?: Movie};
  ViewMovie: {movie: Movie};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Button
        title="Add Movie"
        onPress={() => navigation.navigate('AddEditMovie', {})}
      />
      {state.movies.length > 0 ? (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>S.No</DataTable.Title>
            <DataTable.Title>Movie Name</DataTable.Title>
            <DataTable.Title>Release Date</DataTable.Title>
            <DataTable.Title>Actors</DataTable.Title>
            <DataTable.Title>View</DataTable.Title>
            <DataTable.Title>Edit</DataTable.Title>
            <DataTable.Title>Delete</DataTable.Title>
          </DataTable.Header>

          {state.movies.map((item, index) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{index + 1}</DataTable.Cell>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.releaseDate}</DataTable.Cell>
              <DataTable.Cell>{item.actors}</DataTable.Cell>
              <DataTable.Cell>
                <TouchableOpacity
                  onPress={() => {
                    console.log('in view screeen');
                    navigation.navigate('ViewMovie', {movie: item});
                  }}>
                  <Text style={styles.view}>View</Text>
                </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell>
                {' '}
                <TouchableOpacity
                  onPress={() => {
                    // console.log('Navigating to ViewMovie:', item);
                    navigation.navigate('AddEditMovie', {movie: item});
                  }}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell>
                <TouchableOpacity
                  onPress={() =>
                    dispatch({type: 'DELETE_MOVIE', payload: item.id})
                  }>
                  <Text style={styles.delete}>Delete</Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      ) : (
        <Text>
          No data found! Please add few details by using add movie button above.
        </Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  edit: {color: 'blue', marginRight: 10},
  delete: {color: 'red', marginRight: 10},
  view: {color: 'green'},
});
