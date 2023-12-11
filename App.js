import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native";
import {AppDrawer} from "./routing/AppDrawer"

export default function App() {
    return (
        <NavigationContainer>
            <AppDrawer/>
        </NavigationContainer>
    );
}


