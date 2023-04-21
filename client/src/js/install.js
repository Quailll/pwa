// const butInstall = document.getElementById("buttonInstall");
// let deferredPrompt;
// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   deferredPrompt = event;
//   butInstall.style.display = "block";
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener("click", async () => {
//   if (deferredPrompt) {
//     deferredPrompt.prompt();
//     const choiceResult = await deferredPrompt.userChoice;
//     if (choiceResult.outcome === "accepted") {
//       console.log("accepted install");
//     }
//     deferredPrompt = null;
//     butInstall.style.display = "none";
//   }
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener("appinstalled", (event) => {
//   console.log("installed app");
// });

// ^^^
// the code above is the old code, but it did work. I was using chrome instead of chrome dev 







const butInstall = document.getElementById("buttonInstall");
// let deferredPrompt = window.deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (window.deferredPrompt) {
    const promptEv = deferredPrompt;
    promptEv.prompt();
    window.deferredPrompt = null;
    // const choiceResult = await deferredPrompt.userChoice;
    // if (choiceResult.outcome === 'accepted'){
    //   console.log('accepted install')
    // }
    butInstall.style.display = "none";
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("installed app");
  window.deferredPrompt = null;
});
