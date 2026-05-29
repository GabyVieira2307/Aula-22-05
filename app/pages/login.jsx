import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Bem Vindo ao Sesi Pet
            </Text>

            <Text style={styles.subtitulo}>
                Insira seus dados
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Insira seu e-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='*****'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.replace('Principal')}
            >
                <Text style={styles.textoBotao}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoCadastro}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={styles.textoCadastro}>
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
        backgroundColor: '#401d50',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    botaoCadastro: {
        marginTop: 18,
        alignItems: 'center',
    },

    textoCadastro: {
        color: '#ac4dff',
        fontSize: 15,
        fontWeight: '600',
    },
});