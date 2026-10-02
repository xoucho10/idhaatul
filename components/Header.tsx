'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header(){
 const [open, setOpen] = useState(false);
 const links = [
  { name:'Home', href:'/' }, { name:'About', href:'/about' },
  { name:'Programs', href:'/programs' }, { name:'Admissions', href:'/admissions' },
  { name:'Gallery', href:'/gallery' }, { name:'Donate', href:'/donate' },
  { name:'Contact', href:'/contact' },
 ];
 useEffect(()=>{ document.body.style.overflow = open? 'hidden' : ''; },[open]);

 return (
  <header style={{position:'sticky', top:0, zIndex:99999, width:'100%', background:'#fff'}}>
    <style>{`
   .nav-links { display: none; gap: 18px; font-size:13px; font-weight:800; align-items:center; }
   .hamburger { display: flex; }
    @media(min-width: 1024px){
     .nav-links { display: flex!important; }
     .hamburger { display: none!important; }
    }
    `}</style>

    <div style={{background:'#0e4d2e', color:'#fff', padding:'9px 16px', fontSize:'12px', display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
      <span>📞 +25570000000</span><span>✉️ info@idhaatulquran.or.tz</span><span>📍 Dar es Salaam</span>
    </div>

    <div style={{borderBottom:'3px solid #d4af37', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', boxSizing:'border-box'}}>
      <Link href="/" style={{display:'flex', gap:'10px', alignItems:'center', textDecoration:'none'}}>
        <div style={{width:'48px', height:'48px', borderRadius:'50%', border:'2px solid #0e4d2e', overflow:'hidden', padding:'2px', background:'#fff', flexShrink:0}}>
          <Image src="/logo.png" alt="logo" width={48} height={48} style={{objectFit:'contain'}} sizes="48px" />
        </div>
        <div style={{lineHeight:'14px'}}><div style={{fontWeight:900, fontSize:'14px', color:'#0e4d2e'}}>IDHAATUL QUR'ANILKARIM</div><div style={{fontSize:'10px', fontWeight:800, color:'#000'}}>Est. 1980</div></div>
      </Link>

      <div style={{display:'flex', alignItems:'center', gap:'12px', marginLeft:'auto'}}>
        <nav className="nav-links">
          {links.map(l=>(
            <Link key={l.name} href={l.href} style={{textDecoration:'none', color:'#0e4d2e'}}>{l.name}</Link>
          ))}
        </nav>
        <Link href="/admissions" style={{background:'#0e4d2e', color:'#fff', padding:'9px 16px', borderRadius:'8px', fontSize:'12px', fontWeight:800, textDecoration:'none', whiteSpace:'nowrap'}}>Apply Now</Link>
        <button onClick={()=>setOpen(!open)} className="hamburger" aria-label="menu" style={{width:'44px', height:'44px', background:'#0e4d2e', color:'#fff', border:'none', borderRadius:'8px', fontSize:'22px', cursor:'pointer', alignItems:'center', justifyContent:'center', flexShrink:0}}>{open?'✕':'☰'}</button>
      </div>
    </div>

    {/* MOBILE MENU - NOW ALIGNED RIGHT, NOT HIDDEN LEFT */}
    {open && (
      <div style={{position:'fixed', inset:0, top:'88px', background:'rgba(0,0,0,0.5)', zIndex:99998, display:'flex', justifyContent:'flex-end'}} onClick={()=>setOpen(false)}>
        <div style={{width:'82%', maxWidth:'320px', background:'#fff', height:'100%', padding:'18px', boxShadow:'-4px 0 20px rgba(0,0,0,0.15)', overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px', borderBottom:'2px solid #d4af37', paddingBottom:'10px'}}>
            <span style={{fontWeight:900, color:'#0e4d2e'}}>Menu</span>
            <button onClick={()=>setOpen(false)} style={{width:'36px', height:'36px', background:'#f5f5f5', border:'1px solid #ddd', borderRadius:'8px'}}>✕</button>
          </div>
          {links.map(l=>(
            <Link key={l.name} href={l.href} onClick={()=>setOpen(false)} style={{display:'block', padding:'14px 12px', marginBottom:'8px', background:'#f8f8f8', borderRadius:'10px', fontWeight:800, textDecoration:'none', color:'#111', border:'1px solid #eee'}}>{l.name}</Link>
          ))}
          <Link href="/admissions" onClick={()=>setOpen(false)} style={{display:'block', background:'#0e4d2e', color:'#fff', padding:'14px', borderRadius:'10px', textAlign:'center', fontWeight:900, textDecoration:'none', marginTop:'14px'}}>Apply Now</Link>
        </div>
      </div>
    )}
  </header>
 )
}