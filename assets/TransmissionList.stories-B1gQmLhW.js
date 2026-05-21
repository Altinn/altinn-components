import{t as o}from"./transmissions-8Uc2N5kt.js";import{T as m}from"./TransmissionList-BvVj41Ym.js";import"./iframe-BDpWuaMs.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-6xVFktv8.js";import"./Badge-DPODtVho.js";import"./index-DVPUayQ0.js";import"./Tooltip-X0E0nlNG.js";import"./tooltip-DLcd2lCg.js";import"./ListItem-mkIEbDJT.js";import"./Button-m_FXpHGO.js";import"./Input-BoCHA0_0.js";import"./XMark-Cx5Omj8e.js";import"./useId-BKmV9YxM.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";import"./Section-B9Daowr7.js";import"./Flex-zEgiMRQg.js";import"./Typography-DZRyPYmV.js";import"./AttachmentList-D4_6eZoS.js";import"./AttachmentLink-DP4ZqlP6.js";import"./SeenByLog-_-ph2z9C.js";import"./SeenByLogButton-Cp1UJFo3.js";import"./SeenByLogItem-CMdDJiae.js";import"./Byline-BE77fsAg.js";import"./Divider-CH8zwguZ.js";import"./List-BnWl-S7K.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
