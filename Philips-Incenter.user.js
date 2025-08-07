// ==UserScript==
// @name         Philips - InCenter - Enable additional PDF buttons jQuery
// @namespace    http://tampermonkey.net/
// @version      1.0.0.0_2025-06-17
// @description  Enable Open, Save, Print, Text and Draw buttons
// @author       Igor Lovrić
// @match        https://philips.mizecx.com/knowledgeDocument.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mizecx.com
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        none
// ==/UserScript==

window.onload = function() {
    // Your code to execute after the entire page is loaded
    console.log("Window fully loaded!");
};


(function() {
    'use strict';

    var interval=setInterval(function() {
        if ($('#download', $('#docFrame').contents()).length>0) {
            clearInterval(interval);
            // console.log('FOUND!');
            var elements=[
                '#toolbarViewerRight #openFile',
                '#toolbarViewerRight #print',
                '#toolbarViewerRight #download',
                '#toolbarViewerRight #editorFreeText',
                '#toolbarViewerRight #editorInk',
                '#secondaryToolbarButtonContainer #secondaryDownload',
                '#secondaryToolbarButtonContainer #secondaryPrint',
                '#secondaryToolbarButtonContainer #secondaryOpenFile',
                '#secondaryToolbarButtonContainer .horizontalToolbarSeparator'
            ];
            elements.forEach(function(e) {
                $(e, $('#docFrame').contents()).removeClass('hiddenMediumView hiddenLargeView visibleMediumView visibleLargeView hidden');
            });
        } else {
            // console.log('NOT FOUND!');
        }
    }, 1000);
})();