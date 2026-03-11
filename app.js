const STORAGE_KEY="yks-math-command-center:v1";const SCHEMA_VERSION=2;const PLAN_START=new Date("2026-03-16T00:00:00");
const DAY_NAMES=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
const WEEK_BLUEPRINT=[
["Temel","Temel işlem, negatif sayılar, bölünebilme",90,"İşlem hızı ve işaret kontrolü temizlenmiş olmalı."],
["Temel","Kesirler, ondalıklar, yüzdeler",100,"Dönüşümler düşünmeden yapılabilir hale gelmeli."],
["Temel","Oran-orantı ve ortalama",110,"Denklem kurma tahminle değil düzenli yapılmalı."],
["Temel","Üslü ve köklü ifadeler",110,"Kurallar karışmadan uygulanabiliyor olmalı."],
["Temel","Cebirsel ifadeler ve özdeşlikler",110,"Açma ve sadeleştirme düzgün olmalı."],
["Temel","Çarpanlara ayırma",120,"Kalıplar daha hızlı fark edilebilmeli."],
["Temel","Birinci dereceden denklemler ve denklem sistemleri",120,"Çözümler temiz gidip kontrol edilebilmeli."],
["Temel","Eşitsizlikler ve mutlak değer",120,"Aralık mantığı gerçekten oturmalı."],
["Problem Temeli","Sayı ve basamak problemleri",130,"Metni denklem diline çevirmek kolaylaşmalı."],
["Problem Temeli","Yaş, yüzde, kar-zarar problemleri",130,"Değişken kurmadan soruya girilmemeli."],
["Problem Temeli","Hız, işçi-havuz ve karışım",140,"Birimler ve ilişki düzeni korunmalı."],
["Problem Temeli","Tablo, grafik ve karma tekrar",140,"Formule atlamadan once soru okunmali."],
["TYT Çekirdeği","Kümeler ve Kartezyen çarpım",120,"Sembolik dilden çekinmeden ilerlenmeli."],
["TYT Çekirdeği","Mantık ve temel sayma",120,"Durumlar net ayrılabilmeli."],
["TYT Çekirdeği","Olasılık ve istatistik temeli",130,"Ezberden önce durum sayımı oturmalı."],
["TYT Çekirdeği","Fonksiyonlara giriş",130,"Eşleme, gösterim ve grafik dili anlaşılmalı."],
["Geometri Temeli","Doğrular, açılar ve temel geometri",120,"Şekil çizmeden soru çözülmemeli."],
["Geometri Temeli","Üçgenler 1",130,"Açı ve kenar ilişkileri oturmalı."],
["Geometri Temeli","Üçgenler 2",130,"Benzerlik, alan ve özel üçgenler güçlenmeli."],
["Geometri Temeli","Dörtgenler ve çokgenler",130,"Şekil özellikleri bütün olarak görülmeli."],
["Geometri Temeli","Çember ve daire",130,"Yay, açı ve teğet bağlantıları dikkatli kurulmalı."],
["Geometri Temeli","Analitik ve katı cisimlere giriş",120,"Koordinatla karmaşıklık azaltılmalı."],
["TYT Kapanışı","Karma TYT problem setleri",160,"Problem ve geometri birlikte çözülmeli."],
["TYT Kapanışı","Mini TYT denemeleri ve onarım",160,"Süre tutma ve yanlış analizi başlamalı."],
["TYT Pekiştirme","Haftada 1 TYT deneme + cebir onarımı",180,"Tek bir düzenli yanlış defteri tutulmalı."],
["TYT Pekiştirme","Haftada 1 TYT deneme + geometri onarımı",180,"Şekil kurma ve atlanan adımlar düzeltilmeli."],
["TYT Pekiştirme","Yeni nesil problem setleri",180,"Uzun metinlerde panik azaltılmalı."],
["TYT Pekiştirme","ÖSYM tarzı soru incelemesi",170,"Yalnız zorluk değil soru dili de tanınmalı."],
["TYT Pekiştirme","Hız kazanma haftası",190,"Kolay sorularda harcanan süre düşmeli."],
["TYT Pekiştirme","Zayıf konu onarım haftası",170,"AYT ağırlaşmadan önce kırmızılar kapanmalı."],
["AYT Kurulum","Fonksiyonları derinleştirme",170,"Fonksiyon omurgası kurulmuş olmalı."],
["AYT Kurulum","Polinomlar",180,"Yapı ve kalan mantığı fark edilmeli."],
["AYT Kurulum","İkinci derece denklemler ve parabol",180,"Cebir-grafik bağlantısı kurulmalı."],
["AYT Kurulum","Diziler ve karmaşık sayılar",170,"Aşinalık kazanılmalı, gereksiz zorlama yapılmamalı."],
["AYT Kurulum","Permütasyon, kombinasyon, binom",180,"Durumlar yazılmadan hesaba girilmemeli."],
["AYT Kurulum","İleri olasılık",180,"Sayma hatası ile konu hatası ayrıştırılmalı."],
["AYT Kurulum","Trigonometri temeli",170,"Birim çember ve temel bağıntılar oturmalı."],
["AYT Kurulum","Trigonometrik özdeşlik ve denklemler",170,"Dönüşüm seçimi pratikleşmeli."],
["AYT Kurulum","Logaritma",170,"Ters düşünme ve tanım kümesi dikkati gelişmeli."],
["AYT Kurulum","Analitik geometri: doğru ve parabol",170,"Grafik ve denklem arasında rahat geçiş yapılmalı."],
["AYT Kurulum","Limit",180,"Davranış önce anlaşılmalı, sonra cebirle pekişmeli."],
["AYT Kurulum","Süreklilik ve limit tekrar setleri",180,"Tekrarlayan kalıplar iyice görülmeli."],
["AYT Kurulum","Türev temeli",180,"Eğim mantığı önce oturmalı."],
["AYT Kurulum","Türev uygulamaları",190,"Artma-azalma ve ekstremum tekrar gerektirir."],
["AYT Kapanışı","İntegral temeli",180,"Alan mantığı tekniğin önünde gelmeli."],
["AYT Kapanışı","İntegral uygulamaları ve alan",180,"Türev-integral bağlantısı kurulmalı."],
["AYT Kapanışı","Karma AYT cebir tekrarı",190,"Fonksiyon, logaritma ve polinom bağları sınanmalı."],
["AYT Kapanışı","Karma AYT analiz tekrarı",190,"Soru seçimi de çalışılmalı."],
["AYT Kapanışı","2 TYT deneme + 1 AYT branş deneme",200,"TYT düşmeden AYT yükselmeli."],
["AYT Kapanışı","Zayıf konu onarım dönemi başlangıcı",180,"En etkili tamirler seçilmeli."],
["Deneme Modu","Haftada 2 TYT tam deneme",210,"Hız artarken doğruluk korunmalı."],
["Deneme Modu","Haftada 2 AYT branş deneme",210,"Yanlışlar konu bazlı ayıklanmalı."],
["Deneme Modu","Zayıf fonksiyon, trigonometri ve logaritma",180,"Çatlaklar hedefli setlerle kapanmalı."],
["Deneme Modu","Zayıf geometri ve olasılık",180,"Tüm kitap değil, hedefli bölüm seçilmeli."],
["Deneme Modu","Haftada 3 TYT tam deneme",220,"Geçişler ve dayanıklılık oturmalı."],
["Deneme Modu","Haftada 2 AYT tam ya da branş deneme",210,"Zorluk ile inceleme dengeli gitmeli."],
["Deneme Modu","Hız, soru seçimi ve süre yönetimi",180,"Bırakılacak ve geri dönülecek sorular ayıklanmalı."],
["Deneme Modu","Geçmiş ÖSYM tarzı kâğıt incelemesi",180,"Gerçek kalıplar ve tuzak dil tanınmalı."],
["Son Düzlük","Sırayla TYT ve AYT tam deneme",230,"Sınav ritmi hafta boyunca prova edilmeli."],
["Son Düzlük","Yanlış defteri tekrarı",170,"Tekrarlayan yanlışlar temizlenmeli."],
["Son Düzlük","Sadece son konu boşlukları",160,"Yeni kitap ve yeni sistem açılmamalı."],
["Son Düzlük","Sık gelen zor soru tipleri",180,"Yüksek getirili kalıplar öncelenmeli."],
["Son Düzlük","Kontrollü denemeler ve inceleme",150,"Hacim biraz düşüp netlik artmalı."],
["Son Düzlük","Hafif tekrar modu",120,"Uyku ve düzen korunmalı."],
["Son Düzlük","Formül ve kısa not turu",90,"Tekrarlar kısa ama net olmalı."],
["Son Düzlük","Sakin son tekrar",70,"Panik yok, güven korunacak."],
["Son Düzlük","Sınav haftası provası",50,"Son temiz tekrar yapılıp tempo düşürülecek."],
["Son Düzlük","Sınav haftası",20,"Uyku, beslenme ve sakinlik ön planda kalacak."]
];
const CHECKLIST_TEMPLATE=[
["Konu bloğu","Haftanın konu öğrenme kısmını tamamla ve kısa not çıkar."],
["Hedef soru seti","Kolay ve orta düzey sorularla kalıbı oturt."],
["Karma tekrar","Yeni konuyu eski konularla karıştırarak pekiştir."],
["Süreli çalışma","En az bir süreli set ya da deneme bölümü çöz."],
["Yanlış incelemesi","Yanlışları tekrar kur ve neden yapıldığını yaz."],
["Hafif toparlama","Bir günü daha hafif tekrar ve düzenleme için kullan."]
];
const MASTERY_BLUEPRINT=[
{category:"Aritmetik",topics:[{id:"arithmetic-operations",name:"İşlemler"},{id:"arithmetic-fractions",name:"Kesirler"},{id:"arithmetic-percent",name:"Yüzde"},{id:"arithmetic-ratio-and-proportion",name:"Oran ve orantı"},{id:"arithmetic-exponents-and-roots",name:"Üsler ve kökler"}]},
{category:"Problemler",topics:[{id:"problems-number-and-digit",name:"Sayı ve basamak"},{id:"problems-age-and-profit",name:"Yaş ve kar-zarar"},{id:"problems-speed-and-work",name:"Hız ve işçi-havuz"},{id:"problems-mixture",name:"Karışım"},{id:"problems-tables-and-graphs",name:"Tablo ve grafik"}]},
{category:"Cebir",topics:[{id:"algebra-equations",name:"Denklemler"},{id:"algebra-inequalities",name:"Eşitsizlikler"},{id:"algebra-functions",name:"Fonksiyonlar"},{id:"algebra-polynomials",name:"Polinomlar"},{id:"algebra-logarithms",name:"Logaritma"}]},
{category:"Geometri",topics:[{id:"geometry-angles-and-lines",name:"Açılar ve doğrular"},{id:"geometry-triangles",name:"Üçgenler"},{id:"geometry-quadrilaterals",name:"Dörtgenler"},{id:"geometry-circles",name:"Çember ve daire"},{id:"geometry-analytic-geometry",name:"Analitik geometri"}]},
{category:"AYT",topics:[{id:"ayt-counting-and-probability",name:"Sayma ve olasılık"},{id:"ayt-trigonometry",name:"Trigonometri"},{id:"ayt-limits",name:"Limit"},{id:"ayt-derivatives",name:"Türev"},{id:"ayt-integrals",name:"İntegral"}]}
];
const LEVELS=[{label:"Kırmızı",value:0},{label:"Kırılgan",value:1},{label:"Gelişiyor",value:2},{label:"Sağlam",value:3}];
const CONFIDENCE_LABELS={fragile:"Kırılgan",building:"Gelişiyor",solid:"Sağlam"};
const CONFIDENCE_EMOJI={fragile:"😟",building:"🔨",solid:"💎"};
const EXAM_TYPE_LABELS={"TYT Math":"TYT Matematik","AYT Math":"AYT Matematik","TYT Matematik":"TYT Matematik","AYT Matematik":"AYT Matematik"};
const MISTAKE_TYPE_LABELS={"Concept gap":"Konu eksiği",Careless:"Dikkat hatası",Speed:"Hız problemi",Interpretation:"Soru yorumlama",Memory:"Bilgi hatırlama","Geometry visualization":"Geometriyi görselleştirme"};
const TOPIC_SUGGESTIONS=[...new Set([...WEEK_BLUEPRINT.map(([,focus])=>focus),...MASTERY_BLUEPRINT.flatMap(group=>group.topics.map(topic=>topic.name))])].sort((a,b)=>a.localeCompare(b,'tr'));
const RESOURCE_URLS={yksHub:"https://ogmmateryal.eba.gov.tr/YKSHazirlik",konuAnlatim:"https://ogmmateryal.eba.gov.tr/yks-konu-anlatim",konuOzetleri:"https://ogmmateryal.eba.gov.tr/mebi-konu-ozetleri",taramaTestleri:"https://ogmmateryal.eba.gov.tr/mebi-tarama-testi-kitaplari",konuPekistirme:"https://ogmmateryal.eba.gov.tr/yks-konu-pekistirme",ucAdimDeneme:"https://ogmmateryal.eba.gov.tr/yks-uc-adim-deneme",cikmisKitaplari:"https://ogmmateryal.eba.gov.tr/yks-cikmis-soru-kitaplari",cikmisCozumleri:"https://ogmmateryal.eba.gov.tr/yks-cikmis-soru-cozumleri",dinamikMath:"https://ogmmateryal.eba.gov.tr/dinamik-uygulamalar/matematik",etkilesimliMath:"https://ogmmateryal.eba.gov.tr/etkilesimli-kitaplar/matematik",materyalSeti:"https://ogmmateryal.eba.gov.tr/matematik-materyal-seti",osymCikmis:"https://www.osym.gov.tr/tr,15164/yks-cikmis-sorular.html"};
const AYT_SCOPE_HINTS=["ayt","trigonometri","logaritma","limit","süreklilik","sureklilik","türev","turev","integral","parabol","polinom","karmaşık","karmasik","binom","permütasyon","permutasyon","kombinasyon","diziler"];
const EXAM_MODE_HINTS=["deneme","ösym","osym","sınav","sinav","süre yönetimi","sure yonetimi","soru seçimi","soru secimi","yanlış defteri","yanlis defteri","prova","kâğıt","kağıt","kontrollü","kontrollu","sık gelen zor soru","hafif tekrar","son tekrar","formül","formul"];
const PRACTICE_MODE_HINTS=["onarım","onarim","zayıf","zayif","pekiştirme","pekistirme","karma tekrar","problem set","tekrar set"];
const VISUAL_TOPIC_HINTS=["geometri","üçgen","ucgen","çember","cember","daire","analitik","parabol","fonksiyon","trigonometri","limit","türev","turev","integral","doğru","dogru","açı","aci","grafik"];
const STAGE_COPY={
  foundation:{label:"Önce kavram",summary:"Önce konu özeti ve çözümlü örneklerle kalıbı temizle, sonra temel testlere geç.",micro:"Özet + temel test"},
  building:{label:"Soru hacmi",summary:"Şimdi orta seviye soru, kazanım testi ve karışık tekrar ile hızı yükselt.",micro:"Karışık soru + tarama"},
  exam:{label:"Sınav modu",summary:"Bu aşamada çıkmış soru, deneme ve yanlış analizi daha değerli.",micro:"Çıkmış + deneme"}
};

