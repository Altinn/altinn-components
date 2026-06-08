import{t as o}from"./transmissions-BKv2qsCm.js";import{T as m}from"./TransmissionList-ie8WKrrz.js";import"./iframe-BtrieXtc.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CcbmMbqY.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./ListItem-Bl6lMnFz.js";import"./Input-BbNTIeCv.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Heading-CdtnAJEW.js";import"./useHighlightedText-B6dVubhR.js";import"./ChevronUp-ByxPUPOK.js";import"./ChevronDown-BfacC3TQ.js";import"./ChevronRight-DjbS-LPA.js";import"./Section-UNmwoB7j.js";import"./Flex-Dld0WRRq.js";import"./Typography-BRa08Jyj.js";import"./AttachmentList-CJq8oZW5.js";import"./AttachmentLink-DJUJBtqp.js";import"./File-O4-tkL6B.js";import"./SeenByLog-BTTCYA_0.js";import"./SeenByLogButton-BmiNAQJ-.js";import"./SeenByLogItem-DKwdx4HH.js";import"./Byline-BjsIFoc7.js";import"./Divider-B28POed8.js";import"./List-Ctw9DCkr.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
