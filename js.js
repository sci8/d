'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const id_prefix = 'ID_TIME_STAMP_';console.log(id_prefix);
    for (const article of document.body.querySelectorAll(`[id^="${id_prefix}"]`)) {
        const time = article.insertBefore(document.createElement('section'), article.firstElementChild).appendChild(document.createElement('p')).appendChild(document.createElement('time'));
        time.setAttribute('datetime', time.appendChild(document.createTextNode(new Date(Number(article.id.match(/\d+$/))).toISOString())).wholeText);
    }
    return {e, id_prefix};
})
.then(({e, id_prefix}) => {
    // document.head.appendChild(document.createElement('style')).sheet.insertRule(`[${a_css}]::before {content: attr(${a_css}); display: block;}`, 0);
    return e;
})
// .catch(() => undefined);
;
