import{t as o}from"./transmissions-BSTXR3g1.js";import{T as m}from"./TransmissionList-COWMQG8W.js";import"./iframe-ypmT5Gk0.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CLK8dx8s.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ListItem-BwY6iPn6.js";import"./Input-CoYipzRW.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./ChevronUp-BtRg68CV.js";import"./ChevronDown-BK7qLjN-.js";import"./ChevronRight-3_fnpscT.js";import"./Section-DHk6b8dD.js";import"./Flex-Chd0QM3i.js";import"./Typography-D_BM_-lf.js";import"./AttachmentList-BO16r-Lf.js";import"./AttachmentLink-Dz7oBAC6.js";import"./File-9SorHaEc.js";import"./SeenByLog-DGg7yLUM.js";import"./SeenByLogItem-CAQun9F9.js";import"./Byline-DpOxNcqU.js";import"./SeenByLogButton-QHtIvJwM.js";import"./Divider-BjtaC-QR.js";import"./List-Cf_BolQ2.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
