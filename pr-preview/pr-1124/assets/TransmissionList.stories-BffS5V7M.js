import{t as o}from"./transmissions-B3DG9iEV.js";import{T as m}from"./TransmissionList-C85bKxDI.js";import"./iframe-C30XMp4u.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Botqgj6o.js";import"./Badge-BL5WZhsc.js";import"./index-Dfjgmy9H.js";import"./ListItem-BjER_6OV.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./Icon-BW7eZq3t.js";import"./Skeleton-DYu3bsVd.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./ChevronUp-Dd9Cdp1N.js";import"./ChevronDown-BpTniz1S.js";import"./ChevronRight-cMtudnfA.js";import"./Section-DJhGIaQb.js";import"./Flex-Olz8YtsP.js";import"./Typography-C7Aiwmst.js";import"./AttachmentList-BCxJerbx.js";import"./AttachmentLink-DIiXe2zu.js";import"./SeenByLog-DGpChC6a.js";import"./SeenByLogButton-BLrtuYWt.js";import"./SeenByLogItem-COgtk_HP.js";import"./Byline-_lZvj3fQ.js";import"./Divider-BlKWfvpJ.js";import"./List-BOu6KRbF.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
