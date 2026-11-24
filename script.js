const appColors = {
  TikTok: "var(--tiktok)", Instagram: "var(--instagram)", WhatsApp: "var(--whatsapp)",
  Waze: "var(--waze)", Risk: "var(--risk)", Safari: "var(--safari)", Fotos: "var(--fotos)"
};

// Cada fila conserva los minutos indicados para toda la franja original.
const records = [
  ["2026-11-03",0,2,61,"TikTok"],["2026-11-03",9,10,22,"Waze"],["2026-11-03",17,18,26,"Waze"],["2026-11-03",21,24,83,"Instagram"],["2026-11-03",21,22,12,"WhatsApp"],
  ["2026-11-02",0,1,31,"Instagram"],["2026-11-02",1,3,96,"TikTok"],["2026-11-02",9,10,27,"Waze"],["2026-11-02",13,14,24,"Waze"],["2026-11-02",14,15,34,"Instagram"],["2026-11-02",16,17,28,"Instagram"],["2026-11-02",19,20,11,"Waze"],["2026-11-02",21,22,25,"Instagram"],
  ["2026-11-01",10,15,81,"Instagram"],["2026-11-01",11,16,36,"TikTok"],["2026-11-01",11,16,15,"WhatsApp"],["2026-11-01",16,17,48,"Risk"],["2026-11-01",21,22,11,"Waze"],["2026-11-01",23,24,42,"Instagram"],
  ["2026-10-31",11,13,44,"Instagram"],["2026-10-31",15,17,43,"TikTok"],["2026-10-31",9,10,4,"WhatsApp"],
  ["2026-10-30",0,1,43,"TikTok"],["2026-10-30",8,9,43,"TikTok"],["2026-10-30",8,10,39,"Instagram"],["2026-10-30",10,11,18,"Waze"],["2026-10-30",18,20,8,"TikTok"],["2026-10-30",8,19,30,"WhatsApp"],["2026-10-30",21,23,67,"Instagram"],
  ["2026-10-29",0,2,79,"TikTok"],["2026-10-29",0,1,18,"Instagram"],["2026-10-29",8,9,7,"Instagram"],["2026-10-29",8,16,21,"WhatsApp"],["2026-10-29",14,15,18,"Safari"],["2026-10-29",18,21,24,"Instagram"],["2026-10-29",19,21,38,"WhatsApp"],["2026-10-29",13,14,26,"Waze"],["2026-10-29",16,18,43,"Waze"],
  ["2026-10-28",0,1,55,"Instagram"],["2026-10-28",9,10,23,"Waze"],["2026-10-28",8,12,12,"WhatsApp"],["2026-10-28",13,23,35,"WhatsApp"],["2026-10-28",13,14,16,"Waze"],["2026-10-28",13,17,22,"TikTok"],["2026-10-28",14,21,36,"Instagram"],["2026-10-28",23,24,58,"Instagram"],
  ["2026-10-27",1,2,91,"TikTok"],["2026-10-27",9,10,25,"Instagram"],["2026-10-27",10,13,25,"TikTok"],["2026-10-27",11,13,25,"Instagram"],["2026-10-27",12,13,13,"WhatsApp"],["2026-10-27",13,14,17,"Waze"],["2026-10-27",14,15,18,"Instagram"],["2026-10-27",15,17,37,"TikTok"],["2026-10-27",17,21,9,"WhatsApp"],["2026-10-27",18,19,13,"Waze"],["2026-10-27",22,23,10,"Instagram"],["2026-10-27",23,24,45,"TikTok"],
  ["2026-10-26",0,1,27,"TikTok"],["2026-10-26",7,9,7,"Instagram"],["2026-10-26",8,11,11,"WhatsApp"],["2026-10-26",14,16,43,"Instagram"],["2026-10-26",20,21,10,"WhatsApp"],["2026-10-26",20,21,10,"Waze"],["2026-10-26",22,24,44,"Instagram"],["2026-10-26",23,24,25,"TikTok"],
  ["2026-10-25",10,12,20,"Instagram"],["2026-10-25",11,13,11,"WhatsApp"],["2026-10-25",14,15,5,"WhatsApp"],["2026-10-25",14,15,10,"Instagram"],["2026-10-25",15,17,45,"Risk"],["2026-10-25",16,17,15,"Instagram"],["2026-10-25",18,20,7,"WhatsApp"],["2026-10-25",22,23,29,"Instagram"],["2026-10-25",23,24,5,"WhatsApp"],["2026-10-25",23,24,33,"TikTok"],
  ["2026-10-24",0,1,13,"TikTok"],["2026-10-24",10,11,15,"TikTok"],["2026-10-24",12,13,11,"Instagram"],["2026-10-24",12,13,19,"TikTok"],["2026-10-24",14,15,4,"Instagram"],["2026-10-24",21,22,26,"Fotos"],["2026-10-24",21,22,24,"WhatsApp"],
  ["2026-10-23",0,1,14,"Instagram"],["2026-10-23",1,2,50,"TikTok"],["2026-10-23",10,11,18,"Waze"],["2026-10-23",13,14,15,"Waze"],["2026-10-23",13,14,9,"WhatsApp"],["2026-10-23",21,23,33,"Instagram"],["2026-10-23",22,23,15,"Risk"],["2026-10-23",23,24,14,"TikTok"],
  ["2026-10-22",0,1,33,"Instagram"],["2026-10-22",9,10,9,"Instagram"],["2026-10-22",10,11,12,"TikTok"],["2026-10-22",11,12,24,"Instagram"],["2026-10-22",11,13,16,"WhatsApp"],["2026-10-22",13,14,21,"Waze"],["2026-10-22",16,17,7,"Instagram"],["2026-10-22",19,20,26,"Waze"],["2026-10-22",23,24,10,"TikTok"],
  ["2026-10-21",1,2,34,"TikTok"],["2026-10-21",8,9,14,"TikTok"],["2026-10-21",9,10,34,"TikTok"],["2026-10-21",10,11,39,"TikTok"],["2026-10-21",12,13,15,"Instagram"],["2026-10-21",13,14,26,"Waze"],["2026-10-21",12,13,21,"TikTok"],["2026-10-21",21,22,18,"Waze"],["2026-10-21",22,24,48,"Instagram"],["2026-10-21",22,23,13,"WhatsApp"],["2026-10-21",23,24,14,"TikTok"],
  ["2026-10-20",1,3,30,"Instagram"],["2026-10-20",9,10,22,"Waze"],["2026-10-20",13,14,25,"Waze"],["2026-10-20",17,20,38,"WhatsApp"],["2026-10-20",17,18,25,"Safari"],["2026-10-20",21,22,6,"Instagram"],["2026-10-20",23,24,7,"Instagram"],["2026-10-20",22,24,46,"WhatsApp"],["2026-10-20",22,23,30,"Risk"]
].map(([date,start,end,minutes,app]) => ({date,start,end,minutes,app}));

