import{t as o}from"./transmissions-BESnwgAD.js";import{T as m}from"./TransmissionList-DqtLGisy.js";import"./iframe-CAfDO4Rw.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-B-ajlH_E.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ListItem-B4Cw7EmV.js";import"./Input-xoXFTL9F.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./ChevronRight-CMD5YJ4n.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./Typography-CTt20h0e.js";import"./AttachmentList-DXdae8Os.js";import"./AttachmentLink-B2jJD-lG.js";import"./File-C2VTsFJJ.js";import"./SeenByLog-CQiqD6KI.js";import"./SeenByLogButton-CTQwwsb4.js";import"./SeenByLogItem-BY4d8tXW.js";import"./Byline-DmNUYBEe.js";import"./Divider-rkJRMH9u.js";import"./List-IhGHJ_0j.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
