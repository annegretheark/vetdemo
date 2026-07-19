(function(){
  "use strict";
  var steps=[
    {kicker:"Kunde og GPS",title:"Finn kunden – og finn fram.",text:"Kunde, kontaktinformasjon, dyr og historikk ligger samlet. Adresseoppslag og GPS gjør feltbesøket enklere å planlegge.",cards:[["Kundekort","Telefon, e-post og adresse"],["Pasienter","Alle dyr på samme eier"],["Kart","Posisjon og veibeskrivelse"]],proof:"Salgsverdi: mindre leting og en raskere start på hvert oppdrag."},
    {kicker:"Journal i felt",title:"Dokumenter mens besøket er ferskt.",text:"Innlogget veterinær velges automatisk som ansvarlig. Journalnotat kan skrives eller dikteres, og bilder kobles direkte til behandlingen.",cards:[["Ansvar","Tydelig veterinær på journalen"],["Dokumentasjon","Notat, medisin og bilder"],["Historikk","Tidligere behandlinger samlet"]],proof:"Sikkerhetsverdi: oppretter, ansvarlig veterinær og endringer holdes adskilt og sporbare."},
    {kicker:"Lager og varer",title:"Bilen blir en del av arbeidsflyten.",text:"Veterinæren velger varer og medisiner fra eget bil-lager. Forbruket følger journalen og danner fakturagrunnlag uten ny registrering.",cards:[["Bil-lager","Beholdning per veterinær/bil"],["Forbruk","Koblet til behandlingen"],["Bestilling","Behov sendes til admin"]],proof:"Driftsverdi: bedre lagerkontroll og færre manuelle etterregistreringer."},
    {kicker:"Faktura og EHF",title:"Journalen blir et kontrollert fakturagrunnlag.",text:"Behandling, timer, kjøring og varer samles før godkjenning. Regnskapssystemet kan være hovedsystem for fakturanummer, betaling og EHF.",cards:[["Grunnlag","Alt fra journalen samlet"],["Integrasjon","Tripletex eller CSV"],["EHF","Sendes via regnskapssystem"]],proof:"Økonomiverdi: mindre dobbeltarbeid mellom veterinær og administrasjon."},
    {kicker:"Tilsyn og kontroll",title:"Finn dokumentasjonen når den blir etterspurt.",text:"Admin kan lage en avgrenset dokumentasjonspakke med journaler, pasienter og logger. Inaktive journaler bevares for autoriserte roller.",cards:[["Tilsynspakke","Avgrenset eksport"],["Åpningslogg","Hvem åpnet hva og når"],["Backup","Historikk og gjenoppretting"]],proof:"Ledelsesverdi: sporbarhet som er forståelig både for klinikken og ved kontroll."}
  ];
  function esc(value){return String(value||"").replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];});}
  function render(index){
    var step=steps[index]||steps[0],panel=document.getElementById("demoFlowPanel");if(!panel)return;
    panel.innerHTML='<span class="flow-kicker">'+esc(step.kicker)+'</span><h3>'+esc(step.title)+'</h3><p>'+esc(step.text)+'</p><div class="flow-result">'+step.cards.map(function(card){return '<div><strong>'+esc(card[0])+'</strong><span>'+esc(card[1])+'</span></div>';}).join("")+'</div><div class="flow-proof">'+esc(step.proof)+'</div>';
    document.querySelectorAll("[data-demo-step]").forEach(function(button){var active=Number(button.dataset.demoStep)===index;button.classList.toggle("active",active);button.setAttribute("aria-selected",active?"true":"false");});
  }
  document.addEventListener("click",function(event){var button=event.target.closest("[data-demo-step]");if(button)render(Number(button.dataset.demoStep)||0);});
  render(0);
})();
