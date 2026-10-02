export default function About(){
 return (
  <div className='max-w-7xl mx-auto p-6 md:p-10'>
    <h1 className='text-4xl font-black text-[#0a4d2e]'>About Us</h1>
    <div className='grid md:grid-cols-2 gap-8 mt-6'>
      <div><h3 className='font-bold text-xl mb-2'>History Since 1980</h3><p className='text-sm leading-6 opacity-80'>Founded in 1980, IDHAATUL QUR&apos;ANILKARIM is a registered madrasa committed to nurturing Huffaz and Islamic scholars. Traditional Qur&apos;anic education with modern methods, discipline, moral character, academic excellence. Separate learning for boys and girls, rooted in Islamic values.</p><h3 className='font-bold mt-6'>Founder</h3><p className='text-sm'>Sheikh [Founder Name] - Established 1980 in Dar es Salaam / Kampala</p><h3 className='font-bold mt-6'>Mission & Vision</h3><p className='text-sm'>Mission: Produce Huffaz who are knowledgeable, pious, contribute to society. Vision: Leading center of Qur&apos;anic education in East Africa.</p></div>
      <div className='bg-gray-50 p-6 rounded-xl border'><h3 className='font-bold'>Board / Shura</h3><ul className='text-sm mt-3 space-y-2'><li>Chairman: Sheikh Abdallah Juma - Principal & Head Teacher</li><li>Secretary: [Name]</li><li>Treasurer: [Name]</li><li>Member: [Name]</li></ul><p className='mt-6 text-xs bg-[#0a4d2e] text-white p-3 rounded'>Registration No: MSD/MAD/1980/014</p></div>
    </div>
  </div>
 )
}
