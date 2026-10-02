export default function Donate(){
 return (
  <div className='max-w-7xl mx-auto p-10'>
    <h1 className='text-4xl font-black text-[#0a4d2e]'>Donation / Waqf</h1>
    <div className='grid md:grid-cols-2 gap-6 mt-6'>
      <div className='border p-6 rounded-xl'><h3 className='font-bold'>Sadaqah & Zakat</h3><p className='text-sm mt-2'>Zakat eligible: Yes, for needy students, orphans. Sadaqah Jariyah for Qur&apos;an education.</p><h3 className='font-bold mt-4'>Bank Details</h3><p className='text-xs'>Bank: [Your Bank]<br/>Account: IDHAATUL QUR&apos;ANILKARIM<br/>No: 01XXXXXXXX<br/>Swift: XXXXX</p></div>
      <div className='border p-6 rounded-xl bg-[#0a4d2e] text-white'><h3 className='font-bold'>M-Pesa / Airtel Money (Uganda/Tanzania)</h3><p className='text-sm mt-2'>M-Pesa: +255 624 123 456 (Name: IDHAATUL)<br/>Airtel Money: +256 700 123 456<br/>Tigo Pesa: +255 65X XXX XXX</p><form className='mt-4 grid gap-2'><input placeholder='Your Name' className='p-2 rounded text-black text-sm'/><input placeholder='Amount' className='p-2 rounded text-black text-sm'/><select className='p-2 rounded text-black text-sm'><option>Sadaqah</option><option>Zakat</option><option>Waqf</option><option>Sponsor a Student</option></select><button className='bg-[#d4af37] text-[#0a4d2e] py-2 rounded-full font-bold text-sm'>Donate Now</button></form></div>
    </div>
  </div>
 )
}
