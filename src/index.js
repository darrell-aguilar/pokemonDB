import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
import allReducers from "./reducers/RootReducer"
import { Provider } from "react-redux"

const store = configureStore({
  reducer: allReducers,
  devTools: true,
})

const root = document.getElementById("root")

createRoot(root).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
