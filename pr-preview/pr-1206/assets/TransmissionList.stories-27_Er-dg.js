import{t as o}from"./transmissions-DiV2zA5e.js";import{T as m}from"./TransmissionList-CT4EDE6M.js";import"./iframe-CdkbiINU.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DoIKCKCZ.js";import"./Badge-Nnj4VnpH.js";import"./index-ClUlC5r_.js";import"./Tooltip-CkfZKf5K.js";import"./tooltip-ClrKYCC2.js";import"./ListItem-CivujPX4.js";import"./Button-DbqBa2Ra.js";import"./Input-CXgAq3E9.js";import"./XMark-CXTea0I2.js";import"./useId-BBNwfwR-.js";import"./Icon-Cn1mWE7M.js";import"./Skeleton-DNrLKFK9.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ChevronUp-zAhIBGoC.js";import"./ChevronDown-DqPtLl_G.js";import"./ChevronRight-WcqCaCSB.js";import"./Section-CxpgG4VY.js";import"./Flex-B60SO79o.js";import"./Typography-CbNgqrog.js";import"./AttachmentList-YNaBYZqr.js";import"./AttachmentLink-BSp5IwFw.js";import"./SeenByLog-BYQgoOuk.js";import"./SeenByLogButton-BW0LCyMq.js";import"./SeenByLogItem-BtP9wLGI.js";import"./Byline-C6b88TbQ.js";import"./Divider-BUmLpEgb.js";import"./List-aGBfRfyr.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
