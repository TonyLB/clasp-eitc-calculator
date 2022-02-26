import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'
import { nextRelevantStep } from '../workflow/workflowSlice'

interface SelectRowMetaData<L extends string> {
    value: L;
    label: WorkflowPrompts;
    onSelect: (value: L) => void;
}

interface SelectRowsProps<L extends string> {
    value?: L;
    rows: SelectRowMetaData<L>[]
}

export const SelectRows = <L extends string>({ value: currentValue, rows }: SelectRowsProps<L>) => {
    const localizer = useSelector(localize)
    const dispatch = useDispatch()
    return <React.Fragment>
        {
            rows.map(({ value, label, onSelect }) => {
                const selected = value === currentValue
                return <Box key={value} sx={{
                    width: "80%",
                    padding: "15px",
                    cursor: "pointer"
                }}>
                    <Box
                        key={value}
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexFlow: "row wrap",
                            borderRadius: "5px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            alignItems: "flex-start",
                            backgroundColor: "white"
                        }}
                        onClick={() => {
                            onSelect(value)
                            dispatch(nextRelevantStep())
                        }}
                    >
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