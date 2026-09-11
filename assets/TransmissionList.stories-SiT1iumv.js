import{t as o}from"./transmissions-D9H6EbES.js";import{T as m}from"./TransmissionList-DCPxcJUJ.js";import"./iframe-O8cJNgnH.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-fWou_4WZ.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./ListItem-DE6V7Ob0.js";import"./Input-BfEZmvKD.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./ChevronUp-C3suJ612.js";import"./ChevronDown-D0blAyPo.js";import"./ChevronRight-U0ooHRaY.js";import"./Section-D1aETyw8.js";import"./Flex-oXvF6uEL.js";import"./Typography-DU3EjiaL.js";import"./AttachmentList-DxbxyJ99.js";import"./AttachmentLink-CCDWy6Io.js";import"./File-CdfEIeiT.js";import"./SeenByLog-CPxlK6f2.js";import"./SeenByLogItem-BLyGzyEQ.js";import"./Byline-DHjFQhcs.js";import"./SeenByLogButton-CyYt-urJ.js";import"./Divider-BCrvfH-b.js";import"./List-BRiZNku9.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
