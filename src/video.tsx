import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, useCurrentFrame, useVideoConfig, spring, staticFile} from 'remotion';

const C = {bg:'#090719', purple:'#6D4BFF', lilac:'#B7A4FF', yellow:'#FFC83D', white:'#F8F7FF', red:'#E60012'};
const globalCss: React.CSSProperties = {fontFamily:'Arial, Helvetica, sans-serif', color:C.white};

const Grain: React.FC = () => <AbsoluteFill style={{opacity:.16,pointerEvents:'none',backgroundImage:'radial-gradient(#b9a7ff 1px, transparent 1px)',backgroundSize:'34px 34px'}}/>;
const Glow: React.FC<{x:string;y:string;color:string}> = ({x,y,color}) => <div style={{position:'absolute',left:x,top:y,width:650,height:650,borderRadius:'50%',background:color,filter:'blur(130px)',opacity:.25}}/>;

const Backdrop: React.FC<{children:React.ReactNode}> = ({children}) => <AbsoluteFill style={{...globalCss,background:'radial-gradient(ellipse at 80% 25%, #29205c 0%, #100d2b 42%, #080715 100%)',overflow:'hidden'}}>
  <Glow x="55%" y="8%" color="#6546ff"/><Glow x="-25%" y="65%" color="#9d45c7"/>
  {Array.from({length:18}).map((_,i)=><div key={i} style={{position:'absolute',left:`${(i*37)%100}%`,top:`${(i*61)%100}%`,width:5,height:5,borderRadius:9,background:i%3===0?C.yellow:C.lilac,opacity:.55}}/>)}
  <Grain/>{children}
</AbsoluteFill>;

const Doodle: React.FC = () => {
 const f=useCurrentFrame();
 const paths=Array.from({length:15},(_,k)=>{let d=''; for(let i=0;i<=18;i++){const a=(i/18)*Math.PI*2; const r=95+((i*17+k*29)%65); const x=150+Math.cos(a+k*.22)*r; const y=150+Math.sin(a+k*.22)*r*.78; d+=(i===0?'M':'L')+x.toFixed(1)+' '+y.toFixed(1)+' ';} return d+'Z';});
 return <svg viewBox="0 0 300 300" width="410" height="410" style={{transform:`rotate(${f*0.18}deg)`,filter:'drop-shadow(0 0 18px #b7a4ff55)'}}>
  {paths.map((d,i)=><path key={i} d={d} fill="none" stroke={C.lilac} strokeWidth="2.5" opacity={.32+(i%4)*.1}/>)}
 </svg>;
};

const Pill: React.FC<{children:React.ReactNode}> = ({children}) => <div style={{display:'inline-flex',alignItems:'center',gap:16,padding:'17px 30px',border:'1px solid #ffffff35',borderRadius:60,background:'#ffffff12',fontSize:25,fontWeight:700,letterSpacing:2}}><span style={{width:14,height:14,borderRadius:20,background:C.yellow}}/>{children}</div>;

const PopText: React.FC<{children:React.ReactNode;size?:number;color?:string;delay?:number;align?:'left'|'center'}> = ({children,size=86,color=C.white,delay=0,align='center'}) => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig(); const p=spring({frame:f-delay,fps,config:{damping:13,stiffness:115}});
 return <div style={{fontSize:size,fontWeight:900,lineHeight:1.02,letterSpacing:-2,textAlign:align,color,transform:`translateY(${interpolate(p,[0,1],[70,0])}px) scale(${interpolate(p,[0,1],[.88,1])})`,opacity:p,textShadow:'0 8px 35px #0009'}}>{children}</div>;
};

