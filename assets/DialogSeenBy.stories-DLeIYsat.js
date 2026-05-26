import{p as c}from"./iframe-Ca1pxjCh.js";import{M as y}from"./MetaItem-SG1w26bo.js";import{S as i}from"./Eye-hNVApuei.js";import{S as l}from"./EyeClosed-CIaek4aR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qsemo-NB.js";import"./ProgressIcon-CHnd0F5x.js";import"./Avatar-D6lLgCNX.js";import"./Skeleton-CjJRr45L.js";import"./useId-DKdvhqLE.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Tooltip-CUaFdea7.js";import"./tooltip-DBInG_0S.js";const p=({size:n="xs",label:e="Seen by label",seenByEndUser:s=!1,seenByOthersCount:m=0,onClick:B,...d})=>{const u=s||m>0?i:l;return c.jsx(y,{size:n,icon:u,...d,children:e})},I={title:"Inbox/Dialog/DialogSeenBy",component:p,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=({seenByEndUser:n,seenByOthersCount:e})=>{const s=[];n&&s.push("deg"),e&&s.push(e);const m="Sett av "+s.join("+");return c.jsx(p,{seenByEndUser:n,seenByOthersCount:e,label:m})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const M=["Unseen","seenByEndUser","seenByEndUserAndOthers","ExampleLabel"];export{a as ExampleLabel,r as Unseen,M as __namedExportsOrder,I as default,t as seenByEndUser,o as seenByEndUserAndOthers};
