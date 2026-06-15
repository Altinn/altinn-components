import{t as o}from"./transmissions-Bbs-NtUc.js";import{T as m}from"./TransmissionList-BDEV9w4L.js";import"./iframe-CH-Rf2AI.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CmmbXN7u.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ListItem-CmAPlNYB.js";import"./Input-CCpKfFu1.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./Typography-CqA3kMNv.js";import"./AttachmentList-BeWV4HSA.js";import"./AttachmentLink-Bwc3jHV1.js";import"./File-GrIKxarG.js";import"./SeenByLog-BtPgYhmU.js";import"./SeenByLogButton-DNl12J2K.js";import"./SeenByLogItem-BJeKmqTq.js";import"./Byline-BShusoze.js";import"./Divider-JWvspdMS.js";import"./List-CaklY40z.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
