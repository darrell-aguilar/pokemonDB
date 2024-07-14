import "./PokemonContainer.scss"
import { useLazyGetPokemonListQuery } from "../../utils/apiSlice"
import { PokemonCard } from "../PokemonCard"
import { IPokemonListResult } from "../../utils/types"
import { useEffect, useRef } from "react"
import { LIMIT } from "../../utils/constants"
import { Loader } from "../Loader"

export function PokemonContainer() {
  const [trigger, { data, isFetching }] = useLazyGetPokemonListQuery()
  const limit = LIMIT
  const bottomRef = useRef(null)

  useEffect(() => {
    const offset = data?.length || 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          trigger({ limit, offset })
        }
      },
      {
        threshold: 0.25,
      }
    )
    const endOfPageRef = bottomRef

    if (endOfPageRef.current) {
      observer.observe(endOfPageRef.current)
    }

    return () => {
      if (endOfPageRef.current) {
        observer.unobserve(endOfPageRef.current)
      }
    }
  }, [data, isFetching, limit, trigger])

  return (
    <div className="main">
      <div className="main_container">
        {data?.map((pokemon: IPokemonListResult) => (
          <PokemonCard cardProps={{ ...pokemon }} key={pokemon.id} />
        ))}
      </div>
      {isFetching && <Loader height="5rem" />}
      <div className="main_bottom" ref={bottomRef}></div>
    </div>
  )
}
