import{t as o}from"./transmissions-Bu2QDCjg.js";import{T as m}from"./TransmissionList-CEr-ZGEJ.js";import"./iframe-CH8mgD3C.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CuAI6NvE.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./ListItem-C_SsF7OJ.js";import"./Input-Sz2FhcYy.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./ChevronUp-BTM5yc0u.js";import"./ChevronDown-Cn-stDPP.js";import"./ChevronRight-CQGN_WtL.js";import"./Section-BXIrXZ89.js";import"./Flex-f5LhVaqN.js";import"./Typography-ClkFzU7o.js";import"./AttachmentList-CSkPTRQm.js";import"./AttachmentLink-4khGfxp9.js";import"./File-CKKVEFi5.js";import"./SeenByLog-C0nYB5tn.js";import"./SeenByLogItem-1__C4MyL.js";import"./Byline-Bqt45X13.js";import"./SeenByLogButton-B2W2EKAZ.js";import"./Divider-CJnScTdD.js";import"./List-1SoWQccD.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
