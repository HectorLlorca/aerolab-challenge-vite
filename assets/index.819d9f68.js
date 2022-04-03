var y=Object.defineProperty,k=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(r,a,t)=>a in r?y(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,p=(r,a)=>{for(var t in a||(a={}))N.call(a,t)&&f(r,t,a[t]);if(v)for(var t of v(a))w.call(a,t)&&f(r,t,a[t]);return r},b=(r,a)=>k(r,x(a));import{j as o,a as e,s as u,b as S,O as T,o as d,P as C,r as A,S as P,R as E,c as $}from"./vendor.801342ee.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}};F();var D="/aerolab-challenge-vite/assets/aerolab-logo-1.9ef176dd.svg",B="/aerolab-challenge-vite/assets/aeropay-1.080f9aac.svg",L="/aerolab-challenge-vite/assets/chevron-default.928cb8e9.svg";const O=()=>o("div",{className:"aeropayDropdown",children:[e("img",{className:"aeropayIcon",src:B,alt:"aeropayicon",width:"32px",height:"32px"}),e("p",{className:"l1TextDefault",children:"1000"}),e("img",{className:"aeropayChevron",src:L,alt:"chevron"})]});const I=()=>e("div",{className:"header container",children:o("div",{className:"logoBalance",children:[e("img",{src:D,alt:"logo"}),e(O,{})]})});var R="/aerolab-challenge-vite/assets/Icons.fb62c8d0.svg";const U=()=>o("a",{href:"#techProducts",className:"landingBtn l2TextDefault",children:["VIEW ALL PRODUCTS",e("img",{src:R,alt:"arrow"})]});var j="/aerolab-challenge-vite/assets/hero-desktop.d0199ec9.png";const M=()=>e("div",{className:"landingSection",children:o("div",{className:"techZone",children:[o("div",{className:"techZoneTitle",children:[e("p",{className:"l1TextCaps",children:"Explore the"}),o("div",{children:[e("p",{className:"l1Title",children:"Tech"}),e("p",{className:"l1Title",children:"zone"})]}),e("p",{className:"l1TextDefault",children:"Here you\u2019ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."}),e(U,{})]}),e("div",{className:"techZoneImg",children:e("img",{src:j,alt:"hero"})})]})});const m=({img:r,icon:a,text:t,classe:s})=>e("div",{className:"walktroughCard "+s,children:o("div",{className:"walktroughCardContent",children:[e("div",{className:"walktroughCardImg",children:e("img",{src:r,alt:"walktroughCard"})}),o("div",{className:"walktroughCardText",children:[o("div",{children:[e("img",{src:a,alt:"iconCard"}),e("p",{className:"l3Title",children:t[0]})]}),e("div",{children:e("p",{className:"l1TextDefault",children:t[1]})})]})]})});var H="/aerolab-challenge-vite/assets/walkthroug-1-desktop.2553fc32.png",V="/aerolab-challenge-vite/assets/walkthroug-2-desktop.a41e65ed.png",W="/aerolab-challenge-vite/assets/walkthroug-3-desktop.2c40eaf7.png",X="/aerolab-challenge-vite/assets/walkthrough-1.867cbd67.svg",Z="/aerolab-challenge-vite/assets/walkthrough-2.7674783b.svg",z="/aerolab-challenge-vite/assets/walkthrough-3.b842e9a9.svg";const G=["1\u2014browse","Browse our tech catalog with more than 20 top tech products"],q=["2\u2014choose","Exchange your hard earned AeroPoints for the item you want"],K=["3\u2014enjoy!","All done, you can relax! We\u2019ll take care of delivery of your tech item!"],_=()=>o("div",{className:"walkthroughSection",children:[e(m,{classe:"card1",img:H,icon:X,text:G}),e(m,{classe:"card2",img:V,icon:Z,text:q}),e(m,{classe:"card3",img:W,icon:z,text:K})]});const h={100:"#DAECFF",200:"#99CCF3",400:"#3399FF",500:"#007FFF",600:"#0072E5",900:"#003A75"},n={100:"#E7EBF0",200:"#E0E3E7",300:"#CDD2D7",400:"#B2BAC2",500:"#A0AAB4",600:"#6F7E8C",700:"#3E5060",800:"#2D3843",900:"#1A2027"},J=u("button")(({theme:r})=>`
      min-height: calc(1.5em + 22px);
      min-width: 220px;
      background: ${r.palette.mode==="dark"?n[900]:"#fff"};
      border: 1px solid ${r.palette.mode==="dark"?n[800]:n[300]};
      border-radius: 0.75em;
      margin: 0.5em;
      padding: 10px;
      text-align: left;
    
      &:hover {
        border-color: ${r.palette.mode==="dark"?n[700]:n[400]};
      }
    
      &.${S.expanded} {
        &::after {
          content: '\u25B4';
        }
      }
    
      &::after {
        content: '\u25BE';
        float: right;
      }
      `),Q=u("ul")(({theme:r})=>`
      padding: 5px;
      margin: 10px 0;
      min-width: 320px;
      background: ${r.palette.mode==="dark"?n[900]:"#fff"};
      border: 1px solid ${r.palette.mode==="dark"?n[800]:n[300]};
      border-radius: 0.75em;
      overflow: auto;
      outline: 0px;
      `),i=u(T)(({theme:r})=>`
      list-style: none;
      padding: 8px;
      border-radius: 0.45em;
      cursor: default;
    
      &:last-of-type {
        border-bottom: none;
      }
    
      &.${d.selected} {
        background-color: ${r.palette.mode==="dark"?h[900]:h[100]};
      }
    
      &.${d.highlighted} {
        background-color: ${r.palette.mode==="dark"?n[800]:n[100]};
      }
    
      &.${d.highlighted}.${d.selected} {
        background-color: ${r.palette.mode==="dark"?h[900]:h[100]};
      }
    
      &.${d.disabled} {
      }
    
      &:hover:not(.${d.disabled}) {
        background-color: ${r.palette.mode==="dark"?n[800]:n[100]};
      }
      `),Y=u(C)`
  z-index: 1;
`,ee=A.exports.forwardRef(function(a,t){const s=p({Root:J,Listbox:Q,Popper:Y},a.components);return e(P,b(p({},a),{ref:t,components:s}))});function re(){return o("div",{className:"selectFilter",children:[e("p",{children:"Filter By:"}),o(ee,{defaultValue:"All Products",children:[e(i,{value:"All Products",children:"All Products"}),e(i,{value:"Gaming",children:"Gaming"}),e(i,{value:"Audio",children:"Audio"}),e(i,{value:"Smart Home",children:"Smart Home"}),e(i,{value:"Monitors nd TV",children:"Monitors nd TV"})]})]})}const ae=()=>e("div",{className:"filterSort",children:e(re,{})});const te=()=>o("div",{className:"techProductsSection container",id:"techProducts",children:[o("div",{className:"techProductsSectionTitle",children:[e("p",{className:"l2Title",children:"Tech"}),e("p",{className:"l2Title",children:"Products"})]}),e(ae,{})]});function oe(){return o("div",{className:"App",children:[e(I,{}),o("div",{className:"forPattern container",children:[e(M,{}),e(_,{})]}),e(te,{})]})}E.render(e($.StrictMode,{children:e(oe,{})}),document.getElementById("root"));
