import{t as o}from"./transmissions-BmZB3Ucj.js";import{T as m}from"./TransmissionList-BW6vQleI.js";import"./iframe-CTaNoWWa.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DDFvRzii.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./ListItem-bITmjQKl.js";import"./Input-CTz4y9O9.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./Typography-CN45st3d.js";import"./AttachmentList-B2PNdYav.js";import"./AttachmentLink-Dk06xEvp.js";import"./File-O5Fd_RSU.js";import"./SeenByLog-CFd9w-wN.js";import"./SeenByLogButton-BPIKG2E6.js";import"./SeenByLogItem-BqwAJ68P.js";import"./Byline-D8B8SQTU.js";import"./Divider-DGpuBlLt.js";import"./List-BWBH_N2R.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
