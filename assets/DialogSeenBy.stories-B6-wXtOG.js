import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Eye-BipOFo4Q.js";import{t as n}from"./EyeClosed-D72Zg8g-.js";import{t as r}from"./MetaItem-CjuEmKUN.js";var i=e(),a=({size:e=`xs`,label:a=`Seen by label`,seenByEndUser:o=!1,seenByOthersCount:s=0,onClick:c,...l})=>(0,i.jsx)(r,{size:e,icon:o||s>0?t:n,...l,children:a}),o={title:`Inbox/Dialog/DialogSeenBy`,component:a,tags:[`autodocsi`,`beta`],parameters:{},args:{seenByEndUser:!0,seenByOthersCount:2,label:``}},s={args:{seenByEndUser:!1,seenByOthersCount:0}},c={args:{seenByEndUser:!0,seenByOthersCount:0}},l={args:{seenByEndUser:!0,seenByOthersCount:10}},u=({seenByEndUser:e,seenByOthersCount:t})=>{let n=[];return e&&n.push(`deg`),t&&n.push(t),(0,i.jsx)(a,{seenByEndUser:e,seenByOthersCount:t,label:`Sett av `+n.join(`+`)})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: false,
    seenByOthersCount: 0
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: true,
    seenByOthersCount: 0
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    seenByEndUser: true,
    seenByOthersCount: 10
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
}`,...u.parameters?.docs?.source}}};var d=[`Unseen`,`seenByEndUser`,`seenByEndUserAndOthers`,`ExampleLabel`];export{u as ExampleLabel,s as Unseen,d as __namedExportsOrder,o as default,c as seenByEndUser,l as seenByEndUserAndOthers};