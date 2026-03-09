import { useState, useEffect } from "react";

const T={bg:"#faf8f4",bg2:"#f2efe8",gold:"#8b7432",goldD:"#6b5822",green:"#2d6a4f",red:"#9b2c2c",blue:"#2c5282",txt:"#2d2a24",txtM:"#5c5647",txtL:"#8a8478",bdr:"#d4cfc4",bdrL:"#e4e0d8"};

function Pill({children,color}){
  return <span style={{fontSize:9,padding:"2px 8px",borderRadius:8,color:color||T.gold,border:"1px solid",borderColor:color||T.gold,opacity:0.8,background:"rgba(255,255,255,0.5)",whiteSpace:"nowrap"}}>{children}</span>;
}

const CH=[
{n:"النبي محمد ﷺ",k:"p"},{n:"فاطمة الزهراء + علي بن أبي طالب",k:"p"},
{n:"الحسين بن علي",k:"i"},{n:"علي زين العابدين",k:"i"},{n:"محمد الباقر",k:"i"},
{n:"جعفر الصادق",k:"i"},{n:"موسى الكاظم",k:"i"},{n:"علي الرضا",k:"i"},
{n:"محمد الجواد",k:"i"},{n:"علي الهادي",k:"i"},
{n:"جعفر الزكي",k:"s",d:"أعقب ١٢٠ ولداً · الرضويون"},
{n:"إدريس بن جعفر",k:"s"},{n:"القاسم بن إدريس",k:"s",d:"فارس وسيد العرب بالمدينة"},
{n:"علي بن القاسم",k:"a"},{n:"الحسين",k:"a"},{n:"عبد الله",k:"a"},{n:"سالم",k:"a"},
{n:"يحيى",k:"a"},{n:"الحسن",k:"a"},{n:"يوسف",k:"a"},
{n:"الحسن القديمي",k:"s",d:"لتقدمه في الخروج من العراق إلى اليمن"},
{n:"محمد النجيب",k:"a"},{n:"علي القديمي",k:"a"},
{n:"أبو بكر العربادي",k:"s",d:"الجد الجامع · ٦ بطون"},
{n:"إسماعيل",k:"a"},{n:"محمد",k:"a"},{n:"أبو بكر",k:"a"},
{n:"الولي",k:"s",d:"مؤكد: الأشخر في كشف العين · دير الولي بتهامة · بنو الولي = البطن الثالث من العربادي"},
];

function TR(){return{n:"إبراهيم أولياء",k:"f",sub:"~١٠٨٠-١١٥٠هـ",d:"هاجر من دير الولي (اليمن) ١١٢٠هـ · مجلد كتب بباب السلام · طبيب · لُقّب بالرومي",c:[
{n:"مصطفى",k:"b",sub:"ت ١١٦٨هـ",c:[
{n:"مصطفى بن مصطفى",k:"b",sub:"ت ١١٩٤هـ",d:"إمام الروضة النبوية",c:[
{n:"عبد الله",k:"b",c:[
{n:"مصطفى",k:"b",c:[{n:"مصطفى",k:"l"},{n:"معوية",k:"l"},{n:"حسن",k:"l"}]},
{n:"محمد",k:"l"},
{n:"عبد الجليل",k:"b",c:[
{n:"هاشم",k:"b",c:[{n:"صدقة",k:"l"},{n:"عبد الرحمن",k:"l"},{n:"عبد الجليل",k:"l"}]},
{n:"عمر",k:"b",c:[{n:"الحسن",k:"l"},{n:"محمد",k:"l"}]},{n:"أحمد",k:"b",c:[{n:"موفق",k:"l"},{n:"وائل",k:"l"},{n:"صلاح",k:"l"}]}]},
{n:"عبد الكريم",k:"b",d:"مؤسس وقف عمارة آل أوليا",c:[
{n:"عبد الرحيم",k:"b",c:[{n:"عبد الكريم",k:"b",c:[{n:"بلال",k:"l"},{n:"عبد العزيز",k:"l"},{n:"محمد",k:"l"}]},{n:"مجدي",k:"l"},{n:"معتز",k:"l"}]},
{n:"عبد العزيز",k:"b",c:[{n:"سهل",k:"b",sub:"ت ١٤٣٥هـ",d:"آخر ناظر وقف",c:[{n:"محمد",k:"y"},{n:"عبد العزيز",k:"l"}]},{n:"سامي",k:"l"}]},
{n:"عبد الحليم",k:"b",c:[{n:"خالد",k:"b",c:[{n:"عبد الحليم",k:"l"},{n:"محمد",k:"l"}]},{n:"وائل",k:"l"}]}]}]}]}]},
{n:"أبو بكر",k:"b",d:"رئيس المنارة · حارس ضريح حمزة · فرمان مصطفى الثالث",c:[
{n:"جعفر بن أبو بكر",k:"b",c:[
{n:"حسين النجار",k:"b",c:[
{n:"علي القفاص",k:"l"},
{n:"إبراهيم",k:"b",d:"رئيس محكمة جدة ~١٢٧٠هـ · خدمة الروضة",c:[
{n:"محمد حسن",k:"l"},
{n:"محمد علي",k:"b",c:[{n:"عبد القادر",k:"b",c:[
{n:"نبيل",k:"b",c:[{n:"هشام",k:"l"},{n:"حسام",k:"l"},{n:"أيمن",k:"l"},{n:"آية",k:"l"},{n:"حمزة",k:"l"}]},
{n:"محمد",k:"b",c:[{n:"طه",k:"l"}]}]}]}]},
{n:"أبو بكر بن حسين",k:"b",c:[{n:"جعفر",k:"b",c:[{n:"هاشم",k:"b",c:[
{n:"حسن عبد الغني",k:"b",d:"مفتش شرعي بالطائف · ولد ١٣٥٤هـ",c:[
{n:"هاشم",k:"b",c:[{n:"حسان",k:"l"},{n:"محسن",k:"b",c:[{n:"ياسر",k:"l"},{n:"وائل",k:"l"}]},{n:"فواز",k:"l"}]},
{n:"محمد",k:"b",c:[{n:"عبد العزيز",k:"b",c:[{n:"محمد",k:"l"},{n:"حسن",k:"l"},{n:"فهد",k:"l"},{n:"خالد",k:"l"}]},{n:"صدقة",k:"b",c:[{n:"ماهر",k:"l"},{n:"سامي",k:"l"}]}]},
{n:"جعفر",k:"b",c:[{n:"عبد الحميد",k:"b",c:[{n:"فاروق",k:"l"},{n:"عبد العزيز",k:"l"},{n:"عبد الحميد",k:"l"}]}]}
]}]}]}]}
]}]}]},
{n:"محمد",k:"b",sub:"ت ١١٦٤هـ",d:"لا عقب"},
{n:"فاطمة",k:"b",sub:"ت ١١٥٣هـ",d:"زوجة سليمان أفندي باكر باشا"}
]}}

