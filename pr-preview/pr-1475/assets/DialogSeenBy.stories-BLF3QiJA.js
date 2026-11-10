var p=Object.defineProperty;var d=(s,e)=>p(s,"name",{value:e,configurable:!0});import{a6 as u}from"./iframe-Yc5vADWD.js";import{M as B}from"./MetaItem-CkLkD9y8.js";import{S as i}from"./Eye-COO1FrOc.js";import{S as E}from"./EyeClosed-CDEoj0S2.js";import"./preload-helper-Cc2_yIPf.js";import"./ProgressIcon-CTVj33SH.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./Tooltip-ClWq0FMC.js";const y=d(({size:s="xs",label:e="Seen by label",seenByEndUser:n=!1,seenByOthersCount:c=0,onClick:g,...l})=>{const m=n||c>0?i:E;return u.jsx(B,{size:s,icon:m,...l,children:e})},"DialogSeenBy"),D={title:"Inbox/Dialog/DialogSeenBy",component:y,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=d(({seenByEndUser:s,seenByOthersCount:e})=>{const n=[];s&&n.push("deg"),e&&n.push(e);const c="Sett av "+n.join("+");return u.jsx(y,{seenByEndUser:s,seenByOthersCount:e,label:c})},"ExampleLabel"),A=["Unseen","seenByEndUser","seenByEndUserAndOthers","ExampleLabel"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as ExampleLabel,r as Unseen,A as __namedExportsOrder,D as default,t as seenByEndUser,o as seenByEndUserAndOthers};
