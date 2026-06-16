import{t as o}from"./transmissions-CX54gwcu.js";import{T as m}from"./TransmissionList-I6GP_hib.js";import"./iframe-5uZaoZDv.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-D2FJ0Qjd.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ListItem-BXdKg3lG.js";import"./Input-C9_VoQpt.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./ChevronRight-Bm7ufgRx.js";import"./Section-BAWmKTu0.js";import"./Flex-n4FQi775.js";import"./Typography-DIry-l26.js";import"./AttachmentList-5lECdNDF.js";import"./AttachmentLink-DJO5yWKC.js";import"./File-CWkt59PU.js";import"./SeenByLog-B_LBq94q.js";import"./SeenByLogButton-Db8yX2RR.js";import"./SeenByLogItem-ipgv85pW.js";import"./Byline-BzS4ED4j.js";import"./Divider-B5gmu18y.js";import"./List-CGkmFa0n.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
