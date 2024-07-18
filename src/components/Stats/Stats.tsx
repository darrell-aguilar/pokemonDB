import { capitalize } from "../../utils/helpers"
import { IStats } from "../../utils/types"
import "./Stats.scss"
import { useEffect, useState } from "react"

interface StatsPropType {
  stats: IStats[]
}
export function Stats({ stats }: StatsPropType) {
  useEffect(() => {
    let highestValue = 0
    stats.forEach((element: IStats) => {
      if (element.value > highestValue) {
        highestValue = element.value
      }
    })
    setHighestNumber(highestValue)

    return () => {
      setHighestNumber(0)
    }
  }, [stats])

  const [highestNumber, setHighestNumber] = useState(0)

  return (
    <div className="stats" key={highestNumber}>
      <h3 className="stats_title">Stats</h3>
      <div>
        {stats.map((element: IStats) => (
          <dl className="stats_row" data-testid="stats_row" key={element.name}>
            <dt className="stats_name">{capitalize(element.name)}</dt>
            <dd className="stats_value">{element.value}</dd>
            <div className="stats_chart">
              <div
                className={`stats_bar ${element.value}`}
                data-testid="stats_bar"
                style={{
                  maxWidth: `${(element.value / highestNumber) * 300}px`,
                }}
              ></div>
            </div>
          </dl>
        ))}
      </div>
    </div>
  )
}
