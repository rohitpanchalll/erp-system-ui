import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./chart.scss"

const data = [
    {
        name: 'Sun',
        electronics: 4000,
        clothes: 2400,
        miscellaneous: 2400,
    },
    {
        name: 'Mon',
        electronics: 3500,
        clothes: 2200,
        miscellaneous: 2100,
    },
    {
        name: 'Tue',
        electronics: 3800,
        clothes: 2600,
        miscellaneous: 2300,
    },
    {
        name: 'Wed',
        electronics: 4200,
        clothes: 2500,
        miscellaneous: 2200,
    },
    {
        name: 'Thu',
        electronics: 3900,
        clothes: 2300,
        miscellaneous: 2400,
    },
    {
        name: 'Fri',
        electronics: 4100,
        clothes: 2700,
        miscellaneous: 2500,
    },
    {
        name: 'Sat',
        electronics: 4300,
        clothes: 2800,
        miscellaneous: 2600,
    }
];


const Chart = () => {
  return (
    <div className="chart">
        <h2>Revenue Analysis</h2>
        <div className="chartContainer">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="miscellaneous" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
    )
}

export default Chart