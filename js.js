'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    const selector_article = '[id^="ID_TIME_STAMP_"]';
    const {sheet} = document.head.appendChild(document.createElement('style'));
    sheet.disabled = true;
    sheet.ownerNode.setAttribute('title', [...document.styleSheets].find(({title}) => title).title);
    switch (sheet.title) {
        case 'heritage': {
            sheet.insertRule(`${selector_article} {display: flex;}`, sheet.cssRules.length);
            sheet.insertRule(`${selector_article} > :first-child {margin-right: 1em; background-color: rgb(10, 186, 181);}`, sheet.cssRules.length);
            sheet.insertRule(`${selector_article} > :first-child time {background-color: rgb(0, 0, 0); color: rgb(10, 186, 181);}`, sheet.cssRules.length);
            break;
        }
    }
    return {e, selector_article, sheet};
})
.then(({e, selector_article, sheet}) => {
    for (const article of document.body.querySelectorAll(selector_article)) {
        const time = article.insertBefore(document.createElement('section'), article.firstElementChild).appendChild(document.createElement('p')).appendChild(document.createElement('time'));
        time.setAttribute('datetime', time.appendChild(document.createTextNode(new Date(Number(article.id.match(/\d+$/))).toISOString().replace(/\.\d+/, ''))).wholeText);
    }
    sheet.disabled = false;
    return e;
})
.then(() => undefined)
.catch(error => {
    if (location.protocol == 'file:') {
        console.log(error);
    }
});
