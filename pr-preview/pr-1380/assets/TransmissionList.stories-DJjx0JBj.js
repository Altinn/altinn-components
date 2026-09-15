import{t as o}from"./transmissions-ClpL8Pul.js";import{T as m}from"./TransmissionList-BkP4z5Vg.js";import"./iframe-C-THn91T.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C_MCyETc.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./ListItem-B9SpvPEq.js";import"./Input-DSL2dtsJ.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Heading-Bt4tEn1t.js";import"./useHighlightedText-LohBehUX.js";import"./ChevronUp-BW3alSKD.js";import"./ChevronDown-FLKzC-yj.js";import"./ChevronRight-SDiRgKYv.js";import"./Section-BoYAWl0A.js";import"./Flex-C1ZLhAqe.js";import"./Typography-BHSdNY0l.js";import"./AttachmentList-r3nDJqQA.js";import"./AttachmentLink-CgUX457-.js";import"./File-BtXZmv7k.js";import"./SeenByLog-DqDb8Xha.js";import"./SeenByLogItem-Bltnm8yQ.js";import"./Byline-DObVcopJ.js";import"./SeenByLogButton-DrzsGCZo.js";import"./Divider-C3OXLRCQ.js";import"./List-DbCJKu2j.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
