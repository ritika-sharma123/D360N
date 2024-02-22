import { Link } from "react-router-dom";

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  DashboardOutlined,
  DatabaseOutlined,
  BranchesOutlined,
  FileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { HiPencilAlt, HiOutlineCheck } from "react-icons/hi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";

const SideBar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [active, setActive] = useState(false);
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  // handle change the state active
  const handleMenuActive = () => {
    active ? setActive(true) : setActive(false);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
              {/* <img
                src="https://svn.apache.org/repos/asf/lucene.net/branches/3.0.3/branding/logo/lucene-net-icon-512x256.png"
                alt=""
              /> */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </MenuItem>
              <MenuItem icon={<DatabaseOutlined />}>
                <Link to="/datasets">Datasets</Link>
              </MenuItem>
              <MenuItem icon={<BranchesOutlined />}>
                <Link to="/manageintegrations"> Manage Integrations</Link>
              </MenuItem>
              <MenuItem icon={<FileOutlined />}>
                <Link to="/business">Business Files</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<LogoutOutlined />}>
                <Link>Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
