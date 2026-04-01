import{t as o}from"./transmissions-BiYUDKPS.js";import{T as m}from"./TransmissionList-Dbo3xOIo.js";import"./iframe-DxKlu2kD.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-k8EkY2VX.js";import"./Badge-4TJDD2P9.js";import"./index-BWCSYHeO.js";import"./ListItem-BFQ5Iogs.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./XMark-C1fx_pyo.js";import"./useId-_YfdAmsW.js";import"./Icon-CrZKj0Yv.js";import"./Skeleton-niSIm0IT.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./ChevronRight-DCeYx28-.js";import"./Section-5cGBq3ET.js";import"./Flex-CFZAXqgp.js";import"./Typography-iC77LYkz.js";import"./AttachmentList-C1qAYl-4.js";import"./AttachmentLink-BGMv6sli.js";import"./SeenByLog-PSD2Kt7_.js";import"./SeenByLogButton-DVEQ3O6A.js";import"./SeenByLogItem-MTAZUXew.js";import"./Byline-CIOZ3BUJ.js";import"./Divider-CHLjagug.js";import"./List-C5g4_qse.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const M=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,M as __namedExportsOrder,K as default};
