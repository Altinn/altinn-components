import{t as o}from"./transmissions-CtpIstw7.js";import{T as m}from"./TransmissionList-BFnXYjAq.js";import"./iframe-DJnynaCo.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DxYujY2_.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ListItem-B8Ai6_1A.js";import"./Input-BYb8Xo7l.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./ChevronUp-BZfYUYCO.js";import"./ChevronDown-CYeA95Pw.js";import"./ChevronRight-C7aaNXCF.js";import"./Section-CrYFAueX.js";import"./Flex-DolhwIS-.js";import"./Typography-CiLhkoi6.js";import"./AttachmentList-0qVrXJbK.js";import"./AttachmentLink-_cNfy320.js";import"./File-DOL3PZpu.js";import"./SeenByLog-Kf7_kh9c.js";import"./SeenByLogItem-BqCD9pVr.js";import"./Byline-BXy67g1G.js";import"./SeenByLogButton-DJnr-de4.js";import"./Divider-DvU8eZEJ.js";import"./List-BTkgKM-8.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
