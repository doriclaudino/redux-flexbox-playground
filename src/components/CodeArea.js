import React from "react";
import { PropTypes } from "prop-types";

const CodeArea = props => {
  return (
    <textarea
      className="no-resize full-size border-box"
      defaultValue={props.code}
    />
  );
};

CodeArea.defaultProps = {
  code: "/**empty */"
};

CodeArea.propTypes = {
  code: PropTypes.arrayOf(PropTypes.object)
};

export default CodeArea;