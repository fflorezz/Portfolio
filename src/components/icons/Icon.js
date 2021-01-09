import React from "react";
import IconDribbble from "./IconDribbble";

import IconGithub from "./IconGithub";
import IconLinkedin from "./IconLinkedin";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGithub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Dribbble":
      return <IconDribbble />;
    default:
      return null;
  }
};

export default Icon;
