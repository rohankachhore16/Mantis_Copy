



// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { ROUTENAME } from 'utils/Constant/routeDefination';
import {CalculateOutlined,TextSnippetOutlined} from '@mui/icons-material';

// icons
const icons = {
    CalculateOutlined,
    TextSnippetOutlined
    
};
// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const Tools_Field = {
    id: 'tools',
    title: 'Tools',
    type: 'group',
    children: [
        {
            id: 'notes',
            title: 'Notes',
            type: 'item',
            url: ROUTENAME.NOTES,
            icon: icons.TextSnippetOutlined,
        },
        {
            id: 'calculator',
            title: 'Calculator',
            type: 'item',
            url: ROUTENAME.CALCULATOR,
            icon: icons.CalculateOutlined,
        },
      
     
    ]
};

export default Tools_Field;
