import { React } from "react";
import { Card,Avatar,Stack,Typography } from "@mui/material";
import { Box } from "@mui/system";

function UserInfo(props) {
    return (
        <div>
            <Card class = "user-details">
                <Box className = "user-details-box">
                <Avatar variant="rounded" src="avatar1.jpg" />
                <Stack spacing={0.5}>
                    <Typography>Prateek Upadhyay</Typography>
                    <Typography >Ajmer</Typography>
                </Stack>
                </Box>
        </Card>
        </div>
    )
    
}

export default UserInfo