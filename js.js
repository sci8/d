'use strict';
new Promise(addEventListener.bind(this, 'DOMContentLoaded'))
.then(e => {
    Promise.resolve('[id^="ID_TIME_STAMP_"]')
    .then(selector_article => {
        const {sheet} = document.head.appendChild(document.createElement('style'));
        sheet.disabled = true;
        sheet.ownerNode.setAttribute('title', [...document.styleSheets].find(({title}) => title).title);
        switch (sheet.title) {
            case 'heritage': {
                sheet.insertRule(`${selector_article} {display: flex;}`, sheet.cssRules.length);
                sheet.insertRule(`${selector_article} > :first-child {margin: 0 1rem 0 0; background-color: rgb(10, 186, 181);}`, sheet.cssRules.length);
                sheet.insertRule(`${selector_article} > :first-child time {background-color: rgb(0, 0, 0); color: rgb(10, 186, 181);}`, sheet.cssRules.length);
                break;
            }
        }
        return {selector_article, sheet};
    })
    .then(({selector_article, sheet}) => {
        for (const article of document.body.querySelectorAll(selector_article)) {
            const time = article.insertBefore(document.createElement('h2'), article.firstElementChild).appendChild(document.createElement('time'));
            time.setAttribute('datetime', time.appendChild(document.createTextNode(new Date(Number(article.id.match(/\d+$/))).toISOString().replace(/\.\d+/, ''))).wholeText);
        }
        sheet.disabled = false;
    });
    Promise.resolve(['abbr, acronym', 'abbr[title], acronym[title]'])
    .then(([selector_abac, selector_abac_title]) => {
        const abacs = [...document.body.querySelectorAll(selector_abac)];
        for (const abac_title of document.querySelectorAll(selector_abac_title)) {
            const {title, textContent: textContent_abac_title} = abac_title;
            const abac = abacs.filter(_ => !abac_title.isSameNode(_)).find(({textContent: textContent_abac}) => textContent_abac == textContent_abac_title);
            if (abac) {
                abac.setAttribute('title', title);
                abac_title.removeAttribute('title');
            }
        }
    });
    return e;
})
.then(() => undefined)
.catch(error => {
    if (location.protocol == 'file:') {
        console.error(error);
    }
});
