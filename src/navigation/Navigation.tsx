import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {pages} from '../constants/pages';
import Welcome from '../screens/Welcome';
import RecordVoice from '../screens/RecordVoice';
import {fetchUserDetails} from '../redux/actions/user';
import {store} from '../redux/store';

const Stack = createNativeStackNavigator();

function Navigation() {
  React.useEffect(() => {
    store.dispatch(fetchUserDetails());
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={pages.WELCOME} component={Welcome} />
      <Stack.Screen name={pages.RECORD_VOICE} component={RecordVoice} />
    </Stack.Navigator>
  );
}

export default Navigation;