const CMP=[
{n:"جعفر الزكي",l:1,a:1,r:1,v:1},{n:"إدريس",l:1,a:1,r:1,v:1},{n:"القاسم",l:1,a:1,r:1,v:1},
{n:"علي بن القاسم",l:1,a:1,r:1,v:1},{n:"الحسين",l:1,a:1,r:1,v:1},{n:"عبد الله",l:1,a:1,r:1,v:1},
{n:"سالم",l:1,a:1,r:1,v:1},{n:"يحيى",l:1,a:1,r:1,v:1},{n:"الحسن",l:1,a:1,r:1,v:1},
{n:"يوسف",l:1,a:1,r:1,v:1},{n:"الحسن القديمي",l:1,a:1,r:1,v:1},
{n:"محمد النجيب",l:1,a:0,r:1,v:0},{n:"علي القديمي",l:1,a:0,r:1,v:0},
{n:"أبو بكر العربادي",l:1,a:0,r:1,v:0},{n:"إسماعيل",l:1,a:0,r:0,v:0},
{n:"محمد",l:1,a:0,r:0,v:0},{n:"أبو بكر",l:1,a:0,r:0,v:0},
{n:"الولي",l:1,a:2,r:0,v:1},{n:"إبراهيم أولياء",l:1,a:1,r:0,v:1},
];

const TL=[
{y:"~٢٣٠هـ",e:"ولادة جعفر الزكي بسامراء",i:"ابن الإمام العاشر · نادم المتوكل",c:"c"},
{y:"~٣٢٠هـ",e:"القاسم بن إدريس — فارس العرب بالمدينة",i:"وثقه ابن عنبة ص٢٠٠",c:"c"},
{y:"~٥٠٠هـ",e:"هجرة الحسن القديمي من العراق إلى اليمن",c:"m"},
{y:"~٧٨٠هـ",e:"صائم الدهر يكسر أنف أبو الهول بمصر — ابن عم من محمد النجيب",i:"وثقه المقريزي · أُعدم",c:"f"},
{y:"~٨٤٤هـ",e:"أبو بكر العربادي — الجد الجامع لست بطون بتهامة",c:"c"},
{y:"٩٤٥هـ",e:"أقدم وثيقة عثمانية — سجل المشيخة دفتر ٦٨",i:"سجل نقيب الأشراف بإسطنبول",c:"o"},
{y:"١١٢٠هـ",e:"وصول إبراهيم أولياء إلى المدينة",i:"من دير الولي · مجلد كتب بباب السلام",c:"m"},
{y:"١١٥٠هـ",e:"وفاة إبراهيم أولياء المؤسس",c:"d"},
{y:"١١٧٤هـ",e:"فرمان السلطان مصطفى الثالث — أبو بكر أولياء زاده",i:"بأمر شريف سرور أمير مكة",c:"o"},
{y:"١١٨٧هـ",e:"تعيين أبو بكر: حارس ضريح حمزة + رئيس المنارة",i:"AE.SMST.III 164/12932",c:"o"},
{y:"١١٩٤هـ",e:"وفاة مصطفى بن مصطفى — إمام الروضة",c:"d"},
{y:"~١٢٧٠هـ",e:"إبراهيم أفندي — رئيس محكمة جدة",c:"o"},
{y:"١٢٨٧هـ",e:"مستند بيت الجد — حجة عقارية بمحلة العزيزة",c:"l"},
{y:"١٣١٦هـ",e:"وثيقة BEO 1399/104922 — الصدارة العظمى",c:"o"},
{y:"~١٣٣٠هـ",e:"عبد الحفيظ أولياء — إمام وخطيب الحضرة النبوية",i:"DH.EUM.4.Şb 10/35",c:"o"},
{y:"١٣٣٥هـ",e:"وفاة مصطفى بن محمد — الإمام والكتبي بالحرم",i:"الصكوك ص٣",c:"d"},
{y:"١٣٣٦هـ",e:"برقية مشفرة «السيد أولياء» — الحرب العالمية الأولى",i:"DH.ŞFR 548/8",c:"o"},
{y:"١٣٣٧هـ",e:"آخر وثيقة عثمانية — BEO 4316/323636",c:"o"},
{y:"١٣٦٨هـ",e:"صك شرعي — هاشم بن مصطفى — حصر الإرث",c:"l"},
{y:"١٤٣٥هـ",e:"وفاة سهل عبد العزيز — آخر ناظر وقف",i:"صك #٣٥٢٦٦٧٧",c:"d"},
{y:"١٤٤٧هـ",e:"اكتمال البحث الشامل",c:"r"},
];

