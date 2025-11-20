import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-[#0b0b0d] rounded-xxl p-6 sm:p-10 text-slate-300 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8">
            <div className="min-w-[220px]">
              <div className="text-white font-bold text-base sm:text-lg mb-2">Brandly</div>
              <div className="text-xs sm:text-sm text-slate-400">Modern marketing for modern brands.</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1">
              <div>
                <div className="font-semibold text-white mb-2 text-sm sm:text-base">Solutions</div>
                <div className="text-xs sm:text-sm">Brand</div>
                <div className="text-xs sm:text-sm">Growth</div>
                <div className="text-xs sm:text-sm">Content</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2 text-sm sm:text-base">Company</div>
                <div className="text-xs sm:text-sm">About</div>
                <div className="text-xs sm:text-sm">Careers</div>
                <div className="text-xs sm:text-sm">Team</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2 text-sm sm:text-base">Resources</div>
                <div className="text-xs sm:text-sm">Blog</div>
                <div className="text-xs sm:text-sm">Guides</div>
                <div className="text-xs sm:text-sm">Webinars</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2 text-sm sm:text-base">Support</div>
                <div className="text-xs sm:text-sm">Help Center</div>
                <div className="text-xs sm:text-sm">Contact</div>
                <div className="text-xs sm:text-sm">Privacy</div>
              </div>
            </div>

            <div className="md:text-right">
              <div className="mb-4">
                <button className="bg-primary text-white px-4 sm:px-5 py-2 rounded-2xl text-sm sm:text-base w-full sm:w-auto">
                  Book a Consultation
                </button>
              </div>
              <div className="flex items-center gap-3 justify-start md:justify-end">
                <span className="text-xs sm:text-sm text-slate-400">Follow</span>
                <div className="flex gap-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/6 rounded-full flex items-center justify-center text-xs sm:text-sm">in</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/6 rounded-full flex items-center justify-center text-xs sm:text-sm">tw</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/6 rounded-full flex items-center justify-center text-xs sm:text-sm">fb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs sm:text-sm text-slate-400 mt-4 sm:mt-6">
          © {new Date().getFullYear()} Brandly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


