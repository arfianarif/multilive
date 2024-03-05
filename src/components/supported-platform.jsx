
const SupportedPlatform = () => {
  return (
    <section id="supported-platform" className="flex flex-col items-center py-20">
    <div className="container px-4 mx-auto" data-aos="zoom-in-down" data-aos-duration="1000">
      <h2 className="mb-8 text-3xl font-semibold text-center">Daftar media sosial yang didukung oleh MultiLIVE
      </h2>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-5">
        <li className="flex flex-col items-center justify-center gap-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-youtube size-12 hover:text-yellow-400" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </span>Youtube
        </li>
        <li className="flex flex-col items-center justify-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook size-12 hover:text-yellow-400" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg></span>
          Facebook
        </li>
        <li className="flex flex-col items-center justify-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram size-12 hover:text-yellow-400" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg></span>
          Instagram
        </li>
        <li className="flex flex-col items-center justify-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter size-12 hover:text-yellow-400" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg></span>
          Twitter
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        + Other platforms that support RTMP
      </div>
    </div>
  </section>
  )
}

export default SupportedPlatform