let state=loadState();


// ===== DOM NODES =====
const n={
profileName:document.getElementById("profileName"),trackSelect:document.getElementById("trackSelect"),
examDate:document.getElementById("examDate"),jumpCurrentWeek:document.getElementById("jumpCurrentWeek"),
exportData:document.getElementById("exportData"),importData:document.getElementById("importData"),
importFile:document.getElementById("importFile"),resetTracker:document.getElementById("resetTracker"),
countdownDays:document.getElementById("countdownDays"),
dashPhaseValue:document.getElementById("dashPhaseValue"),dashProgressValue:document.getElementById("dashProgressValue"),
dashMasteryValue:document.getElementById("dashMasteryValue"),dashWeeklyValue:document.getElementById("dashWeeklyValue"),
greetingTitle:document.getElementById("greetingTitle"),greetingSubtitle:document.getElementById("greetingSubtitle"),
todayMeta:document.getElementById("todayMeta"),
todaySteps:document.getElementById("todaySteps"),todayResearchPanel:document.getElementById("todayResearchPanel"),
phaseRail:document.getElementById("phaseRail"),weekList:document.getElementById("weekList"),
weekBadge:document.getElementById("weekBadge"),weekTitle:document.getElementById("weekTitle"),
weekMeta:document.getElementById("weekMeta"),weekFocus:document.getElementById("weekFocus"),
weekCheckpoint:document.getElementById("weekCheckpoint"),questionGoal:document.getElementById("questionGoal"),
actualQuestions:document.getElementById("actualQuestions"),confidenceSelect:document.getElementById("confidenceSelect"),
completeToggle:document.getElementById("completeToggle"),weekProgressLabel:document.getElementById("weekProgressLabel"),
weekProgressBar:document.getElementById("weekProgressBar"),checklistGrid:document.getElementById("checklistGrid"),
dailyPlanGrid:document.getElementById("dailyPlanGrid"),weekNote:document.getElementById("weekNote"),weekResearchPanel:document.getElementById("weekResearchPanel"),
prevWeek:document.getElementById("prevWeek"),nextWeek:document.getElementById("nextWeek"),
priorityBoard:document.getElementById("priorityBoard"),masterySummary:document.getElementById("masterySummary"),
masteryGrid:document.getElementById("masteryGrid"),
sessionForm:document.getElementById("sessionForm"),sessionDate:document.getElementById("sessionDate"),
sessionTopic:document.getElementById("sessionTopic"),sessionHours:document.getElementById("sessionHours"),
sessionQuestions:document.getElementById("sessionQuestions"),sessionNote:document.getElementById("sessionNote"),
sessionSummary:document.getElementById("sessionSummary"),sessionTableBody:document.getElementById("sessionTableBody"),sessionResearchPanel:document.getElementById("sessionResearchPanel"),
examForm:document.getElementById("examForm"),examLogDate:document.getElementById("examLogDate"),
examType:document.getElementById("examType"),examScore:document.getElementById("examScore"),
examDuration:document.getElementById("examDuration"),examNote:document.getElementById("examNote"),
examSummary:document.getElementById("examSummary"),examTableBody:document.getElementById("examTableBody"),
examChart:document.getElementById("examChart"),
mistakeForm:document.getElementById("mistakeForm"),mistakeDate:document.getElementById("mistakeDate"),
mistakeTopic:document.getElementById("mistakeTopic"),mistakeType:document.getElementById("mistakeType"),
mistakeFix:document.getElementById("mistakeFix"),mistakeNote:document.getElementById("mistakeNote"),
mistakeSummary:document.getElementById("mistakeSummary"),mistakeTypeStats:document.getElementById("mistakeTypeStats"),mistakeResearchPanel:document.getElementById("mistakeResearchPanel"),
mistakeTableBody:document.getElementById("mistakeTableBody"),
sidebarUserName:document.getElementById("sidebarUserName"),sidebarUserLevel:document.getElementById("sidebarUserLevel"),
userAvatar:document.getElementById("userAvatar"),xpBarFill:document.getElementById("xpBarFill"),
xpText:document.getElementById("xpText"),streakCount:document.getElementById("streakCount"),
mobileStreakCount:document.getElementById("mobileStreakCount"),
roadmapBadge:document.getElementById("roadmapBadge"),todayBadge:document.getElementById("todayBadge"),
hamburgerBtn:document.getElementById("hamburgerBtn"),sidebar:document.getElementById("sidebar"),topicSuggestions:document.getElementById("topicSuggestions"),
};

