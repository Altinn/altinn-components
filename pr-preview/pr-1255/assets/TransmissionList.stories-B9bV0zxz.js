import{t as o}from"./transmissions-BkpTYb-S.js";import{T as m}from"./TransmissionList-DBRmbOD4.js";import"./iframe-CdYVD6SD.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-JnkOwyfE.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ListItem-18oaQRPM.js";import"./Input-CF984aoc.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Heading-Kaqd1h94.js";import"./useHighlightedText-DItA3cBY.js";import"./ChevronUp-BrRMdaLP.js";import"./ChevronDown-C8P1GjsS.js";import"./ChevronRight-Dr5zJkhS.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./Typography-Dba7VpUA.js";import"./AttachmentList-DpAOWkVA.js";import"./AttachmentLink-DXG_uO30.js";import"./File-B4QXTfBu.js";import"./SeenByLog-DnrkzCoA.js";import"./SeenByLogButton-BGDPfFLN.js";import"./SeenByLogItem-uxoD8ctX.js";import"./Byline-HslkVsL1.js";import"./Divider-Bd953ap4.js";import"./List-BOSoX1au.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
