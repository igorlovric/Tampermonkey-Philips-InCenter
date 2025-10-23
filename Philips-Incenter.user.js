// ==UserScript==
// @name         Philips - InCenter - Enable additional PDF buttons
// @namespace    http://tampermonkey.net/
// @version      1.2.0.0_2025-10-23
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

        // PDF Downloader
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


        // Video Downloader
        if (docFrame && docFrame.tagName.toLowerCase() === 'video') {
            const src = docFrame.getAttribute('src');
           clearInterval(interval);

            if (src) {
                const fullUrl = new URL(src, window.location.origin).href;


                const downloadBtn = document.getElementById('downloadDoc');
                if (downloadBtn) {
                    // Create a new <i> element for the arrow-down button
                    const arrowBtn = document.createElement('i');
                    // Add appropriate icon classes (example uses Font Awesome or similar)
                    arrowBtn.className = 'icon-download7 pad9-left actioncol downloadDoc';
                    arrowBtn.style.fontSize = '22px';
                    arrowBtn.style.marginLeft = '18px';
                    arrowBtn.title = 'Download';

                    const downloadLink = document.createElement('a');
                    downloadLink.href = fullUrl; // <-- set your video file path here
                    downloadLink.title = 'Download Video';
                    downloadLink.setAttribute('download', '');

                    downloadLink.appendChild(arrowBtn);

                    // Insert the new button right after the existing one
                    downloadBtn.insertAdjacentElement('afterend', downloadLink);
                }
            }

        }
    }, 1000);
})();

