import{t as o}from"./transmissions-DUNzCeV6.js";import{T as m}from"./TransmissionList-Dr8wnl5R.js";import"./iframe-CeD8DZF_.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DatyTSz5.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./ListItem-DB5KLH66.js";import"./Input-B6Hxr8dW.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./ChevronUp-CcrHqtW6.js";import"./ChevronDown-y5t2TNH2.js";import"./ChevronRight-B8wcZ9md.js";import"./Section-18Uf7Mat.js";import"./Flex-BOkBPJQr.js";import"./Typography-D10BEJyK.js";import"./AttachmentList-CjaQheaT.js";import"./AttachmentLink-coQsXWeD.js";import"./File-CFDZqm9I.js";import"./SeenByLog-Bj9_BLGb.js";import"./SeenByLogItem-2IdxurlM.js";import"./Byline-KDNVSBdT.js";import"./SeenByLogButton-5WxuNEty.js";import"./Divider-CNvjQvQ-.js";import"./List-9yu3lGOt.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
