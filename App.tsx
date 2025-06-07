import { Groups } from '@screens/Groups'; //path mapping
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from 'src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({    //fontes carregadas de forma assincrona
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return ( //disponibiliza o tema pra toda a aplicação
    <ThemeProvider theme={theme}> 
      <StatusBar barStyle={'light-content'}/>

     {fontsLoaded? <Routes /> : <Loading /> } 
    </ThemeProvider>
  );
}
