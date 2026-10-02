export default function Admissions(){
 return (
  <div className='max-w-7xl mx-auto p-6 md:p-10'>
    <h1 className='text-4xl font-black text-[#0a4d2e]'>Admissions 2024-2025</h1>
    <div className='grid lg:grid-cols-2 gap-8 mt-6'>
      <form className='border rounded-xl p-6 bg-white shadow grid gap-3'>
        <h3 className='font-bold'>Application Form</h3>
        <input placeholder='Student Name *' className='border p-2 rounded text-sm'/>
        <div className='grid grid-cols-2 gap-2'><input type='date' className='border p-2 rounded text-sm'/><select className='border p-2 rounded text-sm'><option>Gender</option><option>Male</option><option>Female</option></select></div>
        <input placeholder='Parent / Guardian Name *' className='border p-2 rounded text-sm'/>
        <div className='grid grid-cols-2 gap-2'><input placeholder='Phone *' className='border p-2 rounded text-sm'/><input placeholder='WhatsApp' className='border p-2 rounded text-sm'/></div>
        <input placeholder='Address *' className='border p-2 rounded text-sm'/>
        <input placeholder='Previous Madrasa / School' className='border p-2 rounded text-sm'/>
        <select className='border p-2 rounded text-sm'><option>Hifz Level</option><option>Beginner (No Hifz)</option><option>1-10 Juz</option><option>11-20 Juz</option><option>21-29 Juz</option><option>Complete Hafiz</option></select>
        <select className='border p-2 rounded text-sm'><option>Program Applying For *</option><option>Full Hifz Program</option><option>Tajweed & Qiraat</option><option>Arabic Language</option><option>Islamic Studies</option><option>Weekend Class</option></select>
        <button className='bg-[#0a4d2e] text-white py-3 rounded-full font-bold mt-2'>Submit Application</button>
        <p className='text-[11px] opacity-60 text-center'>We will contact you within 24 hours on WhatsApp</p>
      </form>
      <div className='space-y-4'>
        <div className='border rounded-xl p-5 bg-[#0a4d2e] text-white'><h3 className='font-bold'>Fees Structure</h3><p className='text-xs mt-2'>Registration: 50,000 TZS<br/>Monthly: 80,000 TZS (includes boarding, food)<br/>Books: 30,000 TZS<br/>Exam: 20,000 TZS<br/>Discount for orphans & needy.</p></div>
        <div className='border rounded-xl p-5'><h3 className='font-bold'>Requirements</h3><ul className='text-xs list-disc ml-4 mt-2'><li>Birth Certificate</li><li>Parent ID</li><li>2 Passport Photos</li><li>Previous results if any</li></ul></div>
        <div className='border rounded-xl p-5'><h3 className='font-bold'>Academic Calendar</h3><p className='text-xs mt-2'>Term 1: Jan - Apr<br/>Term 2: May - Aug<br/>Term 3: Sep - Dec<br/>Khatm Event: December</p><button className='mt-3 border px-4 py-2 rounded text-xs'>Download Prospectus PDF</button></div>
      </div>
    </div>
  </div>
 )
}
