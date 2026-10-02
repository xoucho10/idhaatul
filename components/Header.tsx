'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
 const [open, setOpen] = useState(false);
 const waLink = 'https://wa.me/255707000000';
 return (
  <div className="w-full sticky top-0 z-[999]">
    <div className="bg-[#0e4d2e] text-white text-[11px] py-2 px-3 flex justify-between items-center">
      <span>+255707000000 | info@idhaatulquran.or.tz</span>
      <a href={waLink} target="_blank" className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">Chat on WhatsApp</a>
    </div>
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-[1200px] mx-auto px-3 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#0e4d2e] flex items-center justify-center overflow-hidden p-1">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-black text-[11px] leading-[11px] text-[#0e4d2e]">IDHAATUL<br/>QUR&apos;ANILKARIM</h1>
            <p className="text-[9px] font-bold">Est. 1980</p>
          </div>
        </Link>
        <div className="hidden lg:flex gap-5 text-[12px] font-bold">
          <span className="text-[#b68c2a] border-b-2 border-[#d4af37]">Home</span>
          <span>About</span><span>Programs</span><span>Admissions</span><span>Gallery</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex flex-col gap-1">
            <a href={waLink} target="_blank" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[10px] font-bold px-3 py-1.5 rounded text-center">Chat on WhatsApp</a>
            <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[10px] font-bold px-3 py-1.5 rounded text-center">Apply Now</Link>
          </div>
          <button type="button" onClick={()=>setOpen(!open)} className="lg:hidden w-[44px] h-[44px] bg-[#0e4d2e] text-white rounded-lg flex items-center justify-center text-[24px] font-black">
            {open? 'X' : 'M'}
          </button>
        </div>
      </div>
    </div>
    {open && (
      <div className="lg:hidden fixed top-[88px] left-0 w-full h-[calc(100vh-88px)] bg-black/40 z-[998]" onClick={()=>setOpen(false)}>
        <div className="bg-white w-full shadow-2xl border-t-2 border-[#0e4d2e]" onClick={e=>e.stopPropagation()}>
          <div className="p-4 grid gap-2">
            <Link href="/" onClick={()=>setOpen(false)} className="bg-[#fdf6e3] border border-[#d4af37] font-black py-3.5 px-4 rounded-xl">Home</Link>
            <Link href="/about" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3.5 px-4 rounded-xl border">About Us</Link>
            <Link href="/programs" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3.5 px-4 rounded-xl border">Programs</Link>
            <Link href="/admissions" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3.5 px-4 rounded-xl border">Admissions</Link>
            <Link href="/gallery" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3.5 px-4 rounded-xl border">Gallery</Link>
            <Link href="/contact" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3.5 px-4 rounded-xl border">Contact</Link>
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t">
              <a href={waLink} target="_blank" className="bg-[#fde6a8] border-2 border-[#d4af37] font-black py-3.5 rounded-xl text-center text-[14px]">WhatsApp</a>
              <Link href="/admissions" onClick={()=>setOpen(false)} className="bg-[#0e4d2e] text-white font-black py-3.5 rounded-xl text-center text-[14px]">Apply Now</Link>
            </div>
            <p className="text-center text-[11px] mt-2 font-bold text-[#0e4d2e]">+255707000000</p>
          </div>
        </div>
      </div>
    )}
  </div>
 )
}