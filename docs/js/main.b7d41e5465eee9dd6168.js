(()=>{"use strict";var e={80:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(r(696));document.addEventListener("DOMContentLoaded",(()=>{(new n.default).init()}))},696:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.burgerMenu=document.querySelector(".header__nav"),this.openBurgerMenuBtn=document.querySelector(".header__popup-close"),this.closeBurgerMenuBtn=document.querySelector(".header__popup-open"),this.burgerMenuOpenClass="header__nav--open",this.carouselParent=document.querySelectorAll(".carousel-parent"),this.carouselViewportSelector=".carousel-viewport",this.carouselControlsSelector=".carousel-controls",this.carouselBtnSelector=".slide",this.carouselCurrentBtnClass="slide--selected"}init(){this.toggleBurgerMenu(),this.initCarousel()}initCarousel(){var e;null===(e=this.carouselParent)||void 0===e||e.forEach((e=>{this.setupCarousel(e)}))}setupCarousel(e){if(!e)return;const t=e.querySelector(this.carouselViewportSelector),r=e.querySelector(this.carouselControlsSelector);if(!r)return;const s=r.querySelectorAll(this.carouselBtnSelector);s&&s.forEach((e=>{e.addEventListener("click",(()=>{const r=e.getAttribute("data-item");if(r){const n=Number(r)-1;if(!t)return;const u=t.firstElementChild.getBoundingClientRect(),o=window.getComputedStyle(t),l=parseFloat(o.gap||o.columnGap)||0,i=u.width+l;t.style.transform=`translateX(-${i*n}px)`,this.reassignCurrentClass(s,e)}}))}))}reassignCurrentClass(e,t){e&&e.forEach((e=>{e!==t&&e.classList.remove(this.carouselCurrentBtnClass),null==t||t.classList.add(this.carouselCurrentBtnClass)}))}toggleBurgerMenu(){this.openBurgerMenuBtn&&this.closeBurgerMenuBtn&&(this.openBurgerMenuBtn.addEventListener("click",(()=>{var e,t;this.burgerMenu&&(this.burgerMenu.classList.remove(this.burgerMenuOpenClass),null===(e=this.openBurgerMenuBtn)||void 0===e||e.setAttribute("aria-expanded","false"),null===(t=this.closeBurgerMenuBtn)||void 0===t||t.setAttribute("aria-expanded","false"))})),this.closeBurgerMenuBtn.addEventListener("click",(()=>{var e,t;this.burgerMenu&&(this.burgerMenu.classList.add(this.burgerMenuOpenClass),null===(e=this.openBurgerMenuBtn)||void 0===e||e.setAttribute("aria-expanded","true"),null===(t=this.closeBurgerMenuBtn)||void 0===t||t.setAttribute("aria-expanded","true"))})))}}}},t={};!function r(s){var n=t[s];if(void 0!==n)return n.exports;var u=t[s]={exports:{}};return e[s].call(u.exports,u,u.exports,r),u.exports}(80)})();