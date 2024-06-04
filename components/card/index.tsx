import { formatToBRL } from "@/helpers/formatter";
import { BoxOrg, BoxPercent, ImageCapa, OrgImage } from "./styles";
import { ProgressBar, Card as CardContainer } from "react-native-paper";
import { ThemedText } from "../ThemedText";
import { View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface OngInfos {
  name: string;
  email: string;
  telephone: string;
}

interface CardProps {
  name: string;
  goal: number;
  accumulated: number;
  ongInfos: OngInfos;
}

export function Card({ accumulated, goal, name, ongInfos }: CardProps) {
  const backgroundColor = useThemeColor({}, "background");
  const calculatePercentage = (accumulated: number, goal: number) => {
    if (goal === 0) {
      return 0;
    }
    return accumulated / goal;
  };

  return (
    <CardContainer
      style={{
        padding: 10,
        backgroundColor: backgroundColor,
        marginBottom: 20,
      }}
    >
      <ImageCapa source={require("@/assets/images/teste.jpg")} />
      <ThemedText type="subtitle">{name}</ThemedText>
      <BoxOrg>
        <OrgImage source={require("@/assets/images/logo-ong.png")} />
        <View>
          <ThemedText type="defaultSemiBold">
            Nubank Financial Services
          </ThemedText>
          <ThemedText>São Paulo / SP</ThemedText>
        </View>
      </BoxOrg>
      <BoxPercent>
        <ThemedText>
          <ThemedText type="defaultSemiBold" style={{ color: "#006400" }}>
            {formatToBRL(accumulated)}
          </ThemedText>{" "}
          de {formatToBRL(goal)}
        </ThemedText>
        <ProgressBar
          progress={calculatePercentage(accumulated, goal)}
          color="#006400"
          style={{ borderRadius: 5 }}
        />
      </BoxPercent>
    </CardContainer>
  );
}
