import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const App = () => {
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

  const handleLoginButton = () => {
    alert("Email: " + emailField + "\nSenha: " + passwordField);
  };

  const handleForgetButton = () => {
    alert("Um email para redefinição de senha.");
  };

  const handleSignUpButton = () => {
    alert("Encaminhamento para tela de cadastro.");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu email"
            placeholderTextColor={"#999999"}
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.inputField}
            placeholder="******"
            placeholderTextColor={"#999999"}
            secureTextEntry
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity
            onPress={handleForgetButton}
            style={styles.forgotBtnArea}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLoginButton}
          style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Lindoso</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
