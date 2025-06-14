import { NavigationContainer} from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { AppRoutes } from './app.routes';

export function Routes () {
    const { COLORS } = useTheme(); //remove os glitchs do app

    return (
       <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}> 
         <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
       </View>
    );
}