import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import TodoItem from "../TodoItem"

describe("TodoItem", () => {
  it("displays the todo item text", () => {
    const item = { key: "1", text: "Buy groceries" }
    const { getByText } = render(<TodoItem item={item} onRemove={() => {}} />)
    expect(getByText(item.text)).toBeTruthy()
  })

  it("calls the onRemove function when the item is pressed", () => {
    const item = { key: "1", text: "Buy groceries" }
    const onRemove = jest.fn()
    const { getByText } = render(<TodoItem item={item} onRemove={onRemove} />)

    fireEvent.press(getByText(item.text))
    expect(onRemove).toHaveBeenCalledWith(item.key)
  })
})
