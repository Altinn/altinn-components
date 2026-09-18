import{t as o}from"./transmissions-NNmUDTFE.js";import{T as m}from"./TransmissionList-DMX0mvdH.js";import"./iframe-DXZBp66t.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DAbQ-OnZ.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./ListItem-cxKfvIRk.js";import"./Input--Cg-6oUs.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Heading-Dabq2F6t.js";import"./useHighlightedText-D_TdPqyJ.js";import"./ChevronUp-BmPa9GH0.js";import"./ChevronDown-nMZldMxX.js";import"./ChevronRight-Cf4DVjz-.js";import"./Section-CFAnjMLz.js";import"./Flex-D7Hg4_mS.js";import"./Typography-YwBvvLgA.js";import"./AttachmentList-zJPKhKyG.js";import"./AttachmentLink-Ug1haDWc.js";import"./File-DREaHogw.js";import"./SeenByLog-Q9YQc6l4.js";import"./SeenByLogItem-7hTJhDAh.js";import"./Byline-l8cOkHGB.js";import"./SeenByLogButton-zphd-NL6.js";import"./Divider-y_oeW3JN.js";import"./List-DtaDFrd1.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
