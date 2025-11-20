import React, { useState } from 'react'

const NavItem = ({children, href, onClick}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-sm md:text-base font-semibold tracking-wide text-slate-700 hover:text-primary transition px-4 py-2 rounded-lg block"
  >
    {children}
  </a>
)

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-white header-blur sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="text-primary font-bold text-lg sm:text-xl tracking-tight">Brandly</div>
          <nav className="hidden md:flex items-center">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#case-studies">Case Studies</NavItem>
            <NavItem href="#blog">Blog</NavItem>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex md:hidden relative w-10 h-10 items-center justify-center text-slate-800 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {!isMenuOpen ? (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          <a 
            href="#case-studies" 
            className="hidden md:inline-block bg-primary text-white px-5 md:px-6 py-2.5 md:py-3 rounded-2xl hover:shadow-lg transition-all text-sm md:text-base"
          >
            Get Started
          </a>
        </div>
      </div>
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            <NavItem href="#home" onClick={closeMenu}>Home</NavItem>
            <NavItem href="#about" onClick={closeMenu}>About</NavItem>
            <NavItem href="#services" onClick={closeMenu}>Services</NavItem>
            <NavItem href="#case-studies" onClick={closeMenu}>Case Studies</NavItem>
            <NavItem href="#blog" onClick={closeMenu}>Blog</NavItem>
            <a 
              href="#case-studies" 
              onClick={closeMenu}
              className="bg-primary text-white px-6 py-3 rounded-2xl hover:shadow-lg transition-all text-center mt-4 font-semibold"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
