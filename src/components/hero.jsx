import useScroll from "../hooks/useScroll"

const Hero = () => {
  const {setScroll} = useScroll()
  return (
    <section id="hero" className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20"
    data-aos="zoom-in-down" data-aos-duration="1000">
    <div className="container z-10 px-4 mx-auto">
      <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl"><span
          className="text-transparent bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text">Live-Stream</span> to multiple platforms easily!
      </h2>
      <p className="mb-8 text-sm leading-relaxed md:text-base lg:text-lg "><b>MultiLIVE,</b> platform is a leading platform that enables you to broadcast live with more than one video source simultaneously. Enjoy the convenience of streaming pre-recorded content with <b>MultiLIVE!</b>
      </p>
      <div className="flex justify-center">
        <button type={'button'} onClick={() => setScroll('about')}
          className="transition duration-200 inline-block py-2 px-6 rounded-lg shadow ease-out font-bold bg-yellow-400 !text-noir hover:bg-yellow-400 ">Learn more</button>
      </div>
    </div>
  </section>
  )
}

export default Hero