// ===== NAVIGATION =====
let sidebarOverlay;
function setupNav(){
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const sec=btn.dataset.section;
      document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.content-page').forEach(p=>p.classList.remove('active'));
      const page=document.getElementById('page-'+sec);
      if(page)page.classList.add('active');
      closeMobileSidebar();
      if(sec==='today')renderTodayPanel();
      if(sec==='roadmap')renderRoadmap();
      if(sec==='mastery')renderMastery();
      if(sec==='mistakes')renderMistakes();
      if(sec==='records'){renderSessions();renderExams();}
    });
  });
  sidebarOverlay=document.createElement('div');
  sidebarOverlay.className='sidebar-overlay';
  document.body.appendChild(sidebarOverlay);
  n.hamburgerBtn?.addEventListener('click',()=>{
    n.sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('show');
  });
  sidebarOverlay.addEventListener('click',closeMobileSidebar);
}
function closeMobileSidebar(){
  n.sidebar?.classList.remove('open');
  sidebarOverlay?.classList.remove('show');
}

// ===== TOAST =====
function showToast(icon,msg){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');t.className='toast';
  t.innerHTML=`<span class="toast-icon">${icon}</span>${esc(msg)}`;
  c.appendChild(t);setTimeout(()=>t.remove(),3200);
}

// ===== CONFETTI =====
function fireConfetti(){
  const c=document.getElementById('confettiCanvas');
  const colors=['#6366f1','#8b5cf6','#ec4899','#10b981','#f59e0b','#06b6d4'];
  for(let i=0;i<40;i++){
    const p=document.createElement('div');p.className='confetti-piece';
    p.style.left=Math.random()*100+'%';p.style.top='-10px';
    p.style.width=(6+Math.random()*6)+'px';p.style.height=(6+Math.random()*6)+'px';
    p.style.background=colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration=(2+Math.random()*2)+'s';
    p.style.animationDelay=Math.random()*0.5+'s';
    c.appendChild(p);setTimeout(()=>p.remove(),4000);
  }
}

// ===== GAMIFICATION =====
function computeXP(){
  let xp=0;
  xp+=state.weeks.filter(w=>w.complete).length*50;
  xp+=state.sessions.length*10;
  xp+=state.exams.length*25;
  xp+=state.mistakes.length*5;
  xp+=state.mastery.filter(t=>t.level>=2).length*15;
  xp+=state.mastery.filter(t=>t.level>=3).length*20;
  state.weeks.forEach(w=>{xp+=w.checklist.filter(c=>c.done).length*5;});
  return xp;
}
function getLevel(xp){return Math.floor(xp/200)+1;}
function renderGamification(){
  const xp=computeXP();const lvl=getLevel(xp);
  const xpInLvl=xp%200;const pct=Math.min(100,(xpInLvl/200)*100);
  n.sidebarUserLevel.textContent=`Seviye ${lvl}`;
  n.xpBarFill.style.width=pct+'%';
  n.xpText.textContent=`${xpInLvl} / 200 XP`;
  const name=state.profile.name||'Öğrenci';
  n.sidebarUserName.textContent=name;
  n.userAvatar.textContent=name.charAt(0).toUpperCase();
  const streak=computeStudyStreak();
  n.streakCount.textContent=streak;
  if(n.mobileStreakCount)n.mobileStreakCount.textContent=streak;
}

// ===== INITIALIZE =====
function initialize(){
  setupNav();wireControls();seedDates();renderAll();
  // greeting
  const h=new Date().getHours();let g='Merhaba';
  if(h<6)g='İyi geceler 🌙';else if(h<12)g='Günaydın ☀️';
  else if(h<18)g='İyi çalışmalar 💪';else g='İyi akşamlar 🌟';
  const name=state.profile.name||'';
  n.greetingTitle.textContent=name?`${g}, ${name}!`:`${g}! 👋`;
  n.greetingSubtitle.textContent='Bugün hedeflerine bir adım daha yaklaşacaksın.';
}
initialize();


