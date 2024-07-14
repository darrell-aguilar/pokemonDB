import { render, screen } from "@testing-library/react"
import { PokemonCard } from "./PokemonCard"
import { MemoryRouter } from "react-router"
import { ARTWORK_URL } from "../../utils/constants"

it("renders a pokemon card component", () => {
  const cardProps = {
    name: "bulbasaur",
    id: "1",
    title: "Bulbasaur",
  }

  render(
    <MemoryRouter>
      <PokemonCard cardProps={cardProps} />
    </MemoryRouter>
  )

  expect(screen.getByTestId("card_id").textContent).toBe("#1")

  const cardImage = screen.getByTestId("card_image")
  expect(cardImage).toBeTruthy()
  expect(cardImage.getAttribute("src")).toBe(`${ARTWORK_URL}/1.png`)
  expect(cardImage.getAttribute("title")).toBe("Bulbasaur")

  expect(screen.getByTestId("card_name").textContent).toBe("Bulbasaur")

  expect(screen.getByTestId("card_link")).toBeTruthy()

  expect(screen.getByTestId("card_link").getAttribute("href")).toBe(
    "/bulbasaur"
  )
})
