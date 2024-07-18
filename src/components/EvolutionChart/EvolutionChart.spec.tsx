import { cleanup, render, screen, waitFor } from "@testing-library/react"
import { EvolutionChart } from "./EvolutionChart"
import { it, expect, describe, beforeAll, afterEach } from "vitest"
import { api } from "../../utils/apiSlice"
import { MemoryRouter } from "react-router"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { mockServer } from "../../mocks/mswHandler"

describe("EvolutionChart", () => {
  const EvolutionComponent = () => {
    return (
      <MemoryRouter>
        <ApiProvider api={api}>
          <EvolutionChart id="/evolution-chain/4" />
        </ApiProvider>
      </MemoryRouter>
    )
  }

  beforeAll(() => mockServer.listen())

  afterEach(() => cleanup())

  it("Renders the loading state for the component", () => {
    render(<EvolutionComponent />)

    expect(screen.getByTestId("skeleton_loader_group")).toBeTruthy()
  })

  it("Renders the component with the evolution cards", async () => {
    render(<EvolutionComponent />)
    await waitFor(() => screen.findAllByTestId("card_link"))

    const evolutionCardLinks = screen.getAllByTestId("card_link")

    expect(evolutionCardLinks.length).toBe(3)
    expect(evolutionCardLinks.at(0)?.getAttribute("href")).toBe("/charmander")
    expect(evolutionCardLinks.at(1)?.getAttribute("href")).toBe("/charmeleon")
    expect(evolutionCardLinks.at(2)?.getAttribute("href")).toBe("/charizard")

    const evolutionCardId = screen.getAllByTestId("card_id")
    expect(evolutionCardId.at(0)?.textContent).toBe("#4")
    expect(evolutionCardId.at(1)?.textContent).toBe("#5")
    expect(evolutionCardId.at(2)?.textContent).toBe("#6")
  })
})
