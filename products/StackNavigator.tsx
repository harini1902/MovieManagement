import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import AddEditMovieScreen from './AddEditMovieScreen';
import HomeScreen from './HomeScreen';
import ViewMovieScreen from './ViewMovieScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddEditMovie" component={AddEditMovieScreen} />
        <Stack.Screen name="ViewMovie" component={ViewMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
