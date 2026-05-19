import { ScrollView } from 'react-native';

import Login from './pages/login';
import Ibge from './pages/ibge';

export default function Index(){
  return(

    <ScrollView>

      <Login/>

      <Ibge/>

    </ScrollView>

  );
}