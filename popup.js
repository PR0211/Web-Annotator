var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
const boldbutton=document.getElementById('bold');
const italicbutton=document.getElementById('italic');
const underlinebutton=document.getElementById('underline');
const addnote=document.getElementById('note');
const applybutton=document.getElementById('annotate');
const hcolor=document.getElementById('selectcolor');
const fb=document.getElementById('fb');
const fi=document.getElementById('fi');
const fu=document.getElementById('fu');
const fkw=document.getElementById('srch');
const fdw=document.getElementById('srchkr');
const retrievebutton=document.getElementById('retrieve');
var skey=document.getElementById('srchvl').value;
var sdt=document.getElementById('srchdt').value;
var dv=document.getElementById("df");
var de=document.getElementById("ds");
var dh=document.getElementById("du");
var abold=false;
var aitalic=false;
var aunderline=false;

var selectedcolor=document.getElementById('scolor').value;
retrievebutton.addEventListener('click', () => {
  console.log("pressed");
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"ran"});
    console.log("sent");
  });
});
hcolor.addEventListener('click', () => {
  selectedcolor=document.getElementById('scolor').value;
});
boldbutton.addEventListener('click', () => {
    boldbutton.style.background="rgba(41, 138, 249, 0.24)";
    boldbutton.style.border="0.5px solid blue";
    abold=true;
});

italicbutton.addEventListener('click', () => {
    italicbutton.style.background="rgba(41, 138, 249, 0.24)";
    italicbutton.style.border="0.5px solid blue";
    aitalic=true;
});
underlinebutton.addEventListener('click', () => {
    underlinebutton.style.background="rgba(41, 138, 249, 0.24)";
    underlinebutton.style.border="0.5px solid blue";
    aunderline=true;
});
fb.addEventListener('click', () => {
  let ctdiv = document.createElement("div");
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"bwrfp"});
  });
  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
    if(request.type=== "bwrfc"){
        ctdiv.innerHTML += request.ct +"<br><br>";
    }
    dv.innerHTML=(ctdiv.innerHTML)
  })
});
fi.addEventListener('click', () => {
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"iwrfp"});
  });
  let ctdiv = document.createElement("div");
  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
    if(request.type=== "iwrfc"){
        ctdiv.innerHTML += (request.ct) +"<br><br>" ;
    }
    dv.innerHTML=(ctdiv.innerHTML)
  })
});
fu.addEventListener('click', () => {
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"uwrfp"});
  });
  let ctdiv = document.createElement("div");
  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
    if(request.type=== "uwrfc"){
        ctdiv.innerHTML += request.ct +"<br><br>";
    }
    dv.innerHTML=(ctdiv.innerHTML)
  })
});
fkw.addEventListener('click', () => {
  if(document.getElementById('srchvl').value!=""){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"kwwrfp",key:document.getElementById('srchvl').value});
  });
  let ctddiv = document.createElement("div");
  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
    if(request.type=== "kwwrfc"){
        ctddiv.innerHTML += request.ct +"<br><br>";
    }
    de.innerHTML=(ctddiv.innerHTML)
  })
}});
fdw.addEventListener('click', () => {
  if(document.getElementById('srchdt').value!=""){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"dtwrfp",keydt:document.getElementById('srchkr').value});
  });
  let ctddiv = document.createElement("div");
  chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
    if(request.type=== "dtwrfc"){
        ctddiv.innerHTML += request.ct +"<br><br>";
    }
    dh.innerHTML=(ctddiv.innerHTML)
  })
}});
applybutton.addEventListener('click',applychanges);
function applychanges(){
  var anote=addnote.value;
  console.log(anote);
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{message:"ayan",color:document.getElementById('scolor').value,isbold:abold,isitalic:aitalic,isunderline:aunderline,isnote:anote});
  });
}