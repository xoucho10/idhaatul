import Image from 'next/image';
import Link from 'next/link';
export default function Home(){
 return (
  <div className="bg-[#FFFCF2]">

    {/* HERO */}
    <section className="bg-[#fdf6e3] relative border-b overflow-hidden">
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#0e4d2e] via-[#d4af37] to-[#0e4d2e]"></div>
      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-[#b68c2a] text-[10px] tracking-[0.2em] font-bold mb-3">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ • MAGOMENI KAGERA</p>
          <h1 className="text-[28px] md:text-[42px] font-black leading-[1.05] text-[#0e2e1f]">Nurturing Huffaz &<br/>Islamic Scholars<br/><span className="text-[#0e4d2e]">Since 1980</span></h1>
          <p className="text-[12px] leading-6 mt-3 opacity-70 max-w-[480px]">A trusted Madrasa dedicated to memorizing the Qur&apos;an, Islamic studies, and character building for boys & girls. Join our community rooted in faith, knowledge, and excellence since 1980.</p>
          <div className="flex flex-wrap gap-2 mt-5">
            <Link href="/admissions" className="bg-[#0e4d2e] text-white text-[11px] font-bold px-5 py-2.5 rounded-full">Apply Now - Admissions Open 2024/2025</Link>
            <Link href="/donate" className="bg-[#fde6a8] border border-[#d4af37] text-[#0e4d2e] text-[11px] font-bold px-5 py-2.5 rounded-full">Donate Now</Link>
            <Link href="/about" className="bg-white border text-[#0e4d2e] text-[11px] font-bold px-5 py-2.5 rounded-full">Learn More</Link>
          </div>
          <div className="flex gap-5 mt-6 border-t border-black/5 pt-4">
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">44+</p><p className="text-[9px] opacity-60">Years of Service</p></div></div>
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">400+</p><p className="text-[9px] opacity-60">Graduated Huffaz</p></div></div>
            <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#0e4d2e] text-[#d4af37] grid place-items-center text-[10px]">✦</div><div><p className="text-[12px] font-black leading-none">Separate</p><p className="text-[9px] opacity-60">Boys & Girls Classes</p></div></div>
          </div>
        </div>
        <div className="text-center hidden md:block">
          <div className="mx-auto w-[260px] h-[260px] bg-white rounded-full border-4 border-[#0e4d2e] p-3 shadow-lg">
            <img src="/logo.png" alt="Logo Large" className="w-full h-full object-contain" />
          </div>
          <p className="text-[11px] tracking-[0.3em] text-[#b68c2a] font-bold mt-3">HIFZ • TAJWEED • ARABIC • FIQH</p>
          <div className="mt-4 mx-auto max-w-[300px] bg-white border border-[#d4af37]/30 rounded-xl p-3 shadow-sm">
            <p className="text-[11px] font-bold text-[#0e4d2e]">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
            <p className="text-[10px] opacity-60 mt-1">The best among you are those who learn the Quran and teach it. [Bukhari]</p>
          </div>
        </div>
      </div>
    </section>

    {/* CLASSROOMS IN ACTION */}
    <section className="bg-white py-7">
      <h2 className="text-center font-black text-[20px]">Our Classrooms in Action</h2>
      <div className="max-w-[1200px] mx-auto px-4 mt-5 grid md:grid-cols-3 gap-4">
        <div className="border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-md transition"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Girls&apos; Classroom - Qur&apos;an Studies</p><div className="relative h-44"><Image src="/girls1.jpg" alt="Girls" fill className="object-cover" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Dedicated girls class focused on Hifz and Tajweed studies, learning in a safe and supportive environment.</p></div>
        <div className="border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-md transition"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Boys&apos; Classroom - Morning Lesson</p><div className="relative h-44"><Image src="/boys1.jpg" alt="Boys" fill className="object-cover" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Boys actively engaged in Qur&apos;an memorization and Islamic lessons, guided by qualified teachers.</p></div>
        <div className="border rounded-xl overflow-hidden bg-[#fffdf5] hover:shadow-md transition"><p className="bg-[#0e4d2e] text-white text-[10px] font-bold text-center py-2">Examination & Learning Session</p><div className="relative h-44"><Image src="/boys2.jpg" alt="Exam" fill className="object-cover" /></div><p className="text-[11px] p-3 leading-4 opacity-70 text-center">Regular assessments to track students&apos; progress in memorization and understanding of the Qur&apos;an.</p></div>
      </div>
    </section>

    {/* UNIFORMS - BIG CARDS FULL PICTURE */}
    <section className="bg-[#fdf6e3] py-8 border-y">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-black text-[20px]">Our Student Uniforms</h2>
        <p className="text-center text-[11px] opacity-60 mt-1">Distinct, modest and dignified dress code reflecting Islamic identity - Magomeni Kagera</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border rounded-[20px] overflow-hidden shadow-sm">
            <div className="relative h-[380px] md:h-[480px]"><Image src="/boys1.jpg" alt="Boys Uniform Full" fill className="object-cover" /><div className="absolute top-3 left-3 bg-[#0e4d2e] text-white text-[10px] font-bold px-3 py-1 rounded-full">BOYS UNIFORM</div><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5"><h3 className="text-white font-black text-[18px]">Light Blue Kanzu + White Kofia</h3><p className="text-white/80 text-[12px] mt-1 leading-5">Clean light blue kanzu with white embroidered kofia. Symbol of purity and focus for Hifz students.</p></div></div>
            <div className="p-4 flex justify-between text-[10px] font-bold bg-white"><span>✓ Daily Wear</span><span>✓ Jumuah White</span><span>✓ Exam Uniform</span></div>
          </div>
          <div className="bg-white border rounded-[20px] overflow-hidden shadow-sm">
            <div className="relative h-[380px] md:h-[480px]"><Image src="/girls1.jpg" alt="Girls Uniform Full" fill className="object-cover" /><div className="absolute top-3 left-3 bg-[#b68c2a] text-white text-[10px] font-bold px-3 py-1 rounded-full">GIRLS UNIFORM</div><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5"><h3 className="text-white font-black text-[18px]">Golden Brown Buibui + Hijab</h3><p className="text-white/80 text-[12px] mt-1 leading-5">Modest golden-brown buibui with matching hijab and floral kanga lining. Comfort for long Hifz sessions.</p></div></div>
            <div className="p-4 flex justify-between text-[10px] font-bold bg-white"><span>✓ Full Hijab</span><span>✓ Separate Entrance</span><span>✓ Female Teachers Only</span></div>
          </div>
        </div>
      </div>
    </section>

    {/* LIFE BEYOND CLASSROOM - PLAYING OUTSIDE */}
    <section className="bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-black text-[20px]">Life Beyond Classroom</h2>
        <p className="text-center text-[11px] opacity-60 mt-1">Tarbiya through play, sports and brotherhood - Magomeni grounds</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border hover:shadow-md transition"><div className="relative h-44"><Image src="/boys2.jpg" alt="Play" fill className="object-cover" /><p className="absolute bottom-2 left-2 bg-[#0e4d2e] text-white text-[9px] px-2 py-1 rounded-full">Afternoon Break • Magomeni Field</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Students Playing Outside</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Supervised outdoor time after Asr. Football, running and Islamic anasheed. Builds teamwork and healthy body.</p></div></div>
          <div className="rounded-2xl overflow-hidden border hover:shadow-md transition"><div className="relative h-44"><Image src="/boys1.jpg" alt="Sports" fill className="object-cover" /><p className="absolute bottom-2 left-2 bg-[#b68c2a] text-white text-[9px] px-2 py-1 rounded-full">Sports Day • Every Thursday</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Sports & Team Activities</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Weekly inter-class competitions. Discipline, leadership and Sunnah of physical fitness.</p></div></div>
          <div className="rounded-2xl overflow-hidden border hover:shadow-md transition"><div className="relative h-44"><Image src="/girls1.jpg" alt="Sisters Activity" fill className="object-cover" /><p className="absolute bottom-2 left-2 bg-[#0e4d2e] text-white text-[9px] px-2 py-1 rounded-full">Girls&apos; Courtyard • Safe Space</p></div><div className="p-4"><h4 className="font-bold text-[13px]">Sisters Outdoor Learning</h4><p className="text-[11px] opacity-60 leading-5 mt-1">Separate safe courtyard for girls with female supervisors. Outdoor Tajweed circles and story time.</p></div></div>
        </div>
      </div>
    </section>

    {/* ABOUT + MISSION */}
    <section className="bg-[#fdf6e3] py-8 border-t">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-[1.5fr_0.8fr_0.9fr] gap-5">
        <div>
          <h3 className="font-black text-[16px] text-[#0e2e1f]">About IDHAATUL QUR&apos;ANILKARIM</h3>
          <p className="text-[10px] font-bold opacity-60">Established 1980 - 44 Years of Excellence in Qur&apos;anic Education</p>
          <p className="text-[12px] leading-6 mt-3 opacity-80">Founded in 1980, IDHAATUL QUR&apos;ANILKARIM is a registered madrasa committed to nurturing the next generation of Huffaz and Islamic scholars. Our institution combines traditional Qur&apos;anic education with modern learning methods, fostering discipline, moral character, and academic excellence. We provide separate learning environments for boys and girls, ensuring quality education rooted in Islamic values, community service, and lifelong learning.</p>
          <ul className="text-[12px] mt-4 space-y-2"><li>✓ Full Hifz Program: Complete memorization of the Holy Qur&apos;an</li><li>✓ Islamic Studies: Fiqh, Aqeedah, Hadith, and Arabic Language</li><li>✓ Quranic Recitation (Tajweed) Classes for all ages</li></ul>
        </div>
        <div className="bg-white rounded-xl border p-2 text-center shadow-sm"><div className="relative h-44 rounded-lg overflow-hidden"><Image src="/sheikh.jpg" alt="Sheikh" fill className="object-cover" /></div><p className="font-bold text-[12px] mt-2">Sheikh Abdallah Juma</p><p className="text-[10px] opacity-60">Principal & Head Teacher</p></div>
        <div className="bg-[#fffaf0] border rounded-xl p-4 shadow-sm"><h4 className="font-black text-[13px]">Our Mission & Vision</h4><p className="text-[11px] mt-2 leading-5">To produce Huffaz who are knowledgeable, pious, and beneficial to society.</p><p className="text-[11px] mt-2 leading-5 opacity-70">To be the leading center of Qur&apos;anic education in East Africa, inspiring generations with the light of the Qur&apos;an.</p><div className="bg-[#0e4d2e] text-white text-[10px] p-2.5 rounded mt-3 text-center">Registration No: MSD/MAD/1980/014</div><p className="text-[10px] mt-3 italic text-center">- Sheikh Abdallah Juma, Principal</p></div>
      </div>
    </section>

    {/* NEWS SUMMARY */}
    <section className="bg-[#0e2e1f] text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center"><h2 className="font-black text-[18px]">Latest News & Updates • Magomeni Kagera</h2><Link href="/news" className="text-[#d4af37] text-[11px] font-bold border border-[#d4af37]/30 px-4 py-1.5 rounded-full">View All News</Link></div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white text-black rounded-xl p-5 border-l-4 border-[#d4af37]"><p className="text-[9px] bg-[#fde6a8] inline-block px-2 py-1 rounded font-bold">20 Nov 2024 • Graduation</p><h4 className="font-bold text-[13px] mt-2">2024 Hifz Graduation - 27 New Huffaz</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Alhamdulillah 27 students completed Hifz in Magomeni. Ceremony attended by parents from all over Dar.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
          <div className="bg-white text-black rounded-xl p-5 border-l-4 border-[#0e4d2e]"><p className="text-[9px] bg-[#e8f5e9] inline-block px-2 py-1 rounded font-bold">15 Nov 2024 • Construction</p><h4 className="font-bold text-[13px] mt-2">New Boarding Block for Boys Opened</h4><p className="text-[11px] opacity-60 mt-2 leading-5">New 40-bed boarding block with solar lights and clean water near Kagera bus stand.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
          <div className="bg-white text-black rounded-xl p-5 border-l-4 border-[#b68c2a]"><p className="text-[9px] bg-[#fff3e0] inline-block px-2 py-1 rounded font-bold">02 Nov 2024 • Competition</p><h4 className="font-bold text-[13px] mt-2">Qur&apos;an Competition - Dar Region Winner</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Our student Yusuf Ahmed won 1st place in regional Tajweed competition.</p><Link href="/news" className="text-[11px] font-bold text-[#0e4d2e] mt-3 inline-block">Read More →</Link></div>
        </div>
      </div>
    </section>

    {/* TRUST + CTA */}
    <section className="bg-[#fdf6e3] py-6 border-t">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-5"><h4 className="font-black text-[13px]">Why Parents Trust Magomeni</h4><ul className="text-[11px] mt-3 space-y-2 leading-5"><li>✓ Separate classes & entrances for boys & girls</li><li>✓ CCTV & female teachers for girls section</li><li>✓ Daily report on WhatsApp to parents</li><li>✓ Halal meals, clean water, Dala Dala access</li></ul></div>
        <div className="bg-[#0e4d2e] text-white rounded-xl p-5 text-center"><p className="text-[#d4af37] text-[10px] font-bold">ADMISSIONS 2024/2025</p><h4 className="font-black text-[16px] mt-1">Limited Boarding Seats</h4><p className="text-[11px] opacity-70 mt-1">Magomeni Kagera - Register before Dec 30</p><Link href="/admissions" className="inline-block bg-[#d4af37] text-[#0e2e1f] text-[12px] font-black px-8 py-2.5 rounded-full mt-4">Apply Now</Link></div>
        <div className="bg-white rounded-xl border p-5"><h4 className="font-black text-[13px]">Visit Our Madrasa</h4><p className="text-[11px] opacity-60 mt-2 leading-5">Magomeni Kagera, Near Kagera Bus Stand, Dar es Salaam.<br/>Mon-Fri 7:30-12:30, 2-5 PM<br/>Sat 8 AM - 12 PM</p><a href="https://wa.me/255707000000" className="inline-block bg-[#25D366] text-white text-[11px] font-bold px-5 py-2 rounded-full mt-3">Get Directions on WhatsApp</a></div>
      </div>
    </section>

  </div>
 )
}
