import{t as o}from"./transmissions-Bx9CStB5.js";import{T as m}from"./TransmissionList-Dte4BzzM.js";import"./iframe-DE6S9aZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DPr2cduY.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./ListItem-DYxFGUfM.js";import"./Input-DHBuxbkq.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./ChevronUp-DiUn2hCV.js";import"./ChevronDown-BW8AfmI4.js";import"./ChevronRight-CaR2K8Z7.js";import"./Section-y38TddTh.js";import"./Flex-DAi1mqH2.js";import"./Typography-Cfn_aMgf.js";import"./AttachmentList-DD61bDoB.js";import"./AttachmentLink-Dveny5Is.js";import"./File-CayFuwBh.js";import"./SeenByLog-DoDuFR_h.js";import"./SeenByLogItem-BUgRIVP4.js";import"./Byline-DWlUTVPr.js";import"./SeenByLogButton-9dHZRQO_.js";import"./Divider-CaMZ1Hz3.js";import"./List-BtKbJRMJ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
