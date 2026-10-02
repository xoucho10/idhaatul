export default function Footer(){
 return (
  <div className="bg-[#0e2e1f] text-white">
    <div className="max-w-[1200px] mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white border p-1"><img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-contain" /></div>
          <p className="font-black text-[12px] leading-tight">IDHAATUL<br/>QUR&apos;ANILKARIM<br/><span className="text-[#d4af37] text-[10px]">Since 1980 - Magomeni</span></p>
        </div>
        <p className="text-[11px] opacity-60 mt-3 leading-5">Nurturing Huffaz & Islamic Scholars in Magomeni Kagera, Dar es Salaam.</p>
      </div>
      <div className="text-[11px] leading-6"><h4 className="text-[#d4af37] font-bold mb-2">Contact</h4>+255707000000<br/>info@idhaatulquran.or.tz<br/>Magomeni Kagera</div>
      <div className="text-[11px] leading-6"><h4 className="text-[#d4af37] font-bold mb-2">Quick Links</h4>Admissions<br/>Programs<br/>Gallery<br/>Donate</div>
      <div className="text-[11px] leading-6"><h4 className="text-[#d4af37] font-bold mb-2">Uniforms</h4>Boys: Light Blue Kanzu<br/>Girls: Brown Buibui<br/>Boarding Available</div>
    </div>
    <div className="bg-[#0a2e1f] text-center text-[10px] py-3 opacity-60">© 2024 IDHAATUL QUR&apos;ANILKARIM - Magomeni Kagera, Dar es Salaam</div>
  </div>
 )
}
