import LinkContactHome from './LinkContactHome'

const ContactHome = () => {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-sm font-medium text-slate-800 dark:text-slate-50 sm:text-base">
        Contact
      </p>
      <LinkContactHome
        name="LinkedIn"
        url="https://www.linkedin.com/in/vlunaklick/"
        content="Valentín Lunaklick"
        aria="Link to my LinkedIn profile"
      />

      <LinkContactHome
        name="Github"
        url="https://github.com/vlunaklick"
        content="vlunaklick"
        aria="Link to my Github profile"
      />

      <LinkContactHome
        name="Resume"
        url="valentinlunaklick.pdf"
        download="valentin-lunaklick-resume"
        content="Click to download"
        aria="Link to download my resume"
      />
    </section>
  )
}

export default ContactHome
