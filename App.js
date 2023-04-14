import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import TodoList from "./src/components/TodoList"

// randome uuid func
const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoInput, setTodoInput] = useState("")

  const addTodoList = () => {
    if (todoInput.trim() !== "") {
      setTodoList([...todoList, { key: uuid(), text: todoInput }])
      setTodoInput("")
    }
  }

  console.log(todoList)
  const onRemove = key => {
    setTodoList(todoList.filter(todo => todo.key !== key))
  }

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderRadius: 5, padding: 10 }}
          placeholder="Enter new todo list"
          value={todoInput}
          onChangeText={text => setTodoInput(text)}
        />
        <TouchableOpacity style={{ marginLeft: 10, backgroundColor: "blue", padding: 15, borderRadius: 5 }} onPress={addTodoList}>
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <TodoList todos={todoList} onRemove={onRemove} />
    </View>
  )
}

export default App
