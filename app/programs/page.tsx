import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Programs - IDHAATUL QUR'ANILKARIM | Magomeni, Kagera, Tanzania",
  description: "Hifz, Tajweed, Arabic, Fiqh programs in Magomeni, Kagera, Dar es Salaam, Tanzania. Est. 1980."
}

export default function ProgramsPage(){
  return (
    <div className="bg-[#FFFCF2] overflow-x-hidden">

      {/* HERO - NO HEADER HERE ANYMORE */}
      <section className="bg-[#fdf6e3] py-12 border-b">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-[#b68c2a] text-[10px] tracking-[0.3em] font-bold">MAGOMENI, KAGERA, DAR ES SALAAM, TANZANIA • EST. 1980 • MSD/MAD/1980/014</p>
          <h1 className="text-[32px] md:text-[44px] font-black mt-2 text-[#0e2e1f]">Our Islamic Programs</h1>
          <p className="text-[13px] opacity-70 max-w-[600px] mx-auto mt-3">Full-time Hifz, Tajweed, Arabic & Fiqh from Magomeni, Kagera. Separate classes for boys & girls.</p>
        </div>
      </section>

      {/* PROGRAMS GRID - MOBILE SWIPE */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-center text-[10px] opacity-50 md:hidden mb-3">← Swipe to see all programs →</p>
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 pb-4">
            {[
              {title:"Full Hifz Program", years:"3-4 Years", desc:"Complete memorization of Quran with Tajweed. Daily sabaq, sabaqi, manzil. Magomeni, Kagera.", color:"bg-[#0e4d2e]"},
              {title:"Tajweed & Qiraat", years:"1 Year", desc:"Perfect pronunciation, Makharij, Sifat. Ijazah track available. Boys & Girls separate.", color:"bg-[#b68c2a]"},
              {title:"Arabic & Fiqh", years:"2 Years", desc:"Arabic grammar, Sarf, Nahw, Fiqh, Aqeedah, Hadith. Foundation for Islamic scholarship.", color:"bg-[#0e4d2e]"},
              {title:"Weekend Madrasa", years:"Part-time", desc:"Saturday-Sunday for school children. Quran reading, Duas, Adab. At Kagera.", color:"bg-[#b68c2a]"},
              {title:"Girls Special Hifz", years:"3-4 Years", desc:"Female teachers only, CCTV, separate entrance, safe courtyard. Magomeni girls campus.", color:"bg-[#0e4d2e]"},
              {title:"Tahfeez Revision", years:"6 Months", desc:"For Huffaz who forgot. Strong revision plan with daily monitoring via WhatsApp to parents.", color:"bg-[#0e4d2e]"},
            ].map((p,i)=>(
              <div key={i} className="min-w-[85%] md:min-w-0 snap-center bg-white border rounded-[20px] p-5 shadow-sm hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition">
                <div className={`${p.color} text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit`}>{p.years}</div>
                <h3 className="font-black text-[16px] mt-3 text-[#0e2e1f]">{p.title}</h3>
                <p className="text-[12px] opacity-60 mt-2 leading-5">{p.desc}</p>
                <div className="mt-4 text-[10px] font-bold">✓ Magomeni, Kagera • ✓ Boarding • ✓ WhatsApp Reports</div>
                <Link href="/admissions" className="inline-block mt-4 bg-[#fdf6e3] border text-[#0e4d2e] text-[11px] font-bold px-4 py-2 rounded-full hover:bg-[#0e4d2e] hover:text-white transition">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS IMAGES class1-4 */}
      <section className="bg-[#fdf6e3] py-8 border-y">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-black text-center text-[20px]">Our Classes in Action - Magomeni, Kagera</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="rounded-xl overflow-hidden border bg-white hover:shadow-lg active:scale-[0.98] transition"><div className="relative h-36"><Image src="/class1.jpg" alt="class1" fill className="object-cover" /></div><p className="text-[11px] font-bold p-2">Class 1 - Morning Hifz</p></div>
            <div className="rounded-xl overflow-hidden border bg-white hover:shadow-lg active:scale-[0.98] transition"><div className="relative h-36"><Image src="/class2.jpg" alt="class2" fill className="object-cover" /></div><p className="text-[11px] font-bold p-2">Class 2 - Tajweed</p></div>
            <div className="rounded-xl overflow-hidden border bg-white hover:shadow-lg active:scale-[0.98] transition"><div className="relative h-36"><Image src="/class3.jpg" alt="class3" fill className="object-cover" /></div><p className="text-[11px] font-bold p-2">Class 3 - Fiqh</p></div>
            <div className="rounded-xl overflow-hidden border bg-white hover:shadow-lg active:scale-[0.98] transition"><div className="relative h-36"><Image src="/class4.jpg" alt="class4" fill className="object-cover" /></div><p className="text-[11px] font-bold p-2">Class 4 - Revision</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e2e1f] text-white py-10 text-center">
        <h2 className="font-black text-[22px] px-4">Ready to Join? Magomeni, Kagera Admissions Open 2026/2027</h2>
        <p className="text-[12px] opacity-70 mt-2 px-4">+255 717 001 199 / +255 719 567 119 • Magomeni, Near Kagera Bus Stand, Dar es Salaam, Tanzania</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 px-4">
          <Link href="/admissions" className="bg-[#d4af37] text-black font-black text-[13px] px-8 py-3 rounded-full active:scale-95 transition">Apply Online</Link>
          <a href="https://wa.me/255717001199" className="bg-[#25D366] text-white font-bold text-[13px] px-8 py-3 rounded-full active:scale-95 transition">WhatsApp Us</a>
        </div>
      </section>
    </div>
  )
}