import{t as o}from"./transmissions-CeoBqtIS.js";import{T as m}from"./TransmissionList-BrE2IJTh.js";import"./iframe-CRyMHjBa.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bqpt1FVn.js";import"./Badge-DxjDnsAp.js";import"./index-DHHnxdIx.js";import"./ListItem-DD-4gcQV.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./XMark-Bzo2iZ4y.js";import"./useId-Gvikg1Q9.js";import"./Icon-BfxILC1T.js";import"./Skeleton-CU7lBKK8.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./ChevronUp-CBBTERwT.js";import"./ChevronDown-BlPSQm6Z.js";import"./ChevronRight-CBrYYsjR.js";import"./Section-CFSk5LUB.js";import"./Flex-B-FAPRYp.js";import"./Typography-KJ3duhAj.js";import"./AttachmentList-Dssw0n3y.js";import"./AttachmentLink-CDgL1ab7.js";import"./SeenByLog-BVcCU3mU.js";import"./SeenByLogButton-Dv2fZntE.js";import"./SeenByLogItem-8gpoXDBv.js";import"./Byline-D01BWD_j.js";import"./Divider-D2QbJSlC.js";import"./List-RBs8EUgU.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
