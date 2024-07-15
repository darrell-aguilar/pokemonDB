import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"
import { POKE_API } from "../utils/constants"

const handlers = [
  http.get(`${POKE_API}/pokemon`, () => {
    return HttpResponse.json({
      results: [
        {
          name: "bulbasaur",
          url: `${POKE_API}/pokemon/1/`,
        },
      ],
    })
  }),
]

export const mockServer = setupServer(...handlers)
