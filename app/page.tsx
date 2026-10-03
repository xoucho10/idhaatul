"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home(){
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setSlide(s=> (s+1)%4 ), 3500);
    return ()=> clearInterval(t);
  },[]);

  return (
  <div className="bg-[#FFFCF2] overflow-x-hidden">

    {/* HERO - LOGO 62PX - NOW /logo.png - MOBILE DYNAMIC */}
    <section className="bg-[#fdf6e3] relative border-b overflow-hidden">
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#0e4d2e] via-[#d4af37] to-[#0e4d2e]"></div>
      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-[#b68c2a] text-[10px] tracking-[0.2em] font-bold mb-3">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ • MAGOMENI, KAGERA, DAR ES SALAAM, TANZANIA</p>
          <h1 className="text-[32px] md:text-[42px] font-black leading-[1.05] text-[#0e2e1f]">Nurturing Huffaz &<br/>Islamic Scholars<br/><span className="text-[#0e4d2e]">Since 1980</span></h1>
          <p className="text-[12px] leading-6 mt-3 opacity-70 max-w-[480px]">A trusted Madrasa in Magomeni, Kagera, Dar es Salaam, Tanzania dedicated to memorizing the Qur&apos;an, Islamic studies, and character building for boys & girls. Join our community rooted in faith, knowledge, and excellence since 1980.</p>

          {/* MOBILE LOGO - WAS HIDDEN, NOW VISIBLE */}
          <div className="md:hidden flex items-center gap-3 mt-4 bg-white border rounded-full px-3 py-2 w-fit shadow-sm active:scale-95 transition">
            <div className="w-[40px] h-[40px] rounded-full border border-[#0e4d2e] p-[2px] overflow-hidden"><Image src="/logo.png" alt="Logo" width={40} height={40} className="w-full h-full object-contain rounded-full" /></div>
            <div><p className="text-[10px] font-bold leading-none">IDHAATUL QUR&apos;AN MAGOMENI</p><p className="text-[8px] opacity-60">MAGOMENI, KAGERA • 62px • 1980-014</p></div>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[11px] font-bold px-5 py-2.5 rounded-full active:scale-95 hover:scale-105 transition-transform">Apply Now - Admissions Open 2024/2025</Link>
            <Link href="/donate" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[11px] font-bold px-5 py-2.5 rounded-full active:scale-95 hover:bg-[#f5d88c] transition">Donate Now</Link>
            <Link href="/about" className="bg-white border text-[#0e4d2e] text-[11px] font-bold px-5 py-2.5 rounded-full active:scale-95 hover:shadow transition">Learn More</Link>
          </div>
          <div className="flex gap-5 mt-6 border-t border-black/5 pt-4">
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">44+</p><p className="text-[9px] opacity-60">Years of Service</p></div></div>
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">400+</p><p className="text-[9px] opacity-60">Graduated Huffaz</p></div></div>
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">Separate</p><p className="text-[9px] opacity-60">Boys & Girls Classes</p></div></div>
          </div>
        </div>
        <div className="text-center hidden md:block">
          <div className="mx-auto w-[62px] h-[62px] bg-white rounded-full border-2 border-[#0e4d2e] p-[2px] shadow-lg overflow-hidden hover:rotate-6 hover:scale-110 transition-all duration-500">
            <Image src="/logo.png" alt="IDHAATUL QUR'ANILKARIM Logo 62px" width={62} height={62} className="w-full h-full object-contain rounded-full" />
          </div>
          <p className="text-[10px] font-bold mt-2">IDHAATUL QUR&apos;AN MAGOMENI</p>
          <p className="text-[9px] opacity-60">MAGOMENI, KAGERA, TANZANIA • 1980-014</p>
          <p className="text-[11px] tracking-[0.3em] text-[#b68c2a] font-bold mt-3">HIFZ • TAJWEED • ARABIC • FIQH</p>
          <div className="mt-4 mx-auto max-w-[300px] bg-white border border-[#d4af37]/30 rounded-xl p-3 shadow-sm">
            <p className="text-[11px] font-bold text-[#0e4d2e]">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
            <p className="text-[10px] opacity-60 mt-1">The best among you are those who learn the Quran and teach it. [Bukhari]</p>
          </div>
        </div>
      </div>
    </section>

    {/* CLASSROOMS IN ACTION - NOW SWIPE ON MOBILE */}
    <section className="bg-white py-7">
      <h2 className="text-center font-black text-[20px] px-4">Our Classrooms in Action - Magomeni, Kagera</h2>
      <p className="text-center text-[10px] opacity-50 md:hidden">← Swipe →</p>
      <div className="max-w-[1200px] mx-auto mt-5 flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-4">
        <div className="min-w-[85%] md:min-w-0 snap-center border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-xl active:scale-[0.98] transition-all duration-300 group"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Girls&apos; Classroom - Qur&apos;an Studies</p><div className="relative h-56 md:h-44 overflow-hidden"><Image src="/girls1.jpg" alt="Girls" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-700" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Dedicated girls class focused on Hifz and Tajweed studies, learning in a safe and supportive environment.</p></div>
        <div className="min-w-[85%] md:min-w-0 snap-center border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-xl active:scale-[0.98] transition-all duration-300 group"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Boys&apos; Classroom - Morning Lesson</p><div className="relative h-56 md:h-44 overflow-hidden"><Image src="/boys1.jpg" alt="Boys" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-700" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Boys actively engaged in Qur&apos;an memorization and Islamic lessons, guided by qualified teachers.</p></div>
        <div className="min-w-[85%] md:min-w-0 snap-center border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-xl active:scale-[0.98] transition-all duration-300 group"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Examination & Learning Session</p><div className="relative h-56 md:h-44 overflow-hidden"><Image src="/boys2.jpg" alt="Exam" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-700" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Regular assessments to track students&apos; progress in memorization and understanding of the Qur&apos;an.</p></div>
      </div>
    </section>

    {/* CLASSES - class1.jpg - class4.jpg - DYNAMIC TAP + AUTO SLIDE */}
    <section className="bg-[#fdf6e3] py-8 border-y">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-black text-[20px]">Our Classes - Magomeni, Kagera</h2>
        <p className="text-center text-[11px] opacity-60 mt-1">Tap to expand on phone • class1-4.jpg • Auto-slide</p>
        <div className="mt-6 flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {[
            {src:"/class1.jpg", tag:"Class 1 - Hifz", title:"Class 1 - Morning Hifz"},
            {src:"/class2.jpg", tag:"Class 2 - Tajweed", title:"Class 2 - Tajweed"},
            {src:"/class3.jpg", tag:"Class 3 - Fiqh", title:"Class 3 - Islamic Studies"},
            {src:"/class4.jpg", tag:"Class 4 - Revision", title:"Class 4 - Evening Revision"},
          ].map((c,i)=>(
            <div key={i} onClick={()=> setActive(active===i?null:i)} className={`min-w-[80%] md:min-w-0 snap-center group bg-white rounded-[20px] overflow-hidden border shadow-sm transition-all duration-300 cursor-pointer ${active===i?'ring-2 ring-[#0e4d2e] scale-[1.02]':'active:scale-[0.98] hover:shadow-xl hover:-translate-y-1'} ${slide===i?'ring-1 ring-[#d4af37]':''}`}>
              <div className="relative h-[220px] overflow-hidden"><Image src={c.src} alt={c.title} fill sizes="300px" className="object-cover group-hover:scale-110 group-active:scale-110 transition duration-700" /><div className="absolute top-3 left-3 bg-[#0e4d2e] text-white text-[9px] font-bold px-3 py-1 rounded-full">{c.tag}</div></div>
              <div className="p-3"><p className="font-bold text-[12px]">{c.title}</p><p className="text-[10px] opacity-60">Magomeni, Kagera • Tap for details</p><div className={`grid transition-all duration-300 ${active===i?'grid-rows-[1fr] mt-2':'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="text-[11px] leading-4">Live Hifz & Tajweed session, small groups, daily report on WhatsApp.</p></div></div></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3 md:hidden">{[0,1,2,3].map(i=><button key={i} onClick={()=>setSlide(i)} className={`h-2 rounded-full transition-all ${slide===i?'w-6 bg-[#0e4d2e]':'w-2 bg-black/20'}`} />)}</div>
      </div>
    </section>

    {/* UNIFORMS - TAP FEEDBACK ON MOBILE */}
    <section className="bg-[#fdf6e3] py-8 border-y">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-black text-[20px]">Our Student Uniforms</h2>
        <p className="text-center text-[11px] opacity-60 mt-1">Distinct, modest and dignified dress code reflecting Islamic identity - Magomeni, Kagera, Dar es Salaam, Tanzania</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-[380px] md:h-[480px] overflow-hidden"><Image src="/boys1.jpg" alt="Boys Uniform Full" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 group-active:scale-105 transition duration-700" /><div className="absolute top-3 left-3 bg-[#0e4d2e] text-white text-[10px] font-bold px-3 py-1 rounded-full">BOYS UNIFORM</div><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5"><h3 className="text-white font-black text-[18px]">Light Blue Kanzu + White Kofia</h3><p className="text-white/80 text-[12px] mt-1 leading-5">Clean light blue kanzu with white embroidered kofia. Symbol of purity and focus for Hifz students.</p></div></div>
            <div className="p-4 flex justify-between text-[10px] font-bold bg-white"><span>✓ Daily Wear</span><span>✓ Jumuah White</span><span>✓ Exam Uniform</span></div>
          </div>
          <div className="bg-white border rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-[380px] md:h-[480px] overflow-hidden"><Image src="/girls1.jpg" alt="Girls Uniform Full" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 group-active:scale-105 transition duration-700" /><div className="absolute top-3 left-3 bg-[#b68c2a] text-white text-[10px] font-bold px-3 py-1 rounded-full">GIRLS UNIFORM</div><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5"><h3 className="text-white font-black text-[18px]">Golden Brown Buibui + Hijab</h3><p className="text-white/80 text-[12px] mt-1 leading-5">Modest golden-brown buibui with matching hijab and floral kanga lining. Comfort for long Hifz sessions.</p></div></div>
            <div className="p-4 flex justify-between text-[10px] font-bold bg-white"><span>✓ Full Hijab</span><span>✓ Separate Entrance</span><span>✓ Female Teachers Only</span></div>
          </div>
        </div>
      </div>
    </section>

    {/* LIFE BEYOND CLASSROOM - SWIPE ON MOBILE */}
    <section className="bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-black text-[20px]">Life Beyond Classroom</h2>
        <p className="text-center text-[11px] opacity-60 mt-1">Tarbiya through play, sports and brotherhood - Magomeni grounds, Tanzania</p>
        <div className="mt-6 flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0">
          <div className="min-w-[80%] md:min-w-0 snap-center rounded-2xl overflow-hidden border hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 group"><div className="relative h-48 md:h-44 overflow-hidden"><Image src="/boys2.jpg" alt="Play" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-500" /><p className="absolute bottom-2 left-2 bg-[#0e4d2e] text-white text-[9px] px-2 py-1 rounded-full">Afternoon Break • Magomeni Field</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Students Playing Outside</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Supervised outdoor time after Asr. Football, running and Islamic anasheed. Builds teamwork and healthy body.</p></div></div>
          <div className="min-w-[80%] md:min-w-0 snap-center rounded-2xl overflow-hidden border hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 group"><div className="relative h-48 md:h-44 overflow-hidden"><Image src="/boys1.jpg" alt="Sports" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-500" /><p className="absolute bottom-2 left-2 bg-[#b68c2a] text-white text-[9px] px-2 py-1 rounded-full">Sports Day • Every Thursday</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Sports & Team Activities</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Weekly inter-class competitions. Discipline, leadership and Sunnah of physical fitness.</p></div></div>
          <div className="min-w-[80%] md:min-w-0 snap-center rounded-2xl overflow-hidden border hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 group"><div className="relative h-48 md:h-44 overflow-hidden"><Image src="/girls1.jpg" alt="Sisters Activity" fill sizes="400px" className="object-cover group-hover:scale-110 transition duration-500" /><p className="absolute bottom-2 left-2 bg-[#0e4d2e] text-white text-[9px] px-2 py-1 rounded-full">Girls&apos; Courtyard • Safe Space</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Sisters Outdoor Learning</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Separate safe courtyard for girls with female supervisors. Outdoor Tajweed circles and story time.</p></div></div>
        </div>
      </div>
    </section>

    {/* ABOUT + MISSION + 2 TEACHERS BOXES - MKOKO.JPG */}
    <section className="bg-[#fdf6e3] py-8 border-t">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-[1.4fr_1.1fr] gap-5">
        <div>
          <h3 className="font-black text-[16px] text-[#0e2e1f]">About IDHAATUL QUR&apos;ANILKARIM</h3>
          <p className="text-[10px] font-bold opacity-60">Established 1980 - 44 Years of Excellence - Magomeni, Kagera, Tanzania</p>
          <p className="text-[12px] leading-6 mt-3 opacity-80">Founded in 1980 in Magomeni, Kagera, Dar es Salaam, Tanzania, IDHAATUL QUR&apos;ANILKARIM is a registered madrasa committed to nurturing the next generation of Huffaz and Islamic scholars. Our institution combines traditional Qur&apos;anic education with modern learning methods, fostering discipline, moral character, and academic excellence. We provide separate learning environments for boys and girls, ensuring quality education rooted in Islamic values, community service, and lifelong learning.</p>
          <ul className="text-[12px] mt-4 space-y-2"><li>✓ Full Hifz Program: Complete memorization of the Holy Qur&apos;an</li><li>✓ Islamic Studies: Fiqh, Aqeedah, Hadith, and Arabic Language</li><li>✓ Quranic Recitation (Tajweed) Classes for all ages</li></ul>
          <div className="bg-[#fffaf0] border rounded-xl p-4 shadow-sm mt-5 hover:shadow-md transition"><h4 className="font-black text-[13px]">Our Mission & Vision</h4><p className="text-[11px] mt-2 leading-5">To produce Huffaz who are knowledgeable, pious, and beneficial to society.</p><p className="text-[11px] mt-2 leading-5 opacity-70">To be the leading center of Qur&apos;anic education in Tanzania, inspiring generations with the light of the Qur&apos;an from Magomeni, Kagera.</p><div className="bg-[#0e4d2e] text-white text-[10px] p-2.5 rounded mt-3 text-center">Registration No: MSD/MAD/1980/014 - Magomeni, Kagera, Tanzania</div></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border p-2 text-center shadow-sm h-fit hover:shadow-xl active:scale-95 hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-52 rounded-lg overflow-hidden"><Image src="/sheikh.jpg" alt="Ust Qasim Ally Mwenge" fill sizes="300px" className="object-cover group-hover:scale-110 transition duration-700" /></div>
            <p className="font-black text-[12px] mt-2">Ust Qasim Ally Mwenge</p>
            <p className="text-[10px] opacity-60">Senior Teacher</p>
            <p className="text-[9px] mt-1 bg-[#fde6a8] inline-block px-2 py-1 rounded-full font-bold">Magomeni, Kagera</p>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#0e4d2e] p-2 text-center shadow-md h-fit hover:shadow-xl active:scale-95 hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative h-52 rounded-lg overflow-hidden"><Image src="/mkoko.jpg" alt="Shekh Abdul Minna Mkoko" fill sizes="300px" className="object-cover group-hover:scale-110 transition duration-700" /></div>
            <p className="font-black text-[12px] mt-2 text-[#0e4d2e]">Shekh Abdul Minna Mkoko</p>
            <p className="text-[10px] font-bold opacity-80">Co-Teacher</p>
            <p className="text-[9px] mt-1 bg-[#0e4d2e] text-white inline-block px-2 py-1 rounded-full font-bold">Magomeni, Kagera, TZ</p>
            <p className="text-[9px] mt-2 leading-4 opacity-60">Fiqh & Tajweed specialist serving since 1980 community.</p>
          </div>
        </div>
      </div>
    </section>

    {/* NEWS - SWIPE ON MOBILE */}
    <section className="bg-[#0e2e1f] text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center"><h2 className="font-black text-[18px]">Latest News & Updates • Magomeni Kagera, Tanzania</h2><Link href="/news" className="text-[#d4af37] text-[11px] font-bold border border-[#d4af37]/30 px-4 py-1.5 rounded-full hover:bg-[#d4af37] hover:text-black transition">View All News</Link></div>
        <div className="mt-6 flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0">
          <div className="min-w-[85%] md:min-w-0 snap-center bg-white text-black rounded-xl p-5 border-l-4 border-[#d4af37] active:scale-[0.98] hover:-translate-y-1 transition"><p className="text-[9px] bg-[#fde6a8] inline-block px-2 py-1 rounded font-bold">20 Nov 2024 • Graduation</p><h4 className="font-bold text-[13px] mt-2">2024 Hifz Graduation - 27 New Huffaz</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Alhamdulillah 27 students completed Hifz in Magomeni, Kagera. Ceremony attended by parents from Dar es Salaam, Tanzania.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
          <div className="min-w-[85%] md:min-w-0 snap-center bg-white text-black rounded-xl p-5 border-l-4 border-[#0e4d2e] active:scale-[0.98] hover:-translate-y-1 transition"><p className="text-[9px] bg-[#e8f5e9] inline-block px-2 py-1 rounded font-bold">15 Nov 2024 • Construction</p><h4 className="font-bold text-[13px] mt-2">New Boarding Block for Boys Opened</h4><p className="text-[11px] opacity-60 mt-2 leading-5">New 40-bed boarding block with solar lights and clean water near Kagera, Magomeni, Tanzania.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
          <div className="min-w-[85%] md:min-w-0 snap-center bg-white text-black rounded-xl p-5 border-l-4 border-[#b68c2a] active:scale-[0.98] hover:-translate-y-1 transition"><p className="text-[9px] bg-[#fff3e0] inline-block px-2 py-1 rounded font-bold">02 Nov 2024 • Competition</p><h4 className="font-bold text-[13px] mt-2">Qur&apos;an Competition - Dar Region Winner</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Our student Yusuf Ahmed won 1st place in regional Tajweed competition, Tanzania.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
        </div>
      </div>
    </section>

    {/* TRUST + CTA + FLOATING */}
    <section className="bg-[#fdf6e3] py-6 border-t pb-24 md:pb-6">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-5 hover:shadow-md active:scale-[0.98] transition"><h4 className="font-black text-[13px]">Why Parents Trust Magomeni</h4><ul className="text-[11px] mt-3 space-y-2 leading-5"><li>✓ Separate classes & entrances for boys & girls</li><li>✓ CCTV & female teachers for girls section</li><li>✓ Daily report on WhatsApp to parents</li><li>✓ Halal meals, clean water, Dala Dala access at Kagera</li></ul></div>
        <div className="bg-[#0e4d2e] text-white rounded-xl p-5 text-center hover:scale-[1.02] active:scale-[0.98] transition"><p className="text-[#d4af37] text-[10px] font-bold">ADMISSIONS 2024/2025 • TANZANIA</p><h4 className="font-black text-[16px] mt-1">Limited Boarding Seats</h4><p className="text-[11px] opacity-70 mt-1">Magomeni, Kagera, Dar es Salaam, Tanzania</p><Link href="/admissions" className="inline-block bg-[#d4af37] text-[#0e2e1f] text-[12px] font-black px-8 py-2.5 rounded-full mt-4 hover:scale-105 active:scale-95 transition">Apply Now</Link><p className="text-[10px] mt-3">+255 717 001 199 / +255 719 567 119</p></div>
        <div className="bg-white rounded-xl border p-5 hover:shadow-md active:scale-[0.98] transition"><h4 className="font-black text-[13px]">Visit Our Madrasa - Tanzania</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Magomeni, Kagera, Near Kagera Bus Stand, Dar es Salaam, Tanzania.<br/>Mon-Fri 7:30-12:30, 2-5 PM<br/>Sat 8 AM - 12 PM<br/>+255 717 001 199 / +255 719 567 119</p><div className="flex gap-2 mt-3"><a href="https://wa.me/255717001199" className="inline-block bg-[#25D366] text-white text-[10px] font-bold px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition">WhatsApp 1</a><a href="https://wa.me/255719567119" className="inline-block bg-[#0e4d2e] text-white text-[10px] font-bold px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition">WhatsApp 2</a></div></div>
      </div>
    </section>

    {/* FLOATING WHATSAPP - MAKES PHONE NOT STATIC */}
    <div className="fixed bottom-4 left-4 right-4 md:hidden flex gap-2 z-50">
      <a href="https://wa.me/255717001199" className="flex-1 bg-[#25D366] text-white text-center py-3.5 rounded-full font-black text-[13px] shadow-[0_8px_20px_rgba(0,0,0,0.3)] active:scale-95 transition">WhatsApp Magomeni</a>
      <a href="tel:+255717001199" className="bg-[#0e4d2e] text-white px-6 py-3.5 rounded-full font-bold text-[13px] shadow-[0_8px_20px_rgba(0,0,0,0.3)] active:scale-95 transition">Call</a>
    </div>

  </div>
 )
}