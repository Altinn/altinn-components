import{t as o}from"./transmissions-BjB8etBw.js";import{T as m}from"./TransmissionList-BAS4xLU1.js";import"./iframe-CGVyzYP6.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CdISJjIR.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./ListItem-ZS3MR4kD.js";import"./Input-ChwQfPxo.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Heading-EfRG8byd.js";import"./useHighlightedText-Bh9EAdhA.js";import"./ChevronUp-C5-b6A0s.js";import"./ChevronDown-BnuaQ1Jn.js";import"./ChevronRight-_qaR5Ukf.js";import"./Section-Dto-LHOR.js";import"./Flex-Ba3off4t.js";import"./Typography-CpGYIokR.js";import"./AttachmentList-BtEXrizv.js";import"./AttachmentLink-CSKylHfv.js";import"./File-DZHj7xxX.js";import"./SeenByLog-BeVhqUy4.js";import"./SeenByLogButton-BXpR25cG.js";import"./SeenByLogItem-DPIDRDzZ.js";import"./Byline-Bm2t7DwV.js";import"./Divider-vDXY4oCB.js";import"./List-BAuWcqgT.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