// ===== WIRE CONTROLS =====
function wireControls(){
  n.profileName.addEventListener("input",e=>{state.profile.name=e.target.value;persist();renderSummary();renderGamification();
    n.greetingTitle.textContent=e.target.value?`Merhaba, ${e.target.value}! 👋`:'Merhaba! 👋';});
  n.trackSelect.addEventListener("change",e=>{state.profile.track=e.target.value;persist();renderSummary();renderPriorityBoard();});
  n.examDate.addEventListener("change",e=>{state.profile.examDate=e.target.value;persist();renderSummary();});
  n.jumpCurrentWeek.addEventListener("click",()=>{state.selectedWeekId=getCurrentWeekId();persist();renderRoadmap();});
  n.exportData.addEventListener("click",exportState);
  n.importData.addEventListener("click",()=>n.importFile.click());
  n.importFile.addEventListener("change",importState);
  n.resetTracker.addEventListener("click",resetState);
  n.prevWeek.addEventListener("click",()=>shiftWeek(-1));
  n.nextWeek.addEventListener("click",()=>shiftWeek(1));
  n.questionGoal.addEventListener("change",e=>{getSelectedWeek().questionGoal=toNum(e.target.value);persist();renderSummary();renderTodayPanel();renderPriorityBoard();renderRoadmapList();});
  n.actualQuestions.addEventListener("change",e=>{getSelectedWeek().actualQuestions=toNum(e.target.value);persist();renderSummary();renderTodayPanel();renderPriorityBoard();renderRoadmapList();});
  n.confidenceSelect.addEventListener("change",e=>{getSelectedWeek().confidence=e.target.value;persist();renderTodayPanel();renderRoadmapList();});
  n.completeToggle.addEventListener("change",e=>{
    const w=getSelectedWeek();w.complete=e.target.checked;persist();
    if(w.complete){fireConfetti();showToast('🎉',`Hafta ${w.id} tamamlandı! Harikasın!`);}
    renderSummary();renderRoadmapList();renderPhaseRail();renderGamification();
  });
  n.weekNote.addEventListener("input",e=>{getSelectedWeek().note=e.target.value;persist();});
  n.checklistGrid.addEventListener("change",e=>{
    const t=e.target;if(!(t instanceof HTMLInputElement))return;
    const idx=Number(t.dataset.index);const w=getSelectedWeek();
    w.checklist[idx].done=t.checked;persist();
    if(t.checked)showToast('✅','Adım tamamlandı! +5 XP');
    renderWeekDetail();renderSummary();renderPriorityBoard();renderGamification();
  });
  n.dailyPlanGrid.addEventListener("input",e=>{
    const t=e.target;if(!(t instanceof HTMLTextAreaElement))return;
    getSelectedWeek().dailyTasks[Number(t.dataset.index)].task=t.value;persist();renderTodayPanel();
  });
  n.weekList.addEventListener("click",e=>{
    const t=e.target;const item=t instanceof HTMLElement?t.closest("[data-week-id]"):null;
    if(!item)return;state.selectedWeekId=Number(item.dataset.weekId);persist();renderRoadmap();
  });
  n.sessionTopic.addEventListener("input",renderInputResearchPanels);
  n.mistakeTopic.addEventListener("input",renderInputResearchPanels);
  n.sessionForm.addEventListener("submit",e=>{
    e.preventDefault();const topic=n.sessionTopic.value.trim();if(!topic)return;
    state.sessions.unshift({id:safeId(),date:n.sessionDate.value||todayISO(),topic,
      hours:toNum(n.sessionHours.value),questions:toNum(n.sessionQuestions.value),note:n.sessionNote.value.trim()});
    n.sessionForm.reset();seedDates();persist();
    showToast('📚','Oturum kaydedildi! +10 XP');
    renderSummary();renderSessions();renderGamification();renderInputResearchPanels();
  });
  n.sessionTableBody.addEventListener("click",e=>{
    const t=e.target;if(!(t instanceof HTMLElement)||t.dataset.removeType!=="session")return;
    state.sessions=state.sessions.filter(s=>s.id!==t.dataset.id);persist();renderSummary();renderSessions();renderGamification();
  });
  n.examForm.addEventListener("submit",e=>{
    e.preventDefault();
    state.exams.unshift({id:safeId(),date:n.examLogDate.value||todayISO(),type:n.examType.value,
      score:clamp(toNum(n.examScore.value),0,40),duration:toNum(n.examDuration.value),note:n.examNote.value.trim()});
    n.examForm.reset();seedDates();persist();
    showToast('🏆','Deneme kaydedildi! +25 XP');fireConfetti();
    renderSummary();renderExams();renderGamification();
  });
  n.examTableBody.addEventListener("click",e=>{
    const t=e.target;if(!(t instanceof HTMLElement)||t.dataset.removeType!=="exam")return;
    state.exams=state.exams.filter(s=>s.id!==t.dataset.id);persist();renderSummary();renderExams();renderGamification();
  });
  n.mistakeForm.addEventListener("submit",e=>{
    e.preventDefault();const topic=n.mistakeTopic.value.trim();const fix=n.mistakeFix.value.trim();
    if(!topic||!fix)return;
    state.mistakes.unshift({id:safeId(),date:n.mistakeDate.value||todayISO(),topic,
      type:n.mistakeType.value,fix,note:n.mistakeNote.value.trim()});
    n.mistakeForm.reset();seedDates();persist();
    showToast('🔬','Hata kaydedildi! Hatadan öğrenmek güçtür! +5 XP');
    renderSummary();renderPriorityBoard();renderMistakes();renderGamification();renderInputResearchPanels();
  });
  n.mistakeTableBody.addEventListener("click",e=>{
    const t=e.target;if(!(t instanceof HTMLElement)||t.dataset.removeType!=="mistake")return;
    state.mistakes=state.mistakes.filter(s=>s.id!==t.dataset.id);persist();renderSummary();renderPriorityBoard();renderMistakes();renderGamification();
  });
  n.masteryGrid.addEventListener("click",e=>{
    const t=e.target;if(!(t instanceof HTMLElement)||t.dataset.masteryId===undefined)return;
    const topic=state.mastery.find(m=>m.id===t.dataset.masteryId);if(!topic)return;
    const oldLvl=topic.level;topic.level=Number(t.dataset.level);topic.lastReviewed=todayISO();persist();
    if(topic.level>oldLvl)showToast('🧠',`${topic.name} seviyesi yükseldi!`);
    renderSummary();renderPriorityBoard();renderMastery();renderGamification();
  });
}

// ===== RENDER ALL =====
function renderAll(){
  n.profileName.value=state.profile.name;n.trackSelect.value=state.profile.track;
  n.examDate.value=state.profile.examDate;
  renderTopicSuggestions();
  renderSummary();renderTodayPanel();renderPhaseRail();renderRoadmap();
  renderPriorityBoard();renderMastery();renderSessions();renderExams();renderMistakes();renderGamification();renderInputResearchPanels();
}

// ===== RENDER SUMMARY =====
function renderSummary(){
  const cw=state.weeks.find(w=>w.id===getCurrentWeekId())||state.weeks[0];
  const done=state.weeks.filter(w=>w.complete).length;
  const mAvg=average(state.mastery.map(t=>t.level));
  const s7=state.sessions.filter(s=>daysBetween(parseDate(s.date),new Date())<=6);
  const s7q=sum(s7.map(s=>s.questions));
  const dLeft=daysUntil(state.profile.examDate);
  n.countdownDays.textContent=dLeft>=0?dLeft:'—';
  n.dashPhaseValue.textContent=cw.phase;
  n.dashProgressValue.textContent=`${done}/${state.weeks.length}`;
  n.dashMasteryValue.textContent=`${Math.round((mAvg/3)*100)}%`;
  n.dashWeeklyValue.textContent=`${s7q} soru`;
  const completed=state.weeks.filter(w=>w.complete).length;
  if(n.roadmapBadge)n.roadmapBadge.textContent=`${completed}/${state.weeks.length}`;
}

