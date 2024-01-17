import { createStackNavigator } from '@react-navigation/stack';
import PhoneAuthScreen from '../screens/PhoneAuth';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen} />
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  );
}
export default AppNavigator;