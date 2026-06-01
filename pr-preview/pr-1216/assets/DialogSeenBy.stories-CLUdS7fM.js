import{a7 as d}from"./iframe-cf7ESM3q.js";import{M as m}from"./MetaItem-CaYYoCA0.js";import{S as p}from"./Eye-C8rWw0oW.js";import{S as B}from"./EyeClosed-6Gr-6-Ja.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressIcon-CIho_Q6O.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Tooltip-B9_Ir4Cy.js";const u=({size:n="xs",label:e="Seen by label",seenByEndUser:s=!1,seenByOthersCount:c=0,onClick:i,...y})=>{const l=s||c>0?p:B;return d.jsx(m,{size:n,icon:l,...y,children:e})},L={title:"Inbox/Dialog/DialogSeenBy",component:u,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=({seenByEndUser:n,seenByOthersCount:e})=>{const s=[];n&&s.push("deg"),e&&s.push(e);const c="Sett av "+s.join("+");return d.jsx(u,{seenByEndUser:n,seenByOthersCount:e,label:c})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: false,
    seenByOthersCount: 0
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: true,
    seenByOthersCount: 0
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: true,
    seenByOthersCount: 10
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  seenByEndUser,
  seenByOthersCount
}: {
  seenByEndUser: boolean;
  seenByOthersCount: number;
}) => {
  const seenByLabel = [];
  if (seenByEndUser) {
    seenByLabel.push('deg');
  }
  if (seenByOthersCount) {
    seenByLabel.push(seenByOthersCount);
  }
  const label = 'Sett av ' + seenByLabel.join('+');
  return <DialogSeenBy seenByEndUser={seenByEndUser} seenByOthersCount={seenByOthersCount} label={label} />;
}`,...a.parameters?.docs?.source}}};const j=["Unseen","seenByEndUser","seenByEndUserAndOthers","ExampleLabel"];export{a as ExampleLabel,r as Unseen,j as __namedExportsOrder,L as default,t as seenByEndUser,o as seenByEndUserAndOthers};