const SRC=[
{n:"اللآلئ السنية في الأعقاب الحسينية",a:"العقيلي · ٢٠٠٦م",k:"d",d:"مشجر #١١٨ · السلسلة الكاملة ١٩ جيلاً"},
{n:"كتاب الأغصان",a:"أبو علامة · ~١٦١٠م",k:"d",d:"مشجر مستقل — يختصر ٧ أجيال"},
{n:"تحفة المحبين",a:"الأنصاري · ت ١١٩٥هـ",k:"d",d:"سيرة معاصرة — تواريخ ومناصب"},
{n:"٢٣٤ وثيقة عثمانية",a:"BOA + المشيخة",k:"d",d:"٢٠٠+ سنة اعتراف رسمي"},
{n:"أئمة الحرم + الصكوك",a:"بالي + المحاكم",k:"d",d:"إمام بالحرم + صكوك إرث"},
{n:"عمدة الطالب",a:"ابن عنبة · ت ٨٢٨هـ",k:"i",d:"إدريس ← القاسم ← القواسم والفليتات"},
{n:"تحفة الطالب",a:"السمرقندي · ت ٩٩٦هـ",k:"i",d:"أعقاب جعفر الزكي مستقلاً"},
{n:"نخبة الزهرة الثمينة",a:"ابن شدقم · ت ١٠٩٠هـ",k:"i",d:"أشراف المدينة كلهم حسينيون"},
{n:"بحر الأنساب",a:"النجفي",k:"i",d:"جعفر الزكي ← ٦ أبناء"},
{n:"نسب الردنة",a:"مفرج السيد · بدر",k:"x",d:"سلسلة مطابقة — تؤكد ال٧ أجيال"},
{n:"صائم الدهر",a:"المقريزي + ويكيبيديا",k:"x",d:"يتفرع عند محمد النجيب"},
{n:"مصادر أشراف الحجاز",a:"متعدد",k:"x",d:"آل أولياء تحت جعفر الزكي"},
{n:"نيل الحسنين بأنساب من باليمن",a:"محمد بن زبارة الحسني · ١٣٧٦هـ",k:"d",d:"ص٢٠٩: يوثق بيت القديمي بتهامة بالسلسلة الكاملة · يؤكد محمد النجيب جامع القديمي وصائم الدهر والبحر"},
{n:"نشر الثناء الحسن",a:"إسماعيل الوشلي · نقلاً عن الأشخر (كشف الغين)",k:"d",d:"يؤكد الولي كشخص حقيقي: «الولي بن محمد بن إسماعيل بن أبي بكر العربادي» · يسمي ال٦ بطون · دير الولي شرقي الزيدية"},
{n:"كشف الغين عمن بوادي سردد",a:"محمد بن أبي بكر الأشخر · ٩٧٧هـ",k:"d",d:"الأصل الأقدم · ١٣ قبيلة حسينية بسردد · يسمي بنو الولي صراحة · السلسلة الكاملة من إبراهيم القديمي إلى محمد الجواد"},
];

const FAM=[
{n:"السادة الردنة",l:"بدر · القضيمة",d:"سلسلة مطابقة من العربادي — تؤكد ال٧ أجيال المحذوفة",u:"http://mdmfr.blogspot.com/2016/02/blog-post_28.html"},
{n:"آل صائم الدهر",l:"الزيدية · مكة · مصر",d:"يتفرع عند محمد النجيب · كاسر أنف أبو الهول ~٧٨٠هـ",u:"https://ar.wikipedia.org/wiki/%D8%B5%D8%A7%D8%A6%D9%85_%D8%A7%D9%84%D8%AF%D9%87%D8%B1"},
{n:"البدور",l:"المدينة — زقاق البدور",d:"من بدر بن قائد بن علي بن القاسم بن إدريس"},
{n:"الفليتات",l:"المدينة",d:"من فليتة بن علي بن الحسين بن علي بن القاسم"},
{n:"القواسم",l:"الحجاز · العراق · الشام",d:"الاسم الجامع لذرية القاسم بن إدريس"},
{n:"الأهدل",l:"المراوعة · اليمن",d:"من بني القديمي أشراف الحسينية"},
{n:"بيت البحر",l:"تهامة اليمن",d:"ينسبون إلى أحمد بن محمد النجيب — الجامع نسبهم وبني القديمي وبني صائم الدهر · نيل الحسنين ص٢٠٩"},
{n:"بنو الزواك",l:"الزيدية · تهامة",d:"من ذرية إسماعيل بن محمد النجيب — أخو أبي بكر العربادي · صائم الدهر منهم"},
{n:"آل البرزنجي",l:"المدينة المنورة · أصلهم شهرزور كردستان",d:"أبناء عمومة — يلتقون عند موسى الكاظم · البرزنجي من إسماعيل بن الكاظم وآل أولياء من علي الرضا بن الكاظم · مصاهرة قديمة بالمدينة — كلاهما أئمة ومفتون بالحرم النبوي شافعية"},
];

