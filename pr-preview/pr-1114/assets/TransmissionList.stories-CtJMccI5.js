import{t as o}from"./transmissions-B9fheQSs.js";import{T as m}from"./TransmissionList-DP0OjmnB.js";import"./iframe-BmFIVBn_.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BPwuf-2e.js";import"./Badge-DoiHwmxA.js";import"./index-3BUTcXKg.js";import"./ListItem-CaiNUw8w.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./Icon-zZDqlwOf.js";import"./Skeleton-DRn19mA6.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";import"./Section-8wZRyHWu.js";import"./Flex-CFezmhlL.js";import"./Typography-CMiy0gec.js";import"./AttachmentList-BlWh5Zw8.js";import"./AttachmentLink-CmEzMP-w.js";import"./SeenByLog-CHNiJg-1.js";import"./SeenByLogButton-CCogXZRU.js";import"./SeenByLogItem-B-BMIyE7.js";import"./Byline-BGhU5n_P.js";import"./Divider-BzRFkj3B.js";import"./List-DKOvmWxK.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
