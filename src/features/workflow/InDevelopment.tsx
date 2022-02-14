import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import { getActiveStep } from './workflowSlice'
import { SelectRows } from './SelectRows'
import WorkflowStep from './WorkflowStep'

export const InDevelopment = () => {
    return <WorkflowStep title='Children Step'>
                <Box sx={{ width: "80%" }}>
                    In Development
                </Box>
        </WorkflowStep>
}

export default InDevelopment
