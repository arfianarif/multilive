/* eslint-disable no-unused-vars */
import { useState } from "react"
import { NAV_MENU } from "../config";
import useScroll from "../hooks/useScroll";

const Header = () => {
  const {setScroll} = useScroll()
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <header className='sticky top-0 z-20 flex flex-col items-center justify-center h-16 backdrop-blur'>
      <div className='container flex flex-row items-center justify-between px-2 mx-auto'>
        <div>
          <a href='#' className='text-2xl font-bold text-noir'>
            Multi<span className='text-yellow-400'>LIVE</span>
          </a>
        </div>
        <div className="flex flex-row justify-end gap-2">
        <div className='hidden md:block'>
          <ul className='absolute z-20 flex flex-col gap-4 p-2 duration-200 rounded-lg shadow-lg text-noir translate top-10 right-4 backdrop-blur bg-cloud-white md:relative md:top-0 md:right-0 md:flex-row md:bg-transparent md:rounded-none md:shadow-none '>
            {NAV_MENU?.map(menu => {
              return (
                <li key={menu?.id}>
                  <button
                    type="button"
                    onClick={() => setScroll(menu?.id)}
                    className='px-2 capitalize hover:text-yellow-400 hover:font-semibold'
                  >
                    {menu?.label}
                  </button>
                </li>
              )
            })}
            
          </ul>
        </div>
        <button
          type="button"
          className='flex flex-col items-center justify-center focus:outline-none md:hidden'
          onClick={handleMenu}
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-menu-2 size-7'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 6l16 0' />
              <path d='M4 12l16 0' />
              <path d='M4 18l16 0' />
            </svg>
          </span>
          <div className={`${showMenu ? 'block' : 'hidden'} transition-all duration-200 absolute flex flex-col gap-3 p-2 bg-white rounded-lg shadow-lg top-10 right-4 min-w-[6rem]`}>
            {NAV_MENU?.map(menu => {
              return (
                <button key={menu?.id} type={'button'} onClick={() => setScroll(menu?.id)}className='px-2 capitalize hover:text-yellow-400 hover:font-semibold'>{menu?.label}</button>
              )
            })}
          </div>
        </button>
        </div>
      </div>
    </header>
  )
}

export default Header
