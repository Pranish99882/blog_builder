import{j as u,r as m,B as p,a as h}from"./vendor.d46ead11.js";const g=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};g();const e=u.exports.jsx,l=u.exports.jsxs,f=u.exports.Fragment,x=()=>{const[o,a]=m.exports.useState(""),[i,n]=m.exports.useState(""),[t,s]=m.exports.useState([]);return l(f,{children:[l("form",{onSubmit:r=>{r.preventDefault();const d={title:o,content:i};s([...t,d]),a(""),n("")},className:"max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded",children:[l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"title",children:"Title"}),e("input",{type:"text",id:"title",value:o,onChange:r=>a(r.target.value),className:"w-full px-3 py-2 border rounded",required:!0})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"content",children:"Content"}),e("textarea",{id:"content",value:i,onChange:r=>n(r.target.value),className:"w-full px-3 py-2 border rounded",rows:"4",required:!0})]}),e("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Create Post"})]}),e("div",{className:"blogs",children:t.map((r,d)=>l("div",{className:"blog",children:[e("h2",{children:r.title}),e("p",{children:r.content})]},d))})]})},b=()=>{const[o,a]=m.exports.useState(!0),[i,n]=m.exports.useState(!1),t=[{title:"Create Template",src:"Chart_fill"},{title:"Category",src:"Chat"},{title:"See Blogs",src:"User",gap:!0},{title:"Setting",src:"Setting"}],s=r=>{n(r==="Create Template")},c=()=>{n(!1)};return l("div",{className:"flex flex-col",children:[l("div",{className:"px-10 py-5 flex justify-between  bg-slate-600 ",children:[e("h1",{className:"text-2xl font-bold text-white",children:"Blogs"}),e("button",{className:"text-4xl text-white",children:e(p,{})})]}),l("div",{className:"flex",children:[l("div",{className:` ${o?"w-72":"w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`,children:[e("img",{src:"./src/assets/control.png",className:`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!o&&"rotate-180"}`,onClick:()=>a(!o)}),l("div",{className:"flex gap-x-4 items-center",children:[e("img",{src:"./src/assets/logo.png",className:`cursor-pointer duration-500 ${o&&"rotate-[360deg]"}`}),e("h1",{className:`text-white origin-left font-medium text-xl duration-200 ${!o&&"scale-0"}`,children:"BLOG BUILDER"})]}),e("ul",{className:"pt-6",children:t.map((r,d)=>l("li",{className:`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${r.gap?"mt-9":"mt-2"} ${d===0&&"bg-light-white"} `,onClick:()=>s(r.title),onDoubleClick:c,children:[e("img",{src:`./src/assets/${r.src}.png`}),e("span",{className:`${!o&&"hidden"} origin-left duration-200`,children:r.title})]},d))})]}),e("div",{className:"h-screen flex-1 p-7",children:i?e(x,{}):e("h1",{className:"text-2xl font-semibold ",children:"Home Page"})})]})]})};h.render(e(b,{}),document.getElementById("root"));
