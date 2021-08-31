import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');

  const valorCep = texto => setCep(texto);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaInput}>
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        <TextInput 
          style={styles.input}
          value={cep}
          onChangeText={valorCep}
          placeholder='Ex: 15064249'
          keyboardType='numeric'
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#1d75cd'}]}>
          <Text style={styles.btnTxt}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#cd3e1d'}]}>
          <Text style={styles.btnTxt}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.resultadoTexto}>CEP: 15064249</Text>
        <Text style={styles.resultadoTexto}>Logradouro: Rua RN</Text>
        <Text style={styles.resultadoTexto}>Bairro: Centro</Text>
        <Text style={styles.resultadoTexto}>Cidade: São Paulo</Text>
        <Text style={styles.resultadoTexto}>Estado: SP</Text>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaInput: {
    alignItems: 'center'
  },
  titulo: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    marginTop: 20,
    backgroundColor: '#FFF',
    width: '90%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: 100
  },
  btnTxt: {
    color: '#FFF',
    fontSize: 22
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center'
  }
});
