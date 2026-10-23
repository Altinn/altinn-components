import{t as o}from"./transmissions-sA5gzEGo.js";import{T as m}from"./TransmissionList-BD3ZJOdN.js";import"./iframe-C320xpwq.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-sazxQfZd.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ListItem-B0VoyUTz.js";import"./Input-Butkrn3v.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ChevronUp-DyDxvCOy.js";import"./ChevronDown-y1vJePuN.js";import"./ChevronRight-0obYraG7.js";import"./Section-CQzKKRAw.js";import"./Flex-vd8VAqWN.js";import"./Typography-DeOYXGTy.js";import"./AttachmentList-CF4M8kw2.js";import"./AttachmentLink-D0HoUd6X.js";import"./File-Bftrz6jT.js";import"./SeenByLog-DznkK3f7.js";import"./SeenByLogItem-DNUvKAhD.js";import"./Byline-CzGGy-9N.js";import"./SeenByLogButton-CqVh50vq.js";import"./Divider-TV8z1--N.js";import"./List-pJ-3rYx1.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
