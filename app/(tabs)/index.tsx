import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/card";
import { Container } from "./styles";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView>
      <SafeAreaView>
        <Container showsVerticalScrollIndicator={false}>
          <Card
            accumulated={478224}
            goal={10000000}
            name="AJUDE O DAVI A VENCER!"
            ongInfos={{
              email: "email@gmail.com",
              name: "Ong Teste",
              telephone: "13981134360",
            }}
          />
          <Card
            accumulated={478224}
            goal={10000000}
            name="AJUDE O DAVI A VENCER!"
            ongInfos={{
              email: "email@gmail.com",
              name: "Ong Teste",
              telephone: "13981134360",
            }}
          />
          <Card
            accumulated={478224}
            goal={10000000}
            name="AJUDE O DAVI A VENCER!"
            ongInfos={{
              email: "email@gmail.com",
              name: "Ong Teste",
              telephone: "13981134360",
            }}
          />
        </Container>
      </SafeAreaView>
    </ThemedView>
  );
}
