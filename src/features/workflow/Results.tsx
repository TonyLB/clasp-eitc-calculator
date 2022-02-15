import React from 'react'
import { useSelector } from 'react-redux'
import {
    Box
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import {
    getDependentChildren,
    getHasSSN,
    getIncomeBand,
    getPriorIncomeBand,
    getDOBBand,
    getStudent,
    getFosterCare,
    getHomeless,
    getResident,
    getDisability,
    getFamilyConnection,
    getYounger,
    getLivingExpensesPaid,
    getCohabitation,
} from './workflowSlice'
import WorkflowStep from './WorkflowStep'
import InDevelopment from './InDevelopment'

export const ResultStep = () => {
    const localizer = useSelector(localize)
    const dependentChildren = useSelector(getDependentChildren)
    const hasSSN = useSelector(getHasSSN)
    const incomeBand = useSelector(getIncomeBand)
    const priorIncomeBand = useSelector(getPriorIncomeBand)
    const dobBand = useSelector(getDOBBand)
    const student = useSelector(getStudent)
    const fosterCare = useSelector(getFosterCare)
    const homeless = useSelector(getHomeless)
    const resident = useSelector(getResident)
    const disability = useSelector(getDisability)
    const familyConnection = useSelector(getFamilyConnection)
    const younger = useSelector(getYounger)
    const livingExpensesPaid = useSelector(getLivingExpensesPaid)
    const cohabitation = useSelector(getCohabitation)
    if (dependentChildren) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You may qualify for the Earned Income Tax Credit for parents') }
            </Box>
            <br />
            <Box sx={{ width: "80%" }}>
                { localizer('Go to') }
                &nbsp;
                <a href="https://www.getyourrefund.org/en">{ localizer('GetYourRefund') }</a>
                &nbsp;
                { localizer('for information on how to file')}
            </Box>
        </WorkflowStep>
    }
    if (hasSSN === false) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('If you do not have a SSN') }
            </Box>
        </WorkflowStep>
    }
    if (incomeBand === 'Above') {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC.  However, you are legally required to file a federal tax return') }
            </Box>
            <br />
            <Box sx={{ width: "80%" }}>
                { localizer('Go to') }
                &nbsp;
                <a href="https://www.getyourrefund.org/en">{ localizer('GetYourRefund') }</a>
                &nbsp;
                { localizer('for information on how to file')}
            </Box>
        </WorkflowStep>
    }
    if (priorIncomeBand === 'Above') {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC based on your 2019 income') }
            </Box>
            <br />
            <Box sx={{ width: "80%" }}>
                { localizer('Go to') }
                &nbsp;
                <a href="https://www.getyourrefund.org/en">{ localizer('GetYourRefund') }</a>
                &nbsp;
                { localizer('for information on how to file')}
            </Box>
        </WorkflowStep>
    }
    if (incomeBand === 'None' && priorIncomeBand === 'None') {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC because you did not have earned income in either 2021 or 2019') }
            </Box>
            <br />
            <Box sx={{ width: "80%" }}>
                { localizer('Go to') }
                &nbsp;
                <a href="https://www.getyourrefund.org/en">{ localizer('GetYourRefund') }</a>
                &nbsp;
                { localizer('for information on how to file')}
            </Box>
        </WorkflowStep>
    }
    if (dobBand === '2004+' && !(student || fosterCare || homeless)) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC for workers without qualifying children because of your age') }
            </Box>
        </WorkflowStep>
    }
    if (dobBand === '1998' && !(fosterCare || homeless)) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC for workers without qualifying children, because of your age and student status') }
            </Box>
        </WorkflowStep>
    }
    if (resident === false) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC because you did not live in the US') }
            </Box>
            <br />
            <Box sx={{ width: "80%" }}>
                { localizer('Go to') }
                &nbsp;
                <a href="https://www.getyourrefund.org/en">{ localizer('GetYourRefund') }</a>
                &nbsp;
                { localizer('for information on how to file')}
            </Box>
        </WorkflowStep>
    }
    if (familyConnection && (younger || disability)) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You do not qualify for the Earned Income Tax Credit because you are the qualifying child') }
            </Box>
        </WorkflowStep>
    }
    if (cohabitation) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You can likely be claimed as the dependent of another taxpayer') }
            </Box>
        </WorkflowStep>
    }
    if (livingExpensesPaid === false) {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You likely qualify for a credit') }
            </Box>
            {
                ((student || fosterCare)
                    && <React.Fragment>
                        <br />
                        <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                            { localizer('If you\'re using the 1040 form') }
                        </Box>
                    </React.Fragment>)
                || ''
            }
        </WorkflowStep>
    }
    return <InDevelopment />
}

export default ResultStep
