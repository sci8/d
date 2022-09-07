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

    Promise.resolve(['abbr[title], acronym[title]', 'abbr:not([title]), acronym:not([title])'])
    .then(([selector_abac_title, selector_abac_not_title]) => {
        const abacs_title = {};
        const abacs_not_title = {};
        for (const abac_not_title of document.querySelectorAll(selector_abac_not_title)) {
            const textContent = abac_not_title.textContent.trim();
            abacs_not_title[textContent] ??= [];
            abacs_not_title[textContent].push(abac_not_title);
        }
        for (const abac_title of document.querySelectorAll(selector_abac_title)) {
            const title = abac_title.getAttribute('title').trim();
            const textContent = abac_title.textContent.trim();
            if (title == '') {
                abacs_not_title[textContent] ??= [];
                abacs_not_title[textContent].push(abac_title);
            } else {
                abac_title.setAttribute('title', title);// /^ +| +$//g
                abacs_title[textContent] ??= [];
                abacs_title[textContent].push(abac_title);
            }
        }
        for (const [textContent, [{title}]] of Object.entries(abacs_title)) {
            abacs_not_title[textContent]?.forEach(abac_not_title => abac_not_title.setAttribute('title', title));
            delete abacs_not_title[textContent];
        }
        for (const textContent of Object.keys(abacs_not_title)) {
            abacs_not_title[textContent].forEach(({localName}) => console.error(`<${localName}>${textContent}</${localName}> has no title.`));
        }
    })
    .catch(console.error);

    if (location.protocol == 'file:') {
        console.log(e);
    }
});

document.addEventListener('dblclick', e => {try {console.log(e.target.closest('[id]').id);} catch {}});