const dailyTotals = [
  ["2026-10-20",347],["2026-10-21",412],["2026-10-22",337],["2026-10-23",312],["2026-10-24",165],
  ["2026-10-25",267],["2026-10-26",339],["2026-10-27",461],["2026-10-28",360],["2026-10-29",350],
  ["2026-10-30",322],["2026-10-31",161],["2026-11-01",348],["2026-11-02",459],["2026-11-03",341]
].map(([date,minutes]) => ({date,minutes}));

let selectedHour = 0;
let selectedDate = "all";
let selectedApp = "all";

const dateInput = document.querySelector("#date-filter");
const entryList = document.querySelector("#entry-list");

function shortDate(date) {
  const [year,month,day] = date.split("-");
  const names = {"10":"OCT","11":"NOV"};
  return `${Number(day)} ${names[month]}`;
}
function formatDuration(minutes) {
  if (minutes == null) return "Total no anotado";
  const h = Math.floor(minutes / 60), m = minutes % 60;
  return h ? `${h} h ${String(m).padStart(2,"0")} min` : `${m} min`;
}
function formatRange(record) {
  const start = `${String(record.start).padStart(2,"0")}:00`;
  const end = record.end === 24 ? "00:00" : `${String(record.end).padStart(2,"0")}:00`;
  return `${start}–${end}`;
}

