import React from "react";
import PropTypes from "prop-types";

import moment from "moment/moment.js";

const ProfileExperience = ({
  experience: { company, title, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      {moment(from).format("DD/MM/YYYY")} -{" "}
      {to === null ? "Now" : moment(to).format("DD/MM/YYYY")}
    </p>
    <p>
      <strong>Position: </strong>
      {title}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
