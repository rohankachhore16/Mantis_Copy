// assets
import {PeopleAltOutlined} from '@mui/icons-material';
import { ROUTENAME } from 'utils/Constant/routeDefination';

// icons
const icons = {
    PeopleAltOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const portal = {
    id: 'portal',
    title: 'Portal',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: ROUTENAME.USER,
            icon: icons.PeopleAltOutlined,
            
        }
    ]
};

export default portal;
