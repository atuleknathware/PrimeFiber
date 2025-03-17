import { Link, useNavigate } from "react-router-dom";

const AdminLeftPanel = () => {
    const navigate = useNavigate();
    const handleLogOut = () =>{
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    }
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <button className="toggle-btn">
          <i className="fas fa-bars" />
        </button>
        <h4 className="text-center">Admin Panel</h4>
        <Link to='/admin'>
          <i className="fas fa-home" /> <span>Dashboard</span>
          </Link>
          <Link to='/admin/homeplans'>
          <i className="fas fa-user" /> <span>Home Plan Management</span>
          </Link>
        <Link to='/admin/businessplan'>
          <i className="fas fa-cogs" /> <span>Bussiness Plan Management</span>
        </Link>
        <Link to={`/admin/logo/update/`}>
          <i className="fas fa-chart-bar" /> <span>Logo</span>
        </Link>
        <Link to={`/admin/patners/add`}>
          <i className="fas fa-chart-bar" /> <span>add patners</span>
        </Link>
        <a href="#" onClick={handleLogOut}>
          <i className="fas fa-sign-out-alt" /> <span>Logout</span>
        </a>
      </div>
      
    </div>
  );
};

export default AdminLeftPanel;
