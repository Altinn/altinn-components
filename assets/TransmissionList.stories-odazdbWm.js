import{t as o}from"./transmissions-Z13Nv5gi.js";import{T as m}from"./TransmissionList-DwIZ-Y4W.js";import"./iframe-CDUjh_2z.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-E-HcUIfe.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./ListItem-DX5jQm4y.js";import"./Input-CyWHlPcl.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./ChevronUp-B_5rOd5t.js";import"./ChevronDown-BUU9mFY7.js";import"./ChevronRight-CG3NwLwQ.js";import"./Section-xHms6zkB.js";import"./Flex-Bc1_yHC5.js";import"./Typography-HCvo8I75.js";import"./AttachmentList-B75M185u.js";import"./AttachmentLink-BVwfW-fO.js";import"./File-DIsXjIgH.js";import"./SeenByLog-D_O8N-YJ.js";import"./SeenByLogButton-CygVU8vu.js";import"./SeenByLogItem-DJuh4vfp.js";import"./Byline-DXrvq6RB.js";import"./Divider-CjbZHCdX.js";import"./List-C4cq5OQ1.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
