(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ymaps"],{7722:function(n,e,r){"use strict";r.r(e);var t={load:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"//api-maps.yandex.ru/2.1/?lang=en_RU",e=function(){var e=n.match(/[\\?&]ns=([^&#]*)/);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))};return this.promise||(this.promise=new Promise((function(e,r){var t=document.createElement("script");t.onload=e,t.onerror=r,t.type="text/javascript",t.src=n,document.body.appendChild(t)})).then((function(){var n=e();return n&&"ymaps"!==n&&(0,eval)("var ymaps = ".concat(n,";")),new Promise((function(n){return ymaps.ready(n)}))}))),this.promise}};e["default"]=t}}]);