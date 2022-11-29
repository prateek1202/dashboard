import { useState } from "react";

import './Dashboard.css'
import '../data/UserAppData'
import UserInfo from "./dashboardElements/UserInfo";
import NewEntry from "./dashboardElements/NewEntry";
import Piechart from "./dashboardElements/Piechart";
import Bargraph from "./dashboardElements/Bargraph";

function Dashboard() {
    const saveAppDataHandler = (enteredData) => {
        const appData = [
            ...enteredData
        ]
        return appData
    }


    return(
        <div>
            <UserInfo />
            <NewEntry  />
            <Piechart onSaveAppData = {saveAppDataHandler}/>
            <Bargraph />
        </div>
    )
}


export default Dashboard