function renderDailyChart() {
  const chart = document.querySelector("#daily-chart");
  const max = Math.max(...dailyTotals.filter(d => d.minutes != null).map(d => d.minutes));
  chart.innerHTML = dailyTotals.map(day => {
    const height = day.minutes == null ? 2 : Math.max(3, day.minutes / max * 100);
    const selected = selectedDate === day.date;
    const value = formatDuration(day.minutes);
    return `<div class="day-bar-wrap" style="--bar-height:${height}%" data-value="${value}">
      <button class="day-bar${selected ? " selected" : ""}" style="height:${height}%" aria-label="Filtrar ${shortDate(day.date)}, ${value}" aria-pressed="${selected}" data-date="${day.date}"></button>
      <span class="day-label">${shortDate(day.date)}</span></div>`;
  }).join("");
  chart.querySelectorAll("[data-date]").forEach(button => button.addEventListener("click", () => {
    selectedDate = selectedDate === button.dataset.date ? "all" : button.dataset.date;
    dateInput.value = selectedDate;
    renderDailyChart(); renderEntries();
  }));
}

function renderDateOptions() {
  dailyTotals.forEach(day => {
    const option = document.createElement("option");
    option.value = day.date;
    option.textContent = shortDate(day.date);
    dateInput.append(option);
  });
  dateInput.addEventListener("change", () => {
    selectedDate = dateInput.value;
    renderDailyChart(); renderEntries();
  });
}

function renderAppFilters() {
  const apps = Object.keys(appColors);
  const root = document.querySelector("#app-filter");
  root.innerHTML = `<button type="button" class="app-chip${selectedApp === "all" ? " active" : ""}" data-app="all">Todas las apps</button>` +
    apps.map(app => `<button type="button" class="app-chip${selectedApp === app ? " active" : ""}" data-app="${app}"><i class="chip-dot" style="background:${appColors[app]}"></i>${app}</button>`).join("");
  root.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    selectedApp = button.dataset.app;
    renderAppFilters(); renderEntries();
  }));
}

function renderEntries() {
  const nextHour = selectedHour === 23 ? "00" : String(selectedHour+1).padStart(2,"0");
  const label = `${String(selectedHour).padStart(2,"0")}:00 — ${nextHour}:00`;
  document.querySelector("#selected-hour-label").textContent = label;
  const matching = records.filter(record => record.start <= selectedHour && selectedHour < record.end &&
    (selectedDate === "all" || record.date === selectedDate) && (selectedApp === "all" || record.app === selectedApp))
    .sort((a,b) => b.date.localeCompare(a.date) || a.start - b.start || a.app.localeCompare(b.app));
  document.querySelector("#result-count").textContent = `${matching.length} ${matching.length === 1 ? "REGISTRO" : "REGISTROS"}`;
  if (!matching.length) {
    entryList.innerHTML = `<div class="empty-state">No hay registros para esta selección. Prueba otra hora, fecha o aplicación.</div>`;
    return;
  }
  entryList.innerHTML = matching.map((record,index) => `<article class="entry-card" style="--app-color:${appColors[record.app]};animation-delay:${Math.min(index*18,180)}ms">
    <span class="entry-mark" aria-hidden="true"></span><div><span class="entry-app">${record.app}</span><span class="entry-date">${shortDate(record.date)} · franja ${formatRange(record)}</span></div>
    <span class="entry-time"><strong>${record.minutes} min</strong>franja completa</span></article>`).join("");
}

const minutesByHour = Array.from({length:24},() => Object.fromEntries(Object.keys(appColors).map(app => [app,0])));
records.forEach(record => {
  const intervalHours = record.end - record.start;
  const minutesPerHour = record.minutes / intervalHours;
  for (let hour = record.start; hour < record.end; hour++) minutesByHour[hour][record.app] += minutesPerHour;
});
const observedDays = 15;
const averageByHour = minutesByHour.map(hour => Object.fromEntries(Object.entries(hour).map(([app,minutes]) => [app,minutes / observedDays])));
const maxHourlyAverage = Math.max(...averageByHour.flatMap(hour => Object.values(hour)));

