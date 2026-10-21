import{t as o}from"./transmissions-CVrjpBYE.js";import{T as m}from"./TransmissionList-C2FiZoRx.js";import"./iframe-CHdTRX1S.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-Vr2U_RZt.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./ListItem-sXsJE6ar.js";import"./Input-CiIWWSBU.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./ChevronRight-h2GXZqhR.js";import"./Section-C-qQMjwL.js";import"./Flex-BzRwEaeD.js";import"./Typography-6g7ttECm.js";import"./AttachmentList-whjCYpqv.js";import"./AttachmentLink-MBFs5MyC.js";import"./File-BQfLMfn-.js";import"./SeenByLog-BF-pJlkb.js";import"./SeenByLogItem-CP1N9Kmr.js";import"./Byline-V3bOcgnk.js";import"./SeenByLogButton-BQxPg5QB.js";import"./Divider-CbBQNDrL.js";import"./List-Cx8iXXL1.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
