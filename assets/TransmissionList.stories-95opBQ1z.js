import{t as o}from"./transmissions-C84hB9WG.js";import{T as m}from"./TransmissionList-FZfG16KC.js";import"./iframe-Dr1YYpI1.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CZjTBAhs.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ListItem-BNw8VTGu.js";import"./Input-Brt0jiez.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./ChevronRight-F0aXUvpz.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./Typography-CAIidHgh.js";import"./AttachmentList-DJeiy9mx.js";import"./AttachmentLink-CY0PxnFf.js";import"./File-FLnHtF8K.js";import"./SeenByLog-yUKCHAv8.js";import"./SeenByLogButton-DLR2DuGv.js";import"./SeenByLogItem-C0sTerfL.js";import"./Byline-ClFKTn_e.js";import"./Divider-BgkgspeO.js";import"./List-Bd354_V5.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