function normSearch(v){
  return String(v??'').toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i').replace(/ğ/g,'g').replace(/ş/g,'s').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ç/g,'c');
}
function hasHint(text,hints){return hints.some(h=>text.includes(normSearch(h)));}
function getResearchScope(title,phase=''){
  const text=normSearch(`${phase} ${title}`);
  if(text.includes('ayt')||hasHint(text,AYT_SCOPE_HINTS))return 'AYT matematik';
  if(text.includes('geometri'))return 'TYT matematik geometri';
  return 'TYT matematik';
}
function getResearchMode(title,phase=''){
  const text=normSearch(`${phase} ${title}`);
  if(hasHint(text,EXAM_MODE_HINTS))return 'exam';
  if(hasHint(text,PRACTICE_MODE_HINTS))return 'practice';
  return 'concept';
}
function getResearchStage({confidence='fragile',level=null,mode='concept'}){
  if(mode==='exam')return 'exam';
  if(level!==null&&level!==undefined){
    if(level<=1)return 'foundation';
    if(level===2)return 'building';
    return 'exam';
  }
  if(confidence==='solid')return 'exam';
  if(confidence==='building')return 'building';
  return 'foundation';
}
function needsVisualSupport(title,phase=''){return hasHint(normSearch(`${phase} ${title}`),VISUAL_TOPIC_HINTS);}
function getResearchKeywords(title){
  const clean=String(title||'').replace(/[()]/g,' ').replace(/\s+/g,' ').trim();
  const bits=clean.split(/,|\+|\//).map(part=>part.trim()).filter(Boolean);
  return [...new Set((bits.length?bits:[clean]).filter(Boolean))].slice(0,3);
}
function getSelectionHint(title){
  const keywords=getResearchKeywords(title);
  if(!keywords.length)return 'Sayfa açılınca matematik başlığını seç.';
  return `Sayfa açılınca ${keywords.join(' / ')} başlığını seç.`;
}
function buildConceptResearchItems(rawTitle,stage,visual){
  const hint=getSelectionHint(rawTitle);
  const learn={provider:'OGM',badge:'Anlatım',label:'YKS konu anlatım videoları',desc:`Resmi konu anlatım merkezi. ${hint}`,url:RESOURCE_URLS.konuAnlatim,tone:'learn'};
  const summary={provider:'OGM',badge:'Özet',label:'MEBİ konu özeti kitapları',desc:`Konu özeti kitapları. ${hint}`,url:RESOURCE_URLS.konuOzetleri,tone:'learn'};
  const practice={provider:'OGM',badge:'Pekiştir',label:'Konu pekiştirme testleri',desc:`Dört Dörtlük testler ve çözümlü sorular. ${hint}`,url:RESOURCE_URLS.konuPekistirme,tone:'practice'};
  const tarama={provider:'OGM',badge:'Tarama',label:'MEBİ tarama testi kitapları',desc:`Orta-zor karışık tarama testleri. ${hint}`,url:RESOURCE_URLS.taramaTestleri,tone:'practice'};
  const visualItem=visual
    ?{provider:'OGM',badge:'Görsel',label:'Dinamik matematik uygulamaları',desc:`Grafik ve şekli hareketli incele. ${hint}`,url:RESOURCE_URLS.dinamikMath,tone:'visual'}
    :{provider:'OGM',badge:'Kitap',label:'Etkileşimli matematik kitapları',desc:`Konuya kitaptan ve etkileşimli içerikten gir. ${hint}`,url:RESOURCE_URLS.etkilesimliMath,tone:'support'};
  const material={provider:'OGM',badge:'Materyal',label:'Matematik materyal seti',desc:'3B model, uygulama videosu ve görsel anlatım merkezi.',url:RESOURCE_URLS.materyalSeti,tone:'visual'};
  if(stage==='foundation')return [learn,summary,visualItem,practice];
  if(stage==='building')return [practice,tarama,visualItem,material];
  return [tarama,{provider:'OGM',badge:'Çıkmış',label:'Çıkmış soru çözümleri',desc:`Benzer soruların resmi çözümlerini gör. ${hint}`,url:RESOURCE_URLS.cikmisCozumleri,tone:'exam'},visualItem,{provider:'OGM',badge:'3 Adım',label:'3 Adım deneme sınavları',desc:'Hız ve seviye geçişi için 3 Adım denemeleri aç.',url:RESOURCE_URLS.ucAdimDeneme,tone:'practice'}];
}
function buildExamResearchItems(rawTitle,visual){
  const hint=getSelectionHint(rawTitle);
  const archive={provider:'ÖSYM',badge:'Resmi',label:'YKS çıkmış sorular arşivi',desc:'Resmi çıkmış soru sayfası.',url:RESOURCE_URLS.osymCikmis,tone:'exam'};
  const books={provider:'OGM',badge:'Kitap',label:'Çıkmış soru kitapları',desc:`Tam kağıt ve soru setleri. ${hint}`,url:RESOURCE_URLS.cikmisKitaplari,tone:'exam'};
  const solutions={provider:'OGM',badge:'Çözüm',label:'Çıkmış soru çözümleri',desc:`Çözüm videoları ve açıklamalar. ${hint}`,url:RESOURCE_URLS.cikmisCozumleri,tone:'exam'};
  const deneme={provider:'OGM',badge:'3 Adım',label:'3 Adım deneme sınavları',desc:'TYT ve AYT deneme akışına doğrudan gir.',url:RESOURCE_URLS.ucAdimDeneme,tone:'practice'};
  const visualItem=visual
    ?{provider:'OGM',badge:'Görsel',label:'Dinamik tekrar alanı',desc:`Görsel tekrar gerekiyorsa bu alanı aç. ${hint}`,url:RESOURCE_URLS.dinamikMath,tone:'visual'}
    :{provider:'OGM',badge:'Merkez',label:'YKS hazırlık merkezi',desc:'Deneme, tarama ve ek kaynakların toplu girişi.',url:RESOURCE_URLS.yksHub,tone:'support'};
  return [archive,books,solutions,deneme,visualItem];
}
function buildResearchPack({title,phase='',confidence='fragile',level=null}){
  const clean=String(title||'').trim();if(!clean)return null;
  const mode=getResearchMode(clean,phase);
  const stage=getResearchStage({confidence,level,mode});
  const scope=getResearchScope(clean,phase);
  const visual=needsVisualSupport(clean,phase);
  const items=mode==='exam'?buildExamResearchItems(clean,visual):buildConceptResearchItems(clean,stage,visual);
  const summary=mode==='exam'?'Bu başlıkta çıkmış soru, çözüm ve deneme merkezi daha verimli.':STAGE_COPY[stage].summary;
  return{title:clean,scope,stage,stageLabel:STAGE_COPY[stage].label,summary,items,keywords:getResearchKeywords(clean)};
}
function renderResearchPanel(container,options){
  if(!container)return;
  const pack=buildResearchPack(options);if(!pack){container.innerHTML='';return;}
  container.innerHTML=`<div class="research-head"><div><p class="research-eyebrow">${esc(pack.scope)}</p><h3 class="research-title">${esc(pack.title)}</h3><p class="research-copy">${esc(pack.summary)}</p><div class="research-keywords">${pack.keywords.map(keyword=>`<span class="research-keyword">${esc(keyword)}</span>`).join('')}</div></div><span class="research-stage stage-${pack.stage}">${esc(pack.stageLabel)}</span></div><div class="research-grid">${pack.items.map(item=>`<a class="research-card tone-${item.tone}" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><div class="research-card-top"><span class="research-provider">${esc(item.provider)}</span><span class="research-badge">${esc(item.badge)}</span></div><strong>${esc(item.label)}</strong><p>${esc(item.desc)}</p></a>`).join('')}</div>`;
}
function renderInlineResearchPanel(container,{title,phase='',confidence='fragile',level=null,heading='Hızlı açılış',hint=''}){
  if(!container)return;
  const pack=buildResearchPack({title,phase,confidence,level});if(!pack){container.innerHTML='';return;}
  container.innerHTML=`<div class="inline-research-copy"><strong>${esc(heading)}</strong><p>${esc(hint||pack.summary)}</p></div><div class="inline-research-links">${pack.items.slice(0,3).map(item=>`<a class="inline-research-link tone-${item.tone}" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.provider)} • ${esc(item.badge)}</a>`).join('')}</div>`;
}
function renderResourceChips({title,phase='',confidence='fragile',level=null}){
  const pack=buildResearchPack({title,phase,confidence,level});if(!pack)return '';
  return `<p class="mastery-resource-note">${esc(STAGE_COPY[pack.stage].micro)}</p><div class="resource-chip-row">${pack.items.slice(0,3).map(item=>`<a class="resource-chip tone-${item.tone}" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.provider)} • ${esc(item.badge)}</a>`).join('')}</div>`;
}
function renderRowResearchLink({title,phase='',confidence='fragile',level=null}){
  const pack=buildResearchPack({title,phase,confidence,level});const primary=pack?.items?.[0];
  if(!primary)return '';
  return `<div class="row-research-link-wrap"><a class="row-research-link tone-${primary.tone}" href="${esc(primary.url)}" target="_blank" rel="noopener noreferrer">${esc(primary.provider)} • ${esc(primary.badge)}</a></div>`;
}
function renderTopicSuggestions(){
  if(!n.topicSuggestions)return;
  n.topicSuggestions.innerHTML=TOPIC_SUGGESTIONS.map(topic=>`<option value="${esc(topic)}"></option>`).join('');
}
function renderInputResearchPanels(){
  const currentWeek=state.weeks.find(w=>w.id===getCurrentWeekId())||getSelectedWeek();
  const typedSession=n.sessionTopic?.value.trim()||'';
  const typedMistake=n.mistakeTopic?.value.trim()||'';
  renderInlineResearchPanel(n.sessionResearchPanel,{
    title:typedSession||currentWeek.focus,phase:typedSession?'':currentWeek.phase,confidence:currentWeek.confidence,
    heading:typedSession?`${typedSession} için hızlı kaynaklar`:`Bu haftanın odağı: ${currentWeek.focus}`,
    hint:typedSession?'Oturumdan önce resmi konu anlatımı, test ve çıkmış soru sayfalarını aç.':'Konu yazmasan da bulunduğun haftaya göre doğrudan resmi kaynaklar hazır.'
  });
  renderInlineResearchPanel(n.mistakeResearchPanel,{
    title:typedMistake||currentWeek.focus,phase:typedMistake?'':currentWeek.phase,confidence:'fragile',
    heading:typedMistake?`Onarım odaklı: ${typedMistake}`:`Şu an onarım için iyi başlangıç: ${currentWeek.focus}`,
    hint:typedMistake?'Önce konu anlatımı veya özetten boşluğu kapat, sonra test ve çıkmış çözümüne geç.':'En güncel haftana göre doğrudan onarım kaynakları hazır.'
  });
}
function getMasteryPhaseHint(category){
  if(category==='AYT')return 'AYT Kurulum';
  if(category==='Geometri')return 'Geometri Temeli';
  if(category==='Problemler')return 'Problem Temeli';
  return 'TYT Çekirdeği';
}
// ===== RENDER TODAY =====
function getCurrentBlockIndex(blocks){
  const now=new Date();const h=now.getHours();const m=now.getMinutes();const nowMin=h*60+m;
  for(let i=0;i<blocks.length;i++){
    const parts=blocks[i].time.split('-');if(parts.length<2)continue;
    const [sh,sm]=(parts[0].trim()).split(':').map(Number);
    const [eh,em]=(parts[1].trim()).split(':').map(Number);
    const startMin=sh*60+(sm||0);const endMin=eh*60+(em||0);
    if(nowMin>=startMin&&nowMin<endMin)return i;
  }
  // If before first block or after last, pick closest
  if(blocks.length>0){
    const first=blocks[0].time.split('-')[0].trim().split(':').map(Number);
    if(nowMin<first[0]*60+(first[1]||0))return -1; // before study time
  }
  return blocks.length; // after all blocks done
}

