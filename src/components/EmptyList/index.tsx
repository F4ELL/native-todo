import { Text, View } from "react-native";
import { styles } from "./styles";

import NoteSvg from '../../assets/note.svg'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <NoteSvg />

      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}