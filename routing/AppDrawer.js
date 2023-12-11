import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dashboard} from "../screens/Dashboard";
import {Memberships} from "../screens/Memberships";
import {Members} from "../screens/Members";

const MyDrawer = createDrawerNavigator();

export function AppDrawer() {
    return (
        <MyDrawer.Navigator initialRouteName="Dashboard"
                            screenOptions={{
                                headerTintColor: '#e7e7e7',
                                headerStyle: {backgroundColor: '#627f9d'},
                                drawerStyle: {backgroundColor: '#334352'}
                            }}>
            <MyDrawer.Screen name="Dashboard" component={Dashboard}/>
            <MyDrawer.Screen name="Memberships" component={Memberships}/>
            <MyDrawer.Screen name="Members" component={Members}/>
        </MyDrawer.Navigator>
    );
}