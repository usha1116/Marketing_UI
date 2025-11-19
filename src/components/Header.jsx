import React from 'react'

const NavItem = ({children, href}) => (
  <a href={href} className="text-sm md:text-base font-semibold tracking-wide text-slate-700 hover:text-primary transition px-4 py-2 rounded-lg">{children}</a>
)

export default function Header(){
  return (
    <header className="bg-white header-blur sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-primary font-bold text-xl tracking-tight">Brandly</div>
          <nav className="hidden md:flex items-center">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#case-studies">Case Studies</NavItem>
            <NavItem href="#blog">Blog</NavItem>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href="#case-studies" className="hidden md:inline-block bg-primary text-white px-6 py-3 rounded-2xl hover:shadow-lg transition-all">Get Started</a>
        </div>
      </div>
    </header>
  )
}
