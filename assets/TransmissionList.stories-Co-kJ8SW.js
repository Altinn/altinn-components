import{t as o}from"./transmissions-FQBw_A8s.js";import{T as m}from"./TransmissionList-C7_BHDpP.js";import"./iframe-DrMVe4hJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BnWlMkZf.js";import"./Badge-BnCvYltQ.js";import"./index-B2LUQ97G.js";import"./Tooltip-BEnHuPi8.js";import"./tooltip-BY1BnveL.js";import"./ListItem-DPR0AizJ.js";import"./Button-B40GVZAo.js";import"./Input-kqR7j7M6.js";import"./XMark-BXMpu0Gf.js";import"./useId-CwrI0QJg.js";import"./Icon-CK8FcAiF.js";import"./Skeleton-BKl0bJYN.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ChevronUp-CD8uiaYc.js";import"./ChevronDown--vsRLj1W.js";import"./ChevronRight-u16zgCRT.js";import"./Section-BOFb_opG.js";import"./Flex-Bv-_adYq.js";import"./Typography-BZD6V0ik.js";import"./AttachmentList-C6h6zMoV.js";import"./AttachmentLink-lV3ZcjXe.js";import"./File-DBEGNBhH.js";import"./SeenByLog-BdDJNc56.js";import"./SeenByLogButton-WkncvWBv.js";import"./SeenByLogItem-Oq34ALLi.js";import"./Byline-D1JKn8Co.js";import"./Divider-CB6iXjX5.js";import"./List-kom_q9bW.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,K as __namedExportsOrder,J as default};