function clockPoint(radius,angle) {
  const radians = angle * Math.PI / 180;
  return [220 + radius * Math.cos(radians),220 + radius * Math.sin(radians)];
}
function clockArc(radius,hour,sweep) {
  const startAngle = hour * 15 - 90 + 1;
  const endAngle = startAngle + sweep;
  const [x1,y1] = clockPoint(radius,startAngle);
  const [x2,y2] = clockPoint(radius,endAngle);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${radius} ${radius} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}
function selectClockHour(hour) {
  selectedHour = hour;
  renderClock();
  renderEntries();
}
function renderClock() {
  const root = document.querySelector("#hour-clock");
  if (!root) return;
  const appOrder = Object.keys(appColors);
  const tracks = appOrder.map((app,index) => `<circle class="clock-app-track" cx="220" cy="220" r="${121 + index*5.2}" style="stroke:${appColors[app]}"/>`).join("");
  const arcs = appOrder.flatMap((app,index) => averageByHour.map((hour,hourIndex) => {
    const average = hour[app];
    if (average <= 0) return "";
    const sweep = Math.max(.7,Math.min(13.1,average / maxHourlyAverage * 13.1));
    return `<path class="clock-app-arc" d="${clockArc(121 + index*5.2,hourIndex,sweep)}" style="stroke:${appColors[app]}" stroke-width="4" data-app="${app}" data-hour="${hourIndex}"/>`;
  })).join("");
  const ticks = Array.from({length:24},(_,hour) => {
    const angle = hour*15-90;
    const [x1,y1] = clockPoint(hour % 6 === 0 ? 159 : 162,angle);
    const [x2,y2] = clockPoint(169,angle);
    return `<line class="clock-tick${hour % 6 === 0 ? " major" : ""}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
  }).join("");
  const labels = Array.from({length:24},(_,hour) => {
    const angle = hour*15-90;
    const [x,y] = clockPoint(188,angle);
    const name = `${String(hour).padStart(2,"0")}:00`;
    const selected = hour === selectedHour;
    const activeApps = Object.entries(averageByHour[hour]).filter(([,value]) => value > 0).length;
    return `<g class="clock-hour${selected ? " selected" : ""}" data-hour="${hour}" role="button" tabindex="0" aria-label="Seleccionar ${name}, ${activeApps} aplicaciones con minutos anotados" aria-pressed="${selected}">
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12"/><text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${String(hour).padStart(2,"0")}</text></g>`;
  }).join("");
  const selectedTotal = Object.values(averageByHour[selectedHour]).reduce((sum,value) => sum + value,0);
  const activeApps = Object.entries(averageByHour[selectedHour]).filter(([,value]) => value > 0).sort((a,b) => b[1]-a[1]);
  const nextHour = selectedHour === 23 ? "00" : String(selectedHour+1).padStart(2,"0");
  root.innerHTML = `<svg viewBox="0 0 440 440" role="img" aria-label="Reloj circular de 24 horas. Cada anillo corresponde a una aplicación; la longitud de cada arco representa su media de minutos anotados en esa hora.">
    <circle class="clock-ring" cx="220" cy="220" r="158"/>${tracks}${arcs}${ticks}
    <circle class="clock-center" cx="220" cy="220" r="91"/><text class="clock-center-hour" x="220" y="210">${String(selectedHour).padStart(2,"0")}</text><text class="clock-center-caption" x="220" y="232">HORA · ${selectedTotal.toFixed(1)} MIN/DÍA</text>
    ${labels}</svg>`;
  root.querySelectorAll(".clock-hour").forEach(item => {
    const activate = () => selectClockHour(Number(item.dataset.hour));
    item.addEventListener("click",activate);
    item.addEventListener("keydown",event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
  });
  document.querySelector("#clock-hour-label").textContent = `${String(selectedHour).padStart(2,"0")}:00 — ${nextHour}:00`;
  document.querySelector("#clock-total-average").textContent = `${activeApps.length} ${activeApps.length === 1 ? "APP" : "APPS"} CON REGISTRO`;
  document.querySelector("#clock-average-label").textContent = "Media de minutos registrados por aplicación y día observado.";
  document.querySelector("#clock-app-breakdown").innerHTML = activeApps.length ? activeApps.map(([app,minutes]) => `<div class="clock-app-row"><i style="background:${appColors[app]}"></i><span>${app}</span><strong>${minutes.toFixed(1)} min/día</strong></div>`).join("") : `<p class="clock-empty">No hay minutos anotados para esta hora.</p>`;
  document.querySelector("#clock-app-legend").innerHTML = `<div class="clock-color-legend">${Object.entries(appColors).map(([app,color]) => `<span><i style="background:${color}"></i>${app}</span>`).join("")}</div><p>Arcos por media diaria, escalados al máximo de la muestra. Las franjas de varias horas se reparten por igual; sin registro significa 0 minutos anotados en los datos.</p>`;
}

const dayparts = [
  {name:"Madrugada",range:"00–05",start:0,end:6},
  {name:"Mañana",range:"06–11",start:6,end:12},
  {name:"Mediodía / tarde",range:"12–17",start:12,end:18},
  {name:"Tarde / noche",range:"18–23",start:18,end:24}
];

function getAppCounts(list) {
  return Object.fromEntries(Object.keys(appColors).map(app => [app,list.filter(r => r.app === app).length]));
}

function renderPatterns() {
  const appOrder = Object.keys(appColors);
  const patternData = dayparts.map(band => {
    const entries = records.filter(record => record.start >= band.start && record.start < band.end);
    return {band,entries,counts:getAppCounts(entries)};
  });
  document.querySelector("#pattern-chart").innerHTML = patternData.map(({band,entries,counts}) => {
    const segments = appOrder.filter(app => counts[app] > 0).map(app => `<span class="pattern-segment" style="--app-color:${appColors[app]};width:${counts[app] / entries.length * 100}%" title="${app}: ${counts[app]} ${counts[app] === 1 ? "registro" : "registros"}"></span>`).join("");
    const breakdown = appOrder.filter(app => counts[app] > 0).map(app => `${app} ${counts[app]}`).join(" · ");
    return `<div class="pattern-row" aria-label="${band.name}, ${band.range}: ${entries.length} registros. ${breakdown}">
      <span class="pattern-period">${band.name}<small>${band.range} h · inicio</small></span>
      <span class="pattern-track">${segments}</span><span class="pattern-total">${entries.length}</span>
      <span class="pattern-breakdown">${breakdown}</span></div>`;
  }).join("");
  const overall = getAppCounts(records);
  document.querySelector("#pattern-legend").innerHTML = appOrder.map(app => `<span class="legend-item"><i style="background:${appColors[app]}"></i>${app} · ${overall[app]}</span>`).join("");
  return patternData;
}

function renderBehavior(patternData) {
  const overall = getAppCounts(records);
  const midnight = patternData[0].counts;
  const evening = patternData[3];
  const wazeDay = records.filter(r => r.app === "Waze" && r.start >= 6 && r.start < 18).length;
  const cards = [
    `Instagram es la aplicación con más entradas: <strong>${overall.Instagram} de ${records.length}</strong> registros.`,
    `En la madrugada (00–05), las entradas anotadas son de <strong>TikTok (${midnight.TikTok}) e Instagram (${midnight.Instagram})</strong>.`,
    `De los ${overall.Waze} registros de Waze, <strong>${wazeDay} empiezan entre las 06:00 y las 18:00</strong>.`,
    `En la franja de tarde/noche (18–23) hay <strong>${evening.counts.Instagram} registros de Instagram</strong>, el mayor recuento de esa franja.`
  ];
  document.querySelector("#behavior-cards").innerHTML = cards.map((copy,index) => `<article class="behavior-card"><span class="behavior-number">OBSERVACIÓN 0${index+1}</span><p>${copy}</p></article>`).join("");
}

function renderConclusions(patternData) {
  const overall = getAppCounts(records);
  const midnight = patternData[0].counts;
  const wazeDay = records.filter(r => r.app === "Waze" && r.start >= 6 && r.start < 18).length;
  document.querySelector("#conclusion-copy").innerHTML = `
    <p>En estas anotaciones, Instagram es la aplicación más frecuente (${overall.Instagram} de ${records.length} entradas). También aparece en las cuatro franjas de inicio.</p>
    <p>La madrugada queda representada por TikTok (${midnight.TikTok} registros) e Instagram (${midnight.Instagram}). Waze, en cambio, aparece sobre todo en registros que empiezan entre las 06:00 y las 18:00 (${wazeDay} de ${overall.Waze}).</p>
    <p>La comparación describe recuentos de entradas según su hora de inicio. No mide minutos exactos por hora ni demuestra por sí sola que estas pautas se repitan siempre.</p>`;
}

function renderStatCarousel(patternData) {
  const lateBand = patternData[3].entries.length;
  const facts = [
    {text:`En tus registros, <strong>${lateBand} de ${records.length} franjas</strong> empiezan entre las 18:00 y las 23:00.`,source:"Fuente: tus registros de Tiempo de uso · 20 oct–3 nov 2026",href:"#patrones",external:false},
    {text:"En un seguimiento pasivo de tres semanas a <strong>1.415 adolescentes</strong> (edad media: 14), el uso del móvil promedió 5 horas al día: dos más de lo que declararon.",source:"Fuente: Passively sensing smartphone use in teens · PubMed",href:"https://pubmed.ncbi.nlm.nih.gov/39097657/",external:true},
    {text:"En ese estudio, el uso del móvil alcanzó su punto más alto entre las <strong>20:00 y las 22:00</strong> y el más bajo entre las 03:00 y las 05:00.",source:"Fuente: Passively sensing smartphone use in teens · PubMed",href:"https://pubmed.ncbi.nlm.nih.gov/39097657/",external:true},
    {text:"En un estudio objetivo con <strong>79 jóvenes</strong>, cada 10 minutos extra de pantalla en cama se asociaron con 3 minutos menos de sueño; las dos horas previas no se relacionaron con la mayoría de medidas.",source:"Fuente: Screen Use at Bedtime and Sleep · JAMA Pediatrics (2024)",href:"https://jamanetwork.com/journals/jamapediatrics/fullarticle/2822859",external:true}
  ];
  let index = 0;
  const text = document.querySelector("#rotating-stat-text");
  const source = document.querySelector("#rotating-stat-source");
  const counter = document.querySelector("#stat-counter");
  const dots = document.querySelector("#stat-dots");
  const card = document.querySelector(".stat-rotator");
  function show(next) {
    index = (next + facts.length) % facts.length;
    text.innerHTML = facts[index].text;
    source.textContent = facts[index].source + " ↗";
    source.href = facts[index].href;
    source.target = facts[index].external ? "_blank" : "_self";
    counter.textContent = `${String(index+1).padStart(2,"0")} / ${String(facts.length).padStart(2,"0")}`;
    dots.querySelectorAll("button").forEach((dot,dotIndex) => {
      dot.classList.toggle("active",dotIndex === index);
      dot.setAttribute("aria-pressed",String(dotIndex === index));
    });
  }
  dots.innerHTML = facts.map((_,i) => `<button type="button" aria-label="Mostrar dato ${i+1}" aria-pressed="${i===0}"></button>`).join("");
  dots.querySelectorAll("button").forEach((dot,i) => dot.addEventListener("click",() => show(i)));
  document.querySelector("#stat-prev").addEventListener("click",() => show(index-1));
  document.querySelector("#stat-next").addEventListener("click",() => show(index+1));
  show(0);
  let timer;
  function startTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => { if (!document.hidden) show(index+1); },10000);
  }
  card.addEventListener("mouseenter",() => window.clearInterval(timer));
  card.addEventListener("mouseleave",startTimer);
  card.addEventListener("focusin",() => window.clearInterval(timer));
  card.addEventListener("focusout",startTimer);
  startTimer();
}

