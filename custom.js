// (function injectJS() {
//     try {        
//         var parentCssHead = document.head || document.getElementsByTagName('head')[0];
//         var parentStyles = document.createElement('style');
//         parentStyles.type = 'text/css';

//         var parentCssStyles = '@media only screen and (max-width: 768px) { #ymDivCircle { bottom: 75px; } @media only screen and (min-width: 768px) { #ymDivCircle { bottom: 20px; } }';
//         if (parentStyles.styleSheet) {
//         parentStyles.styleSheet.cssText = parentCssStyles;
//         } else {
//         parentStyles.appendChild(document.createTextNode(parentCssStyles));
//         }
//         parentCssHead.appendChild(parentStyles);
//     } catch(e) {
//         console.error("failed while inserting to iFrame", e);
//     }
// })();
 window.YellowMessengerPlugin.init({host: 'https://app.yellow.ai', view: 'compact', floatingIcon: false})
 console.log(window, window.parent, window.top);
 document.getElementById("ymDivCircle").style.cssText = `
  bottom: 128px;
  right: 0px !important;
  display: flex !important;
  background-color: #707070 !important;
  border-radius: 0px !important;
`;

 document.getElementById("ym-notification").style.cssText = `
  bottom: 168px !important;
`;

 document.getElementById("ymFrameHolder").style.cssText = `
   bottom: 0 !important;
   right: 0px !important; // added
`;
// document.getElementById('ymDivCircle').style.bottom = '128px !important';
// var observer = new MutationObserver(function(mutations) {
//     document.getElementById('ymDivCircle').style.bottom = '128px !important'; 
// });
// var target = document.getElementById('ymDivCircle');
// observer.observe(target, { attributes : true, attributeFilter : ['style'] });
