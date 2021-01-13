import React from "react";
import IconDribbble from "./IconDribbble";

import IconGithub from "./IconGithub";
import IconLinkedin from "./IconLinkedin";
import IconArrow from "./IconArrow";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGithub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Dribbble":
      return <IconDribbble />;
    case "Arrow":
      return <IconArrow />;
    default:
      return null;
  }
};

export default Icon;
