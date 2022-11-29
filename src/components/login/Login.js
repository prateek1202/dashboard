import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import './Login.css'
// import { createTheme } from '@mui/material/styles';

// IMPORT THEMEPROVIDER FIRST TO ACCESS THIS THEME DATA
// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     standard: {
//       main: '#ffffff',

//     },
//   },
// });


function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const userData = {}
    const handleLogin = (event) => {
        event.preventDefault()
        if(username === "prateek" && password === "123"){
            userData = {
                Username: username,
                Password: password
            }
            console.log(`${username} & ${password} of the user.`)
            setPassword("")
            setUsername("")
        }
        else {
            console.log('enter correct username or password.')
        }
    }

    return(
        <div className='login'>
            <form onSubmit={handleLogin}>
            <div className = "login-box">
                <Box className = "box-items">
                    <Typography id = "title" >Login</Typography>
                    {/* TODO: change the color of textfields to white */}
                        <TextField 
                            required
                            value={username}
                            onChange = {(e) => setUsername(e.target.value)}
                            label = "Username" 
                            variant = "standard" />

                        <TextField 
                            required
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                            label = "Password" 
                            variant = "standard" />

                        <Button variant = "outlined" style = {{
                            color : 'white',
                            borderColor : 'white'}}
                            type = "submit">Login</Button>
                </Box>
            </div>
            </form>
        </div>
    )    
}

export default Login