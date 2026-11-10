import{t as o}from"./transmissions-BV32P5XY.js";import{T as m}from"./TransmissionList-DnGcmjHe.js";import"./iframe-CfESZwGq.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BrTjF0mx.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ListItem-B2b15rfK.js";import"./Input-C1qnV1Va.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./ChevronUp-AGjLHyT-.js";import"./ChevronDown-BeusJatl.js";import"./ChevronRight-B74pzmXz.js";import"./Section-CXHovEsj.js";import"./Flex-DCvAlmz5.js";import"./Typography-DtLS48Hu.js";import"./AttachmentList-DKb4W3nU.js";import"./File-Cg-C5w4a.js";import"./SeenByLog-CTQeoP78.js";import"./SeenByLogItem-CMb7gnFz.js";import"./Byline-D7K69XJQ.js";import"./SeenByLogButton-RNSLcczi.js";import"./Divider-DHEguHG2.js";import"./List-DjTHwgHu.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
