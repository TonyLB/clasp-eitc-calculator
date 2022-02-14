import React, { FunctionComponent, ReactChild, ReactChildren } from 'react'
import { useSelector } from 'react-redux'
import {
    Box,
    MobileStepper,
    Paper,
    Typography,
    Button
} from "@mui/material"
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'
import { getActiveStep } from './workflowSlice'

interface WorkflowStepProps {
    title: WorkflowPrompts;
    children?: (ReactChild | ReactChildren)[];
}

export const WorkflowStep: FunctionComponent<WorkflowStepProps> = ({ title, children }) => {
    const localizer = useSelector(localize)
    const activeStep = useSelector(getActiveStep)
    return <Box 
        sx={{
            height: "100%",
            width: "100%",
            flexGrow: 1,
            display: "flex",
            flexFlow: "column nowrap",
            backgroundColor: "lightgrey"
        }}
    >
        <Paper
            square
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
            }}
        >
            <Typography>{ localizer(title) }</Typography>
        </Paper>
        <Box sx={{ flexGrow: 1, display: "flex", flexFlow: "column nowrap", justifyContent: "center" }}>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap"
            }}>
                { children }
            </Box>
        </Box>

        <MobileStepper
            variant="progress"
            steps={3}
            activeStep={activeStep}
            sx={{ flexGrow: 1 }}
            nextButton={
                <Button size="small" disabled={true}>
                    Next
                    <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button size="small" disabled={true}>
                    <KeyboardArrowLeft />
                    Back
                </Button>
            }
        />

    </Box>
}

export default WorkflowStep
