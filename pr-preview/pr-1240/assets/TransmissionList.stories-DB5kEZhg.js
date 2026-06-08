import{t as o}from"./transmissions-DscTEujq.js";import{T as m}from"./TransmissionList-BvWvRllD.js";import"./iframe-C3-39QZn.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DEFI6ysY.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./ListItem-BhGiT6gr.js";import"./Input-Ck9X-Ajd.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./ChevronRight-C8E9q9OI.js";import"./Section-B5UTl4N5.js";import"./Flex-cOQ4YkiH.js";import"./Typography-DzSxU3qn.js";import"./AttachmentList-CIsjNSAf.js";import"./AttachmentLink-BA_P0cdw.js";import"./File-D2pTWHdc.js";import"./SeenByLog-CfAi7R1v.js";import"./SeenByLogButton-C2U_vdVT.js";import"./SeenByLogItem-BIgaFvdz.js";import"./Byline-B1hqh-Dc.js";import"./Divider-DEcFljaK.js";import"./List-C0B2zVng.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