function renderTodayPanel(){
  const week=getSelectedWeek();const info=getDayInfo(week);
  const sched=getSchedule(info.index,week.focus,info.task.task);
  const remQ=Math.max(0,week.questionGoal-week.actualQuestions);
  const perDay=remQ>0?Math.max(10,Math.ceil(remQ/info.remainingDays)):0;
  const curBlock=info.isCurrentWeek?getCurrentBlockIndex(sched.blocks):-1;

  // Greeting
  const h=new Date().getHours();let g='Merhaba';
  if(h<6)g='İyi geceler 🌙';else if(h<12)g='Günaydın ☀️';
  else if(h<18)g='İyi çalışmalar 💪';else g='İyi akşamlar 🌟';
  const todayGreetEl=document.getElementById('todayGreeting');
  const name=state.profile.name;
  if(todayGreetEl)todayGreetEl.textContent=name?`${g}, ${name}!`:`${g}!`;

  // Subtitle
  n.todayMeta.textContent=info.isCurrentWeek
    ?`${fmtDate(todayISO())} • ${info.task.day} • ${week.phase}`
    :`${fmtDate(week.startDate)} - ${fmtDate(week.endDate)} • ${week.phase}`;

  // Countdown on today page
  const dLeft=daysUntil(state.profile.examDate);
  const cdEl=document.getElementById('countdownDaysToday');
  if(cdEl)cdEl.textContent=dLeft>=0?dLeft:'—';

  // NOW Banner
  const nowTitle=document.getElementById('nowTitle');
  const nowDesc=document.getElementById('nowDesc');
  const nowTime=document.getElementById('nowTime');
  const nowMode=document.getElementById('nowMode');
  if(curBlock>=0&&curBlock<sched.blocks.length){
    const b=sched.blocks[curBlock];
    nowTitle.textContent=b.title;
    nowDesc.textContent=b.detail;
    nowTime.textContent=b.time;
    nowMode.textContent=sched.mode;
  }else if(curBlock===-1){
    nowTitle.textContent='Henüz çalışma saati gelmedi';
    nowDesc.textContent=`İlk bloğun ${sched.blocks[0]?.time||''} saatinde başlayacak. O zamana kadar dinlen!`;
    nowTime.textContent=sched.blocks[0]?.time.split('-')[0]?.trim()||'';
    nowMode.textContent='Bekleme';
  }else{
    nowTitle.textContent='Bugünkü bloklar bitti! 🎉';
    nowDesc.textContent='Harikasın! Yanlış incelemeni yap ve dinlenmeyi unutma.';
    nowTime.textContent='✓';
    nowMode.textContent='Gün bitti';
  }

  // Summary bar
  const sw=document.getElementById('todaySummaryWeek');
  const sp=document.getElementById('todaySummaryPhase');
  const st=document.getElementById('todaySummaryTarget');
  const sc=document.getElementById('todaySummaryConf');
  const mb=document.getElementById('todayMiniBar');
  if(sw)sw.textContent=`H${String(week.id).padStart(2,'0')}`;
  if(sp)sp.textContent=week.phase;
  if(st)st.textContent=`${perDay} soru`;
  if(sc)sc.textContent=`${CONFIDENCE_EMOJI[week.confidence]||''} ${labelConf(week.confidence)}`;
  const doneItems=week.checklist.filter(c=>c.done).length;
  const pct=Math.round((doneItems/week.checklist.length)*100);
  if(mb)mb.style.width=pct+'%';

  // Timeline steps
  n.todaySteps.innerHTML=sched.blocks.map((b,i)=>{
    let stepClass='';
    if(info.isCurrentWeek){
      if(i<curBlock)stepClass='is-done';
      else if(i===curBlock)stepClass='is-current';
    }
    return`<div class="timeline-step ${stepClass}">
      <div class="timeline-rail">
        <div class="timeline-dot">${stepClass==='is-done'?'':'<span>'+(i+1)+'</span>'}</div>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-card">
          <div class="timeline-card-head">
            <h4>${esc(b.title)}</h4>
            <span class="timeline-card-time">${esc(b.time)}</span>
          </div>
          <p>${esc(b.detail)}</p>
        </div>
      </div>
    </div>`;
  }).join('');

  renderResearchPanel(n.todayResearchPanel,{title:week.focus,phase:week.phase,confidence:week.confidence});
  renderInputResearchPanels();

  // Dynamic tip
  const tipText=document.getElementById('todayTipText');
  if(tipText){
    const tips=[
      'Çalışma bloklarını sırayla takip et. Her bloğu bitirince kendi kendine tebrik et!',
      'Süreli çalışma yap — telefonu kapat, 45 dakika odaklan, sonra 10 dakika mola ver.',
      'Yanlış sorularını not et. Aynı hatayı iki kez yapmamak seni hızlandırır.',
      'Bugün kolay soruları hızlı çöz, zor sorulara daha fazla zaman ayır.',
      'Çalışma oturumunu bitirince "Kayıtlar" bölümünden kaydet — serin artmaya devam etsin! 🔥'
    ];
    tipText.textContent=tips[Math.floor(Math.random()*tips.length)];
  }
}

// ===== RENDER PHASE RAIL =====
function renderPhaseRail(){
  const phases=[...new Set(state.weeks.map(w=>w.phase))].map(p=>{
    const g=state.weeks.filter(w=>w.phase===p);
    return{phase:p,done:g.filter(w=>w.complete).length,total:g.length};
  });
  n.phaseRail.innerHTML=phases.map(e=>`<span class="phase-chip">${esc(e.phase)} ${e.done}/${e.total}</span>`).join('');
}

// ===== RENDER ROADMAP =====
function renderRoadmap(){renderSummary();renderTodayPanel();renderPriorityBoard();renderRoadmapList();renderWeekDetail();}

function renderRoadmapList(){
  const cid=getCurrentWeekId();
  n.weekList.innerHTML=state.weeks.map(w=>{
    const active=w.id===state.selectedWeekId;const cur=w.id===cid;
    return`<div class="week-item ${active?'active':''} ${w.complete?'complete':''}" data-week-id="${w.id}">
      <div class="week-topline"><span class="week-number">H${String(w.id).padStart(2,'0')}</span>
      <div class="tag-row">${cur?'<span class="mini-tag current">Bu hafta</span>':''}${w.complete?'<span class="mini-tag complete">✓ Bitti</span>':''}</div></div>
      <div><strong>${esc(w.phase)}</strong><p class="week-focus-text">${esc(w.focus)}</p></div>
      <div class="week-topline"><span class="mini-tag">${esc(labelConf(w.confidence))}</span>
      <span class="mini-tag">${trimDec(w.actualQuestions)}/${trimDec(w.questionGoal)}</span></div></div>`;
  }).join('');
}

function renderWeekDetail(){
  const w=getSelectedWeek();const info=getDayInfo(w);
  const doneItems=w.checklist.filter(c=>c.done).length;
  const pct=Math.round((doneItems/w.checklist.length)*100);
  n.weekBadge.textContent=`Hafta ${String(w.id).padStart(2,'0')} • ${w.phase}`;
  n.weekTitle.textContent=w.focus;
  n.weekMeta.textContent=`${fmtDate(w.startDate)} - ${fmtDate(w.endDate)} • Hedef ${trimDec(w.questionGoal)} soru`;
  n.weekFocus.textContent=w.focus;n.weekCheckpoint.textContent=w.checkpoint;
  n.questionGoal.value=String(w.questionGoal);n.actualQuestions.value=String(w.actualQuestions);
  n.confidenceSelect.value=w.confidence;n.completeToggle.checked=w.complete;
  n.weekProgressLabel.textContent=`${doneItems}/${w.checklist.length} temel adım tamam`;
  n.weekProgressBar.style.width=pct+'%';n.weekNote.value=w.note;
  n.checklistGrid.innerHTML=w.checklist.map((item,i)=>`
    <label class="check-item ${item.done?'done':''}"><input type="checkbox" data-index="${i}" ${item.done?'checked':''} />
    <div><strong>${esc(item.title)}</strong><p>${esc(item.description)}</p></div></label>`).join('');
  n.dailyPlanGrid.innerHTML=w.dailyTasks.map((item,i)=>{
    const s=getSchedule(i,w.focus,item.task);
    return`<label class="day-card ${i===info.index?'active-day':''}">
      <div class="day-card-head"><strong>${esc(item.day)}</strong><span class="mini-tag">${esc(s.mode)}</span></div>
      <div class="schedule-strip">${s.blocks.map(b=>`<span class="schedule-pill">${esc(b.time)}</span>`).join('')}</div>
      <p class="day-location">📍 ${esc(s.location)}</p>
      <textarea data-index="${i}" rows="3" placeholder="Bu gün ne yapacağını yaz...">${esc(item.task)}</textarea></label>`;
  }).join('');
  renderResearchPanel(n.weekResearchPanel,{title:w.focus,phase:w.phase,confidence:w.confidence});
  n.prevWeek.disabled=w.id===1;n.nextWeek.disabled=w.id===state.weeks.length;
}

// ===== RENDER PRIORITY =====
function renderPriorityBoard(){
  const p=computePriorities();
  n.priorityBoard.innerHTML=p.map((item,i)=>`
    <div class="priority-card"><div class="priority-num">${i+1}</div>
    <div class="priority-body"><h4>${esc(item.title)}</h4><p>${esc(item.body)}</p></div></div>`).join('');
}


