import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p>
        <Link to="/contact/1">forma de contato 1</Link>
      </p>
      <p>
        <Link to="/contact/2">forma de contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">forma de contato 3</Link>
      </p>
    </div>
  );
};

export default Contact;
