'use strict';
addEventListener('DOMContentLoaded', e => ['data-time-stamp'].forEach(attr => [...document.body.querySelectorAll(`[${attr}]`)].forEach(elm => elm.setAttribute(attr, new Date(Number(elm.getAttribute(attr).value)).toISOString()))));
