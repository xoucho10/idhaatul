'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
 const [open, setOpen] = useState(false);
 return (
  <div className="w-full sticky top-0 z-[100]">
    {/* TOP GREEN BAR */}
    <div className="bg-[#0e4d2e] text-white text-[11px] py-1.5 px-3 flex flex-wrap gap-2 justify-between items-center">
      <div className="flex gap-3 flex-wrap">
        <span>+255 624 123 456</span>
        <span>info@idhaatulquran.or.tz</span>
        <span>Dar es Salaam, Tanzania</span>
      </div>
      <a href="https://wa.me/255624123456" className="bg-white/15 px-3 py-1 rounded-full text-[10px]">Chat on WhatsApp</a>
    </div>

    {/* MAIN WHITE HEADER */}
    <div className="bg-white border-b-2 border-[#d4af37]/20 shadow-sm relative">
      <div className="max-w-[1200px] mx-auto px-3 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#0e4d2e] flex items-center justify-center overflow-hidden p-1">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-black text-[12px] leading-[12px] text-[#0e4d2e]">IDHAATUL<br/>QUR&apos;ANILKARIM</h1>
            <p className="text-[#0e4d2e] text-[9px] font-bold">Est. 1980</p>
          </div>
        </Link>

        {/* DESKTOP NAV - HIDDEN ON PHONE */}
        <div className="hidden lg:flex gap-5 text-[12px] font-bold text-[#0e4d2e]">
          <span className="text-[#b68c2a] border-b-2 border-[#d4af37]">Home</span>
          <span>About</span><span>Programs</span><span>Admissions</span><span>Gallery</span><span>Donate</span><span>Contact</span>
        </div>

        <div className="flex items-center gap-2">
          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex flex-col gap-1">
            <a href="https://wa.me/255624123456" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[10px] font-bold px-3 py-1 rounded text-center">Chat on WhatsApp</a>
            <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[10px] font-bold px-3 py-1 rounded text-center">Apply Now</Link>
          </div>

          {/* HAMBURGER - ALWAYS VISIBLE ON PHONE - BIG GREEN BUTTON */}
          <button onClick={()=>setOpen(!open)} className="lg:hidden w-[42px] h-[42px] bg-[#0e4d2e] text-white rounded-lg flex items-center justify-center text-[22px] font-black shadow-md">
            {open? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t-2 border-[#0e4d2e] shadow-2xl z-50">
          <div className="p-4 grid gap-2">
            <Link href="/" onClick={()=>setOpen(false)} className="bg-[#fdf6e3] border border-[#d4af37] text-[#0e4d2e] font-black py-3 px-4 rounded-lg">Home</Link>
            <Link href="/about" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">About Us</Link>
            <Link href="/programs" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">Programs</Link>
            <Link href="/admissions" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">Admissions</Link>
            <Link href="/gallery" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">Gallery</Link>
            <Link href="/donate" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">Donate</Link>
            <Link href="/contact" onClick={()=>setOpen(false)} className="bg-gray-50 font-bold py-3 px-4 rounded-lg">Contact</Link>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t">
              <a href="https://wa.me/255624123456" className="bg-[#fde6a8] border-2 border-[#d4af37] text-[#0e4d2e] font-black py-3 rounded-xl text-center text-[13px]">WhatsApp</a>
              <Link href="/admissions" onClick={()=>setOpen(false)} className="bg-[#0e4d2e] text-white font-black py-3 rounded-xl text-center text-[13px]">Apply Now</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
 )
}