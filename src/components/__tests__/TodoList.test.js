import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import TodoList from "../TodoList"

describe("TodoList", () => {
  it("renders the todo items", () => {
    const todos = [
      { key: "1", text: "Buy groceries" },
      { key: "2", text: "Walk the dog" }
    ]

    const { getByText } = render(<TodoList todos={todos} onRemove={() => {}} />)
    todos.forEach(todo => {
      expect(getByText(todo.text)).toBeTruthy()
    })
  })

  it("calls the onRemove function when a todo item is removed", () => {
    const todos = [
      { key: "1", text: "Buy groceries" },
      { key: "2", text: "Walk the dog" }
    ]

    const onRemove = jest.fn()
    const { getByText } = render(<TodoList todos={todos} onRemove={onRemove} />)

    fireEvent.press(getByText(todos[0].text))
    expect(onRemove).toHaveBeenCalledWith(todos[0].key)
  })
})
