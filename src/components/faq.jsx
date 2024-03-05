
const FAQ = () => {
  return (
    <section id="faq" className="flex flex-col items-center py-20 " data-aos="zoom-in-down" data-aos-duration="1000">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold text-center">Frequently asked questions</h2>
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col w-full gap-3 p-4 border rounded-lg shadow bg-cloud border-second text-noir"
          data-aos="fade-in" data-aos-duration="1000">
          <span className="text-xl font-semibold leading-relaxed text-noir">What is the video limit that can be uploaded?</span>
            <p>We apply a maximum video size limit of 50MB for the free version and 2GB for the paid version.
            </p>
        </div>
        <div className="flex flex-col w-full h-full gap-3 p-4 border rounded-lg shadow bg-cloud border-second text-noir"
          data-aos="fade-in" data-aos-duration="1000">
          <span className="text-xl font-semibold leading-relaxed text-noir">Is there a money back guarantee?</span>
            <p>{`We don't guarantee that, try it for free first before you use the paid one`}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FAQ