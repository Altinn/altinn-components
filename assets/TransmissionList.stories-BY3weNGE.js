import{t as o}from"./transmissions-TdK39tr_.js";import{T as m}from"./TransmissionList-ENWqFlRS.js";import"./iframe-BBxI6Qoj.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DrDMIQmH.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ListItem-B7vm1DNV.js";import"./Input-C6iRvbsc.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./ChevronUp-3jRKbU-M.js";import"./ChevronDown-BJPfgMjs.js";import"./ChevronRight-DVToFFYf.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";import"./Typography-DsE98WBK.js";import"./AttachmentList-DskCyuTv.js";import"./AttachmentLink-6bRHStwq.js";import"./File-BgPBJb9D.js";import"./SeenByLog-vsgZAiWQ.js";import"./SeenByLogButton-5L-PoIgV.js";import"./SeenByLogItem-j_2MXsNX.js";import"./Byline-Ct3bE_id.js";import"./Divider-DvhrIdJ9.js";import"./List-DiWMXlPH.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
