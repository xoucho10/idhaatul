'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header(){
 const [open, setOpen] = useState(false);
 const links = [
  { name:'Home', href:'/' },
  { name:'About', href:'/about' },
  { name:'Programs', href:'/programs' },
  { name:'Admissions', href:'/admissions' },
  { name:'Gallery', href:'/gallery' },
  { name:'Donate', href:'/donate' },
  { name:'Contact', href:'/contact' },
 ];
 useEffect(()=>{ document.body.style.overflow = open? 'hidden' : ''; },[open]);

 return (
  <header style={{position:'sticky', top:0, zIndex:99999, width:'100%', background:'#fff'}}>
    <style>{`
    .nav-links { display: none; gap: 20px; font-size:13.5px; font-weight:800; align-items:center; flex-wrap:wrap; }
    .hamburger { display: flex; }
      @media(min-width: 1024px){
      .nav-links { display: flex!important; }
      .hamburger { display: none!important; }
      }
    `}</style>

    {/* GREEN TOP BAR */}
    <div style={{background:'#0e4d2e', color:'#fff', padding:'9px 16px', fontSize:'12.5px', display:'flex', justifyContent:'center', gap:'24px', flexWrap:'wrap', fontWeight:500}}>
      <span>📞 +25570000000</span>
      <span>✉️ info@idhaatulquran.or.tz</span>
      <span>📍 Dar es Salaam, Tanzania</span>
    </div>

    {/* WHITE HEADER - NAVBAR MENUS BACK */}
    <div style={{borderBottom:'3px solid #d4af37', padding:'12px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Link href="/" style={{display:'flex', gap:'12px', alignItems:'center', textDecoration:'none', flexShrink:0}}>
        <div style={{width:'52px', height:'52px', borderRadius:'50%', border:'2px solid #0e4d2e', overflow:'hidden', padding:'2px', background:'#fff', position:'relative', flexShrink:0}}>
          <Image src="/logo.png" alt="logo" width={52} height={52} style={{objectFit:'contain'}} sizes="52px" />
        </div>
        <div><div style={{fontWeight:900, fontSize:'16px', color:'#0e4d2e', lineHeight:'16px'}}>IDHAATUL QUR'ANILKARIM</div><div style={{fontSize:'11px', fontWeight:800, color:'#000'}}>Est. 1980</div></div>
      </Link>

      <div style={{display:'flex', alignItems:'center', gap:'28px'}}>
        {/* ALL NAVBAR MENUS BACK - DESKTOP VISIBLE */}
        <nav className="nav-links">
          {links.map(l=>(
            <Link key={l.name} href={l.href} style={{textDecoration:'none', color: l.name==='Home'? '#b68c2a' : '#0e4d2e', borderBottom: l.name==='Home'? '2px solid #d4af37' : 'none', paddingBottom:'3px'}}>{l.name}</Link>
          ))}
        </nav>

        {/* APPLY NOW - SHIFTED FROM EDGE, NO CHAT BUTTON */}
        <Link href="/admissions" style={{background:'#0e4d2e', color:'#fff', padding:'10px 24px', borderRadius:'8px', fontSize:'13px', fontWeight:800, textDecoration:'none', whiteSpace:'nowrap', marginRight:'12px', boxShadow:'0 2px 8px rgba(0,0,0,0.15)'}}>Apply Now</Link>

        <button onClick={()=>setOpen(!open)} className="hamburger" style={{width:'46px', height:'46px', background:'#0e4d2e', color:'#fff', border:'none', borderRadius:'10px', fontSize:'24px', fontWeight:900, cursor:'pointer', alignItems:'center', justifyContent:'center'}}>{open?'✕':'☰'}</button>
      </div>
    </div>

    {/* MOBILE - ALL MENUS BACK INSIDE HAMBURGER */}
    {open && (
      <div style={{position:'fixed', top:'94px', left:0, width:'100%', height:'calc(100dvh - 94px)', background:'rgba(0,0,0,0.5)', zIndex:99998}} onClick={()=>setOpen(false)}>
        <div style={{background:'#fff', padding:'16px', maxHeight:'90vh', overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
          {links.map(l=>(
            <Link key={l.name} href={l.href} onClick={()=>setOpen(false)} style={{display:'block', padding:'14px', marginBottom:'8px', background: l.name==='Home'?'#fdf6e3':'#f5f5f5', border:'1px solid #ddd', borderRadius:'12px', fontWeight:800, textDecoration:'none', color:'#111'}}>{l.name}</Link>
          ))}
          <Link href="/admissions" onClick={()=>setOpen(false)} style={{display:'block', background:'#0e4d2e', color:'#fff', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none', marginTop:'12px'}}>Apply Now</Link>
        </div>
      </div>
    )}
  </header>
 )
}