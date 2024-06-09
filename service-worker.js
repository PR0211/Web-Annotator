let atts = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["atts"], (result) => {
    if (result.atts) {
      atts = result.atts;
    }
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "saveannotation") {
    atts.push(request.annotation);
    chrome.storage.local.set({ atts });
  }else if (request.type === "getannotation") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if (request.ul === response.atts[i].url) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "bhejaheajlh",
                c: response.atts[i].colour,
                b: response.atts[i].bold,
                i: response.atts[i].italic,
                u: response.atts[i].underline,
                n: response.atts[i].notes,
                hml: response.atts[i].toih,
              });
              console.log("bheja to he")
            }
          );
        }
      }
    });
  } else if (request.type === "getannotationbwrfc") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if ((request.ul === response.atts[i].url) && response.atts[i].bold) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "bwrfb",
                clh: response.atts[i].colour,
                blh: response.atts[i].bold,
                ilh: response.atts[i].italic,
                ulh: response.atts[i].underline,
                nlh: response.atts[i].notes,
                hmllh: response.atts[i].tost,
              });
            }
          );
        }
      } 
    });
  }
  else if (request.type === "getannotationiwrfc") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if ((request.ul === response.atts[i].url) && response.atts[i].italic) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "iwrfb",
                clh: response.atts[i].colour,
                blh: response.atts[i].bold,
                ilh: response.atts[i].italic,
                ulh: response.atts[i].underline,
                nlh: response.atts[i].notes,
                hmllh: response.atts[i].tost,
              });
            }
          );
        }
      } 
    });
    
  }
  else if (request.type === "getannotationuwrfc") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if ((request.ul === response.atts[i].url) && response.atts[i].underline) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "uwrfb",
                clh: response.atts[i].colour,
                blh: response.atts[i].bold,
                ilh: response.atts[i].italic,
                ulh: response.atts[i].underline,
                nlh: response.atts[i].notes,
                hmllh: response.atts[i].tost,
              });
            }
          );
        }
      } 
    });
    
  }
  else if (request.type === "getannotationdtwrfc") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if ((request.ul === response.atts[i].url) && (response.atts[i].date)===(request.jdhdt)) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "dtwrfb",
                clh: response.atts[i].colour,
                blh: response.atts[i].bold,
                ilh: response.atts[i].italic,
                ulh: response.atts[i].underline,
                nlh: response.atts[i].notes,
                hmllh: response.atts[i].tost,
              });
            }
          );
        }
      } 
    });
    
  }
  else if (request.type === "getannotationkwwrfc") {
    chrome.storage.local.get(["atts"], (response) => {
      for (let i = 0; i < response.atts.length; i++) {
        if ((request.ul === response.atts[i].url) && (response.atts[i].tost).includes(request.jdh)) {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {
                message: "kwwrfb",
                clh: response.atts[i].colour,
                blh: response.atts[i].bold,
                ilh: response.atts[i].italic,
                ulh: response.atts[i].underline,
                nlh: response.atts[i].notes,
                hmllh: response.atts[i].tost,
              });
            }
          );
        }
      } 
    });
  }
});
