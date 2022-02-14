import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { localize } from '../localization/localizationSlice'
import { chooseToProceed } from '../workflow/workflowSlice'

interface LandingPageProps {

}

export const LandingPage: FunctionComponent<LandingPageProps> = () => {
    const dispatch = useDispatch()
    const localizer = useSelector(localize)
    const smallScreen = useMediaQuery('(max-width: 600px)')
    return <Box sx={{
        margin: '30px',
        textAlign: 'left',
        maxWidth: '800px'
    }}>
        
        <Typography variant={smallScreen ? 'h3' : 'h2' } gutterBottom sx={{ textAlign: 'center' }}>
            { localizer('It pays to file') }
        </Typography>

        <Box>
            { localizer('This tax season, there are more reasons to file') }
        </Box>
        <br />
        <Box>
            { localizer('Some of the rules are confusing') }
        </Box>
        <br />
        <Box sx={{ fontStyle: 'italic', ...(smallScreen ? { fontSize: '12px' } : {}) }}>
            { localizer('This tool is for informational purposes') }
        </Box>
        <br />
        <Box>
            <Button
                variant="contained"
                onClick={() => { dispatch(chooseToProceed()) }}
            >
                { localizer('Proceed') }
            </Button>
        </Box>
    </Box>
}
