import { capitalize } from "../../utils/helpers"
import "./Stats.scss"
import { useEffect, useState } from "react"

export function Stats({ stats }: any) {
  useEffect(() => {
    getHighestNumber()
    return () => {
      setHighestNumber(0)
    }
  }, [stats])

  const [highestNumber, setHighestNumber] = useState(0)

  const getHighestNumber = () => {
    let highestValue = 0
    stats.forEach((element: any) => {
      if (element.value > highestValue) {
        highestValue = element.value
      }
    })
    setHighestNumber(highestValue)
  }

  return (
    <div className="stats" key={highestNumber}>
      <h3 className="stats_title">Stats</h3>
      <div>
        {stats.map((element: any) => (
          <dl className="stats_row" key={element.name}>
            <dt className="stats_name">{capitalize(element.name)}</dt>
            <dd className="stats_value">{element.value}</dd>
            <div className="stats_chart">
              <div
                className={`stats_bar ${element.value}`}
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
