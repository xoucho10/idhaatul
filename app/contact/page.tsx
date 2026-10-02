export default function Contact(){
 return (
  <div className='max-w-7xl mx-auto p-4 md:p-10'>
    <h1 className='text-3xl md:text-4xl font-black text-[#0a4d2e]'>Contact Us - Magomeni Kagera</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
      <div><p className='text-sm leading-7'>?? Full Address: Magomeni Kagera, Dar es Salaam, Tanzania<br/>Near Kagera Bus Stand, Magomeni Mapipa<br/>?? Phone: +255707000000 / +255 714 123 456<br/>?? Email: info@idhaatulquran.or.tz<br/>WhatsApp: +255707000000<br/>?? Mon-Fri 7:30-12:30 & 2-5pm, Sat 8-5pm</p><div className='mt-4 rounded-2xl overflow-hidden border h-64 md:h-80'><iframe src='https://maps.google.com/maps?q=Magomeni%20Kagera%20Dar%20es%20Salaam&t=&z=15&ie=UTF8&iwloc=&output=embed' className='w-full h-full border-0'></iframe></div><div className='mt-4 flex flex-wrap gap-2'><a href='https://wa.me/255707000000' className='bg-green-600 text-white px-5 py-2.5 rounded-full text-sm'>WhatsApp Magomeni</a><a href='tel:+255707000000' className='bg-[#0a4d2e] text-white px-5 py-2.5 rounded-full text-sm'>Call Now</a></div></div>
      <form className='border p-5 md:p-6 rounded-2xl shadow grid gap-3 h-fit'><input placeholder='Name' className='border p-3 rounded-xl text-sm'/><input placeholder='Phone - Tanzania' className='border p-3 rounded-xl text-sm'/><input placeholder='Email' className='border p-3 rounded-xl text-sm'/><textarea placeholder='Message about Magomeni Kagera Madrasa' className='border p-3 rounded-xl text-sm' rows={4}></textarea><button className='bg-[#0a4d2e] text-white py-3 rounded-full font-bold'>Send to Magomeni Campus</button></form>
    </div>
  </div>
 )
}

