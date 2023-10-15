import { View, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { THEME } from "../../styles/theme";
import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { TaskCard } from "../../components/TaskCard";
import { useEffect, useState } from "react";

export type Task = {
  id: string,
  title: string,
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  function handleAddNewTask() {
    if (newTask.trim().length === 0) {
      return Alert.alert("Opa", "Digite um título para sua tarefa.")
    }

    setTasks(prevState => [...prevState, {
      id: new Date().toISOString(),
      title: newTask,
      isCompleted: false
    }])

    Alert.alert("Tarefa cadastrada com sucesso!")

    setNewTask("")
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", "Deseja remover permanentemente essa tarefa?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => {
          const filteredTasks = tasks.filter(task => task.id != id)

          setTasks(filteredTasks)
        }
      }
    ])
  }

  function handleCompletedTask(id: string) {
    const tasksCopy = tasks.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })

    setTasks(tasksCopy)
  }

  function amountCompletedTasks() {
    const tasksCopy = tasks.filter(item => item.isCompleted)

    setCompletedTasks(tasksCopy)
  }

  useEffect(() => {
    amountCompletedTasks()
  }, [tasks])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={THEME.COLORS.GRAY_300}
          onChangeText={setNewTask}
          value={newTask}
        />

        <Button
          onPress={handleAddNewTask}
        />
      </View>

      <View style={styles.summary}>
        <View style={styles.counter}>
          <Text style={styles.created}>
            Criadas
          </Text>

          <View style={styles.count}>
            <Text style={styles.amount}>
              {tasks.length}
            </Text>
          </View>
        </View>
        <View style={styles.counter}>
          <Text style={styles.completed}>
            Concluídas
          </Text>

          <View style={styles.count}>
            <Text style={styles.amount}>
              {completedTasks.length}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={item => (
            <TaskCard
              data={item.item}
              removeTask={handleRemoveTask}
              completedTask={handleCompletedTask}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList />
          )}
        />
      </View>
    </View>
  )
}