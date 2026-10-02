'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
 const [open, setOpen] = useState(false);
 return (
  <div style={{position:'sticky', top:0, zIndex:9999, width:'100%'}}>
    {/* GREEN TOP BAR */}
    <div style={{background:'#0e4d2e', color:'white', padding:'6px 12px', fontSize:'11px', display:'flex', justifyContent:'space-between'}}>
      <span>+255707000000 | info@idhaatulquran.or.tz</span>
      <a href="https://wa.me/255707000000" style={{background:'rgba(255,255,255,0.2)', padding:'2px 10px', borderRadius:'20px'}}>Chat on WhatsApp</a>
    </div>

    {/* WHITE HEADER */}
    <div style={{background:'white', borderBottom:'1px solid #ddd', padding:'10px 12px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link href="/" style={{display:'flex', alignItems:'center', gap:'8px', textDecoration:'none'}}>
        <div style={{width:'46px', height:'46px', borderRadius:'50%', border:'2px solid #0e4d2e', overflow:'hidden', background:'white', padding:'2px'}}>
          <img src="/logo.png" alt="Logo" style={{width:'100%', height:'100%', objectFit:'contain'}} />
        </div>
        <div>
          <div style={{fontWeight:900, fontSize:'12px', color:'#0e4d2e', lineHeight:'11px'}}>IDHAATUL QUR'ANILKARIM</div>
          <div style={{fontSize:'9px', fontWeight:700}}>Est. 1980</div>
        </div>
      </Link>

      <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
        {/* DESKTOP ONLY BUTTONS */}
        <div className="hidden md:flex" style={{flexDirection:'column', gap:'4px'}}>
          <a href="https://wa.me/255707000000" style={{background:'#fde6a8', border:'1px solid #d4af37', color:'#0e4d2e', fontSize:'10px', fontWeight:800, padding:'6px 12px', borderRadius:'4px', textAlign:'center', textDecoration:'none'}}>Chat on WhatsApp</a>
          <Link href="/admissions" style={{background:'#0e4d2e', color:'white', fontSize:'10px', fontWeight:800, padding:'6px 12px', borderRadius:'4px', textAlign:'center', textDecoration:'none'}}>Apply Now</Link>
        </div>

        {/* HAMBURGER - ALWAYS VISIBLE ON MOBILE - INLINE STYLE SO IT CAN'T HIDE */}
        <button 
          onClick={()=> setOpen(!open)}
          style={{width:'44px', height:'44px', background:'#0e4d2e', color:'white', border:'none', borderRadius:'8px', fontSize:'24px', fontWeight:900, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'}}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </div>

    {/* MOBILE MENU */}
    {open && (
      <div style={{position:'fixed', top:'88px', left:0, width:'100%', height:'calc(100vh - 88px)', background:'rgba(0,0,0,0.4)', zIndex:9998}} onClick={()=>setOpen(false)}>
        <div style={{background:'white', width:'100%', padding:'16px', boxShadow:'0 10px 30px rgba(0,0,0,0.2)', borderTop:'3px solid #0e4d2e'}} onClick={e=>e.stopPropagation()}>
          <Link href="/" onClick={()=>setOpen(false)} style={{display:'block', background:'#fdf6e3', border:'1px solid #d4af37', padding:'14px', borderRadius:'10px', fontWeight:900, marginBottom:'8px', textDecoration:'none', color:'#0e4d2e'}}>Home</Link>
          <Link href="/about" onClick={()=>setOpen(false)} style={{display:'block', background:'#f5f5f5', padding:'14px', borderRadius:'10px', fontWeight:700, marginBottom:'8px', textDecoration:'none', color:'black', border:'1px solid #eee'}}>About Us</Link>
          <Link href="/programs" onClick={()=>setOpen(false)} style={{display:'block', background:'#f5f5f5', padding:'14px', borderRadius:'10px', fontWeight:700, marginBottom:'8px', textDecoration:'none', color:'black', border:'1px solid #eee'}}>Programs</Link>
          <Link href="/admissions" onClick={()=>setOpen(false)} style={{display:'block', background:'#f5f5f5', padding:'14px', borderRadius:'10px', fontWeight:700, marginBottom:'8px', textDecoration:'none', color:'black', border:'1px solid #eee'}}>Admissions</Link>
          <Link href="/gallery" onClick={()=>setOpen(false)} style={{display:'block', background:'#f5f5f5', padding:'14px', borderRadius:'10px', fontWeight:700, marginBottom:'8px', textDecoration:'none', color:'black', border:'1px solid #eee'}}>Gallery</Link>
          <Link href="/contact" onClick={()=>setOpen(false)} style={{display:'block', background:'#f5f5f5', padding:'14px', borderRadius:'10px', fontWeight:700, marginBottom:'8px', textDecoration:'none', color:'black', border:'1px solid #eee'}}>Contact</Link>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'16px', paddingTop:'16px', borderTop:'1px solid #ddd'}}>
            <a href="https://wa.me/255707000000" style={{background:'#fde6a8', border:'2px solid #d4af37', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none', color:'#0e4d2e'}}>WhatsApp</a>
            <Link href="/admissions" onClick={()=>setOpen(false)} style={{background:'#0e4d2e', color:'white', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none'}}>Apply Now</Link>
          </div>
          <div style={{textAlign:'center', marginTop:'12px', fontSize:'11px', fontWeight:800, color:'#0e4d2e'}}>+255707000000</div>
        </div>
      </div>
    )}
  </div>
 )
}