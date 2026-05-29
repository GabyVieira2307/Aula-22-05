import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Registro({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Criar Conta
            </Text>

            <Text style={styles.subtitulo}>
                Preencha seus dados
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.textoBotao}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f5f7fa',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        fontSize: 16,
    },

    botao: {
        backgroundColor: '#54135e',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});