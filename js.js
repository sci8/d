'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const selector_article = '[id^="ID_TIME_STAMP_"]';
    const {sheet} = document.head.appendChild(document.createElement('style'));
    sheet.insertRule(`${selector_article} {display: flex;}`, sheet.cssRules.length);
    sheet.insertRule(`${selector_article} > :first-child {margin-right: 1em; background-color: Palegoldenrod;}`, sheet.cssRules.length);
    sheet.insertRule(`${selector_article} > :first-child time {background-color: Black; color: Palegoldenrod;}`, sheet.cssRules.length);
    return {e, selector_article};
})
.then(({e, selector_article}) => {
    for (const article of document.body.querySelectorAll(selector_article)) {
        const time = article.insertBefore(document.createElement('section'), article.firstElementChild).appendChild(document.createElement('p')).appendChild(document.createElement('time'));
        time.setAttribute('datetime', time.appendChild(document.createTextNode(new Date(Number(article.id.match(/\d+$/))).toISOString().replace(/\.\d+/, ''))).wholeText);
    }
    return e;
})
.then(() => undefined)
.catch(() => undefined);
