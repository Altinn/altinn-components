import{t as o}from"./transmissions-DavgIEZE.js";import{T as m}from"./TransmissionList-CLeMmuOK.js";import"./iframe-CsUY_6Pm.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-0YOxS4rH.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ListItem-ac3I4IHC.js";import"./Input-DQsW0xWY.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./ChevronUp-Bv6xfL3F.js";import"./ChevronDown-B43wHz9B.js";import"./ChevronRight-JfwdXccy.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./Typography-DW6BWOsI.js";import"./AttachmentList-C7oKEIyE.js";import"./AttachmentLink-YTy6X7r3.js";import"./File-DXEAOqxp.js";import"./SeenByLog-CBXxosCw.js";import"./SeenByLogItem-B5wfHKNm.js";import"./Byline-DjnpylD5.js";import"./SeenByLogButton-BQ2hMZPf.js";import"./Divider-DgndApZC.js";import"./List-BfidzhqJ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
