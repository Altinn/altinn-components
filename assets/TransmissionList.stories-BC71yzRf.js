import{t as o}from"./transmissions-thXSdj-s.js";import{T as m}from"./TransmissionList-5Dg1Ltdb.js";import"./iframe-BM6RZuQM.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C2E8lNkL.js";import"./Badge-QT5oZygk.js";import"./index-DAnedVDn.js";import"./Tooltip-BxiimWqz.js";import"./tooltip-DKLQ4JCb.js";import"./ListItem-BBnKBFME.js";import"./Button-DhtPu9_Y.js";import"./Input-DsxiHlOc.js";import"./XMark-EbOSJv8a.js";import"./useId-BYt_OYJh.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";import"./Section-h9TGEdkh.js";import"./Flex-DCHL4VAz.js";import"./Typography-CXaseqiH.js";import"./AttachmentList-HUBOZ4Zu.js";import"./AttachmentLink-eVyhfpr6.js";import"./SeenByLog-B1RswZwx.js";import"./SeenByLogButton-D36_o5vk.js";import"./SeenByLogItem-B1FGN6tI.js";import"./Byline-BTx_wYwG.js";import"./Divider-BSO9eeiw.js";import"./List-6_Ms0xCG.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
