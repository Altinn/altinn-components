import{t as o}from"./transmissions-_lnh7q6U.js";import{T as m}from"./TransmissionList-RRuAwLky.js";import"./iframe-r-PzxnFG.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BJXNw36K.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ListItem-SAy6Qdz6.js";import"./Input-BYbvd3yE.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./Typography-DZA02yZr.js";import"./AttachmentList-CkdmE0xd.js";import"./File-fzT31g4X.js";import"./SeenByLog-CAwaTAzQ.js";import"./SeenByLogItem-C73Tg94d.js";import"./Byline-Cm30yNti.js";import"./SeenByLogButton-v_nAdJma.js";import"./Divider-Cj6losdy.js";import"./List-DKe_PVra.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
