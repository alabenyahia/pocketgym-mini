import 'react-native-gesture-handler'
import {AppDrawer} from "./routing/AppDrawer"
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    adaptNavigationTheme,
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider
} from 'react-native-paper';
import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

//COMBINE reactnativepaper theme and reactnavigation theme
const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const lightTheme = {
    ...CombinedDefaultTheme,
    colors: {
        ...CombinedDefaultTheme.colors,
        primary: '#627f9d',
        secondary: '#9D8062'
    },
};

const darkTheme = {
    ...CombinedDarkTheme,
    colors: {
        ...CombinedDarkTheme.colors,
        primary: '#627f9d',
        secondary: '#9D8062'
    },
};

export default function App() {
    return (
        <PaperProvider theme={darkTheme}>
            <NavigationContainer theme={darkTheme}>
                <AppDrawer/>
            </NavigationContainer>
        </PaperProvider>
    );
}


