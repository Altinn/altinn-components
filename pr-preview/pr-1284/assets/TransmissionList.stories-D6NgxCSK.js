import{t as o}from"./transmissions-By2Gjv4_.js";import{T as m}from"./TransmissionList-CzAFg-RT.js";import"./iframe-C7E9hFuS.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-2OSsav4y.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./ListItem-HCh9Njwh.js";import"./Input-aQKngZ0n.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Heading-BjzdT1Qv.js";import"./useHighlightedText-BVZd64N7.js";import"./ChevronUp-COfk5MU7.js";import"./ChevronDown-S6psbACT.js";import"./ChevronRight-BkycUKsy.js";import"./Section-0LkdBczO.js";import"./Flex-DW6TlYd6.js";import"./Typography-BHaJGqRT.js";import"./AttachmentList-BglRe9Ae.js";import"./AttachmentLink-0JoOhOyj.js";import"./File-CgTJz0rh.js";import"./SeenByLog-Byj4Z_cw.js";import"./SeenByLogButton-BfRF2Xhi.js";import"./SeenByLogItem-B0yGUsCe.js";import"./Byline-DA9sap8o.js";import"./Divider-C5OAdnqT.js";import"./List-CdmMPCCF.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
