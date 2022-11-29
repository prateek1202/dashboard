import { React } from "react";
import { Card,TextField,Button } from "@mui/material";
import { LocalizationProvider,DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDayjs } from "dayjs";

import Data from "../../data/UserAppData";

function NewEntry() {
    const [appName,setAppName] = useState("")
    const [dateFrom,setDateFrom] = useState(0)
    const [dateTo,setDateTo] = useState(0)
    const [appData,setAppData] = useState(Data)
    const handleDataSubmit = (event) => {
        event.preventDefault()
        Data.push({
            name:appName,
            value:dateTo-dateFrom
        })
        setAppData([Data,...appData])
    }

    return (
        <div>
            {/* //add padding in CSS to below Card*/}
            <form onSubmit={handleDataSubmit}>
            <Card sx = {{padding:10}}>
            <TextField label = "App Name" value={appName} onChange = {(e) => setAppName(e.target.value)} />

            <LocalizationProvider dateAdapter={AdapterDayjs} >

                <DateTimePicker 
                onChange={(newValue) => setDateFrom(newValue)}
                label = "From"
                value={dateFrom}
                renderInput={(params) => <TextField {...params} />}
                 />

                <DateTimePicker 
                onChange={(newValue) => setDateTo(newValue)}
                label = "To"
                value={dateTo}
                renderInput={(params) => <TextField {...params} />}
                 />
            </LocalizationProvider>

            <Button variant = "outlined" type = "submit" >Submit</Button>
            </Card>
            </form>
        </div>
    )

}

export default NewEntry