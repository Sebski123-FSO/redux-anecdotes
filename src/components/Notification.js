import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const Notification = ({ notification }) => {
  const style = {
    display: notification.visible ? "" : "none",
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{notification.content}</div>;
};

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default connect((state) => {
  return { notification: state.notification };
})(Notification);
