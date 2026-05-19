import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import LogoIbge from '../../assets/images/ibge.jpg';

export default function Ibge(){

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [pessoas, setPessoas] = useState('');

  function Cadastrar(){
    console.log({
      nome,
      idade,
      localidade,
      pessoas
    });
  }

  return(

    <ScrollView style={estilos.container}>

      <View style={estilos.topoAzul}/>

      <View style={estilos.card}>

        <Image
          source={LogoIbge}
          style={estilos.logo}
          resizeMode='contain'
        />

        <Text style={estilos.titulo}>
          Pesquisa
        </Text>

        <Text style={estilos.label}>
          Nome
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='Seu nome'
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.label}>
          Idade
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='30'
          keyboardType='numeric'
          value={idade}
          onChangeText={setIdade}
        />

        <Text style={estilos.label}>
          Localidade
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='Mirandopolis'
          value={localidade}
          onChangeText={setLocalidade}
        />

        <Text style={estilos.label}>
          Quantas pessoas vivem na sua casa?
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='20'
          keyboardType='numeric'
          value={pessoas}
          onChangeText={setPessoas}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={Cadastrar}
        >
          <Text style={estilos.textoBotao}>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>

  );
}

const estilos = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#EAF4FF',
  },

  topoAzul:{
    width:220,
    height:220,
    backgroundColor:'#7EC8FF',
    borderBottomRightRadius:200,
    position:'absolute',
    top:-40,
    left:-40,
  },

  card:{
    backgroundColor:'#FFF',
    margin:20,
    borderRadius:35,
    padding:25,
    marginTop:60,

    shadowColor:'#000',
    shadowOpacity:0.15,
    shadowRadius:10,

    elevation:8,
  },

  logo:{
    width:120,
    height:120,
    alignSelf:'center',
    marginBottom:10,
  },

  titulo:{
    fontSize:38,
    fontWeight:'bold',
    color:'#2E5D9F',
    textAlign:'center',
    marginBottom:25,
  },

  label:{
    fontSize:16,
    color:'#35639A',
    fontWeight:'600',
    marginBottom:8,
    marginTop:12,
  },

  input:{
    backgroundColor:'#F8FBFF',
    borderWidth:2,
    borderColor:'#4A9BFF',
    borderRadius:15,
    padding:15,
    fontSize:16,
    color:'#333',
  },

  botao:{
    backgroundColor:'#2563EB',
    padding:18,
    borderRadius:18,
    marginTop:30,
    alignItems:'center',

    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:6,

    elevation:5,
  },

  textoBotao:{
    color:'#FFF',
    fontSize:22,
    fontWeight:'bold',
  }

});