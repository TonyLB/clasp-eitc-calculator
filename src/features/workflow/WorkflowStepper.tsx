import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import {
    getActiveStep,
    getDependentChildren,
    setDependentChildren,
    getFilingJoint,
    setFilingJoint,
    getHasSSN,
    setHasSSN
} from './workflowSlice'
import { SelectRows } from './SelectRows'
import WorkflowStep from './WorkflowStep'
import InDevelopment from './InDevelopment'
import ResultStep from './Results'

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

const FilingJointStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const filingJoint = useSelector(getFilingJoint)
    const currentValue = filingJoint === true ? 'Yes' : filingJoint === false ? 'No' : ''
    return <WorkflowStep title='Filing Joint Step'>
                <Box sx={{ width: "80%" }}>
                    { localizer('Use this tool to figure out whether you are likely') }
                </Box>
                <br />
                <Box sx={{ width: "80%" }}>
                    { localizer('Are you married and filing a joint return?') }
                </Box>
                <br />
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {
                            dispatch(setFilingJoint(true))
                        }
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {
                            dispatch(setFilingJoint(false))
                        }
                    }]}
                />
        </WorkflowStep>
}

const SSNStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const filingJoint = useSelector(getFilingJoint)
    const hasSSN = useSelector(getHasSSN)
    const currentValue = hasSSN === true ? 'Yes' : hasSSN === false ? 'No' : ''
    return <WorkflowStep title='SSN Step'>
                <Box sx={{ width: "80%" }}>
                    { filingJoint
                        ? localizer('Do both you and your spouse have a social security number that authorizes you to work?')
                        : localizer('Do you have a social security number that authorizes you to work?')
                    }
                </Box>
                <br />
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {
                            dispatch(setHasSSN(true))
                        }
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {
                            dispatch(setHasSSN(false))
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
        case 1:
            return <FilingJointStep />
        case 2:
            return <SSNStep />
        case 15:
            return <ResultStep />
        default:
            return <InDevelopment />
    }
}

export const WorkflowStepper: FunctionComponent<WorkflowStepperProps> = () => {
    const activeStep = useSelector(getActiveStep)
    return <StepDispatch activeStep={activeStep} />
}