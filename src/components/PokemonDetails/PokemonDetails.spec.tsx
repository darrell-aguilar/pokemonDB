import { render, screen } from "@testing-library/react"
import { it, expect, describe } from "vitest"
import { PokemonDetails } from "./PokemonDetails"
import { IPokemonDetails } from "../../utils/types"
import { api } from "../../utils/apiSlice"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { MemoryRouter } from "react-router"

const pokemonDetailsMock: IPokemonDetails = {
  name: "charmander",
  id: "4",
  title: "Charmander",
  types: [
    {
      type: {
        name: "fire",
      },
    },
  ],
  minLevel: 1,
  info: {
    height: 20,
    weight: 30,
    experience: 20,
    id: 5,
  },
  stats: [
    { name: "HP", value: 50 },
    { name: "Attack", value: 30 },
    { name: "Defense", value: 20 },
    { name: "Special-attack", value: 25 },
    { name: "Special-defense", value: 15 },
    { name: "Speed", value: 30 },
  ],
}

describe("PokemonDetails", () => {
  it("Renders the SkeletonLoader when data is loading", () => {
    render(<PokemonDetails isFetching data={undefined} />)

    expect(screen.getAllByTestId("skeleton_loader").length).toBe(3)
  })

  it("Renders the details", () => {
    render(
      <MemoryRouter>
        <ApiProvider api={api}>
          <PokemonDetails data={pokemonDetailsMock} isFetching={false} />
        </ApiProvider>
      </MemoryRouter>
    )

    const link = screen.getAllByTestId("card_link")
    expect(link).toHaveLength(1)
    expect(link.at(0)?.getAttribute("href")).toBe("/charmander")

    const statsRow = screen.getAllByTestId("stats_row")
    expect(statsRow).toBeTruthy()
    expect(statsRow.length).toBe(6)

    const statsBar = screen.getAllByTestId("stats_bar")
    expect(statsBar).toBeTruthy()
    expect(statsBar.at(0)?.getAttribute("style")).toStrictEqual(
      "max-width: 300px;"
    )
    expect(statsBar.at(1)?.getAttribute("style")).toStrictEqual(
      "max-width: 180px;"
    )
  })
})
