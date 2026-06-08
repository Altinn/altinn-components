import{t as o}from"./transmissions-CniGCyYF.js";import{T as m}from"./TransmissionList-D35MJz9w.js";import"./iframe-BkdCVhNa.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-IpmVATxe.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./ListItem-jGe2QiZx.js";import"./Input-Bk6KAWUZ.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./ChevronUp-5uVavT__.js";import"./ChevronDown-DHl1_IXJ.js";import"./ChevronRight-BWpY3hyQ.js";import"./Section-CCbnuMor.js";import"./Flex-0kNayUnl.js";import"./Typography-BbYlnfM1.js";import"./AttachmentList-CueKWQH9.js";import"./AttachmentLink-ZmCKgMSt.js";import"./File-BnuFLAIN.js";import"./SeenByLog-C85n_9V_.js";import"./SeenByLogButton-dESqFVsw.js";import"./SeenByLogItem-PdmUXZ0D.js";import"./Byline-Dn_Wn8kH.js";import"./Divider-9OAe3IWi.js";import"./List-aWXUgCgM.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
