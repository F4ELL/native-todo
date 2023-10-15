import { Image, View } from "react-native";
import { styles } from "./styles";

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        alt=""
      />
    </View>
  )
}