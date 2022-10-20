import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar' >
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MY DASHBOARD</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
             
             <p className="title">MAIN</p>
            <li><DashboardIcon className='icon' ></DashboardIcon>
            <span>DashBoard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
            </Link>
        
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsIcon className="icon" />
              <span>Products</span>
            </li>
            </Link>
        
            <li><BorderColorIcon className='icon'></BorderColorIcon><span>Orders</span></li>

            <li><DeliveryDiningIcon className='icon'></DeliveryDiningIcon><span>Delivery</span></li>

            <p className="title">USEFUL LINKS</p>
            <li><QueryStatsIcon className='icon'></QueryStatsIcon><span>Stats</span></li>

            <li><NotificationsActiveIcon className='icon'></NotificationsActiveIcon><span>Notification</span></li>

            <p className="title">SERVICES</p>

            <li><HealthAndSafetyIcon className='icon'></HealthAndSafetyIcon><span>System Health</span></li>

            <li><SettingsIcon className='icon'></SettingsIcon><span>Settings</span></li>

            <p className="title">USER</p>

            <li><AccountCircleIcon className='icon'></AccountCircleIcon><span>Profile</span></li>

            <li><LogoutIcon className='icon'></LogoutIcon><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">

        <div className="coloOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="coloOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar