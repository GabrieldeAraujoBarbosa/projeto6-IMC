import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  function calcular() {
    if(isNaN(peso) || isNaN(altura)) {
      alert("Insira um valor válido nos campos.")
      return
    }
    const valorCalculado = peso / Math.pow(altura, 2)
    setResultado(valorCalculado.toFixed(1))
  }
  return (
    <View style={styles.container}>
      
      <View>
      <Text style={styles.texto}>Calcule o seu IMC</Text>
      </View>
    
      <View style={styles.alinhamento}>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu peso"
        onChangeText={(valor) => setPeso(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a sua altura"
        onChangeText={(valor) => setAltura(valor)}
      />
      </View>

      <View style={styles.button}>
        <Button
          title="Calcular"
          color={'purple'}
          onPress={calcular}
        />
      </View>

      <View>
        <Text style={styles.resultado}>{"O resultado do seu IMC é: " + resultado}</Text>
      </View>
        
      <View>
      <Image source={{uri: './img/Imagem.png'}}
             style={styles.imagem}
      />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'up',
  },
  texto: {
    fontSize: 40,
    fontWeight: -15,
    marginTop: 50,
    position: 'relative',
    color: 'purple',
  },
  alinhamento: {
    alignItems: 'center',
    justifyContent: 'up',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'purple',
    margin: 10,
    marginTop: 20,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'white',
    position: 'relative',
  },
  button: {
    alignItems: 'center',
    marginTop: 25,
   },
   imagem: {
    width: 600,
    height: 430,
    marginTop: 120,
   },
  resultado: {
    fontSize: 25,
    fontWeight: 'normal',
    textAligh: 'center',
    color: 'purple',
  }
});
