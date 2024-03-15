import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import "./statBox.scss"

type StatProps = {
    color:string,
    title:string,
    datakey:string,
    number: number | string,
    percentage: number,
    statData: object[],
}

const StatBox = (props: StatProps) => {
    return (
        <div className="statBox">
            <div className="boxInfo">
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <h1>{props.number}</h1>
                <Link to={"/"}>View All</Link>
            </div>
            <div className="statInfo">
                <div className="stat">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.statData}>
                            <Tooltip/>
                            <Line dot={false} type="monotone" dataKey={props.datakey} stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color:props.percentage<0 ? "red" : "green"}}>{props.percentage}%</span>
                    <span className="time">this quarter</span>
                </div>
            </div>
        </div>
    )
}

export default StatBox