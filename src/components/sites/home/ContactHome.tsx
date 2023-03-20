import LinkContactHome from './LinkContactHome'

const ContactHome = () => {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-base font-semibold text-slate-800 dark:text-slate-50 sm:text-lg">
        Contact
      </p>
      <LinkContactHome
        aria="Link to my LinkedIn profile"
        content="Valentín Lunaklick"
        name="LinkedIn"
        url="https://www.linkedin.com/in/vlunaklick/"
      />

      <LinkContactHome
        aria="Link to my Github profile"
        content="vlunaklick"
        name="Github"
        url="https://github.com/vlunaklick"
      />

      <LinkContactHome
        aria="Link to download my resume"
        content="Click to download"
        download="valentin-lunaklick-resume"
        name="Resume"
        url="valentinlunaklick.pdf"
      />
    </section>
  )
}

export default ContactHome
