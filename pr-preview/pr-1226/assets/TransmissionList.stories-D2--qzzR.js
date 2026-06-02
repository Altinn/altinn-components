import{t as o}from"./transmissions-BpMLHA0j.js";import{T as m}from"./TransmissionList-BBMQyb-L.js";import"./iframe-Ci8DJ-6R.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-5pIil_Kt.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ListItem-BArpZyYp.js";import"./Input-DWxDHqSK.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./ChevronUp-aSivYnb8.js";import"./ChevronDown-DepqY6FK.js";import"./ChevronRight-BEnuMmPo.js";import"./Section-C3vz0YaC.js";import"./Flex-UXtVwom-.js";import"./Typography-C-nn41yV.js";import"./AttachmentList-AyM7R3Rp.js";import"./AttachmentLink-BVapjbwO.js";import"./File-DO2JPQxF.js";import"./SeenByLog-BEPGZmGV.js";import"./SeenByLogButton-D7AyNstt.js";import"./SeenByLogItem-Daw_I4Im.js";import"./Byline-DMHVuuSD.js";import"./Divider-C0aMQ7hQ.js";import"./List-leazRs_-.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
