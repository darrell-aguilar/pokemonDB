import "./PokemonContainer.scss"
import { useLazyGetPokemonListQuery } from "../../utils/apiSlice"
import { PokemonCard } from "../PokemonCard"
import { IPokemonListResult } from "../../utils/types"
import { useEffect, useRef, useState } from "react"

export function PokemonContainer() {
  let [limit, offset] = [30, 0]

  const [trigger, { data }] = useLazyGetPokemonListQuery()
  const [isFetching, setIsFetching] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          setIsFetching(true)
          fetchData()
        }
      },
      {
        threshold: 0.25,
      }
    )

    if (bottomRef.current) {
      observer.observe(bottomRef.current)
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current)
      }
    }
  }, [])

  const fetchData = () => {
    trigger({ limit, offset })
    offset += 30
    setIsFetching(false)
  }

  return (
    <div className="main">
      <div className="main_container">
        {data?.map((pokemon: IPokemonListResult, index: number) => (
          <PokemonCard
            cardProps={{ ...pokemon, id: index + 1 }}
            key={pokemon.name}
          />
        ))}
      </div>
      <div className="main_bottom" ref={bottomRef}></div>
    </div>
  )
}
