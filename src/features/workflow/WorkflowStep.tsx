import React, { FunctionComponent, ReactChild } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    MobileStepper,
    Paper,
    Typography,
    Button
} from "@mui/material"
import { purple } from '@mui/material/colors'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'
import {
    getActiveStep,
    getNextStepNeeded,
    nextRelevantStep,
    backOneStep
} from './workflowSlice'

interface WorkflowStepProps {
    title: WorkflowPrompts;
    children?: ReactChild | ReactChild[];
}

export const WorkflowStep: FunctionComponent<WorkflowStepProps> = ({ title, children }) => {
    const localizer = useSelector(localize)
    const activeStep = useSelector(getActiveStep)
    const nextStepNeeded = useSelector(getNextStepNeeded)
    const dispatch = useDispatch()
    return <Box 
        sx={{
            height: "100%",
            width: "100%",
            flexGrow: 1,
            display: "flex",
            flexFlow: "column nowrap",
            // background: `radial-gradient(farthest-corner at bottom left, ${purple[50]} 0%, ${purple[50]} 80%, ${purple[100]} 90%)`,
            backgroundColor: 'lightGrey'
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
                flexFlow: "row wrap",
            }}>
                { children }
            </Box>
        </Box>

        <MobileStepper
            variant="progress"
            steps={18}
            activeStep={activeStep}
            sx={{
                flexGrow: 1,
                '& .MuiLinearProgress-root': {
                    backgroundColor: purple[50]
                },
                '& .MuiLinearProgress-bar': {
                    backgroundColor: purple[300]
                },
                '& .MuiButton-root': {
                    color: purple[400]
                }
            }}
            nextButton={
                <Button
                    size="small"
                    disabled={activeStep >= nextStepNeeded}
                    onClick={() => {
                        dispatch(nextRelevantStep())
                    }}
                >
                    Next
                    <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button
                    size="small"
                    disabled={activeStep === 0}
                    onClick={() => {
                        dispatch(backOneStep())
                    }}
                >
                    <KeyboardArrowLeft />
                    Back
                </Button>
            }
        />

    </Box>
}

export default WorkflowStep
