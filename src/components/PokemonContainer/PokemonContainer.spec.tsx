import { render, screen, waitFor } from "@testing-library/react"
import { PokemonContainer } from "./PokemonContainer"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { IntersectionObserverMock } from "../../mocks/IntersectionObserverMock"
import { api } from "../../utils/apiSlice"
import { mockServer } from "../../mocks/mswHandler"
import { vi, it, expect, describe, beforeAll } from "vitest"
import { MemoryRouter } from "react-router"

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)

describe("PokemonContainer", () => {
  beforeAll(() => {
    mockServer.listen()
  })

  it("Renders the component", async () => {
    render(
      <MemoryRouter>
        <ApiProvider api={api}>
          <PokemonContainer />
        </ApiProvider>
      </MemoryRouter>
    )

    expect(IntersectionObserverMock).toHaveBeenCalled()

    // @ts-ignore
    const intersect = IntersectionObserverMock.mock.calls[0][0]
    // @ts-ignore
    intersect([{ isIntersecting: true }])

    await waitFor(() => screen.findByText("Bulbasaur"))

    expect(screen.getByTestId("card_id").textContent).toBe("#1")
  })
})
