import{t as o}from"./transmissions-m4r7ppF1.js";import{T as m}from"./TransmissionList-CHRjLEP6.js";import"./iframe-CtXhLetY.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-joV0LlHm.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./ListItem--hs6nnp1.js";import"./Input-QpxxtH2z.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ChevronUp-7x0YByos.js";import"./ChevronDown-ChgXhb0d.js";import"./ChevronRight-S5R-64jg.js";import"./Section-BY6ZWS4H.js";import"./Flex-B2jEbRqX.js";import"./Typography-BeyzbKvD.js";import"./AttachmentList-COLGXryS.js";import"./AttachmentLink-B0bsNG_4.js";import"./File-DbSnV6Yz.js";import"./SeenByLog-0TWvdDgm.js";import"./SeenByLogItem-Do5zY0dW.js";import"./Byline-B302tQe6.js";import"./SeenByLogButton-CwuY1EPj.js";import"./Divider-BbnOYJmg.js";import"./List-DnDiNJx5.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
