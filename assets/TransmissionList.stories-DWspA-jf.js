import{t as o}from"./transmissions-BXs_uG3U.js";import{T as m}from"./TransmissionList-Aeonc6nz.js";import"./iframe-B1m5YS-z.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BbZeuvNX.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./ListItem-B0JtIYRQ.js";import"./Input-DTp0ac3P.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Heading-Bdg559v2.js";import"./useHighlightedText-BJ6Snog5.js";import"./ChevronUp-DD0NwdAM.js";import"./ChevronDown-VNvIPDL4.js";import"./ChevronRight-JufomwYQ.js";import"./Section-BpRK9CgH.js";import"./Flex-ChmU5Mgr.js";import"./Typography-D-hgdwYf.js";import"./AttachmentList-ByVuF-h2.js";import"./AttachmentLink-BMGlLI05.js";import"./File-iAlTyCkq.js";import"./SeenByLog-BpRDZxvO.js";import"./SeenByLogItem-DmiS5bW7.js";import"./Byline-Xz6QApSF.js";import"./SeenByLogButton-BrhUXcY0.js";import"./Divider-VvaIqSSV.js";import"./List-CPTEWjEJ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
