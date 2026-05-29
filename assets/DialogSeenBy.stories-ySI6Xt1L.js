import{p as c}from"./iframe-D7BK96qe.js";import{M as y}from"./MetaItem-BTeQwudu.js";import{S as i}from"./Eye-BETil9uI.js";import{S as l}from"./EyeClosed-Fxax43QS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./ProgressIcon-B2VmjhC7.js";import"./Avatar-BzaJ_tLr.js";import"./Skeleton-C-TQnNEe.js";import"./useId-B1IjdNvC.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";const p=({size:n="xs",label:e="Seen by label",seenByEndUser:s=!1,seenByOthersCount:m=0,onClick:B,...d})=>{const u=s||m>0?i:l;return c.jsx(y,{size:n,icon:u,...d,children:e})},I={title:"Inbox/Dialog/DialogSeenBy",component:p,tags:["autodocsi","beta"],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:""}},r={args:{seenByEndUser:!1,seenByOthersCount:0}},t={args:{seenByEndUser:!0,seenByOthersCount:0}},o={args:{seenByEndUser:!0,seenByOthersCount:10}},a=({seenByEndUser:n,seenByOthersCount:e})=>{const s=[];n&&s.push("deg"),e&&s.push(e);const m="Sett av "+s.join("+");return c.jsx(p,{seenByEndUser:n,seenByOthersCount:e,label:m})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
