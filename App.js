import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState(null);
  const focarInput = useRef(null);

  const valorCep = texto => setCep(texto);

  const limpar = () => {
    setCep('');
    focarInput.current.focus();
    setCepData(null);
  }

  async function buscar() {
    if (cep == '') {
      alert('Digite o CEP!')
      setCep('')
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`)
      console.log(response.data);
      setCepData(response.data);
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  }

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
          ref={focarInput}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#1d75cd' }]}
          onPress={buscar}
        >
          <Text style={styles.btnTxt}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#cd3e1d' }]}
          onPress={limpar}
        >
          <Text style={styles.btnTxt}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepData &&
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>CEP: {cepData.cep}</Text>
          <Text style={styles.resultadoTexto}>Logradouro: {cepData.logradouro}</Text>
          <Text style={styles.resultadoTexto}>Bairro: {cepData.bairro}</Text>
          <Text style={styles.resultadoTexto}>Cidade: {cepData.localidade}</Text>
          <Text style={styles.resultadoTexto}>Estado: {cepData.uf}</Text>
        </View>
      }


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
    marginTop: 30,
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
    fontSize: 20,
    color: '#000',
  }
});
