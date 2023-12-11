import { createDrawerNavigator } from '@react-navigation/drawer';
import {Dashboard} from "../screens/Dashboard";
import {Memberships} from "../screens/Memberships";
import {Members} from "../screens/Members";

const MyDrawer = createDrawerNavigator();

export  function AppDrawer() {
    return (
        <MyDrawer.Navigator initialRouteName="Dashboard">
            <MyDrawer.Screen name="Dashboard" component={Dashboard} />
            <MyDrawer.Screen name="Memberships" component={Memberships} />
            <MyDrawer.Screen name="Members" component={Members} />
        </MyDrawer.Navigator>
    );
}