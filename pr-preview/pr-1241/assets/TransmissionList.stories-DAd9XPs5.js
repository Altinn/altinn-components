import{t as o}from"./transmissions-Bc6B0bhM.js";import{T as m}from"./TransmissionList-C6yrGIuv.js";import"./iframe-KbHODQgb.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CMGND5HP.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ListItem-B8fUE1Gh.js";import"./Input-DwLHHyGz.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./Typography-C9K693Jo.js";import"./AttachmentList-5CLT2scB.js";import"./AttachmentLink-Cr17w__T.js";import"./File-Cl-9gMMr.js";import"./SeenByLog-D5lga72_.js";import"./SeenByLogButton-CxuQ8wNs.js";import"./SeenByLogItem-XM8q8lie.js";import"./Byline-CQxYRlRU.js";import"./Divider-CbNMIzqf.js";import"./List-DEwsIv64.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
