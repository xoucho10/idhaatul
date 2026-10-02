export default function Academics(){
 return (
  <div className='max-w-7xl mx-auto p-6 md:p-10'>
    <h1 className='text-4xl font-black text-[#0a4d2e]'>Academics</h1>
    <div className='grid md:grid-cols-3 gap-6 mt-6'>
      <div className='border rounded-xl p-5'><h3 className='font-bold'>Daily Timetable</h3><p className='text-xs mt-2 leading-6'>5:00-6:00 Fajr & Hifz<br/>6:00-8:00 Tajweed<br/>8:00-10:00 Arabic: Nahw/Sarf<br/>10:00-12:00 Islamic Studies<br/>2:00-4:00 Revision<br/>4:00-6:00 Seerah & Fiqh<br/>8:00-9:00 Night Revision</p></div>
      <div className='border rounded-xl p-5'><h3 className='font-bold'>Curriculum Details</h3><p className='text-xs mt-2'>Qur&apos;an memorization 30 Juz, Tajweed rules, Qira&apos;at, Arabic grammar, Fiqh, Aqeedah, Hadith, Tafseer, Seerah. Modern + Traditional.</p><h3 className='font-bold mt-4'>Examination System</h3><p className='text-xs'>Monthly, Mid-term, Final, Khatm test with external examiners.</p></div>
      <div className='border rounded-xl p-5'><h3 className='font-bold'>Results & Achievements</h3><p className='text-xs mt-2'>120+ Huffaz graduated, 90% pass rate, Annual Qur&apos;an competition winners.</p><button className='mt-4 bg-[#0a4d2e] text-white px-4 py-2 rounded text-xs'>Download Results PDF</button></div>
    </div>
  </div>
 )
}
