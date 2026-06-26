import{a7 as d}from"./iframe-C2dzRmjh.js";import{M as m}from"./MetaItem-DPkQUkSI.js";import{S as p}from"./Eye-BuuGbkX-.js";import{S as B}from"./EyeClosed-D2-5K9G7.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressIcon-CTYvz49a.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Tooltip-yHxi1dML.js";const u=({size:n="xs",label:e="Seen by label",seenByEndUser:s=!1,seenByOthersCount:c=0,onClick:i,...y})=>{const l=s||c>0?p:B;return d.jsx(m,{size:n,icon:l,...y,children:e})},L={title:"Inbox/Dialog/DialogSeenBy",component:u,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=({seenByEndUser:n,seenByOthersCount:e})=>{const s=[];n&&s.push("deg"),e&&s.push(e);const c="Sett av "+s.join("+");return d.jsx(u,{seenByEndUser:n,seenByOthersCount:e,label:c})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
