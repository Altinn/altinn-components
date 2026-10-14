import{t as o}from"./transmissions-DoSJ5Vj_.js";import{T as m}from"./TransmissionList-7V2vh8Sg.js";import"./iframe-DliZ2j7V.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CbiWnR5o.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ListItem-Br4SdUBJ.js";import"./Input-BcFkd5TI.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Heading-CtKubyco.js";import"./useHighlightedText-D1lssxtb.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";import"./ChevronRight-_BaSemP0.js";import"./Section-DMRyqAwI.js";import"./Flex-BMB99n2z.js";import"./Typography-Oc42wyxk.js";import"./AttachmentList-CPQgkKqF.js";import"./AttachmentLink-CJ-gQ8I4.js";import"./File-CxAzJXU6.js";import"./SeenByLog-DFCrG15X.js";import"./SeenByLogItem-DX4DRpzs.js";import"./Byline-Dmr5VWky.js";import"./SeenByLogButton-CqaGD5mc.js";import"./Divider-DZaxc5v8.js";import"./List-BHc6Lwhq.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
