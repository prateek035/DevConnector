import React from "react";
import PropTypes from "prop-types";

import moment from "moment/moment.js";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      {moment(from).format("DD/MM/YYYY")} -{" "}
      {to === null ? "Now" : moment(to).format("DD/MM/YYYY")}
    </p>
    <p>
      <strong>Degree: </strong>
      {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong>
      {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