// ===== RENDER MASTERY =====
function renderMastery(){
  const total=state.mastery.length;
  const red=state.mastery.filter(t=>t.level===0).length;
  const frag=state.mastery.filter(t=>t.level===1).length;
  const bld=state.mastery.filter(t=>t.level===2).length;
  const sol=state.mastery.filter(t=>t.level===3).length;
  n.masterySummary.textContent=`💎 ${sol} sağlam, 🔵 ${bld} gelişiyor, 🟡 ${frag} kırılgan, 🔴 ${red} kırmızı • toplam ${total} konu.`;
  n.masteryGrid.innerHTML=MASTERY_BLUEPRINT.map(group=>{
    const topics=state.mastery.filter(t=>t.category===group.category);
    return`<section class="mastery-group"><h3>${esc(group.category)}</h3>
    <div class="mastery-topic-grid">${topics.map(t=>`
      <div class="mastery-topic"><h4>${esc(t.name)}</h4>
      <p class="mastery-date">${t.lastReviewed?`Son: ${fmtDate(t.lastReviewed)}`:'Henüz işaretlenmedi'}</p>
      ${renderResourceChips({title:t.name,phase:getMasteryPhaseHint(t.category),level:t.level})}
      <div class="status-row">${LEVELS.map(l=>`<button type="button" class="status-button ${t.level===l.value?`active level-${l.value}`:''}" data-mastery-id="${t.id}" data-level="${l.value}">${esc(l.label)}</button>`).join('')}</div></div>`).join('')}
    </div></section>`;
  }).join('');
}

// ===== RENDER SESSIONS =====
function renderSessions(){
  const l7=state.sessions.filter(s=>daysBetween(parseDate(s.date),new Date())<=6);
  const streak=computeStudyStreak();
  n.sessionSummary.textContent=`${trimDec(sum(l7.map(s=>s.hours)))} saat, ${sum(l7.map(s=>s.questions))} soru • 🔥 ${streak} günlük seri`;
  n.sessionTableBody.innerHTML=state.sessions.slice(0,12).map(s=>`<tr>
    <td>${fmtDate(s.date)}</td><td>${esc(s.topic)}${renderRowResearchLink({title:s.topic})}</td><td>${trimDec(s.hours)}</td>
    <td>${trimDec(s.questions)}</td><td>${esc(s.note||'-')}</td>
    <td><button class="table-action" data-remove-type="session" data-id="${s.id}">Sil</button></td></tr>`).join('');
}

// ===== RENDER EXAMS =====
function renderExams(){
  const tyt=state.exams.filter(e=>normExam(e.type)==='TYT Math').map(e=>e.score);
  const ayt=state.exams.filter(e=>normExam(e.type)==='AYT Math').map(e=>e.score);
  n.examSummary.textContent=`TYT ort. ${trimDec(average(tyt))}/40 • AYT ort. ${trimDec(average(ayt))}/40 • ${state.exams.length} deneme`;
  n.examTableBody.innerHTML=state.exams.slice(0,12).map(e=>`<tr>
    <td>${fmtDate(e.date)}</td><td>${esc(labelExam(e.type))}</td><td>${trimDec(e.score)}</td>
    <td>${trimDec(e.duration)}</td><td>${esc(e.note||'-')}</td>
    <td><button class="table-action" data-remove-type="exam" data-id="${e.id}">Sil</button></td></tr>`).join('');
  drawExamChart();
}

// ===== RENDER MISTAKES =====
function renderMistakes(){
  const counts=countBy(state.mistakes,e=>e.type);
  const top=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0];
  n.mistakeSummary.textContent=`${state.mistakes.length} hata kaydı. En sık: ${top?labelMistake(top):'Henüz yok'}.`;
  n.mistakeTypeStats.innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1])
    .map(([t,v])=>`<span class="mistake-chip">${esc(labelMistake(t))} ${v}</span>`).join('')
    ||'<span class="mistake-chip">İlk hatanı kaydet</span>';
  n.mistakeTableBody.innerHTML=state.mistakes.slice(0,12).map(e=>`<tr>
    <td>${fmtDate(e.date)}</td><td>${esc(e.topic)}${renderRowResearchLink({title:e.topic,confidence:'fragile'})}</td><td>${esc(labelMistake(e.type))}</td>
    <td>${esc(e.fix)}</td><td>${esc(e.note||'-')}</td>
    <td><button class="table-action" data-remove-type="mistake" data-id="${e.id}">Sil</button></td></tr>`).join('');
}

// ===== SCHEDULE & DAY INFO =====
function getDayInfo(week){
  const today=new Date();const start=parseDate(week.startDate);const end=parseDate(week.endDate);
  const isCW=today>=start&&today<=end;const idx=isCW?clamp(daysBetween(start,today),0,6):0;
  return{isCurrentWeek:isCW,index:idx,task:week.dailyTasks[idx],remainingDays:isCW?Math.max(1,7-idx):7};
}
function getSchedule(dayIdx,focus,taskText){
  const ct=taskText?.trim()||`${focus} üzerinde çalış.`;
  if(dayIdx===5)return{mode:"Deneme günü",location:"Kütüphane",blocks:[
    {time:"10:30-12:00",title:"Mini deneme",detail:`${focus} ağırlıklı deneme ya da karma set çöz.`},
    {time:"14:00-15:15",title:"Eksik kapatma",detail:ct},
    {time:"19:00-19:30",title:"Yanlış analizi",detail:"Boş ve yanlış soruları incele."}]};
  if(dayIdx===6)return{mode:"Toparlama",location:"Ev",blocks:[
    {time:"11:00-12:00",title:"Hafif tekrar",detail:`${focus} notlarını gözden geçir.`},
    {time:"15:00-16:00",title:"Zayıf nokta",detail:ct},
    {time:"20:00-20:20",title:"Hafta kapanışı",detail:"Eksikleri kısa kısa yaz."}]};
  return{mode:"Okul günü",location:"Ev - sessiz masa",blocks:[
    {time:"17:00-18:00",title:"Konu + kısa not",detail:`${focus} öğretim kısmı, 8-10 temel soru.`},
    {time:"18:15-19:15",title:"Hedef soru seti",detail:ct},
    {time:"20:30-20:50",title:"Gün sonu tekrar",detail:"Yanlışları yeniden kur, takıldığını yaz."}]};
}

// ===== PRIORITIES =====
function computePriorities(){
  const sw=getSelectedWeek();
  const weak=[...state.mastery].filter(t=>t.level<=1).sort((a,b)=>a.level-b.level||compDates(a.lastReviewed,b.lastReviewed));
  const topM=Object.entries(countBy(state.mistakes,e=>e.type)).sort((a,b)=>b[1]-a[1])[0];
  const inc=sw.checklist.filter(c=>!c.done).length;const gap=sw.questionGoal-sw.actualQuestions;
  const p=[
    {title:`Hafta ${String(sw.id).padStart(2,'0')} kapatılmalı`,
     body:inc>0?`${inc} temel adım açık. Önce bunları bitir.`:'Kontrol listesi temiz. Yanlış incelemesine geç.'},
    {title:weak[0]?`${weak[0].name} onarılmalı`:'Konu durumlarını işaretle',
     body:weak[0]?`${weak[0].category}: ${weak[0].level===0?'kırmızı':'kırılgan'}. Bu hafta özel blok koy.`:'Zayıf konuları görmek için seviye seç.'},
    {title:gap>0?`${trimDec(gap)} soruluk açık kapanmalı`:'İnceleme kalitesi korunmalı',
     body:gap>0?'Soru hedefinin altındasın. Kısa bir soru bloğu ekle.':'Hacim iyi. Enerjiyi yanlış incelemesine ver.'}
  ];
  if(state.profile.track==='Sozel')p[1]={title:weak[0]?`TYT öncelik: ${weak[0].name}`:'TYT matematiği canlı tut',body:'Sözel: TYT matematiği ayakta tut.'};
  else if(topM)p[2]={title:`Tekrarlayan: ${labelMistake(topM[0])}`,body:`${topM[1]} kayıt. Onarım planına çevir.`};
  return p;
}


