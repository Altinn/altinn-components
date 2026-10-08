import{t as o}from"./transmissions-D13P8nL8.js";import{T as m}from"./TransmissionList-DS4Vn_HT.js";import"./iframe-BKcGtkf2.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BJt3AZGy.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./ListItem-EWMGi19r.js";import"./Input-C7NN4jQM.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ChevronUp-DoWxH2Yl.js";import"./ChevronDown-Jc6dKi_G.js";import"./ChevronRight-Bik0Rfts.js";import"./Section-DaRR8FNt.js";import"./Flex-xlDXZNwq.js";import"./Typography-CpSlwMZW.js";import"./AttachmentList-BQf2lYnj.js";import"./AttachmentLink-C2dV1c7i.js";import"./File-jQTy3sGG.js";import"./SeenByLog-BGyrhGJ2.js";import"./SeenByLogItem-BYq4uA6e.js";import"./Byline-DiiF8671.js";import"./SeenByLogButton-u_2yK4_o.js";import"./Divider-Rdje89H_.js";import"./List-B4x8HRGj.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
