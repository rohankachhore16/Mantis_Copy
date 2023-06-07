// assets
import { WorkspacePremiumOutlined,EventSeatOutlined} from "@mui/icons-material";
import { ROUTENAME } from "utils/Constant/routeDefination";

// icons
const icons = {
  WorkspacePremiumOutlined,
  EventSeatOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const managment = {
  id: "management",
  title: "Management",
  type: "group",
  children: [
    {
      id: "department",
      title: "Department",
      type: "item",
      url: ROUTENAME.DEPARTMENT,
      icon: icons.EventSeatOutlined,
    },
    {
      id: "designation",
      title: "Designation",
      type: "item",
      url: ROUTENAME.DESIGNATION,
      icon: icons.WorkspacePremiumOutlined,
    },
  ],
};

export default managment;
