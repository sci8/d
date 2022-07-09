'use strict';
addEventListener('DOMContentLoaded', e => ['data-time-stamp'].forEach(a => [...document.body.querySelectorAll(`[${a}]`)].forEach(s => s.setAttribute('data-date-toISOString', new Date(Number(elm.getAttribute(a))).toISOString()))));
