import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[#0b0b0d] rounded-xxl p-10 text-slate-300 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="min-w-[220px]">
              <div className="text-white font-bold text-lg mb-2">Brandly</div>
              <div className="text-sm text-slate-400">Modern marketing for modern brands.</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              <div>
                <div className="font-semibold text-white mb-2">Solutions</div>
                <div className="text-sm">Brand</div>
                <div className="text-sm">Growth</div>
                <div className="text-sm">Content</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Company</div>
                <div className="text-sm">About</div>
                <div className="text-sm">Careers</div>
                <div className="text-sm">Team</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Resources</div>
                <div className="text-sm">Blog</div>
                <div className="text-sm">Guides</div>
                <div className="text-sm">Webinars</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Support</div>
                <div className="text-sm">Help Center</div>
                <div className="text-sm">Contact</div>
                <div className="text-sm">Privacy</div>
              </div>
            </div>

            <div className="md:text-right">
              <div className="mb-4">
                <button className="bg-primary text-white px-5 py-2 rounded-2xl">Book a Consultation</button>
              </div>
              <div className="flex items-center gap-3 justify-start md:justify-end">
                <span className="text-sm text-slate-400">Follow</span>
                <div className="flex gap-2">
                  <span className="w-8 h-8 bg-white/6 rounded-full flex items-center justify-center">in</span>
                  <span className="w-8 h-8 bg-white/6 rounded-full flex items-center justify-center">tw</span>
                  <span className="w-8 h-8 bg-white/6 rounded-full flex items-center justify-center">fb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-slate-400 mt-6">© {new Date().getFullYear()} Brandly. All rights reserved.</div>
      </div>
    </footer>
  )
}
