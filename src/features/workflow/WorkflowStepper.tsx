import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Button
} from "@mui/material"

import { RootState } from '../../app/store'
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
    setDOBBand,
    getStudent,
    setStudent,
    getFosterCare,
    setFosterCare,
    getHomeless,
    setHomeless,
    getResident,
    setResident,
    getDisability,
    setDisability,
    getLivingWithSomeone,
    setLivingWithSomeone,
    getFamilyConnection,
    setFamilyConnection
} from './workflowSlice'
import { SelectRows } from './SelectRows'
import WorkflowStep from './WorkflowStep'
import InDevelopment from './InDevelopment'
import ResultStep from './Results'
import { WorkflowPrompts } from '../localization/translations'

interface WorkflowStepperProps {}

interface SimpleYesNoStepProps {
    getValue: (state: RootState) => boolean | undefined;
    setValue: typeof setStudent;
    title: WorkflowPrompts;
    question: WorkflowPrompts;
}

const SimpleYesNoStep: FunctionComponent<SimpleYesNoStepProps> = ({
    getValue,
    setValue,
    title,
    question
}) => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const selectedValue = useSelector(getValue)
    const currentValue = selectedValue === true ? 'Yes' : selectedValue === false ? 'No' : ''
    return <WorkflowStep title={title}>
                <Box sx={{ width: "80%" }}>
                    { localizer(question) }
                </Box>
                <br />
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {
                            dispatch(setValue(true))
                        }
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {
                            dispatch(setValue(false))
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

const HomelessStep = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const homeless = useSelector(getHomeless)
    const currentValue = homeless === true ? 'Yes' : homeless === false ? 'No' : ''
    return <WorkflowStep title='Homeless Step'>
                <Box sx={{ width: "80%" }}>
                    { localizer('In 2021, were you an unaccompanied homeless youth') }
                </Box>
                <br />
                <Button variant="contained" onClick={() => { window.open("https://schoolhouseconnection.org/am-i-experiencing-homelessness", "_blank")}}>
                    { localizer('I\'m not sure, tell me more') }
                </Button>
                <SelectRows
                    value={currentValue}
                    rows={[{
                        value: 'Yes',
                        label: 'Yes',
                        onSelect: () => {
                            dispatch(setHomeless(true))
                        }
                    },
                    {
                        value: 'No',
                        label: 'No',
                        onSelect: () => {
                            dispatch(setHomeless(false))
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
            return <SimpleYesNoStep
                getValue={getDependentChildren}
                setValue={setDependentChildren}
                title='Children Step'
                question='Do you have children'
            />
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
        case 6:
            return <SimpleYesNoStep
                getValue={getStudent}
                setValue={setStudent}
                title='Student Step'
                question='Were you a full time student for at least 5 months of 2021?'
            />
        case 7:
            return <SimpleYesNoStep
                getValue={getFosterCare}
                setValue={setFosterCare}
                title='Foster Care Step'
                question='Were you in formal foster care at any time between the ages of 14-17 years old?'
            />
        case 8:
            return <HomelessStep />
        case 9:
            return <SimpleYesNoStep
                getValue={getResident}
                setValue={setResident}
                title='Residency Step'
                question='In 2021, did you live in the United States for more than half of the year?'
            />
        case 10:
            return <SimpleYesNoStep
                getValue={getDisability}
                setValue={setDisability}
                title='Disability Step'
                question='Were you "permanently and totally disabled" in 2021?'
            />
        case 11:
            return <SimpleYesNoStep
                getValue={getLivingWithSomeone}
                setValue={setLivingWithSomeone}
                title='Living Situation Step'
                question='Did you live at least half the year with another taxpayer?'
            />
        case 12:
            return <SimpleYesNoStep
                getValue={getFamilyConnection}
                setValue={setFamilyConnection}
                title='Family Step'
                question='Are you their child'
            />
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