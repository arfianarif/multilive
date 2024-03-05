
const Benefits = () => {
  return (
    <section id="benefits" className=" py-20 min-h-[calc(100dvh-20dvh)] flex flex-col items-center">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl" data-aos="zoom-in-down"
        data-aos-duration="1000">Benefits</h2>
      <div className="grid grid-flow-col grid-cols-1 grid-rows-5 gap-4 md:grid-rows-3 md:grid-cols-2">
        <div className="w-full h-full p-3 border rounded-lg shadow-lg border-noir group" data-aos="zoom-in-down"
          data-aos-duration="1000">
          <h3 className="text-lg font-semibold duration-300 ease-in group-hover:text-yellow-400">Save time and costs</h3>
          <p className="text-sm text-muted">With MultiLIVE platform, you can save time and costs.</p>
        </div>
        <div className="w-full h-full p-3 border rounded-lg shadow-lg border-noir group" data-aos="zoom-in-down"
          data-aos-duration="1000">
          <h3 className="text-lg font-semibold duration-300 ease-in group-hover:text-yellow-400">Multi Live Streaming to many social media simultaneously</h3>
          <p className="text-sm text-muted">Multi live streaming allows you to reach multiple social media platforms at once, expanding your audience reach quickly and efficiently.</p>
        </div>
        <div className="w-full h-full p-3 border rounded-lg shadow-lg border-noir group" data-aos="zoom-in-down"
          data-aos-duration="1000">
          <h3 className="text-lg font-semibold duration-300 ease-in group-hover:text-yellow-400">Live Streaming Scheduling
          </h3>
          <p className="text-sm text-muted">
          Scheduling live streams allows you to plan timely content, increase audience engagement, and efficiently maximize the impact of your message.</p>
        </div>
        <div className="w-full h-full p-3 border rounded-lg shadow-lg border-noir group" data-aos="zoom-in-down"
          data-aos-duration="1000">
          <h3 className="text-lg font-semibold duration-300 ease-in group-hover:text-yellow-400">Videos can be Live Streamed 24 hours non-stop</h3>
          <p className="text-sm text-muted">With 24-hour non-stop live streaming, you can connect with your audience anytime and anywhere. Build a loyal community and grow your online presence without time constraints.</p>
        </div>
        <div className="w-full h-full p-3 border rounded-lg shadow-lg border-noir group" data-aos="zoom-in-down"
          data-aos-duration="1000">
          <h3 className="text-lg font-semibold duration-300 ease-in group-hover:text-yellow-400">Fast and stable bandwidth</h3>
          <p className="text-sm text-muted">Fast and stable bandwidth ensures smooth streaming without interruption.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Benefits