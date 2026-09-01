import{t as o}from"./transmissions-Bngq4Cx2.js";import{T as m}from"./TransmissionList-GkyDcfSH.js";import"./iframe-DMrRMxbq.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CGMw50l2.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./ListItem-adrx2A9Z.js";import"./Input-CZPP85wE.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./ChevronUp-iFSbc_bY.js";import"./ChevronDown-B_vMfdZY.js";import"./ChevronRight-ngEBzgMu.js";import"./Section-R5IQ5vtB.js";import"./Flex-D4xbJs2N.js";import"./Typography-z164oB1T.js";import"./AttachmentList-ltOcdfPQ.js";import"./AttachmentLink-CzjrjmI-.js";import"./File-CL1GscCr.js";import"./SeenByLog-DQ9aVCKV.js";import"./SeenByLogItem-pp-3WWV_.js";import"./Byline-CKiw8Kpx.js";import"./SeenByLogButton-DvVcaE6T.js";import"./Divider-CMZ3YTOm.js";import"./List-B8WZeWpp.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
