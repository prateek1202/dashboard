import { React } from "react";
import { PieChart,Pie } from "recharts";



function Piechart(params) {
    return(
        <div>
            <div>
            <PieChart width={730} height={250}>
            <Pie data={appData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={90} fill="#8884d8" label />
            {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
            </PieChart>
            </div>
        </div>
    )
}

export default Piechart