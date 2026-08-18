import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

export default function PosiçãoGPSScreen() {
  const [endereco, setEndereco] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setErrorMsg("Permissão não autorizada para acessar a localização");
          return;
        }
        const tempLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        const { latitude, longitude } = tempLocation.coords;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        const resultado = await Location.reverseGeocodeAsync({
          latitude: latitude,
          longitude: longitude,
        });

        console.log("Endereço:", resultado);

        if (resultado && resultado.length > 0) {
          setEndereco(resultado[0]);
        } else {
          setErrorMsg("Não foi possível obter o endereço");
        }
      } catch (error) {
        console.log("Erro ao obter a localização:", error);
        setErrorMsg("Erro ao obter a localização");
      }
    }

    getCurrentLocation();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>

          {errorMsg && <Text style={styles.paragraph}>{errorMsg}</Text>}

          {!errorMsg && !endereco && (
            <Text style={styles.paragraph}>Aguardando...</Text>
          )}

          {endereco && (
            <View>
              <View >
                <Text style={styles.label}>Rua: {endereco.street ? endereco.street : "Não autorizado"}</Text>
              </View>

              <View >
                <Text style={styles.label}>Número: {endereco.streetNumber ? endereco.streetNumber: "Não autorizado"}</Text>
              </View>

              <View >
                <Text style={styles.label}>Bairro: {endereco.district ? endereco.district : "Não autorizado"}</Text>
              </View>

              <View>
                <Text style={styles.label}>Cidade: {endereco.city ? endereco.city : "Não autorizado"}</Text>
              </View>

              <View >
                <Text style={styles.label}>CEP: {endereco.postalCode ? endereco.postalCode : "Não autorizado"}</Text>
              </View>

              <View >
                <Text style={styles.label}>UF: {endereco.region ? endereco.region : "Não autorizado"}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7F8",
  },

  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
  },

  paragraph: {
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    width: "100%",
    alignItems: "center",
  },

  titleScreen: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 20,
  },

  formulario: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
  },

  campo: {
    marginBottom: 14,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 4,
  },

  valor: {
    fontSize: 16,
    color: "#475569",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#F8FAFC",
  },
});
