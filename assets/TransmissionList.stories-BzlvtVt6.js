import{t as o}from"./transmissions-Dy_JC2Z5.js";import{T as m}from"./TransmissionList-5isu7otZ.js";import"./iframe-BaUVsogD.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DKSszOaO.js";import"./Badge-DkZxiFUy.js";import"./index-lARy5TPT.js";import"./ListItem-C1RL14_r.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./XMark-vPSUBj6u.js";import"./useId-D8i_et7Z.js";import"./Icon-7hKeNARf.js";import"./Skeleton-yH6qNAEo.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./ChevronUp-DSCWrjOr.js";import"./ChevronDown-C0GjOYlf.js";import"./ChevronRight-sVn034m6.js";import"./Section-HLTaZdun.js";import"./Flex-CpmusUMb.js";import"./Typography-BHJ2EAGl.js";import"./AttachmentList-DgyeXMeM.js";import"./AttachmentLink-BoqWO1d4.js";import"./SeenByLog-j-RhsQV0.js";import"./SeenByLogButton-D5ZEUhD4.js";import"./SeenByLogItem-Cr80D3FQ.js";import"./Byline-q-C2aAbr.js";import"./Divider-dQKXouHw.js";import"./List-SYbm324s.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