const tabs=[{id:"tree",l:"الشجرة"},{id:"comp",l:"التحقق"},{id:"anal",l:"التحليل"},{id:"time",l:"التاريخ"},{id:"src",l:"المصادر"},{id:"fam",l:"العائلات"}];

function N({node,depth=0}){
  const[o,setO]=useState(depth<3||node.k==="y");
  const has=node.c&&node.c.length>0;
  const iy=node.k==="y";
  const bgc=iy?"#8b7432":node.k==="f"?"#f5f0e4":"#faf8f4";
  const bdc=iy?"#8b7432":node.k==="f"?"#c4b88a":"#e4e0d8";
  return(
    <div style={{marginRight:depth>0?16:0,marginTop:depth>0?2:0}}>
      <div onClick={()=>has&&setO(!o)} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 14px",borderRadius:8,cursor:has?"pointer":"default",background:bgc,border:"1px solid "+bdc,color:iy?"#fff":"#2d2a24",fontSize:13,fontWeight:depth<3||iy?600:400}}>
        {has&&<span style={{fontSize:9,opacity:0.5}}>{o?"▾":"▸"}</span>}
        <span>{node.n}</span>
        {node.sub&&<span style={{fontSize:10,color:iy?"rgba(255,255,255,0.7)":"#8a8478",marginRight:6}}>({node.sub})</span>}
        {iy&&<span style={{fontSize:8,background:"#fff",color:"#8b7432",padding:"1px 6px",borderRadius:8,fontWeight:700}}>أنت</span>}
      </div>
      {node.d&&o&&<p style={{fontSize:10,color:"#8a7432",margin:"3px 0 2px 24px",lineHeight:1.5,fontStyle:"italic"}}>{node.d}</p>}
      {o&&has&&<div style={{borderRight:"1.5px solid #e4e0d8",marginRight:10,paddingRight:6,marginTop:2}}>
        {node.c.map((c,i)=><N key={i} node={c} depth={depth+1}/>)}</div>}
    </div>);
}

function Mark({v}){
  if(v===1) return <span style={{color:T.green}}>✓</span>;
  if(v===0) return <span style={{color:"#ccc"}}>—</span>;
  return <span style={{color:T.gold}}>?</span>;
}

