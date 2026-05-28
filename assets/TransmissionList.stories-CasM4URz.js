import{t as o}from"./transmissions-Dq47Jl9y.js";import{T as m}from"./TransmissionList-rSnt1l8x.js";import"./iframe-43_RSSTf.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BJV8f0Xh.js";import"./Badge-CLU8wZww.js";import"./index-D9XEmR3s.js";import"./Tooltip-DwmHlyIr.js";import"./tooltip-CaRi0lSN.js";import"./ListItem-DsTKnjuo.js";import"./Button-B83AdZGF.js";import"./Input-B-eeYerN.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./Typography-Ct8ipg3s.js";import"./AttachmentList-QmB9WqDl.js";import"./AttachmentLink-C-aRlSXh.js";import"./File-Bsbyj88V.js";import"./SeenByLog-Dg3xuuEq.js";import"./SeenByLogButton-BMsZgkg8.js";import"./SeenByLogItem-D9noGksY.js";import"./Byline-1G4iuBat.js";import"./Divider-4gFXuIQf.js";import"./List-CB81-vLr.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
