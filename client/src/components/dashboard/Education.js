import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import Moment from "react-moment";
import moment from "moment/moment.js";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        {moment(edu.from).format("DD/MM/YYYY")} -{" "}
        {edu.to === null ? "Now" : moment(edu.to).format("DD/MM/YYYY")}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className="btn btn-danger"
        >
          {" "}
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2"> Education Credentials </h2>
      <table className="table">
        <thead>
          <tr>
            <th>School / College</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm"> Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.protoTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
