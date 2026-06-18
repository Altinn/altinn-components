import{t as o}from"./transmissions-N5sWfujy.js";import{T as m}from"./TransmissionList-CCyjxGz8.js";import"./iframe-DK-3qaH3.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CKoIS6sU.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ListItem-DtUr0D4a.js";import"./Input-DJCzCnsD.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./ChevronUp-Clh2aWfB.js";import"./ChevronDown-DHOBL84L.js";import"./ChevronRight-DR_DMSPj.js";import"./Section-DmYaryGo.js";import"./Flex-BBCXBNec.js";import"./Typography-B48kpFr9.js";import"./AttachmentList-d4kX0rsh.js";import"./AttachmentLink-B9FSByvw.js";import"./File-DPxulbru.js";import"./SeenByLog-BZ8TxhSV.js";import"./SeenByLogButton-Co1oizE0.js";import"./SeenByLogItem-BWO0kX4l.js";import"./Byline-iVPCQl5-.js";import"./Divider-B0ZQHXYE.js";import"./List-DMs9eogo.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
