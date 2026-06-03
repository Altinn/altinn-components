import{t as o}from"./transmissions-DH03kMLn.js";import{T as m}from"./TransmissionList-CJiU-Ruc.js";import"./iframe-Dmn_-H53.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DUa2NtpY.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./ListItem-CjxBcmV6.js";import"./Input-CiIUlzDr.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./ChevronUp-EToNysLX.js";import"./ChevronDown-VmG4T_9A.js";import"./ChevronRight-Wr9L-VUi.js";import"./Section-B0K1LM20.js";import"./Flex-Dt5U6DKy.js";import"./Typography-BUxrbwUx.js";import"./AttachmentList-D36jsq7i.js";import"./AttachmentLink-BXvdiYgg.js";import"./File-DM5gO9yh.js";import"./SeenByLog-31m4Tf2U.js";import"./SeenByLogButton-W9S-xhgo.js";import"./SeenByLogItem-mBTDI9kH.js";import"./Byline-Dd3tbNMi.js";import"./Divider-CH05F2gF.js";import"./List-C-oRwPam.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
