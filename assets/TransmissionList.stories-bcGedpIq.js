import{t as o}from"./transmissions-CE1LCwiC.js";import{T as m}from"./TransmissionList-DGM8AMl7.js";import"./iframe-qmQCxFa-.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bjeoyyu9.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ListItem-TUtQYaSN.js";import"./Input-UWmslA08.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Heading-BfhEliS6.js";import"./useHighlightedText-DvW-80BF.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./ChevronRight-D4PJikp-.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./Typography-CwhPNAxM.js";import"./AttachmentList-DUwJlXIt.js";import"./AttachmentLink-C57g2r8L.js";import"./File-BT9W-TnA.js";import"./SeenByLog-C7HZ8LIv.js";import"./SeenByLogItem-RRCdgW1c.js";import"./Byline-CWK2h7MN.js";import"./SeenByLogButton-B4NA368J.js";import"./Divider-Ct2eo3IY.js";import"./List-66Jmre4e.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
