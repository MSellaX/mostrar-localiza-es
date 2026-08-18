import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function RedesWifiScreen() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleScreen}>Tela carregada com sucesso</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Ocupa toda a tela disponível e define cor de fundo cinza-claro padrão do app
  safeArea: {
    flex: 1, // Expande para preencher toda a área segura da tela
    backgroundColor: "#F6F7F8", // Cinza-claro: cor de fundo padrão do app
  },

  // Container principal que centraliza todo o conteúdo na tela
  container: {
    flex: 1, // Ocupa toda a área disponível a tela
    backgroundColor: "#f6f6f6", // Cinza muito claro como fundo
    justifyContent: "center", // Centraliza os filhos verticalmente cipal)
    alignItems: "center", // Centraliza os filhos horizontalmente (eixo cruzado)
  },

  // Exibe o texto do GPS ou mensagem de status
  paragraph: {
    fontSize: 18, // Tamanho médio para boa legibilidade
    textAlign: "center", // Centraliza o texto dentro do componente
    color: "#b12727", // Vermelho — chama atenção para os dados exibidos
  },

  // Espaçamento superior (reservado para um possível cabeçalho futuro)
  header: {
    paddingHorizontal: 16, // Espaço interno lateral
    paddingTop: 20, // Espaço interno superior
  },

  // Título exibido acima dos dados de localização
  titleScreen: {
    fontSize: 18, // Mesmo tamanho dos dados — ambos no centro da tela
    fontWeight: "bold", // Negrito para diferenciar do parágrafo de dados
    color: "#1E293B", // Azul-escuro quase preto — cor de texto primária
  },
});
