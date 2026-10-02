import Link from 'next/link';
export default function Header(){
 return (
  <div className="w-full sticky top-0 z-50">
    <div className="bg-[#0e4d2e] text-white text-[11px] py-1.5 px-4 flex justify-between">
      <div className="flex gap-4"><span>+255 624 123 456</span><span className="hidden md:inline">info@idhaatulquran.or.tz</span><span>Dar es Salaam</span></div>
      <a href="https://wa.me/255624123456" className="bg-white/10 px-3 py-0.5 rounded-full">Chat on WhatsApp</a>
    </div>
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[62px] h-[62px] md:w-[72px] md:h-[72px] rounded-full bg-white border-2 border-[#0e4d2e] flex items-center justify-center overflow-hidden shadow-sm p-1">
            <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-black text-[13px] md:text-[16px] leading-none text-[#0e4d2e]">IDHAATUL QUR&apos;ANILKARIM</h1>
            <p className="text-[#b68c2a] text-[10px] font-bold">Est. 1980 • Magomeni Kagera</p>
            <div className="hidden md:flex gap-4 text-[11px] font-semibold mt-1"><span className="text-[#b68c2a] border-b-2 border-[#d4af37]">Home</span><span>About</span><span>Programs</span><span>Admissions</span><span>Gallery</span><span>Donate</span><span>Contact</span></div>
          </div>
        </Link>
        <div className="flex flex-col gap-1.5">
          <a href="https://wa.me/255624123456" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[10px] font-bold px-4 py-1.5 rounded text-center">Chat on WhatsApp</a>
          <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[10px] font-bold px-4 py-1.5 rounded text-center">Apply Now</Link>
        </div>
      </div>
    </div>
  </div>
 )
}