import{t as o}from"./transmissions-BdIH0XcM.js";import{T as m}from"./TransmissionList-CX6Jk705.js";import"./iframe-CJbVApVd.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CaCv1TW9.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ListItem-DoyXkhoV.js";import"./Input-DjgPtg5S.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ChevronUp-Dnc1erKd.js";import"./ChevronDown-CUSqX3Qn.js";import"./ChevronRight-27VbzC_5.js";import"./Section-senxxBaK.js";import"./Flex-DQBhfYN9.js";import"./Typography-YiefWcUe.js";import"./AttachmentList-D1RwBIgo.js";import"./File-CguZ05Hs.js";import"./SeenByLog-CKvKR-NN.js";import"./SeenByLogItem-BJ46QDV8.js";import"./Byline-DbUQdLmq.js";import"./SeenByLogButton-DsrxYdud.js";import"./Divider-DF26y3y1.js";import"./List-DoeIG-YU.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
