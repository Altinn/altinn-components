import{t as o}from"./transmissions-CmwHbFl2.js";import{T as m}from"./TransmissionList-B4t0E_5K.js";import"./iframe-IRVPXNFV.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Di_es0Sg.js";import"./Badge-CAyEKJhq.js";import"./Tooltip-D0XSM2S5.js";import"./ListItem-R48brKy_.js";import"./Input-CgzWa5OM.js";import"./Avatar-drWAMmf1.js";import"./AvatarGroup-Caex7Tu5.js";import"./Heading-DjAzNFDQ.js";import"./useHighlightedText-CG_8__up.js";import"./ChevronUp-XQJa99GN.js";import"./ChevronDown-BYfLgaaQ.js";import"./ChevronRight-Bn5bOelp.js";import"./Section-D1bZZmzH.js";import"./Flex-oS8OWrEi.js";import"./Typography-B61DVKU1.js";import"./AttachmentList-CMbEN-ve.js";import"./AttachmentLink-tjDKayr_.js";import"./File-IAFPYOie.js";import"./SeenByLog-BJJskzWl.js";import"./SeenByLogItem-Cvkx4XnI.js";import"./Byline-CTWBWW2_.js";import"./SeenByLogButton-DN-B8-aW.js";import"./Divider-C5FLhITY.js";import"./List-Df8LU2dy.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
