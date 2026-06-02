import{t as o}from"./transmissions-CG3QTQhl.js";import{T as m}from"./TransmissionList-BBNSVuBI.js";import"./iframe-DTEeNdyk.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BcrchYHw.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./ListItem-DvG_gwPx.js";import"./Input-BxybDda_.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Heading-DUvNz5de.js";import"./useHighlightedText-D9AI5Zbv.js";import"./ChevronUp-C99xJaCq.js";import"./ChevronDown-MYe8GL0o.js";import"./ChevronRight-DC0APSAK.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./Typography-CqVDEuXx.js";import"./AttachmentList-Bfb3Tmbq.js";import"./AttachmentLink-DMwJoaBs.js";import"./File-xb7zBzgo.js";import"./SeenByLog-D3dysXtC.js";import"./SeenByLogButton-tOzDmE_T.js";import"./SeenByLogItem-NIfrLtbX.js";import"./Byline-ZG806qeX.js";import"./Divider-BBCxGdQr.js";import"./List-CU3KNR3a.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
