// assets
import {TimeToLeaveOutlined,BadgeOutlined,CheckCircleOutlineOutlined} from "@mui/icons-material";
import { ROUTENAME } from "utils/Constant/routeDefination";

// icons
const icons = {
    TimeToLeaveOutlined,
    BadgeOutlined,
    CheckCircleOutlineOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: "hr",
  title: "HR",
  type: "group",
  children: [
    {
      id: "attendance",
      title: "Attendance",
      type: "item",
      url: ROUTENAME.ATTENDANCE,
      icon: icons.CheckCircleOutlineOutlined,
    },
    {
      id: "employees",
      title: "Employees",
      type: "item",
      url: ROUTENAME.EMPLOYEES,
      icon: icons.BadgeOutlined,
    },
    {
      id: "holidays",
      title: "Holiday",
      type: "item",
      url: ROUTENAME.HOLIDAY,
      icon: icons.TimeToLeaveOutlined,
    },
  ],
};

export default pages;
