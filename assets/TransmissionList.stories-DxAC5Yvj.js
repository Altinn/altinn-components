import{t as o}from"./transmissions-B6Tt4fb3.js";import{T as m}from"./TransmissionList-CdqXr4QF.js";import"./iframe-BEPBrhYh.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CWjdju7j.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./ListItem-DeiuC3sl.js";import"./Input-DvI4J5FV.js";import"./Avatar-qDEqb0bI.js";import"./AvatarGroup-Gy14OH0C.js";import"./Heading-BqUC1GBi.js";import"./useHighlightedText-DWAIm2UF.js";import"./ChevronUp-Bk9rr-UB.js";import"./ChevronDown-BSSTTv90.js";import"./ChevronRight-BrDrfe7a.js";import"./Section-Dz1fz0TX.js";import"./Flex-x8IfBbMo.js";import"./Typography-_e1X1oy3.js";import"./AttachmentList-Bw0yZz8n.js";import"./AttachmentLink-XgHTeNU5.js";import"./File-hLb6t_SF.js";import"./SeenByLog-wRaDe7Ap.js";import"./SeenByLogItem-BnNmIxBz.js";import"./Byline-abZ11abw.js";import"./SeenByLogButton-BjdiWPL2.js";import"./Divider-DIFGevZU.js";import"./List-BMyhmX1P.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
