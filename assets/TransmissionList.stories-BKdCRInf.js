import{t as o}from"./transmissions-DgnwXzWE.js";import{T as m}from"./TransmissionList-B0HwnLhS.js";import"./iframe-Cj7V21km.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DA5qccaW.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ListItem-iMDmyxkq.js";import"./Input-DnU3MXtK.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./ChevronRight-DWxpnRfX.js";import"./Section-fD1somlY.js";import"./Flex-CMfzrDGq.js";import"./Typography-B3pfG5kD.js";import"./AttachmentList-o64aiUfb.js";import"./AttachmentLink-C0L7bOBr.js";import"./File-CMybt9Lj.js";import"./SeenByLog-CHthUlky.js";import"./SeenByLogButton-DQLNaBXr.js";import"./SeenByLogItem-FtO7R9oo.js";import"./Byline-C3WDi-X0.js";import"./Divider-slRSyerO.js";import"./List-DAmkN_iB.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
