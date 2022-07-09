'use strict';
addEventListener('DOMContentLoaded', e => ['data-time-stamp'].forEach(attr => [...document.body.querySelectorAll(`[${attr}]`)].forEach(elm => elm.setAttribute('data-date-toISOString', new Date(Number(elm.getAttribute(attr).value)).toISOString()))));
