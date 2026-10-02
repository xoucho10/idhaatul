'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header(){
 const [open, setOpen] = useState(false);
 const NUMBER = '+25570000000';
 const WA = 'https://wa.me/25570000000';

 // Lock scroll when menu open
 useEffect(()=>{ 
   if(open) document.body.style.overflow='hidden'; 
   else document.body.style.overflow='';
 },[open]);

 return (
  <>
  <div style={{background:'#0e4d2e', color:'white', padding:'8px 12px', fontSize:'11px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'6px'}}>
    <div style={{display:'flex', gap:'10px', flexWrap:'wrap', alignItems:'center'}}>
      <span>📞 {NUMBER}</span>
      <span style={{opacity:0.9}}>info@idhaatulquran.or.tz</span>
    </div>
    <a href={WA} target="_blank" style={{background:'#ffffff22', padding:'4px 10px', borderRadius:'20px', color:'white', textDecoration:'none', fontWeight:700, whiteSpace:'nowrap'}}>Chat on WhatsApp</a>
  </div>

  <div style={{position:'sticky', top:0, zIndex:9999, background:'white', borderBottom:'3px solid #d4af37', boxShadow:'0 2px 10px rgba(0,0,0,0.08)'}}>
    <div style={{maxWidth:'1200px', margin:'0 auto', padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link href="/" style={{display:'flex', alignItems:'center', gap:'10px', textDecoration:'none'}}>
        <div style={{width:'48px', height:'48px', borderRadius:'50%', border:'2px solid #0e4d2e', background:'white', padding:'2px', overflow:'hidden', flexShrink:0}}>
          <img src="/logo.png" alt="logo" style={{width:'100%', height:'100%', objectFit:'contain'}} />
        </div>
        <div style={{lineHeight:1.1}}>
          <div style={{fontWeight:900, fontSize:'12px', color:'#0e4d2e'}}>IDHAATUL QUR'ANILKARIM</div>
          <div style={{fontSize:'10px', fontWeight:800, color:'#444'}}>Est. 1980 - Magomeni Kagera</div>
        </div>
      </Link>

      {/* DESKTOP LINKS */}
      <nav className="hidden lg:flex" style={{gap:'18px', fontSize:'12px', fontWeight:700, color:'#0e4d2e'}}>
        <Link href="/" style={{color:'#b68c2a', borderBottom:'2px solid #d4af37', textDecoration:'none'}}>Home</Link>
        <Link href="/about" style={{textDecoration:'none', color:'inherit'}}>About</Link>
        <Link href="/programs" style={{textDecoration:'none', color:'inherit'}}>Programs</Link>
        <Link href="/admissions" style={{textDecoration:'none', color:'inherit'}}>Admissions</Link>
        <Link href="/gallery" style={{textDecoration:'none', color:'inherit'}}>Gallery</Link>
        <Link href="/donate" style={{textDecoration:'none', color:'inherit'}}>Donate</Link>
        <Link href="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact</Link>
      </nav>

      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
        <div className="hidden md:flex" style={{flexDirection:'column', gap:'4px'}}>
          <a href={WA} target="_blank" style={{background:'#fde6a8', border:'1px solid #d4af37', padding:'6px 14px', borderRadius:'6px', fontSize:'11px', fontWeight:800, color:'#0e4d2e', textDecoration:'none', textAlign:'center'}}>Chat on WhatsApp</a>
          <Link href="/admissions" style={{background:'#0e4d2e', color:'white', padding:'6px 14px', borderRadius:'6px', fontSize:'11px', fontWeight:800, textDecoration:'none', textAlign:'center'}}>Apply Now</Link>
        </div>

        <button
          onClick={()=> setOpen(!open)}
          style={{width:'48px', height:'48px', background:'#0e4d2e', color:'white', border:'none', borderRadius:'10px', fontSize:'28px', fontWeight:900, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </div>

    {/* MOBILE MENU */}
    {open && (
      <div style={{position:'fixed', left:0, top:'92px', width:'100%', height:'calc(100vh - 92px)', background:'rgba(0,0,0,0.5)', backdropFilter:'blur(2px)', zIndex:9998}} onClick={()=>setOpen(false)}>
        <div style={{background:'white', width:'100%', maxHeight:'90vh', overflowY:'auto', padding:'16px'}} onClick={e=>e.stopPropagation()}>
          {[
            ['/','Home'],['/about','About'],['/programs','Programs'],['/admissions','Admissions'],['/gallery','Gallery'],['/donate','Donate'],['/contact','Contact']
          ].map(([href,name])=>(
            <Link key={href} href={href} onClick={()=>setOpen(false)} style={{display:'block', padding:'14px 16px', marginBottom:'8px', background: name==='Home'?'#fdf6e3':'#f5f5f5', border: name==='Home'?'1px solid #d4af37':'1px solid #eee', borderRadius:'12px', fontWeight: name==='Home'?900:700, color: name==='Home'?'#0e4d2e':'#111', textDecoration:'none'}}>{name}</Link>
          ))}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'16px', paddingTop:'16px', borderTop:'1px solid #eee'}}>
            <a href={WA} target="_blank" style={{background:'#fde6a8', border:'2px solid #d4af37', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, color:'#0e4d2e', textDecoration:'none'}}>WhatsApp</a>
            <Link href="/admissions" onClick={()=>setOpen(false)} style={{background:'#0e4d2e', color:'white', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none'}}>Apply Now</Link>
          </div>
          <div style={{textAlign:'center', marginTop:'14px', fontWeight:900, color:'#0e4d2e', letterSpacing:'0.5px'}}>{NUMBER}</div>
        </div>
      </div>
    )}
  </div>
  </>
 )
}