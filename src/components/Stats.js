import { connect } from "react-redux"
import '../css/Stats.css'
import { useEffect, useState } from "react";

function Stats(props) {

    useEffect(() => {
        getHighestNumber()
    });

    const [highestNumber, setHighestNumber] = useState(0);

    const getHighestNumber = (number) => {
        props.Stats.forEach(element => {
            if (element.value > highestNumber) {
            setHighestNumber(element.value)
            }
        });
        console.log(highestNumber)
    }   

    return (
        <div className="chart-container">
            <h4>STATS</h4>
            <div>
                {props.Stats.map(element => 
                <dl key={element.name}>
                    <dt className="stat-name">{element.name.toUpperCase()}</dt>
                    <dd>{element.value}</dd>
                    <div className={`bar ${element.value}`} style={{width: `${element.value * 4}px`}}></div>
                </dl>)
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Stats: state.Stats
    } 
}

export default connect(mapStateToProps)(Stats)