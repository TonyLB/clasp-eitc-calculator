import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { getActiveStep } from './workflowSlice'
import { SelectRows } from './SelectRows'

interface WorkflowStepperProps {}

const ChildrenStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
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
            <Typography>{ localizer('Children Step') }</Typography>
        </Paper>
        <Box sx={{ flexGrow: 1, display: "flex", flexFlow: "column nowrap", justifyContent: "center" }}>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap",
                // alignItems: "stretch"
            }}>
                <Box sx={{ width: "80%" }}>
                    { localizer('Do you have children') }
                </Box>
                <br />
                <SelectRows
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {}
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {}
                    }]}
                />
            </Box>
        </Box>

        <MobileStepper
            variant="progress"
            steps={3}
            activeStep={0}
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

export const WorkflowStepper: FunctionComponent<WorkflowStepperProps> = () => {
    const activeStep = useSelector(getActiveStep)
    return <ChildrenStep />
}