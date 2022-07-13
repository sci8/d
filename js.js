'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const css_selector = '[id^="ID_TIME_STAMP_"]';
    for (const article of document.body.querySelectorAll(css_selector)) {
        const time = article.insertBefore(document.createElement('section'), article.firstElementChild).appendChild(document.createElement('p')).appendChild(document.createElement('time'));
        time.setAttribute('datetime', time.appendChild(document.createTextNode(new Date(Number(article.id.match(/\d+$/))).toISOString())).wholeText);
    }
    return {e, css_selector};
})
.then(({e, css_selector}) => {
    const {sheet} = document.head.appendChild(document.createElement('style'));
    sheet.insertRule(`${css_selector} {display: flex;}`, 0);
    return e;
})
.catch(() => undefined);
