import React, { useState } from 'react'
import Button from '../Button/Button'
import Link from 'next/link'

const Nav = () => {

  const [menuOpen, setOpen] = useState(false)

  const menuHandler = () => {
    console.log('changing menu state to: ', menuOpen)
    setOpen(!menuOpen)
  }

  return (
    <div className="border-b-4 border-orange-600">
      <header className="max-w-screen-lg mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <span className="text-4xl h-8 text-orange-600 tracking-wider">easytheme</span>
        </div>

          {/*  Navigation  */}
          <div className="md:block hidden pt-4">
            <span className="text-disabled text-base mx-6">
              <span className="mx-4 font-bold">
                  <Link href="#">
                    <a href="#" className="hover:text-orange-800">
                      About
                    </a>
                  </Link>
                </span>
              <span className="mx-4 font-bold">
                <Link href="#">
                    <a href="#" className="hover:text-orange-800">
                    My Templates
                  </a>
                </Link>
              </span>
            </span>
            <Button secondary small rounded='lg' hoverColor='text-orange-200'>
              Login
            </Button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden" onClick={menuHandler}>
            <button type="button" className="block text-gray-500 hover:text-orange-800 focus:text-orange-800 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>

      </header>
    </div>
  )
}

export default Nav
