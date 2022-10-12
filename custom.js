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

document.getElementById('ymDivCircle').style.bottom = '128px !important';
var observer = new MutationObserver(function(mutations) {
    document.getElementById('ym-notification').style.bottom = '128px !important'; 
});

