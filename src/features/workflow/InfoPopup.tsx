import React, { FunctionComponent, ReactChild, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Button,
    Popover
} from "@mui/material"

import { localize } from '../localization/localizationSlice'
import { WorkflowPrompts } from '../localization/translations'

interface InfoPopupProps {
    title: WorkflowPrompts;
    children?: ReactChild | ReactChild[];
}

export const InfoPopup: FunctionComponent<InfoPopupProps> = ({ title, children }) => {
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
            { localizer('I\'m not sure, tell me more') }
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
            { children }
        </Popover>
    </div>
}