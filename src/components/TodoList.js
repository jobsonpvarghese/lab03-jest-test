import React, { useState } from "react"
import { View, FlatList } from "react-native"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, onRemove }) => {
  return (
    <View>
      <FlatList data={todos} renderItem={({ item }) => <TodoItem item={item} onRemove={onRemove} />} />
    </View>
  )
}

export default TodoList
