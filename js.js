'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const a_css = 'data-Date_toISOString';
    [...document.body.querySelectorAll('[id^="ID_"]')].forEach(s => s.setAttribute(a_css, new Date(Number(s.id.match(/\d+$/))).toISOString()));
    document.head.appendChild(document.createElement('style')).sheet.insertRule(`[${a_css}]::before {content: "attr(${a_css})"; display: block;}`, 0);
    return e;
})
.catch(() => undefined);
