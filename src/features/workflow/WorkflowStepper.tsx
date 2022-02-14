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
import WorkflowStep from './WorkflowStep'

interface WorkflowStepperProps {}

const ChildrenStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    return <WorkflowStep title='Children Step'>
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
        </WorkflowStep>
}

interface StepDispatchProps {
    activeStep: number;
}

const StepDispatch: FunctionComponent<StepDispatchProps> = ({ activeStep }) => {
    switch(activeStep) {
        case 0:
            return <ChildrenStep />
        default:
            return <ChildrenStep />
    }
}

export const WorkflowStepper: FunctionComponent<WorkflowStepperProps> = () => {
    const activeStep = useSelector(getActiveStep)
    return <StepDispatch activeStep={activeStep} />
}