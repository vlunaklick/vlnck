import ContactLink from './ContactLink'

const Contact = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm sm:text-base dark:text-slate-50 text-slate-800">
        Contact
      </p>
      <ContactLink
        name="LinkedIn"
        url="https://www.linkedin.com/in/vlunaklick/"
        content="Valentín Lunaklick"
        aria="Link to my LinkedIn profile"
      />
      <ContactLink
        name="Github"
        url="https://github.com/vlunaklick"
        content="vlunaklick"
        aria="Link to my Github profile"
      />
      <ContactLink
        name="Resume"
        url="valentin-lunaklick-resume.pdf"
        download="valentin-lunaklick-resume"
        content="Click to download"
        aria="Link to download my resume"
      />
    </div>
  )
}

export default Contact
