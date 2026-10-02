'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
 const [open, setOpen] = useState(false);
 const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
 ];
 return (
  <div className="w-full sticky top-0 z-50">
    <div className="bg-[#0e4d2e] text-white text-[11px] py-1.5 px-4 flex justify-between items-center">
      <div className="flex gap-3">
        <span>+255 624 123 456</span>
        <span className="hidden md:inline">info@idhaatulquran.or.tz</span>
        <span className="hidden sm:inline">Dar es Salaam</span>
      </div>
      <a href="https://wa.me/255624123456" className="bg-white/10 px-3 py-1 rounded-full text-[10px]">Chat on WhatsApp</a>
    </div>

    <div className="bg-white border-b shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[52px] h-[52px] md:w-[70px] md:h-[70px] rounded-full bg-white border-2 border-[#0e4d2e] flex items-center justify-center overflow-hidden p-1 shadow-sm">
            <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-black text-[12px] md:text-[16px] leading-none text-[#0e4d2e]">IDHAATUL QUR&apos;ANILKARIM</h1>
            <p className="text-[#b68c2a] text-[9px] md:text-[10px] font-bold">Est. 1980 - Magomeni Kagera</p>
            <div className="hidden md:flex gap-4 text-[11px] font-semibold mt-1 text-[#0e2e1f]">
              <span className="text-[#b68c2a] border-b-2 border-[#d4af37]">Home</span>
              <span>About</span>
              <span>Programs</span>
              <span>Admissions</span>
              <span>Gallery</span>
              <span>Donate</span>
              <span>Contact</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex flex-col gap-1.5">
            <a href="https://wa.me/255624123456" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[10px] font-bold px-4 py-1.5 rounded text-center">Chat on WhatsApp</a>
            <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[10px] font-bold px-4 py-1.5 rounded text-center">Apply Now</Link>
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden w-9 h-9 rounded-lg bg-[#0e4d2e] text-white grid place-items-center text-[18px] font-bold">
            {open? 'X' : '='}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 grid gap-1">
            {links.map((l) => (
              <Link key={l.name} href={l.href} onClick={()=>setOpen(false)} className="py-2.5 px-3 rounded-lg text-[13px] font-bold flex justify-between bg-gray-50 border">
                <span>{l.name}</span>
                <span className="opacity-30">&gt;</span>
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t">
              <a href="https://wa.me/255624123456" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[12px] font-bold py-2.5 rounded-full text-center">Chat on WhatsApp</a>
              <Link href="/admissions" onClick={()=>setOpen(false)} className="bg-[#0e4d2e] text-white text-[12px] font-bold py-2.5 rounded-full text-center">Apply Now</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
 )
}