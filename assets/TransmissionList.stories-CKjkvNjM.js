import{t as o}from"./transmissions-DPDXSc04.js";import{T as m}from"./TransmissionList-DEkSeLHJ.js";import"./iframe-gnB9S1An.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-yT8tiEU6.js";import"./Badge-D2lHyQ6d.js";import"./index-C4jL9APw.js";import"./ListItem-9SoGvFex.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./XMark-F0lxfgWB.js";import"./useId-B9nFNwMW.js";import"./Icon-CL2c9__7.js";import"./Skeleton-_K166C5F.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./ChevronUp-C8nzXkEI.js";import"./ChevronDown-CiJH-Uj-.js";import"./ChevronRight-CmdeYhPT.js";import"./Section-0HIHqGS0.js";import"./Flex-Dhq417nc.js";import"./Typography-uy1P5_7q.js";import"./AttachmentList-DYwMe_ei.js";import"./AttachmentLink-DoXlG83G.js";import"./SeenByLog-ByX4jVbJ.js";import"./SeenByLogButton-CdYRgCfo.js";import"./SeenByLogItem-CzB_26Ms.js";import"./Byline-B78kYPxw.js";import"./Divider--EGssROD.js";import"./List-CTy1OnCl.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
