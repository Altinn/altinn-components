import{t as o}from"./transmissions-DmT2rsGr.js";import{T as m}from"./TransmissionList-P4adEurY.js";import"./iframe-D-JzFSbn.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bar0dIZi.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ListItem-fagiPH4A.js";import"./Input--gXn6N4P.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./ChevronRight-CnTD3zzq.js";import"./Section-C7pnuU7Y.js";import"./Flex-LyiOw0eI.js";import"./Typography-B37rH5fJ.js";import"./AttachmentList-CcVgQvDm.js";import"./AttachmentLink-DAdWNGBZ.js";import"./File-DA9DY2ZK.js";import"./SeenByLog-C0fhVfgU.js";import"./SeenByLogButton-xyb51Zkz.js";import"./SeenByLogItem-Bi_fJ61q.js";import"./Byline-CmlzUJQ5.js";import"./Divider-C3uPnrWT.js";import"./List-BMqsgT4e.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
