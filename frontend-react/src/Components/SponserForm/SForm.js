import { useState } from "react";
import { useDispatch } from "react-redux";
import { userdata } from "../../Redux/UserSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sform = () => {
  const [values, setValues] = useState({
    sponsership_type: "",
    selected_course: "",
    applicant_name: "",
    contact_no: 0,
    email: "",
    alternative_email: "",
    address: "",
    postal_code: "",
    FIN_NRIC_Passport_no: "",
    company_name: "",
    membership_type: "",
    membership_no: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevalues) => {
      return {
        ...prevalues,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  const Dispatches = () => {
    dispatch(
      userdata({
        sponsership_type:values.sponsership_type,
        selected_course:values.selected_course,
        applicant_name:values.applicant_name,
        contact_no:values.contact_no,
        email:values.email,
        alternative_email: values.alternative_email,
        address: values.address,
        postal_code:values.postal_code,
        FIN_NRIC_Passport_no:values.FIN_NRIC_Passport_no,
        company_name:values.company_name,
        membership_type: values.membership_type,
        membership_no: values.membership_no,
        payment:values.payment,
      })
    );
  };
  const user = useSelector((state) => state.user.value);
  
const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    // console.log(values);
   
    console.log("I am Working");
    Dispatches()
    console.log(user);
    setValues({
      sponsership_type: "",
      selected_course: "",
      applicant_name: "",
      contact_no: 0,
      email: "",
      alternative_email: "",
      address: "",
      postal_code: "",
      FIN_NRIC_Passport_no: "",
      company_name: "",
      membership_type: "",
      membership_no: "",
      payment: "",
    });
    navigate("/coursetable");
  };
  return { handleChange, values, handleSubmit };
};

export default Sform;
