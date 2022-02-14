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
    setHasSSN,
    getIncomeBand,
    setIncomeBand,
    getPriorIncomeBand,
    setPriorIncomeBand,
    getDOBBand,
    setDOBBand
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

const IncomeStep = ({ priorYear }: { priorYear?: boolean }) => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const filingJoint = useSelector(getFilingJoint)
    const incomeBand = useSelector(getIncomeBand)
    const priorIncomeBand = useSelector(getPriorIncomeBand)
    const selectedIncomeBand = priorYear ? priorIncomeBand : incomeBand
    const currentValue = selectedIncomeBand ? selectedIncomeBand : ''
    const setSelectedIncomeBand = priorYear ? setPriorIncomeBand : setIncomeBand
    return <WorkflowStep title={'Earned Income Step'}>
                <Box sx={{ width: "80%" }}>
                    { priorYear
                        ? (filingJoint
                            ? localizer('What was your and your spouse\'s combined earned income in 2019?')
                            : localizer('What was your earned income in 2019?'))
                        : (filingJoint
                            ? localizer('What was your and your spouse\'s combined earned income in 2021?')
                            : localizer('What was your earned income in 2021?'))
                    }
                </Box>
                <br />
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'None',
                        label: 'None',
                        onSelect: () => {
                            dispatch(setSelectedIncomeBand('None'))
                        }
                    },
                    {
                        value: 'Poverty',
                        label: filingJoint ? 'At least $1 up to $27,380' : 'At least $1 up to $21,430',
                        onSelect: () => {
                            dispatch(setSelectedIncomeBand('Poverty'))
                        }
                    },
                    {
                        value: 'Above',
                        label: filingJoint ? 'More than $27,380' : 'More than $21,430',
                        onSelect: () => {
                            dispatch(setSelectedIncomeBand('Above'))
                        }
                    }]}
                />
        </WorkflowStep>
}

const DOBStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const dobBand = useSelector(getDOBBand)
    return <WorkflowStep title={'DOB Step'}>
                <Box sx={{ width: "80%" }}>
                    { localizer('When were you born?') }
                </Box>
                <br />
                <SelectRows
                    value={dobBand || ''}
                    rows={[{
                        value: '2004+',
                        label: 'January 2, 2004 or later',
                        onSelect: () => {
                            dispatch(setDOBBand('2004+'))
                        }
                    },
                    {
                        value: '2003',
                        label: 'After Jan 2 2003 and before Jan 2, 2004',
                        onSelect: () => {
                            dispatch(setDOBBand('2003'))
                        }
                    },
                    {
                        value: '1998',
                        label: 'After Jan 1, 1998 and before Jan 1, 2003',
                        onSelect: () => {
                            dispatch(setDOBBand('1998'))
                        }
                    },
                    {
                        value: '<1998',
                        label: 'Jan 1, 1998 or earlier',
                        onSelect: () => {
                            dispatch(setDOBBand('<1998'))
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
        case 3:
            return <IncomeStep />
        case 4:
            return <IncomeStep priorYear />
        case 5:
            return <DOBStep />
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