// ===== CHART =====
function drawExamChart(){
  const canvas=n.examChart;const ctx=canvas.getContext('2d');
  const pw=canvas.parentElement.clientWidth;const r=window.devicePixelRatio||1;
  const w=Math.max(320,pw-28);const h=260;
  canvas.width=w*r;canvas.height=h*r;canvas.style.height=h+'px';
  ctx.setTransform(r,0,0,r,0,0);ctx.clearRect(0,0,w,h);
  const entries=[...state.exams].sort((a,b)=>parseDate(a.date)-parseDate(b.date));
  if(!entries.length){ctx.fillStyle='#64748b';ctx.font='600 14px "Inter"';ctx.fillText('Deneme sonucu ekle →',18,36);return;}
  const pad={top:20,right:18,bottom:34,left:38};const pW=w-pad.left-pad.right;const pH=h-pad.top-pad.bottom;
  ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=1;
  for(let s=0;s<=4;s++){const y=pad.top+(pH/4)*s;ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(w-pad.right,y);ctx.stroke();}
  ctx.fillStyle='#64748b';ctx.font='500 11px "JetBrains Mono"';
  for(let m=0;m<=40;m+=10){ctx.fillText(String(m),8,pad.top+pH-(m/40)*pH+4);}
  const xS=entries.length===1?(()=>pad.left+pW/2):(i)=>pad.left+(i/(entries.length-1))*pW;
  const yS=(s)=>pad.top+pH-(s/40)*pH;
  const gr={
    'TYT Math':entries.map((e,i)=>({...e,index:i})).filter(e=>normExam(e.type)==='TYT Math'),
    'AYT Math':entries.map((e,i)=>({...e,index:i})).filter(e=>normExam(e.type)==='AYT Math')
  };
  drawLine(ctx,gr['TYT Math'],xS,yS,'#6366f1');drawLine(ctx,gr['AYT Math'],xS,yS,'#ec4899');
  entries.forEach((e,i)=>{ctx.fillStyle='#64748b';ctx.save();ctx.translate(xS(i),h-10);ctx.rotate(-0.3);ctx.fillText(shortD(e.date),0,0);ctx.restore();});
  ctx.fillStyle='#6366f1';ctx.fillRect(w-164,18,12,12);ctx.fillStyle='#f1f5f9';ctx.fillText('TYT',w-146,28);
  ctx.fillStyle='#ec4899';ctx.fillRect(w-88,18,12,12);ctx.fillStyle='#f1f5f9';ctx.fillText('AYT',w-70,28);
}
function drawLine(ctx,pts,xS,yS,color){
  if(!pts.length)return;ctx.strokeStyle=color;ctx.lineWidth=3;ctx.beginPath();
  pts.forEach((e,i)=>{const x=xS(e.index),y=yS(e.score);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();
  pts.forEach(e=>{const x=xS(e.index),y=yS(e.score);
    ctx.fillStyle='#111827';ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke();});
}

// ===== STATE MANAGEMENT =====
function loadState(){
  const raw=localStorage.getItem(STORAGE_KEY);
  if(!raw)return createDefault();
  try{return hydrate(JSON.parse(raw));}catch(e){console.error('Load error',e);return createDefault();}
}
function createDefault(){
  return{schemaVersion:SCHEMA_VERSION,profile:{name:'',track:'EA',examDate:'2027-06-20'},
    selectedWeekId:getCurrentWeekId(),weeks:WEEK_BLUEPRINT.map((e,i)=>createWeek(e,i+1)),
    mastery:MASTERY_BLUEPRINT.flatMap(g=>g.topics.map(t=>({id:t.id,category:g.category,name:t.name,level:0,lastReviewed:''}))),
    sessions:[],exams:[],mistakes:[]};
}
function hydrate(p){
  const b=createDefault();const m={...b,...p,schemaVersion:SCHEMA_VERSION,profile:{...b.profile,...p.profile},
    weeks:b.weeks.map(w=>{const s=p.weeks?.find(e=>e.id===w.id)||{};return{...w,
      questionGoal:toNum(s.questionGoal||w.questionGoal),actualQuestions:toNum(s.actualQuestions||0),
      confidence:s.confidence||w.confidence,complete:Boolean(s.complete),note:s.note||'',
      checklist:w.checklist.map((c,i)=>({...c,done:Boolean(s.checklist?.[i]?.done)})),
      dailyTasks:p.schemaVersion===SCHEMA_VERSION?w.dailyTasks.map((d,i)=>({...d,task:s.dailyTasks?.[i]?.task||d.task})):w.dailyTasks};}),
    mastery:b.mastery.map(t=>{const s=p.mastery?.find(e=>e.id===t.id);return s?{...t,level:Number(s.level??t.level),lastReviewed:s.lastReviewed||''}:t;}),
    sessions:Array.isArray(p.sessions)?p.sessions:[],exams:Array.isArray(p.exams)?p.exams:[],mistakes:Array.isArray(p.mistakes)?p.mistakes:[]};
  if(!m.selectedWeekId||m.selectedWeekId>m.weeks.length)m.selectedWeekId=getCurrentWeekId();
  return m;
}
function createWeek(e,id){
  const[phase,focus,qGoal,checkpoint]=e;const start=addDays(PLAN_START,(id-1)*7);const end=addDays(start,6);
  return{id,phase,focus,questionGoal:qGoal,actualQuestions:0,checkpoint,confidence:'fragile',complete:false,note:'',
    startDate:dateToVal(start),endDate:dateToVal(end),
    checklist:CHECKLIST_TEMPLATE.map(([t,d])=>({title:t,description:d,done:false})),
    dailyTasks:DAY_NAMES.map((day,di)=>({day,task:defaultTask(di,focus)}))};
}
function defaultTask(di,focus){
  const t=[`${focus} için konu çalış ve temel sorular çöz.`,`${focus} için orta düzey soru setiyle devam et.`,
    `${focus} konusunu eski bir konuyla karıştırıp tekrar et.`,'Zayıf konu için ek blok aç, kısa tekrar yap.',
    `${focus} konusundan süreli bir set çöz.`,'Mini deneme ya da karma set çöz, yanlışları incele.',
    'Hafif tekrar yap, notları düzenle ve haftayı toparla.'];return t[di];
}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function exportState(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=`yks-takip-${todayISO()}.json`;a.click();URL.revokeObjectURL(url);
  showToast('📤','Yedek dışa aktarıldı!');
}
function importState(e){
  const[file]=e.target.files||[];if(!file)return;
  const r=new FileReader();r.onload=()=>{try{state=hydrate(JSON.parse(r.result));persist();renderAll();showToast('📥','Yedek içe aktarıldı!');}catch(err){alert('Dosya aktarılamadı.');}};
  r.readAsText(file);e.target.value='';
}
function resetState(){
  if(!confirm('Tüm veri silinsin mi?'))return;
  state=createDefault();persist();renderAll();showToast('🗑️','Panel sıfırlandı.');
}

// ===== HELPERS =====
function getSelectedWeek(){return state.weeks.find(w=>w.id===state.selectedWeekId)||state.weeks[0];}
function getCurrentWeekId(){const d=daysBetween(PLAN_START,new Date());return d<0?1:clamp(Math.floor(d/7)+1,1,WEEK_BLUEPRINT.length);}
function shiftWeek(dir){state.selectedWeekId=clamp(state.selectedWeekId+dir,1,state.weeks.length);persist();renderRoadmap();}
function seedDates(){const t=todayISO();n.sessionDate.value=t;n.examLogDate.value=t;n.mistakeDate.value=t;}
function computeStudyStreak(){
  const ud=[...new Set(state.sessions.map(e=>e.date))].sort().reverse();
  let streak=0;let cur=new Date();cur.setHours(0,0,0,0);
  for(const d of ud){if(d===dateToVal(cur)){streak++;cur=addDays(cur,-1);continue;}
    if(streak===0&&d===dateToVal(addDays(cur,-1))){streak++;cur=addDays(cur,-2);continue;}break;}
  return streak;
}
function labelConf(v){return CONFIDENCE_LABELS[v]||v;}
function normExam(v){return v==='TYT Matematik'||v==='TYT Math'?'TYT Math':v==='AYT Matematik'||v==='AYT Math'?'AYT Math':v;}
function labelExam(v){return EXAM_TYPE_LABELS[v]||v;}
function labelMistake(v){return MISTAKE_TYPE_LABELS[v]||v;}
function countBy(items,fn){return items.reduce((a,i)=>{const k=fn(i);a[k]=(a[k]||0)+1;return a;},{});}
function addDays(d,days){const n=new Date(d);n.setDate(n.getDate()+days);return n;}
function daysBetween(s,e){const a=new Date(s),b=new Date(e);a.setHours(0,0,0,0);b.setHours(0,0,0,0);return Math.round((b-a)/864e5);}
function daysUntil(dt){return dt?daysBetween(new Date(),parseDate(dt)):-1;}
function average(v){return v.length?sum(v)/v.length:0;}
function sum(v){return v.reduce((t,x)=>t+Number(x||0),0);}
function toNum(v){return Number(v||0);}
function trimDec(v){const n=Number(v||0);return Number.isInteger(n)?String(n):n.toFixed(2).replace(/\.00$/,'');}
function clamp(v,mn,mx){return Math.min(Math.max(v,mn),mx);}
function compDates(a,b){if(!a&&!b)return 0;if(!a)return-1;if(!b)return 1;return parseDate(a)-parseDate(b);}
function fmtDate(d){return d?parseDate(d).toLocaleDateString('tr-TR',{year:'numeric',month:'short',day:'numeric'}):'-';}
function shortD(d){return parseDate(d).toLocaleDateString('tr-TR',{month:'short',day:'numeric'});}
function todayISO(){return dateToVal(new Date());}
function dateToVal(d){const s=new Date(d);s.setMinutes(s.getMinutes()-s.getTimezoneOffset());return s.toISOString().slice(0,10);}
function parseDate(d){if(typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d)){const[y,m,day]=d.split('-').map(Number);return new Date(y,m-1,day);}return new Date(d);}
function esc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}
function safeId(){return typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`;}
window.addEventListener('resize',drawExamChart);



