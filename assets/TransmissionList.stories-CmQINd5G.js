import{t as o}from"./transmissions-BLefCACf.js";import{T as m}from"./TransmissionList-BAUSb735.js";import"./iframe-BlxKDeRn.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DKBJ5VDy.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ListItem-DMwUq-qc.js";import"./Input-CXwaRbp1.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Heading-PlHpJzKQ.js";import"./useHighlightedText-Cf7684f7.js";import"./ChevronUp-BgX0VOdQ.js";import"./ChevronDown-DW-ZLG_4.js";import"./ChevronRight-DNG7F-LS.js";import"./Section-phQiwh1A.js";import"./Flex-ETYKhAb5.js";import"./Typography-CdulF3LZ.js";import"./AttachmentList-nz3R8Pw_.js";import"./AttachmentLink-BryqBr--.js";import"./File-BK7UU44O.js";import"./SeenByLog-BUVwuuIP.js";import"./SeenByLogButton-Dz1Rzzfc.js";import"./SeenByLogItem-eqLEZUxG.js";import"./Byline-czkz-Lsc.js";import"./Divider-COAbRQ2x.js";import"./List-BGZiCtwn.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
