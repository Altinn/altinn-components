import{t as o}from"./transmissions-CUwp_qtW.js";import{T as m}from"./TransmissionList-BSr6t2Zb.js";import"./iframe-BBbEwSaq.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DM_TE1C_.js";import"./Badge-CZZB9VpQ.js";import"./index-awH0sXcw.js";import"./Tooltip-BL1y86OR.js";import"./tooltip-D3G3Ewte.js";import"./ListItem-CNcOgYac.js";import"./Button-DpW4Pu6O.js";import"./Input-lqau07kD.js";import"./XMark-Dw8JSfSd.js";import"./useId-DZp72-eX.js";import"./Icon-Cx6QAjG2.js";import"./Skeleton-DFF9p8Mx.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ChevronUp-BD5jqYZu.js";import"./ChevronDown-B-mDhRFL.js";import"./ChevronRight-Bj8DUJ8P.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./Typography-41mT2wo8.js";import"./AttachmentList-DLxmq2jR.js";import"./AttachmentLink-BdZT0U_E.js";import"./File-Bh6eAgDO.js";import"./SeenByLog-CX7Vs0gn.js";import"./SeenByLogButton-DWVtRTg2.js";import"./SeenByLogItem-D01gFTCI.js";import"./Byline-DkV2O3WM.js";import"./Divider-B4CG97r2.js";import"./List-CzewomMq.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,K as __namedExportsOrder,J as default};
