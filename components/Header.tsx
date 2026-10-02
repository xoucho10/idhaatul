'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Header(){
 const [open, setOpen] = useState(false);
 const NUM = '+25570000000';
 const WA = 'https://wa.me/25570000000';
 useEffect(()=>{ document.body.style.overflow = open ? 'hidden' : ''; },[open]);
 return (
  <header style={{position:'sticky', top:0, zIndex:99999, width:'100%'}}>
    <div style={{background:'#0e4d2e', color:'#fff', padding:'8px 12px', fontSize:'11px', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
      <span>📞 {NUM} • info@idhaatulquran.or.tz</span>
      <a href={WA} target="_blank" style={{background:'#ffffff22', color:'#fff', padding:'4px 12px', borderRadius:'20px', textDecoration:'none', fontWeight:700}}>Chat on WhatsApp</a>
    </div>
    <div style={{background:'#fff', borderBottom:'3px solid #d4af37', padding:'10px 12px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Link href="/" style={{display:'flex', gap:'10px', alignItems:'center', textDecoration:'none'}}>
        <div style={{width:'48px', height:'48px', borderRadius:'50%', border:'2px solid #0e4d2e', overflow:'hidden', padding:'2px'}}><img src="/logo.png" alt="logo" style={{width:'100%', height:'100%', objectFit:'contain'}}/></div>
        <div><div style={{fontWeight:900, fontSize:'12px', color:'#0e4d2e'}}>IDHAATUL QUR'ANILKARIM</div><div style={{fontSize:'9px', fontWeight:700}}>Est. 1980</div></div>
      </Link>
      <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
        <div className="hidden md:flex" style={{flexDirection:'column', gap:'4px'}}>
          <a href={WA} style={{background:'#fde6a8', border:'1px solid #d4af37', padding:'6px 12px', borderRadius:'6px', fontSize:'11px', fontWeight:800, textAlign:'center', textDecoration:'none', color:'#0e4d2e'}}>Chat on WhatsApp</a>
          <Link href="/admissions" style={{background:'#0e4d2e', color:'#fff', padding:'6px 12px', borderRadius:'6px', fontSize:'11px', fontWeight:800, textAlign:'center', textDecoration:'none'}}>Apply Now</Link>
        </div>
        <button onClick={()=>setOpen(!open)} style={{width:'48px', height:'48px', background:'#0e4d2e', color:'#fff', border:'none', borderRadius:'10px', fontSize:'26px', fontWeight:900, cursor:'pointer'}}>{open ? '✕' : '☰'}</button>
      </div>
    </div>
    {open && (
      <div style={{position:'fixed', top:'86px', left:0, width:'100%', height:'calc(100vh - 86px)', background:'rgba(0,0,0,0.5)', zIndex:99998}} onClick={()=>setOpen(false)}>
        <div style={{background:'#fff', padding:'16px'}} onClick={e=>e.stopPropagation()}>
          <Link href="/" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#fdf6e3', border:'1px solid #d4af37', borderRadius:'12px', fontWeight:900, textDecoration:'none', color:'#0e4d2e'}}>Home</Link>
          <Link href="/about" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#f5f5f5', border:'1px solid #eee', borderRadius:'12px', fontWeight:700, textDecoration:'none', color:'#000'}}>About</Link>
          <Link href="/programs" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#f5f5f5', border:'1px solid #eee', borderRadius:'12px', fontWeight:700, textDecoration:'none', color:'#000'}}>Programs</Link>
          <Link href="/admissions" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#f5f5f5', border:'1px solid #eee', borderRadius:'12px', fontWeight:700, textDecoration:'none', color:'#000'}}>Admissions</Link>
          <Link href="/gallery" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#f5f5f5', border:'1px solid #eee', borderRadius:'12px', fontWeight:700, textDecoration:'none', color:'#000'}}>Gallery</Link>
          <Link href="/contact" onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background:'#f5f5f5', border:'1px solid #eee', borderRadius:'12px', fontWeight:700, textDecoration:'none', color:'#000'}}>Contact</Link>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'16px', borderTop:'1px solid #eee', paddingTop:'16px'}}>
            <a href={WA} style={{background:'#fde6a8', border:'2px solid #d4af37', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none', color:'#0e4d2e'}}>WhatsApp</a>
            <Link href="/admissions" onClick={()=>setOpen(false)} style={{background:'#0e4d2e', color:'#fff', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none'}}>Apply Now</Link>
          </div>
          <div style={{textAlign:'center', marginTop:'12px', fontWeight:900, color:'#0e4d2e'}}>{NUM}</div>
        </div>
      </div>
    )}
  </header>
 )
}