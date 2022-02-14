import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import {
    getActiveStep,
    getDependentChildren,
    setDependentChildren
} from './workflowSlice'
import { SelectRows } from './SelectRows'
import WorkflowStep from './WorkflowStep'
import InDevelopment from './InDevelopment'

interface WorkflowStepperProps {}

const ChildrenStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const dependentChildren = useSelector(getDependentChildren)
    const currentValue = dependentChildren === true ? 'Yes' : dependentChildren === false ? 'No' : ''
    return <WorkflowStep title='Children Step'>
                <Box sx={{ width: "80%" }}>
                    { localizer('Do you have children') }
                </Box>
                <br />
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {
                            dispatch(setDependentChildren(true))
                        }
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {
                            dispatch(setDependentChildren(false))
                        }
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
            return <InDevelopment />
    }
}

export const WorkflowStepper: FunctionComponent<WorkflowStepperProps> = () => {
    const activeStep = useSelector(getActiveStep)
    return <StepDispatch activeStep={activeStep} />
}