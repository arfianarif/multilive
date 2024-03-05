import { Fragment } from "react"

const Footer = () => {
  return (
    <Fragment>
      <a href="#hero" className="absolute z-20 flex flex-col items-center justify-center gap-2 bottom-6 right-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up size-7" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M18 11l-6 -6" />
          <path d="M6 11l6 -6" />
        </svg>
      </a>

      <footer className="py-10">
        <div className="container px-4 mx-auto">Portfolio based on real project</div>
      </footer>
    </Fragment>
  )
}

export default Footer