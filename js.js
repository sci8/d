'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const a_html = 'data-Date_getTime';
    const a_css = 'data-Date_toISOString';
    document.head.appendChild(document.createElement('style')).sheet.insertRule(`[${a_css}]::before {content: attr(${a_css}); display: block;}`, 0);
    [...document.body.querySelectorAll(`[${a_html}]`)].forEach(s => s.setAttribute(a_css, new Date(Number(s.getAttribute(a_html))).toISOString()));
    return e;
})
.catch(() => undefined);