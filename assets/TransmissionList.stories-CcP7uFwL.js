import{t as o}from"./transmissions-aWEqwAv4.js";import{T as m}from"./TransmissionList-DNoxEkPD.js";import"./iframe-Dhr5kNpI.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CdrMHZfu.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ListItem-DNrY8OXn.js";import"./Input-jpu5auKu.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";import"./Section-xZgyq4QZ.js";import"./Flex-CQB0dbJh.js";import"./Typography-CiPthQfi.js";import"./AttachmentList-cIRs1OP1.js";import"./File-q6YIAweS.js";import"./SeenByLog-B9MtNs-I.js";import"./SeenByLogItem-ByiU_NnR.js";import"./Byline-BXE4AnwT.js";import"./SeenByLogButton-CcUxabBo.js";import"./Divider-B2QpbQHm.js";import"./List-CfCaM-vI.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
