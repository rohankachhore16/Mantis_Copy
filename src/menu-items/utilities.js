// assets
import {PersonPinOutlined} from '@mui/icons-material';
import { ROUTENAME } from 'utils/Constant/routeDefination';

// icons
const icons = {
    PersonPinOutlined,
 
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'bussiness',
    title: 'Bussiness',
    type: 'group',
    children: [
        {
            id: 'Client',
            title: 'Clients',
            type: 'item',
            url: ROUTENAME.CLIENT,
            icon: icons.PersonPinOutlined,
            // target: true

        },
   
     
    ]
};

export default utilities;
