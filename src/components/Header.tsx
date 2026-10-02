import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
 return (
  <div className="w-full">
    <div className="bg-[#0e4d2e] text-white text-[11px] md:text-[12px] py-2 px-4 flex flex-wrap justify-center md:justify-between gap-2 md:gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <span className="flex items-center gap-1.5"><span className="bg-[#d4af37] rounded-full w-5 h-5 grid place-items-center text-[#0e4d2e]">C</span> +25570000000</span>
        <span className="flex items-center gap-1.5"><span className="bg-[#d4af37] rounded-full w-5 h-5 grid place-items-center text-[#0e4d2e]">M</span> info@idhaatulquran.or.tz</span>
        <span className="flex items-center gap-1.5"><span className="bg-[#d4af37] rounded-full w-5 h-5 grid place-items-center text-[#0e4d2e]">L</span> Dar es Salaam, Tanzania</span>
      </div>
      <a href="https://wa.me/25570000000" className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full"><span className="bg-[#25D366] w-4 h-4 rounded-full grid place-items-center">W</span> Chat on WhatsApp</a>
    </div>

    <div className="bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 md:w-20 md:h-20"><Image src="/logo.png" alt="Logo" fill className="object-contain" /></div>
          <div>
            <h1 className="font-black text-[14px] md:text-[20px] leading-none tracking-tight text-[#0e4d2e]">IDHAATUL QUR&apos;ANILKARIM</h1>
            <p className="text-[#c49a2c] text-[10px] md:text-xs font-bold">Est. 1980</p>
            <div className="hidden md:flex gap-4 text-[12px] font-semibold mt-2 text-[#0e4d2e]">
              <Link href="/" className="border-b-2 border-[#d4af37]">Home</Link><Link href="/about">About</Link><Link href="/academics">Programs</Link><Link href="/admissions">Admissions</Link><Link href="/gallery">Gallery</Link><Link href="/donate">Donate</Link><Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://wa.me/25570000000" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[11px] font-bold px-4 py-1.5 rounded text-center">Chat on WhatsApp</a>
          <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[11px] font-bold px-4 py-1.5 rounded text-center">Apply Now</Link>
        </div>
      </div>
    </div>
  </div>
 )
}