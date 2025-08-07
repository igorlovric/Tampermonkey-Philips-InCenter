// ==UserScript==
// @name         Philips - InCenter - Enable additional PDF buttons
// @namespace    http://tampermonkey.net/
// @version      1.1.0.0_2025-08-07
// @description  Enable Open, Save, Print, Text and Draw buttons
// @author       Igor Lovrić
// @match        https://philips.mizecx.com/knowledgeDocument.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mizecx.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var interval = setInterval(function () { // Wait for PDF to load
        var docFrame = document.getElementById('docFrame');
        if (docFrame && docFrame.contentDocument) {
            var downloadButton = docFrame.contentDocument.querySelector('#download');
            if (downloadButton) {
                clearInterval(interval);

                var selectors = [
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

                selectors.forEach(function (selector) {
                    var elements = docFrame.contentDocument.querySelectorAll(selector);
                    elements.forEach(function (el) {
                        el.classList.remove(
                            'hiddenMediumView',
                            'hiddenLargeView',
                            'visibleMediumView',
                            'visibleLargeView',
                            'hidden'
                        );
                    });
                });


                var toolbars = docFrame.contentDocument.querySelectorAll('#toolbarViewerRight');

                if (toolbars) {
                    toolbars.forEach(function(toolbar) {
                        var span = document.createElement('span');
                        span.style.paddingTop = '7px';
                        span.style.color = '#aa0000';
                        span.textContent = 'Buttons enabled →';
                        span.style.transition = 'opacity 1s ease'; // Enable smooth fade out
                        span.style.opacity = '1'; // Start fully visible

                        toolbar.insertBefore(span, toolbar.firstChild);
                        setTimeout(function() {
                            span.style.opacity = '0';
                        }, 5000);
                        setTimeout(function() {
                            if (span.parentNode) {
                                span.parentNode.removeChild(span);
                            }
                        }, 6000);
                    });
                }
            }
        }
    }, 1000);
})();