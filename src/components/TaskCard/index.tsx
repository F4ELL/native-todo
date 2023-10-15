import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Checkbox } from "../Checkbox";
import { DeleteTask } from "../DeleteTaskButton";
import { Task } from "../../screens/Home";
import { useState } from "react";

type Props = {
  data: Task
  removeTask: (id: string) => void
  completedTask: (id: string) => void
}

export function TaskCard({ data, removeTask, completedTask }: Props) {
  const [ checked, setChecked ] = useState(false)

  function onRemoveTask() {
    removeTask(data.id)
  }

  function toggleCheckbox() {
    setChecked(!checked)
  }

  function onCompletedTask() {
    completedTask(data.id)
  }

  function handleSwitchTaskToogle() {
    toggleCheckbox()
    onCompletedTask()
  }

  return (
    <View style={styles.container}>
      <Checkbox 
        checked={checked}
        onPress={handleSwitchTaskToogle}
      />

      <Text style={
        [
          styles.task,
          checked && styles.checked
        ]
      }>
        {data.title}
      </Text>

      <DeleteTask 
        onPress={onRemoveTask}
      />

    </View>
  )
}