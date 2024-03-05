
const Pricing = () => {
  return (
    <section id="pricing" className="flex flex-col items-center py-20 min-h-1/2">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold text-center" data-aos="zoom-in-down" data-aos-duration="1000">Choose our package according to your needs.</h2>
      <div className="flex flex-col items-center justify-between grid-cols-1 grid-rows-2 gap-4 md:grid md:grid-cols-2 md:grid-rows-1">
        <div
          className="flex flex-col w-full h-full gap-3 p-4 border rounded-lg shadow-lg bg-cloud-white text-noir border-second"
          data-aos="fade-in" data-aos-duration="2000">
          <span className="text-base text-noir">FREE</span>
          <span className="text-2xl font-semibold leading-relaxed">FREE</span>
          <p className="text-sm">Free of charge with a video duration limit of 10 minutes.
          </p>
          <a href="#"
            className="w-full px-6 py-2 mt-auto font-semibold text-center text-white rounded-lg bg-sky-500 hover:bg-yellow-500 hover:text-base">Try it Free Now</a>
        </div>

        <div className="flex flex-col w-full gap-3 p-4 rounded-lg shadow bg-sky-500 text-cloud-white" data-aos="fade-in"
          data-aos-duration="2000">
          <span className="text-base text-second">PREMIUM</span>
          <span className="text-2xl font-semibold leading-relaxed">PAID</span>
          <p>Pay according to the time limit ordered, with the following calculations:</p>
          <div className="flex flex-col justify-start gap-3">
            <div className="flex flex-row gap-2 text-sm">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </span>
              <span>The first 3 hours cost <b className="line-through">25.000/hour</b> <b>15.000/hour</b></span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
              <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg></span>
                <span>The next 3 hours cost <b>20.000/hour</b></span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
              <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg></span>
                <span>The next 3 hours cost <b>15.000/hour</b></span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
              <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg></span>
                <span>The next 3 hours cost <b>10.000/hour</b></span>
            </div>
            <div className="flex flex-row gap-2 text-sm">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </span>
              <span>The next 3 hours cost <b>7500/hour</b></span>
            </div>
          </div>
          <p className="text-sm">For example, if you plan to do live streaming for <b>24 hours non-stop</b> then the price is <b>(15,000 x 3) + (20,000 x 3) + (15,000 x 3) + (10,000 x 3) + (7,500 x 12) = 157,500</b>
          </p>
          <a href="#"
            className="w-full px-6 py-2 mt-auto text-base font-semibold text-center rounded-lg bg-slate-300 hover:bg-slate-400">Select Plan</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing