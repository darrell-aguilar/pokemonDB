import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { MemoryRouter } from "react-router"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { api } from "../utils/apiSlice"
import { IntersectionObserverMock } from "../mocks/IntersectionObserverMock"
import { vi, it, expect, describe } from "vitest"

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)

describe("Home", () => {
  it("Renders the component", () => {
    render(
      <ApiProvider api={api}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ApiProvider>
    )

    expect(screen.getByTestId("search-link").getAttribute("href")).toBe(
      "/search"
    )
  })
})
