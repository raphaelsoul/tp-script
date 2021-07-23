// ==UserScript==
// @name         replacer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ides.nocheck.com/accountinfo.pl
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/raphaelsoul/tp-script/main/replacer.js
// ==/UserScript==

(function() {
    'use strict';
    const $ = window.jQuery;
    $(document).ready(() => {
        const $tbody = $('#right');
        const $button = $(`<div id=injectform><button id=prefix>添加前缀</button><button id=unlock>解锁银行名字段</button></div>`);
        $tbody.append($button);
        var btn = document.querySelector('#injectform > button#prefix');
        btn.addEventListener('click', function() {
            var routingInput = document.querySelector('#left > table > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]');
            routingInput.value = `\u0018` + routingInput.value.replace('\u0018');
            alert('路由已添加不可见前缀');
        });

        var btn1 = document.querySelector('#injectform > button#unlock');
        btn1.addEventListener('click', function() {
            var bankNameInput = document.querySelector('#left > table > tbody > tr:nth-child(4) > td:nth-child(3) > input');
            bankNameInput.removeAttribute('readonly');
            alert('银行名输入字段已解锁');
        });
    });
})();
