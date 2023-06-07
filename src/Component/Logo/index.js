import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { Box, ButtonBase } from '@mui/material';

// project import
import Logo from './Logo';
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
        <Box sx={{display:"flex",justifyContent:"center",alignItem:"center"}}>
        <Logo/>
        </Box>
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