const referenceData = [
  {
    title:"What is Buddhism? · Information is Beautiful",
    description:"Explica las principales creencias, conceptos y enseñanzas del budismo mediante una infografía visual.",
    takeaways:["Un color diferente para cada aplicación.","Jerarquía visual para destacar los datos con tamaños y contrastes.","Agrupar la información y convertir datos y porcentajes en gráficos."],
    href:"https://informationisbeautiful.net/visualizations/buddhism-explained-key-beliefs-samsara-nirvana-dependent-origination-enlightenment-jhanas/",
    image:"./buddhism.png",
    alt:"Infografía sobre las enseñanzas budistas del referente Information is Beautiful"
  },
  {
    title:"TimeMD App",
    description:"Analiza el tiempo de uso del ordenador y presenta las aplicaciones utilizadas y cuánto tiempo se les dedica.",
    takeaways:["Organizar los datos en bloques y secciones.","Representar las aplicaciones con líneas temporales por hora.","Destacar horas, porcentajes y aplicaciones más utilizadas; comparar franjas con gráficos."],
    href:"https://timemd.app",
    image:"./timemd.png",
    alt:"Captura del dashboard de TimeMD App"
  },
  {
    title:"Apple",
    description:"Presenta productos y novedades con imágenes grandes, movimiento y textos breves.",
    takeaways:["Diseño minimalista con espacio en blanco.","Interacciones al pasar el cursor y transiciones progresivas.","Imágenes y movimiento para acompañar la presentación de los datos."],
    href:"https://www.apple.com",
    image:"./apple.png",
    alt:"Captura de la página de productos de Apple"
  }
];

