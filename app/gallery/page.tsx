import Image from 'next/image';
export default function Gallery(){
  const images = ['boys1.jpg','boys2.jpg','girls1.jpg','girls2.jpg','sheikh.jpg','logo.png'];
  return (
    <div className='max-w-7xl mx-auto p-4 md:p-10'>
      <h1 className='text-3xl md:text-4xl font-black text-[#0a4d2e]'>Gallery - Magomeni Kagera, Dar es Salaam</h1>
      <p className='text-sm mt-2 opacity-70'>Our Classrooms, Jalsas, Khatm events in Tanzania</p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6'>
        {images.map(f => (
          <div key={f} className='relative h-40 md:h-56 rounded-xl md:rounded-2xl overflow-hidden border group'>
            <Image src={'/' + f} alt={f} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover group-hover:scale-105 transition duration-300' />
            <div className='absolute bottom-0 bg-black/40 text-white text-[10px] p-1 w-full'>{f}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
