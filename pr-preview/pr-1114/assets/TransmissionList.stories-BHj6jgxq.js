import{t as o}from"./transmissions-DjEh3zeg.js";import{T as m}from"./TransmissionList-CqjwfG7y.js";import"./iframe-CEV_bE_y.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-el6KL60i.js";import"./Badge-BVMw9Rw0.js";import"./index-CGpVDQnA.js";import"./ListItem-CqKn_y3x.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./XMark-ByuttVGc.js";import"./useId-BHfJgDBc.js";import"./Icon-BwPDmLy2.js";import"./Skeleton-cNOPtI7P.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ChevronUp-BgDvj3-f.js";import"./ChevronDown--HTcc5lI.js";import"./ChevronRight-Dck0Zh1j.js";import"./Section-BaBnzd0n.js";import"./Flex-BZtJmJL5.js";import"./Typography-BMVOyH8m.js";import"./AttachmentList-B7byv8Mq.js";import"./AttachmentLink-DmJpFnYK.js";import"./SeenByLog-DLmZXCZO.js";import"./SeenByLogButton-Dgqs3FTk.js";import"./SeenByLogItem-BxCFyJjV.js";import"./Byline-BOLAP6vM.js";import"./Divider-DYQFWbxY.js";import"./List-C-GVcOeW.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
