'use strict';
document.addEventListener('DOMContentLoaded', e => {
    Promise.resolve('[id^="ID_TIME_STAMP_"]')
    .then(selector_article => {
        const {sheet} = document.head.appendChild(document.createElement('style'));
        sheet.disabled = true;
        sheet.ownerNode.setAttribute('title', Array.from(document.styleSheets).find(({disabled, title}) => !disabled && title).title);
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
    })
    .catch(console.error);

    Promise.resolve(['abbr, acronym', 'abbr[title], acronym[title]'])
    .then(([selector_abac, selector_abac_title]) => {
        const abacs = Array.from(document.body.querySelectorAll(selector_abac));
        for (const abac_title of document.querySelectorAll(selector_abac_title)) {
            const {title, textContent: textContent_abac_title} = abac_title;
            const abac = abacs.filter(_ => !abac_title.isSameNode(_)).find(({textContent: textContent_abac}) => textContent_abac == textContent_abac_title);
            if (abac) {
                abac.setAttribute('title', title);
                abac_title.removeAttribute('title');
            }
        }
    })
    .catch(console.error);

    if (location.protocol == 'file:') {
        console.log(e);
    }
});

document.addEventListener('mouseover', e => {
    try {
        console.log((({title, textContent}) => `${textContent} : ${title}`)(Array.from(document.querySelectorAll('abbr[title], acronym[title]')).find((abac => ({textContent}) => textContent == abac.textContent)(e.target.closest('abbr:not([title]), acronym:not([title])')))));
    } catch {}
});

document.addEventListener('dblclick', e => {
    try {
        console.log(e.target.closest('[id]').id);
    } catch {}
})
