import{t as o}from"./transmissions-Cqi6pVfM.js";import{T as m}from"./TransmissionList-CYv822Tr.js";import"./iframe-COBbWeA3.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Cebsz00a.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./ListItem-CFne46Z7.js";import"./Input-BuLWJ9G8.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./ChevronUp-BDeeV8M4.js";import"./ChevronDown-DuT6TpEz.js";import"./ChevronRight-gAwtmJAo.js";import"./Section-4iuaFN40.js";import"./Flex-D1m969Q2.js";import"./Typography-BEwm6wl9.js";import"./AttachmentList-gVnUZxPL.js";import"./AttachmentLink-CvAR02ST.js";import"./File-CepsweWe.js";import"./SeenByLog-8JgauTnX.js";import"./SeenByLogItem-B4kpFSbT.js";import"./Byline-COYo-T98.js";import"./SeenByLogButton-DQQoRd1N.js";import"./Divider-Cs_mi-R8.js";import"./List-BOhzxjoW.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Outgoing","Incoming"];export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
