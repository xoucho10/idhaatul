export default function Footer(){
 return (
  <div className="bg-[#0e2e1f] text-white">
    <div className="max-w-[1200px] mx-auto px-4 py-6 grid md:grid-cols-4 gap-6">
      <div>
        <p className="font-black text-[12px]">IDHAATUL<br/>Nurturing Huffaz &<br/>Islamic Scholars<br/>since 1980</p>
        <div className="flex gap-2 mt-3 text-[10px]"><span className="w-5 h-5 bg-[#d4af37] rounded-full grid place-items-center text-[#0e2e1f]">f</span><span className="w-5 h-5 bg-[#d4af37] rounded-full grid place-items-center text-[#0e2e1f]">i</span><span className="w-5 h-5 bg-[#d4af37] rounded-full grid place-items-center text-[#0e2e1f]">y</span><span className="w-5 h-5 bg-[#d4af37] rounded-full grid place-items-center text-[#0e2e1f]">w</span></div>
      </div>
      <div>
        <h4 className="text-[#d4af37] text-[12px] font-bold mb-2">Get In Touch</h4>
        <div className="space-y-2">
          <input placeholder="Full Name" className="w-full p-1.5 rounded text-black text-[10px]" />
          <input placeholder="Phone / WhatsApp" className="w-full p-1.5 rounded text-black text-[10px]" />
          <input placeholder="Email" className="w-full p-1.5 rounded text-black text-[10px]" />
          <textarea placeholder="How can we help you..." className="w-full p-1.5 rounded text-black text-[10px]" rows={2}></textarea>
          <div className="flex gap-2"><button className="bg-[#d4af37] text-[#0e2e1f] text-[9px] font-bold px-3 py-1.5 rounded">Send Message</button><button className="bg-[#25D366] text-white text-[9px] font-bold px-3 py-1.5 rounded">Chat on WhatsApp Now</button></div>
        </div>
      </div>
      <div className="text-[11px] leading-5">
        <h4 className="text-[#d4af37] text-[12px] font-bold mb-2">Quick Links</h4>
        <p>Student Portal<br/>Timetable<br/>Fee Structure<br/>Policies<br/>FAQ<br/>Download Forms</p>
        <h4 className="text-[#d4af37] text-[12px] font-bold mt-3">Contact</h4>
        <p className="text-[10px]">Phone: +25570000000<br/>Email: info@idhaatulquran.or.tz<br/>WhatsApp: +25570000000</p>
      </div>
      <div className="text-[11px] leading-5">
        <h4 className="text-[#d4af37] text-[12px] font-bold mb-2">Address</h4>
        <p className="text-[10px]">Magomeni Kagera, Dar es Salaam, Tanzania<br/>Near Kagera Bus Stand<br/>Mon-Fri: 7:30-12:30, 2-5 PM<br/>Sat: 8 AM - 5 PM<br/>Accessible by Dala Dala<br/>Magomeni Route</p>
        <div className="mt-2 h-16 bg-white rounded flex items-center justify-center text-black text-[9px]">Google Map - Magomeni Kagera</div>
      </div>
    </div>
    <div className="bg-[#0a4d2e] text-center text-[10px] py-2 opacity-70">© 2024 IDHAATUL QUR&apos;ANILKARIM, All Rights Reserved. | Privacy Policy | Terms | Developed with care for the community.</div>
  </div>
 )
}