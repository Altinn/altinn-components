import{t as o}from"./transmissions-DM8Lqke6.js";import{T as m}from"./TransmissionList-BLN3g2hs.js";import"./iframe-DxxW_Hah.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DtMu8EYO.js";import"./Badge-CQ9EBUDZ.js";import"./index-pOAXHZ6n.js";import"./ListItem-dSza7nWX.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./XMark-ChXBbXGN.js";import"./useId-CckRU7I8.js";import"./Icon-Cf03fdWw.js";import"./Skeleton-DiRARuJ9.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./ChevronUp-rIZe7Kl4.js";import"./ChevronDown-qSt-istD.js";import"./ChevronRight-CqOTbusb.js";import"./Section-DDQuxuHV.js";import"./Flex-CRmH3H-L.js";import"./Typography-CfTPPq_a.js";import"./AttachmentList-D1cfOg6d.js";import"./AttachmentLink-BscBn763.js";import"./SeenByLog-CX-cREhq.js";import"./SeenByLogButton-BInkLAq6.js";import"./SeenByLogItem-DjvFflZB.js";import"./Byline-DMQrC7vU.js";import"./Divider-DBrd6wZZ.js";import"./List-C_geiOhU.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
