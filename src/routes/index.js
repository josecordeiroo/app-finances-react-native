import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Login from '../pages/Login'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            />
        </Stack.Navigator>
    )
}