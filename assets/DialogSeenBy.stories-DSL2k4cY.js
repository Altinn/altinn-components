import{j as p}from"./iframe-Bk_HwK4l.js";import{S as u}from"./Eye-vY4zSgG6.js";import{S as y}from"./EyeClosed-D0Sg2b7k.js";import{M as l}from"./MetaItem-BdzNCpQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-WArpTTRC.js";import"./index-Bj80ru-z.js";import"./ProgressIcon-BjPHd8nJ.js";import"./Avatar-B1R5c004.js";import"./Skeleton-CZ4GHxMp.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";const c=({size:n="xs",label:e="Seen by label",seenByEndUser:s=!1,seenByOthersCount:m=0,onClick:B,...i})=>{const d=s||m>0?u:y;return p.jsx(l,{size:n,icon:d,...i,children:e})},_={title:"Inbox/Dialog/DialogSeenBy",component:c,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=({seenByEndUser:n,seenByOthersCount:e})=>{const s=[];n&&s.push("deg"),e&&s.push(e);const m="Sett av "+s.join("+");return p.jsx(c,{seenByEndUser:n,seenByOthersCount:e,label:m})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const k=["Unseen","seenByEndUser","seenByEndUserAndOthers","ExampleLabel"];export{a as ExampleLabel,r as Unseen,k as __namedExportsOrder,_ as default,t as seenByEndUser,o as seenByEndUserAndOthers};
