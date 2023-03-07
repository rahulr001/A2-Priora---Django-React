import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import "./AdminAddCourses.css";
 
 
import AddCourse from "../../Components/AddCourse.tsx";




const FormContent = () => {
  return (
    <div className="table">
      {/* <div className="table-btn-links ">
            <ul>
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples>
                  <li>
                    <Link to="" className="link">
                      Schedule Course
                    </Link>
                  </li>
                </Ripples>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples>
                  <li>
                    <Link to="/adminAddCourse" className="link">
                      Add New Course
                    </Link>
                  </li>
                </Ripples>
              </div>
            </ul>
          </div> */}
      <AddCourse />
    </div>
  );
};

const AdminAddCourses = () => {
  return (
    <div>
      <AdminSideBar />
      <div className="table-container">
        <FormContent />
      </div>
    </div>
  );
};
export default AdminAddCourses;
