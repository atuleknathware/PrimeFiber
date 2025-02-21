import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminLeftPanel from "./AdminLeftPanel";
import "../css/admin.css";
import { useEffect } from "react";
import HomePlans from "./HomePlans";
import AddHomePlan from "./AddHomePlan";
import AddBusinessPlan from "./AddBusinessPlan";
import BusinessPlan from "./BusinessPlan";
import EditHomePlans from "./EditHomePlans";
import EditBusinessPlans from "./EditBusinessPlans";
import Logo from "./LogoUpdate";
import Addlogo from "./Addlogo"
import { Addpatners } from "./Addpatners";

function AdminRoutes() {
    const navigate = useNavigate();
    const user = localStorage.getItem('loggedInUser');
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    })
    // if(!user){
    //     // setTimeout(()=>navigate('/login'),0)
    // }
  return (<>
    <AdminLeftPanel />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/addlogo" element={<Addlogo />} />
      
      {/* <Route path="/logo  " element={<Logo />} /> */}


      {/* <Route path="/admin/logo/update/:id" element={<Logo />} /> */}
      {/* <Route path="/logo/update/:id" element={<Logo />} /> */}

      <Route path="/logo/update/" element={<Logo/>} />

      <Route path="/patners/add" element={<Addpatners/>} />

      


      <Route path="/homeplans" element={<HomePlans />} />
      <Route path="/homeplans/add" element={<AddHomePlan />} />
      <Route path="/homeplans/edit/:id" element={<EditHomePlans />} />
      

      <Route path="/businessplan" element={<BusinessPlan />} />
      <Route path="/businessplan/add" element={<AddBusinessPlan />} />
      <Route path="/businessplan/edit/:id" element={<EditBusinessPlans />} />

      
      

    </Routes>
    </>
  );
}

export default AdminRoutes;
