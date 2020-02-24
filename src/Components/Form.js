import React from "react";
import { NavContact } from "../Components/sidebar/Nav";

const Form = () => {
  return (
    <div>
      <NavContact/>
      <iframe
        title="Contact"
        src="https://docs.google.com/forms/d/e/1FAIpQLScst5APT9pRyp0yFbbGxsOwuyrqdwGBSIjAv8-3Jdg7IrFmiw/viewform?embedded=true"
        width="640"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
