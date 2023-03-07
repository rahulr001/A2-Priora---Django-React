import React, { useState } from "react";
import Ripples from "react-ripples";
import "./Course.css";
import { Input } from "antd";
import Courseimg from "../../Assets/courseimg.svg";
import Star from "../../Assets/Star 4.svg";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Searchs from "../../Assets/search.svg";
import Datetab from "../../Assets/date.svg";
import { Link } from "react-router-dom";
import moment from "moment";

const Course = () => {
  const [search, setSearch] = useState("");
  const dates = moment(new Date()).format("D-MMM-YYYY");
  const data = [
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
    {
      courseimg: Courseimg,
      coursename: "Full Stack Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
    {
      courseimg: Courseimg,
      coursename: "Structural Pointer Course",
      subject: "Precast concrete supervision",
      price: "50",
      start_time: "09:00AM",
      end_time: "10:00AM",
      coursedelivery: "Via Zoom",
      funding: "UTAP Available",
      pdu: 6,
      cet: 6,
      set: 6,
    },
  ];
  const [datas, setDatas] = useState(data);
  const handleSearch = () => {
    if (search === "") {
      setDatas(data);
    } else {
      const filteredData = data.filter((course) => {
        return course.coursename.toLowerCase().includes(search.toLowerCase());
      });
      return setDatas(filteredData);
    }
  };
  const { Search } = Input;

  return (
    <>
      <Navbar />
      <div className="course-container">
        <div className="course-search">
          <img src={Searchs} alt="" />
          <div className="search-content">
            <div className="search-bar">
              <Search
                style={{ width: "27rem", left: "10rem" }}
                placeholder="Search Your Course"
                enterButton
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (e.target.value === "") {
                    return setDatas(data);
                  }
                }}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="course-cards">
          {datas.map((course) => (
            <div className="course-content">
              <img className="course-img" src={course.courseimg} alt="" />
              <div className="course-matter">
                <h1>{course.coursename}</h1>
                <p>{course.subject}</p>
                <h1>$ {course.price}</h1>
                <h5>
                  Time : {course.start_time}-{course.end_time}
                </h5>
                <h5>CourseDelivery : {course.coursedelivery}</h5>
                <h5>Funding : {course.funding}</h5>
              </div>
              <div className="date-tab">
                <h5>{dates}</h5>
                <img src={Datetab} alt="" />
              </div>
              <div className="star-rating">
                <img src={Star} alt="" />
                <h5>{course.pdu} PDU</h5>
                <img src={Star} alt="" />
                <h5>{course.cet} CET</h5>
                <img src={Star} alt="" />
                <h5>{course.set} SET</h5>
              </div>
              <div
                className="course-button"
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples>
                  <Link className="link-tab" to={`/sform/${course.coursename}`}>
                    <button type="button" className="course-btn">
                      Register
                    </button>
                  </Link>
                </Ripples>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
