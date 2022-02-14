import {
    Box
} from "@mui/material"

import WorkflowStep from './WorkflowStep'

export const InDevelopment = () => {
    return <WorkflowStep title='In Development'>
                <Box sx={{ width: "80%" }}>
                    In Development
                </Box>
        </WorkflowStep>
}

export default InDevelopment
