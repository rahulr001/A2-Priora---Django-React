import "./App.css";
import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import Course from "./Components/Course/Course.tsx";
import CourseTable from "./Components/CourseTable/CourseTable.tsx";
import Login from "./AdminPageElements/Pages/AdminLogin/Login.tsx";
import SponserForm from "./Components/SponserForm/SponserForm.tsx";
import CashNet from "./Components/CashNet/CashNet.tsx"
import Payments from "./Components/Payments/Payments.tsx";
import AdminHome from "./AdminPageElements/Pages/AdminHome/AdminHome.tsx";
import AdminPayment from "./AdminPageElements/Pages/AdminPayment/AdminPayment.tsx";
import AdminCourses from "./AdminPageElements/Pages/AdminCourses/AdminCourses.tsx";
import AdminAddCourses from "./AdminPageElements/Pages/AdminAddCourses/AdminAddCourses.tsx";
import AdminPaymentGoto from "./AdminPageElements/Pages/AdminPayment/AdminPaymentGoto.tsx";
import AdminCertificates from "./AdminPageElements/Pages/AdminCertificates/AdminCertificates.tsx";
import AdminParticipationDetails from "./AdminPageElements/Pages/AdminParticipationDetails/AdminParticipationDetails.tsx";
 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminCourse" element={<AdminCourses />} />
        <Route path="/adminPayment" element={<AdminPayment />} />
        <Route path="/adminPaymentGoto" element={<AdminPaymentGoto />} />
        <Route path="/adminAddCourse" element={<AdminAddCourses />} />
        <Route path="/adminCertificate" element={<AdminCertificates />} />
        <Route path="/adminParticipationDetails" element={<AdminParticipationDetails />} />
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/cashnet" element={<CashNet />} />
        <Route path="/course" element={<Course />} />

        <Route path="/sform/:course" element={<SponserForm />} />
        <Route path="/coursetable" element={<CourseTable />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </div>
  );
}

export default App;
