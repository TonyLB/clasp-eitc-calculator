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
    getDOBBand
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
    if (dobBand === '2004+') {
        return <WorkflowStep title='Results'>
            <Box sx={{ width: "80%", paddingBottom: "10px" }}>
                { localizer('You are not eligible for the EITC for workers without qualifying children because of your age') }
            </Box>
        </WorkflowStep>

    }
    return <InDevelopment />
}

export default ResultStep
