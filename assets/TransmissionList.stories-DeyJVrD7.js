import{t as o}from"./transmissions-BXb7NpMS.js";import{T as m}from"./TransmissionList-Bd2zOxn1.js";import"./iframe-C2dzRmjh.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-8rKXo6sJ.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./ListItem-bz9Nyb5P.js";import"./Input-DA-lDvIm.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ChevronUp-DhNGyOn8.js";import"./ChevronDown-DT113Xv8.js";import"./ChevronRight-DtjNYNu3.js";import"./Section-DIoxVkTZ.js";import"./Flex-Cz2ESd29.js";import"./Typography-DJs4mnKu.js";import"./AttachmentList-CuEBzhsV.js";import"./AttachmentLink-SISwTfMs.js";import"./File-DEihEK42.js";import"./SeenByLog-310FliAA.js";import"./SeenByLogButton-BbR1uO_K.js";import"./SeenByLogItem-rYfVRsQQ.js";import"./Byline-DimwUa3c.js";import"./Divider-Co9GtxZL.js";import"./List-DCnir31W.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
