import{t as o}from"./transmissions-BVbbMWuD.js";import{T as m}from"./TransmissionList-B1m0XYzl.js";import"./iframe-BidFzEoe.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DozBCAYL.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ListItem-CBUxCLcG.js";import"./Input-D8eTVnZO.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./ChevronRight-B3flyXKQ.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./Typography-BKRo6hXJ.js";import"./AttachmentList-R_8TW_FB.js";import"./AttachmentLink-DNddeI4B.js";import"./File-CopwnJ90.js";import"./SeenByLog-w3iRqWUU.js";import"./SeenByLogItem-RudfOR56.js";import"./Byline-BxuosFas.js";import"./SeenByLogButton-B4INdJOD.js";import"./Divider-Ckx4bjrf.js";import"./List-Ct336t9y.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
