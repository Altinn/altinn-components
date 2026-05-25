import{t as o}from"./transmissions-NmdfuHKG.js";import{T as m}from"./TransmissionList-Dg1CgKu4.js";import"./iframe-BFO1Hsm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CfeDkAme.js";import"./Badge-DsEojOp1.js";import"./index-q4P8UESO.js";import"./Tooltip-rGuNyqhX.js";import"./tooltip-DUJ67ouq.js";import"./ListItem-Dt0yZNNU.js";import"./Button-D67YnkXJ.js";import"./Input-D60Cokb5.js";import"./XMark-DHT-JiZe.js";import"./useId-Bk4Ffxqs.js";import"./Icon-B4PZu81w.js";import"./Skeleton-BRac3_14.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./ChevronUp-DlVSDhFe.js";import"./ChevronDown-zCo1cSZK.js";import"./ChevronRight-CdUbwk3C.js";import"./Section-D_8M4GBJ.js";import"./Flex-QSO1QCFn.js";import"./Typography-Bd9N_lP-.js";import"./AttachmentList-B7AIJtj4.js";import"./AttachmentLink--s4njdW9.js";import"./SeenByLog-oBq2C_yU.js";import"./SeenByLogButton-03DA_5Yy.js";import"./SeenByLogItem-zle6_R3o.js";import"./Byline-CkK12Zmz.js";import"./Divider-BgVQeY5v.js";import"./List-CuiWAA-k.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,J as __namedExportsOrder,H as default};
