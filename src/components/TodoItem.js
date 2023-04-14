import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const TodoItem = ({ item, onRemove }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onRemove(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10
  }
})

export default TodoItem
