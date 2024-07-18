import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { api } from "./utils/apiSlice"

const root = document.getElementById("root") as HTMLElement

createRoot(root).render(
  <ApiProvider api={api}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
)
