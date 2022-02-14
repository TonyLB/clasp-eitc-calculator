import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import {
    Box
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'

interface SelectRowMetaData<L extends string> {
    value: L;
    label: WorkflowPrompts;
}

interface SelectRowsProps<L extends string> {
    value?: L;
    rows: SelectRowMetaData<L>[]
}

export const SelectRows = <L extends string>({ value: currentValue, rows }: SelectRowsProps<L>) => {
    const localizer = useSelector(localize)
    return <React.Fragment>
        {
            rows.map(({ value, label }) => {
                const selected = value === currentValue
                return <Box key={value} sx={{
                    width: "80%",
                    padding: "15px"
                }}>
                    <Box key={value} sx={{
                        width: "100%",
                        display: "flex",
                        flexFlow: "row wrap",
                        borderRadius: "5px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        alignItems: "flex-start",
                        backgroundColor: "white"
                    }}>
                        <Box sx={{
                            width: '20px'
                        }}>
                            {
                                (selected && <CheckCircleIcon />) || ' '
                            }
                        </Box>
                        <Box sx={{
                            flexGrow: 1
                        }}>
                            { localizer(label) }
                        </Box>
                    </Box>

                </Box>
            })
        }
    </React.Fragment>
}