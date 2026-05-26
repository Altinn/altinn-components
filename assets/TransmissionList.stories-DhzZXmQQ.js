import{t as o}from"./transmissions-BA6_-pUM.js";import{T as m}from"./TransmissionList-DyzBLg45.js";import"./iframe-Ca1pxjCh.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-hGpHZBtN.js";import"./Badge-B7pvghgv.js";import"./index-qsemo-NB.js";import"./Tooltip-CUaFdea7.js";import"./tooltip-DBInG_0S.js";import"./ListItem-ByBUwGe5.js";import"./Button-BUoYLOjU.js";import"./Input-CnEzvrKf.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./Icon-DX2teY26.js";import"./Skeleton-CjJRr45L.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ChevronUp-njmytnHj.js";import"./ChevronDown-BSf8h3gX.js";import"./ChevronRight-Dx7-HhpA.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";import"./Typography-B47euKof.js";import"./AttachmentList-CND_MbEI.js";import"./AttachmentLink-Dx55U1YN.js";import"./SeenByLog-BTCWVWDt.js";import"./SeenByLogButton-CC7IVpCt.js";import"./SeenByLogItem-BRzMOLbf.js";import"./Byline-Bxl3RlNN.js";import"./Divider-PfDhNxjV.js";import"./List-m_iXYTHM.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,J as __namedExportsOrder,H as default};
