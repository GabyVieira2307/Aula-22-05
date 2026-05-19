import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Logo from '../../assets/images/girassol.jpg';

export default function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function FazerLogin(){
    console.log('Dados do Login');
    console.log({ email, senha });
  }

  return(
    <ScrollView style={estilos.container}>

      <Image
        source={Logo}
        style={estilos.logo}
        resizeMode='cover'
      />

      <View style={estilos.form}>

        <Text style={estilos.titulo}>Login</Text>

        <Text style={estilos.sub}>
          Insira suas credenciais
        </Text>

        <Text style={estilos.label}>E-mail</Text>

        <TextInput
          style={estilos.input}
          placeholder='Digite seu email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={estilos.label}>Senha</Text>

        <TextInput
          style={estilos.input}
          placeholder='******'
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={FazerLogin}
        >
          <Text style={estilos.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#3F3650',
  },

  logo:{
    width:'100%',
    height:360,
  },

  form:{
    backgroundColor:'#FDFDFD',
    marginTop:-45,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    padding:30,
    minHeight:'100%',

    shadowColor:'#000',
    shadowOpacity:0.15,
    shadowRadius:10,

    elevation:8,
  },

  titulo:{
    fontSize:42,
    fontWeight:'bold',
    color:'#2D2D2D',
    marginBottom:8,
  },

  sub:{
    fontSize:18,
    color:'#8A8A8A',
    marginBottom:35,
  },

  label:{
    fontSize:18,
    fontWeight:'700',
    color:'#2F2F2F',
    marginBottom:10,
    marginTop:15,
  },

  input:{
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    padding:18,
    fontSize:17,
    borderWidth:1,
    borderColor:'#ECECEC',

    shadowColor:'#000',
    shadowOpacity:0.08,
    shadowRadius:8,

    elevation:4,

    marginBottom:10,
  },

  botao:{
    backgroundColor:'#E9A512',
    padding:20,
    borderRadius:22,
    alignItems:'center',
    marginTop:35,

    shadowColor:'#000',
    shadowOpacity:0.20,
    shadowRadius:8,

    elevation:6,
  },

  textoBotao:{
    color:'#FFF',
    fontSize:22,
    fontWeight:'bold',
    letterSpacing:1,
  }

});