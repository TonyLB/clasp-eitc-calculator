import React, { FunctionComponent, ReactChild, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Box,
    Button,
    Popover
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'

interface InfoPopupProps {
    prompt?: WorkflowPrompts;
    children?: ReactChild | ReactChild[];
}

export const InfoPopup: FunctionComponent<InfoPopupProps> = ({ prompt = 'I\'m not sure, tell me more', children }) => {
    const localizer = useSelector(localize)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            { localizer(prompt) }
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
        >
            <Box sx={{
                maxWidth: { sm: 200, md: 300 },
                padding: 3
            }}>
                { children }
            </Box>
        </Popover>
    </div>
}

export default InfoPopup
