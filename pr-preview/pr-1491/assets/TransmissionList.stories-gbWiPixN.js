import{t as o}from"./transmissions-CJjQTCl3.js";import{T as m}from"./TransmissionList-uyomhfGm.js";import"./iframe-CZm9Z2L_.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CNhBvy7H.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ListItem-DzMq7FBw.js";import"./Input-BcwXpX3S.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./Typography-99BUGcV3.js";import"./AttachmentList-FSNLt8_T.js";import"./File-ClWrilt4.js";import"./SeenByLog-BKrWHMMh.js";import"./SeenByLogItem-daYL6lpq.js";import"./Byline-BnpbJ8kJ.js";import"./SeenByLogButton-BdubtqW0.js";import"./Divider-qPWkBqr9.js";import"./List-DQWfOE6F.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
