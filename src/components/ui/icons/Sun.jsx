export default function Sun({ ...args }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...args}>
      <path d="M12 1.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75z" />
      <path
        clipRule="evenodd"
        d="M6.25 12a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z"
        fillRule="evenodd"
      />
      <path d="M5.46 4.399a.75.75 0 00-1.061 1.06l.707.707a.75.75 0 101.06-1.06l-.707-.707zM22.75 12a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM19.601 5.46a.75.75 0 10-1.06-1.061l-.707.707a.75.75 0 101.06 1.06l.707-.707zM12 20.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM18.894 17.834a.75.75 0 10-1.06 1.06l.707.707a.75.75 0 101.06-1.06l-.707-.707zM3.75 12a.75.75 0 01-.75.75H2a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM6.166 18.894a.75.75 0 00-1.06-1.06l-.707.707a.75.75 0 001.06 1.06l.707-.707z" />
    </svg>
  )
}
