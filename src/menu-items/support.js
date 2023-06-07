// assets
import {TaskOutlined,DescriptionOutlined} from "@mui/icons-material";
import { ROUTENAME } from "utils/Constant/routeDefination";

// icons
const icons = {
    TaskOutlined,
    DescriptionOutlined};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: "contracts",
  title: "Contracts",
  type: "group",
  children: [
    {
      id: "templates",
      title: "Templates",
      type: "item",
      url: ROUTENAME.TEMPLATES,
      icon: icons.DescriptionOutlined,
    },
    {
      id: "contracts",
      title: "Contracts",
      type: "item",
      url: ROUTENAME.CONTRACT,
      icon: icons.TaskOutlined,
    },
  ],
};

export default support;