let currentReference = -1;
function renderReference(index) {
  const reference = referenceData[index];
  if (!reference || index === currentReference) return;
  currentReference = index;
  const image = document.querySelector("#reference-image");
  image.style.opacity = "0";
  window.setTimeout(() => {
    image.src = reference.image;
    image.alt = reference.alt;
    image.onload = () => { image.style.opacity = "1"; };
    if (image.complete) image.style.opacity = "1";
  },120);
  document.querySelector("#reference-index").textContent = "REFERENTE";
  document.querySelector("#reference-title").textContent = reference.title;
  document.querySelector("#reference-description").textContent = reference.description;
  document.querySelector("#reference-takeaways").innerHTML = reference.takeaways.map(item => `<li>${item}</li>`).join("");
  const link = document.querySelector("#reference-link");
  link.href = reference.href;
  link.textContent = `Ver ${reference.title.split(" · ")[0]} ↗`;
  document.querySelectorAll("#reference-dots span").forEach((dot,dotIndex) => dot.classList.toggle("active",dotIndex === index));
}

function setupReferenceScroll() {
  const steps = [...document.querySelectorAll(".reference-scroll-step")];
  let scheduled = false;
  function update() {
    const middle = window.innerHeight * .5;
    let closest = 0, distance = Infinity;
    steps.forEach((step,index) => {
      const rect = step.getBoundingClientRect();
      const stepMiddle = (rect.top + rect.bottom) / 2;
      const nextDistance = Math.abs(stepMiddle - middle);
      if (nextDistance < distance) { distance = nextDistance; closest = index; }
    });
    renderReference(closest);
    scheduled = false;
  }
  window.addEventListener("scroll",() => {
    if (!scheduled) { window.requestAnimationFrame(update); scheduled = true; }
  },{passive:true});
}

function setupStickyNavigation() {
  const sections = ["pregunta","datos","horas","patrones","comportamiento","conclusiones","narrativa"].map(id => document.getElementById(id));
  const links = [...document.querySelectorAll(".site-header nav a")];
  let scheduled = false;
  function update() {
    let active = sections[0].id;
    for (const section of sections) if (section.getBoundingClientRect().top <= 145) active = section.id;
    links.forEach(link => {
      if (link.getAttribute("href") === `#${active}`) link.setAttribute("aria-current","location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  window.addEventListener("scroll",() => {
    if (!scheduled) { window.requestAnimationFrame(update); scheduled = true; }
  },{passive:true});
  update();
}

renderDateOptions();
renderDailyChart();
renderClock();
renderAppFilters();
renderEntries();
const patternData = renderPatterns();
renderBehavior(patternData);
renderConclusions(patternData);
renderStatCarousel(patternData);
renderReference(0);
setupReferenceScroll();
setupStickyNavigation();
