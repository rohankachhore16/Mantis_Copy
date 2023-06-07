// assets
import {DashboardCustomizeOutlined} from '@mui/icons-material';import { ROUTENAME } from 'utils/Constant/routeDefination';

// icons
const icons = {
    DashboardCustomizeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: ROUTENAME.DASHBOARD,
            icon: icons.DashboardCustomizeOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
