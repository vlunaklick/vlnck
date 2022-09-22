import React from "react";
import ContactLink from "./ContactLink";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="px-4 flex flex-col gap-3">
      <p className="font-medium text-sm dark:text-slate-50 text-slate-800">Contact</p>
      <ContactLink
        name="LinkedIn"
        url="https://www.linkedin.com/in/vlunaklick/"
        content="Valentín Lunaklick"
      />
      <ContactLink
        name="Github"
        url="https://github.com/vlunaklick"
        content="vlunaklick"
      />
      <ContactLink
        name="Resume"
        url="valentin-lunaklick-resume.pdf"
        download="valentin-lunaklick-resume"
        content="Click to download"
      />
    </div>
  );
}

export default Contact;
