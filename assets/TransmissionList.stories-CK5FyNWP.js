import{t as o}from"./transmissions-FJmxw0GN.js";import{T as m}from"./TransmissionList-DQpEEdxq.js";import"./iframe-B1AqnzaQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-UFJEb70b.js";import"./Badge-DUhzLQsC.js";import"./index-Ddi2Dmvi.js";import"./ListItem-DtW6UlaD.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./XMark-COJVLPGF.js";import"./useId-D3sFZbtB.js";import"./Icon-68Gi_xA8.js";import"./Skeleton-6Posg2tf.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./ChevronUp-DDB3rTR_.js";import"./ChevronDown-yd2Fwy4k.js";import"./ChevronRight-BOPTtlba.js";import"./Section-BiNpoqqK.js";import"./Flex-DsTgjl9e.js";import"./Typography-lvuy6SF3.js";import"./AttachmentList-B7Rc5dtI.js";import"./AttachmentLink-SCFUC8QP.js";import"./SeenByLog-CeTrcwzA.js";import"./SeenByLogButton-BYEfhcEZ.js";import"./SeenByLogItem-UdLieCnw.js";import"./Byline-KR-JBYsj.js";import"./Divider-BmD1gm9l.js";import"./List-BG7le78U.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
