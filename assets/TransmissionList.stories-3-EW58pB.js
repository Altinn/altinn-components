import{t as o}from"./transmissions-cCk-h3rf.js";import{T as m}from"./TransmissionList-nJSeSEbf.js";import"./iframe-DRbAvM8B.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-wwaOs5R_.js";import"./Badge-B0bOgxTq.js";import"./index-Dpt5RUeZ.js";import"./ListItem-B48A-xDW.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./XMark-BeNK6Eym.js";import"./useId-p3Uu13R2.js";import"./Icon-BB196-C1.js";import"./Skeleton-C6w0Fovi.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./ChevronRight-BIwAZUpi.js";import"./Section-eG7NPuGp.js";import"./Flex-DfEZbiAr.js";import"./Typography-Da6zx1kt.js";import"./AttachmentList-CgXYDtN7.js";import"./AttachmentLink-DfxKpmwB.js";import"./SeenByLog-DrDjFhxR.js";import"./SeenByLogButton-DgY8w5_v.js";import"./SeenByLogItem-CS7bTOl-.js";import"./Byline-DvIPHZak.js";import"./Divider-CSQOdO1f.js";import"./List-DqiN2axT.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