const S1:React.FC=()=> <Backdrop><AbsoluteFill style={{padding:'115px 75px',justifyContent:'space-between',alignItems:'center'}}>
  <Pill>SERI EDUKASI MOTOR</Pill>
  <div style={{textAlign:'center',width:'100%'}}>
   <div style={{position:'relative',height:380,width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><Doodle/><div style={{position:'absolute',left:'12%',top:30,fontSize:105,color:C.yellow,fontWeight:900}}>?</div><div style={{position:'absolute',right:'13%',top:45,fontSize:105,color:C.yellow,fontWeight:900}}>?</div><div style={{position:'absolute',right:'18%',bottom:0,fontSize:105,color:C.yellow,fontWeight:900}}>?</div></div>
   <PopText size={83}>MAU BELI</PopText><PopText size={112} color={C.yellow} delay={8}>HONDA SCOOPY?</PopText>
   <div style={{marginTop:35,fontSize:35,color:C.lilac,fontWeight:700}}>JANGAN ASAL PILIH!</div>
  </div>
  <div style={{fontSize:24,letterSpacing:5,color:'#c6baff'}}>DANZ HONDA CILEUNGSI</div>
 </AbsoluteFill></Backdrop>;

const Tip:React.FC<{num:string;title:string;desc:string;tag:string}> = ({num,title,desc,tag})=> <Backdrop><AbsoluteFill style={{padding:'115px 72px',justifyContent:'space-between'}}>
 <Pill>3 HAL WAJIB KAMU CEK</Pill>
 <div style={{display:'flex',alignItems:'center',gap:28}}><div style={{fontSize:210,fontWeight:900,color:C.yellow,lineHeight:1}}>{num}</div><div style={{fontSize:25,color:C.lilac,letterSpacing:4,fontWeight:800}}>TIPS PENTING</div></div>
 <div><PopText size={83} align="left">{title}</PopText><div style={{marginTop:42,fontSize:39,lineHeight:1.35,color:'#ddd8ff',fontWeight:500}}>{desc}</div></div>
 <div style={{height:12,background:'#ffffff20',borderRadius:20,overflow:'hidden'}}><div style={{height:'100%',width:`${Number(num)*33.33}%`,background:C.yellow,borderRadius:20}}/></div>
 <div style={{fontSize:23,letterSpacing:4,color:C.lilac}}>DANZ HONDA CILEUNGSI</div>
 </AbsoluteFill></Backdrop>;

const Note:React.FC=()=> <Backdrop><AbsoluteFill style={{padding:'120px 70px',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
 <Pill>INGAT SEBELUM DEAL</Pill><div style={{fontSize:160,color:C.yellow,marginTop:90}}>!</div>
 <PopText size={86}>JANGAN CUMA</PopText><PopText size={100} color={C.yellow} delay={7}>TERGIUR DP</PopText>
 <div style={{fontSize:39,lineHeight:1.4,color:'#ded9ff',marginTop:55}}>Pahami biaya, tenor, dan seluruh persyaratan sebelum transaksi.</div>
 </AbsoluteFill></Backdrop>;

const End:React.FC=()=> <Backdrop><AbsoluteFill style={{padding:'115px 65px',justifyContent:'space-between',alignItems:'center',textAlign:'center'}}>
 <Pill>KONSULTASI SEKARANG</Pill>
 <div style={{width:620,height:620,borderRadius:330,border:'3px solid #ffffff35',background:'linear-gradient(145deg,#ffffff1c,#6d4bff22)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 100px #7455ff55'}}>
  <div style={{fontSize:175,fontWeight:900,color:C.white,letterSpacing:-10}}>SCOOPY</div>
 </div>
 <div><PopText size={75}>DANZ HONDA</PopText><PopText size={100} color={C.yellow}>CILEUNGSI</PopText>
 <div style={{marginTop:35,display:'inline-block',background:C.red,padding:'25px 48px',borderRadius:18,fontSize:36,fontWeight:900}}>CHAT UNTUK INFO KREDIT</div></div>
 <div style={{fontSize:24,letterSpacing:4,color:C.lilac}}>PILIH MOTOR • SESUAIKAN KEBUTUHAN</div>
 </AbsoluteFill></Backdrop>;

export const ScoopyVideo:React.FC=()=> {
 const f=useCurrentFrame();
 const progress=interpolate(f,[0,1176],[0,100],{extrapolateRight:'clamp'});
 return <AbsoluteFill style={globalCss}>
  <Sequence from={0} durationInFrames={180}><S1/></Sequence>
  <Sequence from={180} durationInFrames={210}><Tip num="1" title="PILIH TIPE SESUAI KEBUTUHAN" desc="Pikirkan aktivitas harianmu. Pilih tipe dan fitur yang benar-benar kamu perlukan." tag=""/></Sequence>
  <Sequence from={390} durationInFrames={210}><Tip num="2" title="HITUNG DP DAN CICILAN" desc="Pastikan uang muka dan angsuran bulanan sesuai kemampuan keuanganmu." tag=""/></Sequence>
  <Sequence from={600} durationInFrames={240}><Tip num="3" title="CEK BIAYA DAN PERSYARATAN" desc="Tanyakan biaya administrasi, pilihan tenor, dan dokumen yang dibutuhkan sebelum transaksi." tag=""/></Sequence>
  <Sequence from={840} durationInFrames={156}><Note/></Sequence>
  <Sequence from={996} durationInFrames={180}><End/></Sequence>
  <Audio src={staticFile('audio/voiceover.wav')} volume={1}/>
  <div style={{position:'absolute',bottom:0,left:0,height:8,width:`${progress}%`,background:C.yellow}}/>
 </AbsoluteFill>;
};
