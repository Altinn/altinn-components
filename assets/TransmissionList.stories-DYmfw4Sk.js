import{t as o}from"./transmissions-9e4vD0mu.js";import{T as m}from"./TransmissionList-DmZ-seZp.js";import"./iframe-DdvxY_xq.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-ymbXfbi0.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ListItem-Ct5xEdC8.js";import"./Input-2Gn2X0Ml.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./ChevronUp-C_S4jFxx.js";import"./ChevronDown-BoDhB4yd.js";import"./ChevronRight-C3Cb2zNm.js";import"./Section-lr4hansN.js";import"./Flex-Ban15jaQ.js";import"./Typography-CUBjJcUl.js";import"./AttachmentList-DLq7ZwFy.js";import"./AttachmentLink-CUXw7c-V.js";import"./File-B7TrALFU.js";import"./SeenByLog-BuGJFhry.js";import"./SeenByLogButton-D8U4RcET.js";import"./SeenByLogItem-CbQxgbFk.js";import"./Byline-DkezSkLA.js";import"./Divider-CrD6mv7o.js";import"./List-D-SdhPLS.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