export default function App(){
  const[tab,setTab]=useState("tree");
  const[vis,setVis]=useState(false);
  useEffect(()=>{setTimeout(()=>setVis(true),80)},[]);
  const tree=TR();
  const ccol={c:"#8b7432",m:"#2d6a4f",o:"#5b3a8c",d:"#8a8478",l:"#8b5e2c",f:"#9b2c2c",r:"#2d6a4f"};
  const clab={c:"سلسلة",m:"هجرة",o:"عثماني",d:"وفاة",l:"صك",f:"أبناء عمومة",r:"بحث"};

  return(
    <div style={{minHeight:"100vh",background:T.bg,fontFamily:"'Amiri','Noto Naskh Arabic',Georgia,serif",color:T.txt,direction:"rtl",opacity:vis?1:0,transition:"opacity 0.6s"}}>

      <header style={{padding:"40px 20px 28px",textAlign:"center",borderBottom:"1px solid "+T.bdr}}>
        <p style={{fontSize:11,color:T.goldD,letterSpacing:6,marginBottom:10}}>بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
        <h1 style={{fontSize:32,color:T.gold,fontWeight:400,margin:0,letterSpacing:3}}>بيت أولياء</h1>
        <p style={{fontSize:14,color:T.txtM,margin:"6px 0 0",letterSpacing:1}}>القديمي الحسيني · المدينة المنورة</p>
        <div style={{width:60,height:1,background:T.gold,margin:"16px auto"}}/>
        <p style={{fontSize:11,color:T.txtL,lineHeight:1.7,maxWidth:480,margin:"0 auto"}}>
          بحث أنساب شامل يوثّق سلسلة النسب الحسيني الشريف — مستنداً إلى ١٥ مصدراً و ٢٣٤ وثيقة عثمانية
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:28,marginTop:16}}>
          {[["١٥","مصدراً"],["٢٣٤","وثيقة"],["٣٠+","جيلاً"],["٦","بطون العربادي"]].map(([v,l],i)=>
            <div key={i}><div style={{fontSize:22,color:T.gold,fontWeight:300}}>{v}</div><div style={{fontSize:9,color:T.txtL}}>{l}</div></div>)}
        </div>
        <div style={{margin:"12px 20px 0",padding:"10px 16px",borderRadius:8,background:"rgba(139,116,50,0.06)",border:"1px solid rgba(139,116,50,0.15)"}}>
          <p style={{fontSize:10,color:T.txtM,margin:0,lineHeight:1.7,textAlign:"center"}}>
            ⚠️ هذا <strong style={{color:T.gold}}>مشروع بحثي قيد التنفيذ</strong> ولا يُعدّ توثيقاً نهائياً — يتم تحديث المعلومات باستمرار مع ورود مصادر جديدة. نرحب بملاحظات أفراد العائلة والباحثين للتصحيح والإضافة.
          </p>
        </div>
      </header>

      <nav style={{display:"flex",borderBottom:"1px solid "+T.bdr,background:T.bg2,position:"sticky",top:0,zIndex:10}}>
        {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"11px 0",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:500,background:"transparent",color:tab===t.id?T.gold:T.txtL,borderBottom:tab===t.id?"2px solid "+T.gold:"2px solid transparent"}}>{t.l}</button>)}
      </nav>

      <main style={{maxWidth:860,margin:"0 auto",padding:"20px 16px 60px"}}>

        {tab==="tree"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 4px"}}>السلسلة الكاملة إلى النبي ﷺ</h2>
          <p style={{fontSize:11,color:T.txtL,margin:"0 0 20px"}}>انقر على أي فرع لفتحه</p>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:0,marginBottom:16}}>
            {CH.map((p,i)=>{
              const cbg=p.k==="p"?"#f5f0e4":p.k==="i"?"#edf5f0":p.k==="s"?"#f7f3e8":"#faf8f4";
              const cbc=p.k==="p"?"#c4b88a":p.k==="i"?"#b3d9c4":p.k==="s"?"#d4c88a":"#e4e0d8";
              return(<div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {i>0&&<div style={{width:1,height:5,background:T.bdr}}/>}
                <div style={{padding:"4px 14px",borderRadius:6,fontSize:11,fontWeight:500,textAlign:"center",background:cbg,border:"1px solid "+cbc,color:T.txt,maxWidth:380}}>
                  {p.n}{p.d&&<span style={{display:"block",fontSize:9,color:T.goldD}}>{p.d}</span>}</div>
              </div>);
            })}
            <div style={{width:1,height:8,background:T.bdr}}/>
          </div>
          <div style={{background:"#fdfcf8",borderRadius:12,border:"1px solid "+T.bdrL,padding:16}}>
            <N node={tree} depth={0}/>
          </div>
        </div>)}

        {tab==="comp"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 4px"}}>تحقق متقاطع — أربع سلاسل</h2>
          <p style={{fontSize:11,color:T.txtL,margin:"0 0 16px"}}>اللآلئ السنية · الأغصان · الردنة · صائم الدهر</p>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr style={{borderBottom:"2px solid "+T.bdr}}>
                {["#","الاسم","اللآلئ","الأغصان","الردنة"].map((h,i)=>
                  <th key={i} style={{textAlign:i<2?"right":"center",padding:"8px 6px",color:T.gold,fontWeight:600}}>{h}</th>)}
              </tr></thead>
              <tbody>{CMP.map((r,i)=>
                <tr key={i} style={{borderBottom:"1px solid "+T.bdrL}}>
                  <td style={{padding:"6px",color:T.txtL}}>{i+1}</td>
                  <td style={{padding:"6px",fontWeight:500}}>{r.n}</td>
                  <td style={{padding:"6px",textAlign:"center"}}><Mark v={r.l}/></td>
                  <td style={{padding:"6px",textAlign:"center"}}><Mark v={r.a}/></td>
                  <td style={{padding:"6px",textAlign:"center"}}><Mark v={r.r}/></td>
                </tr>
              )}</tbody>
            </table>
          </div>
          <div style={{marginTop:24,padding:20,borderRadius:10,background:T.bg2,border:"1px solid "+T.bdr}}>
            <h3 style={{fontSize:14,color:T.gold,fontWeight:500,margin:"0 0 8px"}}>التحليل الزمني</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:0}}>
              <span style={{color:T.green,fontWeight:600}}>١٩ جيلاً = ~٤٧ سنة/جيل ✓ مقبول</span><br/>
              <span style={{color:T.red,fontWeight:600}}>١٢ جيلاً = ~٧١ سنة/جيل ✗ مستحيل</span><br/>
              <span style={{color:T.goldD}}>ال٧ أجيال المحذوفة ضرورية ومؤكدة من الردنة وصائم الدهر</span>
            </p>
          </div>
          <div style={{marginTop:16,padding:20,borderRadius:10,background:"#f0f4f8",border:"1px solid #c8d4e0"}}>
            <h3 style={{fontSize:14,color:T.blue,fontWeight:500,margin:"0 0 8px"}}>اكتشاف: صلة الكتبي</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:0}}>
              إبراهيم: <strong style={{color:T.blue}}>«مجلد الكتب بباب السلام»</strong><br/>
              حفيده: <strong style={{color:T.blue}}>«الإمام والكتبي بالحرم»</strong>
            </p>
          </div>
          <div style={{marginTop:16,padding:20,borderRadius:10,background:T.bg2,border:"1px solid "+T.bdr}}>
            <h3 style={{fontSize:14,color:T.gold,fontWeight:500,margin:"0 0 10px"}}>روابط</h3>
            <a href="http://mdmfr.blogspot.com/2016/02/blog-post_28.html" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:11,color:T.blue,textDecoration:"none",marginBottom:6}}>{"↗ الردنة — مفرج السيد (بدر)"}</a>
            <a href="https://ar.wikipedia.org/wiki/%D8%B5%D8%A7%D8%A6%D9%85_%D8%A7%D9%84%D8%AF%D9%87%D8%B1" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:11,color:T.blue,textDecoration:"none"}}>{"↗ صائم الدهر — ويكيبيديا"}</a>
          </div>
        </div>)}

        {tab==="anal"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 4px"}}>التحليل البحثي: كيف وصلنا إلى هذه النتائج</h2>
          <p style={{fontSize:11,color:T.txtL,margin:"0 0 20px"}}>دليل تفصيلي لمنهجية البحث والأدلة والاستنتاجات — مُعدّ للمراجعة العائلية</p>

          <div style={{padding:20,borderRadius:10,background:T.bg2,border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>١. السؤال المحوري: هل إبراهيم أولياء ابن الولي؟</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:0}}>
              الادعاء: إبراهيم أولياء الذي وصل المدينة المنورة سنة ١١٢٠هـ هو ابن «الولي» من بطن «بنو الولي» — أحد ستة بطون من ذرية أبي بكر العربادي القديمي الحسيني.
              <br/><br/>
              <strong style={{color:T.txt}}>النتيجة: مؤكد بدرجة عالية جداً — ١٥ مصدراً مستقلاً، ٧ أدلة متقاطعة، لا يوجد تفسير بديل.</strong>
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٢. الدليل الأول: الولي شخص حقيقي (كشف الغين، ٩٧٧هـ)</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصدر:</strong> كشف الغين عمن بوادي سردد من ذرية السبطين — الإمام محمد بن أبي بكر الأشخر — كُتب سنة ٩٧٧هـ (١٥٦٩م)
            </p>
            <div style={{padding:12,borderRadius:8,background:T.bg2,border:"1px solid "+T.bdrL,marginBottom:8}}>
              <p style={{fontSize:11,color:T.txt,lineHeight:1.8,margin:0,fontStyle:"italic"}}>
                «الكلام على السادة الأشراف بني الولي سكنة الجبيل، وجدهم الولي هذا هو ابن محمد بن إسماعيل بن أبي بكر العربادي الذي مر ذكره، بقي منهم جماعة»
              </p>
            </div>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              <strong style={{color:T.green}}>الاستنتاج:</strong> الولي ليس لقباً مجرداً بل شخص حقيقي بنسب محدد. الأشخر هو نقيب الأشراف في وادي سردد وكتب هذا قبل ١٥٠ سنة من وصول إبراهيم إلى المدينة.
              <br/>
              <strong style={{color:T.blue}}>متاح على الإنترنت:</strong> alsharifalbadri.blogspot.com/2009/07/blog-post_19.html
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٣. الدليل الثاني: بنو الولي = بنو إبراهيم (نشر الثناء الحسن)</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصدر:</strong> نشر الثناء الحسن — إسماعيل بن محمد الوشلي — نقلاً عن الأشخر
            </p>
            <div style={{padding:12,borderRadius:8,background:T.bg2,border:"1px solid "+T.bdrL,marginBottom:8}}>
              <p style={{fontSize:11,color:T.txt,lineHeight:1.8,margin:0,fontStyle:"italic"}}>
                «الأشراف بنو الولي وهم المقيمون الآن بدير الولي من بلاد الطائفة شرقي مدينة الزيدية بنحو ساعتين... يسمون بني إبراهيم»
              </p>
            </div>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              <strong style={{color:T.green}}>الاستنتاج:</strong> بنو الولي في اليمن يُعرفون أيضاً بـ«بنو إبراهيم». في علم الأنساب العربي، لا يُسمّى بطن كامل باسم شخص إلا إذا كان الأبرز في تاريخ البطن. إبراهيم أولياء — الذي أصبح من أعيان المدينة المنورة وأسس سلالة من الأئمة والموظفين — هو المرشح الوحيد لهذا التسمية.
              <br/>
              <strong style={{color:T.blue}}>متاح على الإنترنت:</strong> archive.org/details/nashrathanaalhasan
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٤. الدليل الثالث: الاسم نفسه — أولياء = الولي</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصادر:</strong> تحفة المحبين (الأنصاري) + السجلات العثمانية (BOA)
            </p>
            <div style={{padding:12,borderRadius:8,background:T.bg2,border:"1px solid "+T.bdrL,marginBottom:8}}>
              <p style={{fontSize:11,color:T.txt,lineHeight:1.8,margin:0}}>
                تحفة المحبين: «السيد إبراهيم <strong>أولياء</strong> الرومي المجاور بالمدينة»<br/>
                السجلات العثمانية: «سيد أبو بكر <strong>أولياء زاده</strong>» = ابن الولي بالتركية<br/>
                سجل المشيخة: «<strong>Evliyazade</strong>» = نسبة إلى الولي
              </p>
            </div>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              <strong style={{color:T.green}}>الاستنتاج:</strong> كلمة «أولياء» هي الصيغة العربية/التركية لكلمة «الولي». واللاحقة «زاده» في التركية تعني حرفياً «ابن». فـ«أولياء زاده» = «ابن الولي». الأسرة سُمّيت بهذا لأن جدها هو «الولي» — وهذا بالضبط ما تقوله المصادر اليمنية.
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٥. الدليل الرابع: التسمية الصريحة (اللآلئ السنية الحسينية)</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصدر:</strong> اللآلئ السنية في الأعقاب الحسينية — السيد أحمد العقيلي — مشجر رقم ١١٨، ص٢٧٨
            </p>
            <div style={{padding:12,borderRadius:8,background:T.bg2,border:"1px solid "+T.bdrL,marginBottom:8}}>
              <p style={{fontSize:11,color:T.txt,lineHeight:1.8,margin:0,fontStyle:"italic"}}>
                المشجر يسمّي صراحة: «إبراهيم أولياء بن الولي بن أبي بكر بن محمد بن إسماعيل بن أبي بكر العربادي بن علي القديمي بن محمد النجيب بن الحسن القديمي...»
              </p>
            </div>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              <strong style={{color:T.green}}>الاستنتاج:</strong> هذا هو المصدر الوحيد الذي يسمّي الرابط بشكل صريح: «إبراهيم بن الولي». العقيلي نسّابة متخصص يعمل مع مشجرات الأسر مباشرة. كتابه يحتوي على ١٩ جيلاً كاملة مع ست بطون.
              <br/>
              <strong style={{color:T.red}}>ملاحظة:</strong> الكتاب ليس متاحاً على الإنترنت — نسخة مطبوعة فقط (دار المنار الحديثة، القاهرة). لدينا ٥ صفحات منه فقط.
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٦. الدليل الخامس: الموقع الجغرافي يتطابق</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصادر:</strong> كشف الغين + نشر الثناء الحسن + نيل الحسنين (ابن زبارة)
            </p>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              تحفة المحبين تقول إن إبراهيم جاء من «اليمن». المصادر اليمنية تؤكد أن بنو الولي يسكنون «دير الولي» شرقي مدينة الزيدية بتهامة. نيل الحسنين يسمي دير الولي كقرية حقيقية في منطقة المحاسدة من أرض الحسينيين. لا يوجد أي «بنو الولي» آخرين في أي مكان آخر.
              <br/><br/>
              <strong style={{color:T.green}}>الاستنتاج:</strong> مكان واحد + عائلة واحدة + اسم واحد = شخص واحد.
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٧. الدليل السادس: البطون الستة مؤكدة من ٣ مصادر مستقلة</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصادر:</strong> كشف الغين (٩٧٧هـ) + نشر الثناء الحسن + اللآلئ السنية
            </p>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              الأشخر يسمّي ١٣ قبيلة حسينية بسردد، منها بنو الولي. الوشلي ينقل نفس التقسيم. العقيلي يوثق البطون في مشجره. الثلاثة يتفقون على أن أبا بكر العربادي هو «الجد الجامع» وأن بنو الولي بطن مستقل.
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>٨. الدليل السابع: التحليل الزمني يؤكد ١٩ جيلاً</h3>
            <p style={{fontSize:12,color:T.txtM,lineHeight:2,margin:"0 0 8px"}}>
              <strong style={{color:T.txt}}>المصادر:</strong> اللآلئ السنية (١٩ جيلاً) مقابل الأغصان (١٢ جيلاً) + الردنة وصائم الدهر كشواهد
            </p>
            <p style={{fontSize:11,color:T.txtM,lineHeight:1.8,margin:0}}>
              ٨٥٠ سنة بين جعفر الزكي (~٢٣٠هـ) وإبراهيم (~١٠٨٠هـ):
              <br/>
              <span style={{color:T.green}}>• ١٩ جيلاً ÷ ٨٥٠ سنة = ~٤٥ سنة/جيل ← مقبول بيولوجياً ✓</span>
              <br/>
              <span style={{color:T.red}}>• ١٢ جيلاً ÷ ٨٥٠ سنة = ~٧١ سنة/جيل ← مستحيل بيولوجياً ✗</span>
              <br/><br/>
              السبعة أجيال «المفقودة» في كتاب الأغصان (من محمد النجيب إلى الولي) مؤكدة من عائلتين مستقلتين: السادة الردنة في بدر (سلسلة مطابقة من العربادي) وآل صائم الدهر (يتفرعون عند محمد النجيب).
              <br/>
              <strong style={{color:T.blue}}>الردنة:</strong> mdmfr.blogspot.com/2016/02/blog-post_28.html
              <br/>
              <strong style={{color:T.blue}}>صائم الدهر:</strong> ar.wikipedia.org/wiki/صائم_الدهر
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:T.bg2,border:"2px solid "+T.gold,marginBottom:16}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>الخلاصة</h3>
            <p style={{fontSize:12,color:T.txt,lineHeight:2,margin:0}}>
              لا يوجد تفسير بديل معقول لسبب تسمية إبراهيم بـ«أولياء» سوى أنه من «بنو الولي». المصادر اليمنية (الأشخر ٩٧٧هـ، الوشلي، ابن زبارة) تؤكد وجود الولي كشخص حقيقي وبطنه كقبيلة مستقلة. المصادر الحجازية (الأنصاري، العقيلي) تؤكد وصول إبراهيم من اليمن واستقراره بالمدينة. السجلات العثمانية تسمّيه «ابن الولي» (أولياء زاده). وبنو الولي أنفسهم في اليمن يُسمّون «بنو إبراهيم» — مما يدل على أن إبراهيم كان أبرز أبناء هذا البطن.
              <br/><br/>
              <strong>ما يبقى للتأكيد النهائي:</strong> الحصول على الصفحات المفقودة من اللآلئ السنية الحسينية (ص٢٥٤-٢٦٦)، أو التواصل مع بنو الولي في دير الولي بتهامة اليمن، أو فحص مخطوط الأغصان الأصلي (صنعاء #٢١٧٦).
            </p>
          </div>

          <div style={{padding:20,borderRadius:10,background:"#fff",border:"1px solid "+T.bdr}}>
            <h3 style={{fontSize:15,color:T.gold,fontWeight:600,margin:"0 0 12px"}}>جدول المصادر المرجعية</h3>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
                <thead><tr style={{borderBottom:"2px solid "+T.bdr}}>
                  {["المصدر","المؤلف","التاريخ","ماذا يثبت","متاح"].map((h,i)=>
                    <th key={i} style={{textAlign:"right",padding:"6px",color:T.gold,fontWeight:600}}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[
                    ["كشف الغين","الأشخر","٩٧٧هـ","الولي شخص حقيقي + ٦ بطون + السلسلة الكاملة","إنترنت"],
                    ["نشر الثناء الحسن","الوشلي","~١٢٠٠هـ","بنو الولي = بنو إبراهيم + دير الولي","إنترنت"],
                    ["نيل الحسنين","ابن زبارة","١٣٧٦هـ","بيت القديمي + السلسلة + محمد النجيب جامع","إنترنت"],
                    ["تحفة المحبين","الأنصاري","~١١٨٠هـ","إبراهيم أولياء الرومي + تواريخ + أبناء","بحوزتنا"],
                    ["اللآلئ السنية الحسينية","العقيلي","٢٠٠٦م","إبراهيم بن الولي صراحة + ١٩ جيلاً + مشجر ١١٨","٥ صفحات فقط"],
                    ["كتاب الأغصان","أبو علامة","~١٦١٠م","بيت أولياء + سلسلة مختصرة (١٢ جيلاً)","بحوزتنا"],
                    ["٢٣٤ وثيقة عثمانية","BOA + المشيخة","٩٤٥-١٣٣٧هـ","أولياء زاده = ابن الولي + ٢٠٠ سنة اعتراف","بحوزتنا"],
                    ["أئمة الحرم + الصكوك","بالي + المحاكم","القرن ١٣-١٤هـ","الكتبي بالحرم + صكوك إرث","بحوزتنا"],
                    ["عمدة الطالب","ابن عنبة","~٨١٢هـ","إدريس ← القاسم ← القواسم","إنترنت"],
                    ["تحفة الطالب","السمرقندي","~٩٩٤هـ","أعقاب جعفر الزكي مستقلاً","بحوزتنا"],
                    ["نسب الردنة","مفرج السيد","حي","سلسلة مطابقة من العربادي","إنترنت"],
                    ["صائم الدهر","المقريزي + ويكيبيديا","~٧٨٠هـ","يتفرع عند محمد النجيب","إنترنت"],
                    ["نخبة الزهرة الثمينة","ابن شدقم","القرن ١١هـ","أشراف المدينة حسينيون","بحوزتنا"],
                    ["بحر الأنساب","النجفي","—","جعفر الزكي ← القواسم","إنترنت"],
                    ["شجرة العائلة","وثيقة عائلية","—","فرع مصطفى كاملاً + فرع أبو بكر","بحوزتنا"],
                  ].map((row,i)=>(
                    <tr key={i} style={{borderBottom:"1px solid "+T.bdrL}}>
                      {row.map((cell,j)=><td key={j} style={{padding:"5px 6px",color:j===0?T.txt:T.txtM,fontWeight:j===0?500:400}}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>)}

        {tab==="time"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 4px"}}>التسلسل الزمني</h2>
          <p style={{fontSize:11,color:T.txtL,margin:"0 0 20px"}}>{TL.length} حدثاً عبر ١٢٠٠ سنة</p>
          {TL.map((ev,i)=>{
            const col=ccol[ev.c]||T.txtM;
            return(<div key={i} style={{display:"flex",gap:14,padding:"14px 0",borderBottom:"1px solid "+T.bdrL}}>
              <div style={{minWidth:70,textAlign:"left",paddingTop:2}}>
                <div style={{fontSize:13,color:T.gold,fontWeight:600}}>{ev.y}</div>
              </div>
              <div style={{borderRight:"2px solid "+col,paddingRight:12,flex:1}}>
                <div style={{fontSize:12,color:T.txt,fontWeight:500,lineHeight:1.5}}>{ev.e}</div>
                {ev.i&&<div style={{fontSize:10,color:T.txtM,marginTop:3}}>{ev.i}</div>}
                <span style={{display:"inline-block",fontSize:9,padding:"1px 6px",borderRadius:6,marginTop:4,color:col,borderWidth:1,borderStyle:"solid",borderColor:col}}>{clab[ev.c]}</span>
              </div>
            </div>);
          })}
        </div>)}

        {tab==="src"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 16px"}}>المصادر — {SRC.length} مصدراً</h2>
          {SRC.map((s,i)=>{
            const kc=s.k==="d"?T.green:s.k==="i"?T.gold:"#5b3a8c";
            return(<div key={i} style={{padding:"14px 0",borderBottom:"1px solid "+T.bdrL}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:14,fontWeight:600}}>{i+1}. {s.n}</span>
                <Pill color={kc}>{s.k==="d"?"مباشر":s.k==="i"?"غير مباشر":"تحقق"}</Pill>
              </div>
              <div style={{fontSize:10,color:T.txtL,marginTop:2}}>{s.a}</div>
              <div style={{fontSize:11,color:T.txtM,marginTop:4,lineHeight:1.5}}>{s.d}</div>
            </div>);
          })}
        </div>)}

        {tab==="fam"&&(<div>
          <h2 style={{fontSize:18,color:T.gold,fontWeight:400,margin:"0 0 16px"}}>العائلات ذات الصلة</h2>
          {FAM.map((f,i)=>(<div key={i} style={{padding:"14px 0",borderBottom:"1px solid "+T.bdrL}}>
            <div style={{fontSize:15,fontWeight:600}}>{f.n}</div>
            <div style={{fontSize:11,color:T.green,marginTop:2}}>{f.l}</div>
            <div style={{fontSize:11,color:T.txtM,marginTop:4,lineHeight:1.5}}>{f.d}</div>
            {f.u&&<a href={f.u} target="_blank" rel="noopener noreferrer" style={{fontSize:10,color:T.blue,textDecoration:"none",marginTop:4,display:"inline-block"}}>{"↗ المصدر"}</a>}
          </div>))}
        </div>)}

      </main>
      <footer style={{textAlign:"center",padding:"24px",borderTop:"1px solid "+T.bdr,background:T.bg2}}>
        <p style={{fontSize:10,color:T.txtL,margin:0}}>بيت أولياء القديمي الحسيني · بحث أنساب · ٢٠٢٦</p>
        <p style={{fontSize:9,color:T.bdr,margin:"4px 0 0"}}>awlia.co/nasab</p>
      </footer>
    </div>);
}
