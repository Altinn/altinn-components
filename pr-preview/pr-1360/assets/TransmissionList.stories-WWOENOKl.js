import{t as o}from"./transmissions-ChQyPIwV.js";import{T as m}from"./TransmissionList-BSNAKHMR.js";import"./iframe-C9sF4CIH.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C3tpmFmj.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ListItem-BH0TUSLo.js";import"./Input-DZS0C5P8.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Heading-CN6nglwQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./ChevronRight-BzqVHEpk.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./Typography-BQsARAdQ.js";import"./AttachmentList-CMw95sFc.js";import"./AttachmentLink-LiTQebG3.js";import"./File-dlrR66nk.js";import"./SeenByLog-CtLkthNU.js";import"./SeenByLogItem-BIJ0wpVU.js";import"./Byline-DAi_lmyl.js";import"./SeenByLogButton-uQTj1yz1.js";import"./Divider-BdWJiqz4.js";import"./List-Ljyom4hg.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
