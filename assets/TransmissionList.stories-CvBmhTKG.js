import{t as o}from"./transmissions-Dcmg7n7n.js";import{T as m}from"./TransmissionList-BRTMTbbF.js";import"./iframe-D8UVhXtj.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-_SYkCdXY.js";import"./Badge-FbSzRhwU.js";import"./index-DZ6CWLt4.js";import"./ListItem-BMdkWFBB.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./XMark-RzwOtF1Q.js";import"./useId-B_5z_sER.js";import"./Icon-DPTwfvyC.js";import"./Skeleton-DuOqXwDT.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./ChevronUp-ceXuKviy.js";import"./ChevronDown-B-wfcPIe.js";import"./ChevronRight-BBMrC_JJ.js";import"./Section-CECOJo4z.js";import"./Flex-C6te8drU.js";import"./Typography-n-xWt5s-.js";import"./AttachmentList-DKNReJBg.js";import"./AttachmentLink-DwQqUI2Y.js";import"./SeenByLog-emqzOgE6.js";import"./SeenByLogButton-BapgtE9t.js";import"./SeenByLogItem-DjnWEiul.js";import"./Byline-BDjC19uQ.js";import"./Divider-CSLu3akR.js";import"./List-BMtt49y1.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const M=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,M as __namedExportsOrder,K as default};
