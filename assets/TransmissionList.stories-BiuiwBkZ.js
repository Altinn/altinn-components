import{t as o}from"./transmissions-Brao5PCP.js";import{T as m}from"./TransmissionList-BjGej0gq.js";import"./iframe-Dai1liu3.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DD25xOrV.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./ListItem-GmGusVG_.js";import"./Input-4lJD8g37.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Heading-DmQEE02y.js";import"./useHighlightedText-DBCcFNzk.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./ChevronRight-B3RrQIZJ.js";import"./Section-SIo_MtMG.js";import"./Flex-BVj8i7c1.js";import"./Typography-DKU5x7uE.js";import"./AttachmentList-Ba-_8P9F.js";import"./AttachmentLink-BAN0pq6G.js";import"./File-DZxVWQkD.js";import"./SeenByLog-KKMEBLiQ.js";import"./SeenByLogButton-DaEx9byv.js";import"./SeenByLogItem-84h5nl7h.js";import"./Byline-BlzM78Vf.js";import"./Divider-Cp3dLTQp.js";import"./List-Ti8VfHa-.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
