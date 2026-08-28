import{t as o}from"./transmissions-CkT6fV9-.js";import{T as m}from"./TransmissionList-B3iWZFtk.js";import"./iframe-BKPYfBaP.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DCpvDShl.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ListItem-vuMFE_6d.js";import"./Input-CHWt3Nk0.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";import"./Section-DIn3fiOi.js";import"./Flex-Dg9OypdH.js";import"./Typography-Cdqx97qL.js";import"./AttachmentList-DG1O6IBj.js";import"./AttachmentLink-udFkWHvB.js";import"./File-Dnng_IzG.js";import"./SeenByLog-BcUTYz9x.js";import"./SeenByLogItem-BRrv3LIO.js";import"./Byline-CWryxIQc.js";import"./SeenByLogButton-D3NM3Fy8.js";import"./Divider-BSqtpqqG.js";import"./List-BhWzbYIR.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
