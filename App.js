import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import EmailLoginScreen from './src/screens/LoginScreen/EmailLoginScreen';

import Colors from './src/constants/colors';

const Stack = createNativeStackNavigator();

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.blue },
          headerTintColor: Colors.white,
          contentStyle: { backgroundColor: Colors.white },
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EmailLoginScreen"
          component={EmailLoginScreen}
          options={{
            title: 'Login Email',
          }}
        />
        {/* Acesso federado
          Google login
          Facebook login */}
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
  </>
);

export default App;
