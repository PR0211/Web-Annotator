chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let st = window.getSelection();
  if (st.rangeCount) {
    const annotation = {
      url: "",
      date: "",
      toih: "",
      bold: false,
      italic: false,
      underline: false,
      tost:st.toString(),
    };
    var d=new Date();
    var yr=d.getFullYear();
    var month=d.getMonth() +1;
    if(month<10)
      {
        month='0' + month;
      }
    var dte=d.getDate();
    if(dte<10)
      {
        dte='0' + dte;
      }
    annotation.date=yr + "-" + month +"-" +dte;
    
    if (request.message === "ayan") {
      const range = st.getRangeAt(0);
    const span = document.createElement("span");
    range.surroundContents(span);
    annotation.url = window.location.href;
      annotation.toih = span.innerHTML;
      span.style.backgroundColor = request.color;
      if (request.isbold) {
        span.style.fontWeight = "bold";
        annotation.bold = true;
      }
      if (request.isitalic) {
        span.style.fontStyle = "italic";
        annotation.italic = true;
      }
      if (request.isunderline) {
        span.style.textDecoration = "underline";
        annotation.underline = true;
      }
      if (request.isnote) {
        const subspan = document.createElement("span");
        span.appendChild(subspan);
        const textNode = document.createTextNode(
          "(NOTE : " + request.isnote + ")"
        );
        subspan.appendChild(textNode);
        annotation.notes = request.isnote;
      }
      annotation.colour = request.color;
      chrome.storage.local.set({ SavedAnnotations: [] }).then(() => {
      });
      chrome.runtime.sendMessage(
        { type: "saveannotation", annotation },
      );
    }
  }
  if (request.message === "ran") {
    chrome.runtime.sendMessage(
      { type: "getannotation", ul: window.location.href },
    )
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.message === "bhejaheajlh") {
        const ctdspanjcmlh = document.createElement("span");
        ctdspanjcmlh.innerHTML = request.hml;
        ctdspanjcmlh.style.backgroundColor = request.c;
        if (request.b === true) {
          ctdspanjcmlh.style.fontWeight = "bold";
        }
        if (request.i === true) {
          ctdspanjcmlh.style.fontStyle = "italic";
        }
        if (request.u === true) {
          ctdspanjcmlh.style.textDecoration = "underline";
        }
        if (request.n) {
          const ctdsubspanjcmlh = document.createElement("span");
          ctdspanjcmlh.appendChild(ctdsubspanjcmlh);
          const ctdtextNodejcmlh = document.createTextNode(
            "(NOTE : " + request.n + ")"
          );
          ctdsubspanjcmlh.appendChild(ctdtextNodejcmlh);
        }
        var fnljcmlh = ctdspanjcmlh.outerHTML;
        document.body.innerHTML = document.body.innerHTML.replace(
          request.hml,
          fnljcmlh
        );
      }
    });
  }
  if (request.message === "bwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationbwrfc", ul: window.location.href },
      () => {
        console.log("ha")
      }
    )
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "bwrfb") {
        const ctdspan = document.createElement("span");
        ctdspan.innerHTML = request.hmllh;
        ctdspan.style.backgroundColor = request.clh;
        if (request.blh === true) {
          ctdspan.style.fontWeight = "bold";
        }
        if (request.ilh === true) {
          ctdspan.style.fontStyle = "italic";
        }
        if (request.ulh === true) {
          ctdspan.style.textDecoration = "underline";
        }
        if (request.nlh) {
          const ctdsubspan = document.createElement("span");
          ctdspan.appendChild(ctdsubspan);
          const ctdtextNode = document.createTextNode("(NOTE : " + request.n + ")");
          ctdsubspan.appendChild(ctdtextNode);
        }
        var fnl = ctdspan.outerHTML;
        chrome.runtime.sendMessage(
          { type: "bwrfc", ct: fnl },
          () => {
            console.log("ha");
          }
        );
      }
    })
  }
  if (request.message === "iwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationiwrfc", ul: window.location.href },
      () => {
        console.log("ha")
      }
    )
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "iwrfb") {
        const ctdspan = document.createElement("span");
        ctdspan.innerHTML = request.hmllh;
        ctdspan.style.backgroundColor = request.clh;
        if (request.blh === true) {
          ctdspan.style.fontWeight = "bold";
        }
        if (request.ilh === true) {
          ctdspan.style.fontStyle = "italic";
        }
        if (request.ulh === true) {
          ctdspan.style.textDecoration = "underline";
        }
        if (request.nlh) {
          const ctdsubspan = document.createElement("span");
          ctdspan.appendChild(ctdsubspan);
          const ctdtextNode = document.createTextNode("(NOTE : " + request.n + ")");
          ctdsubspan.appendChild(ctdtextNode);
        }
        var fnl = ctdspan.outerHTML;
        chrome.runtime.sendMessage(
          { type: "iwrfc", ct: fnl },
          () => {
            console.log("ha");
          }
        );
      }
    })
  }
  if (request.message === "uwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationuwrfc", ul: window.location.href },
      () => {
        console.log("ha")
      }
    )
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "uwrfb") {
        const ctdspan = document.createElement("span");
        ctdspan.innerHTML = request.hmllh;
        ctdspan.style.backgroundColor = request.clh;
        if (request.blh === true) {
          ctdspan.style.fontWeight = "bold";
        }
        if (request.ilh === true) {
          ctdspan.style.fontStyle = "italic";
        }
        if (request.ulh === true) {
          ctdspan.style.textDecoration = "underline";
        }
        if (request.nlh) {
          const ctdsubspan = document.createElement("span");
          ctdspan.appendChild(ctdsubspan);
          const ctdtextNode = document.createTextNode("(NOTE : " + request.n + ")");
          ctdsubspan.appendChild(ctdtextNode);
        }
        var fnl = ctdspan.outerHTML;
        chrome.runtime.sendMessage(
          { type: "uwrfc", ct: fnl },
          () => {
            console.log("ha");
          }
        );
      }
    })
  }
  if (request.message === "dtwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationdtwrfc", ul: window.location.href ,jdhdt:request.keydt},
      () => {
        console.log("ha")
      }
    )
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "dtwrfb") {
        const ctdspan = document.createElement("span");
        ctdspan.innerHTML = request.hmllh;
        ctdspan.style.backgroundColor = request.clh;
        if (request.blh === true) {
          ctdspan.style.fontWeight = "bold";
        }
        if (request.ilh === true) {
          ctdspan.style.fontStyle = "italic";
        }
        if (request.ulh === true) {
          ctdspan.style.textDecoration = "underline";
        }
        if (request.nlh) {
          const ctdsubspan = document.createElement("span");
          ctdspan.appendChild(ctdsubspan);
          const ctdtextNode = document.createTextNode("(NOTE : " + request.n + ")");
          ctdsubspan.appendChild(ctdtextNode);
        }
        var fnl = ctdspan.outerHTML;
        chrome.runtime.sendMessage(
          { type: "dtwrfc", ct: fnl },
          () => {
            console.log("ha");
          }
        );
      }
    })
  }
  if (request.message === "kwwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationkwwrfc", ul: window.location.href ,jdh:request.key},
      () => {
        console.log("ha")
      }
    )
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "kwwrfb") {
        const ctdspan = document.createElement("span");
        ctdspan.innerHTML = request.hmllh;
        ctdspan.style.backgroundColor = request.clh;
        if (request.blh === true) {
          ctdspan.style.fontWeight = "bold";
        }
        if (request.ilh === true) {
          ctdspan.style.fontStyle = "italic";
        }
        if (request.ulh === true) {
          ctdspan.style.textDecoration = "underline";
        }
        if (request.nlh) {
          const ctdsubspan = document.createElement("span");
          ctdspan.appendChild(ctdsubspan);
          const ctdtextNode = document.createTextNode("(NOTE : " + request.n + ")");
          ctdsubspan.appendChild(ctdtextNode);
        }
        var fnl = ctdspan.outerHTML;
        chrome.runtime.sendMessage(
          { type: "kwwrfc", ct: fnl },
          () => {
            console.log("ha");
          }
        );
      }
    })
  }
  if (request.message === "ddwrfp") {
    chrome.runtime.sendMessage(
      { type: "getannotationddwrfc", ul: window.location.href},
      () => {
        console.log("ha")
      }
    )
  }
  
});
