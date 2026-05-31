import{t as o}from"./transmissions-Dt4Aesdy.js";import{T as m}from"./TransmissionList-DWiQk3in.js";import"./iframe-B0raGbVc.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-LOE9uj04.js";import"./Badge-LVeKbEwp.js";import"./index-BFPoepm_.js";import"./Tooltip-drcV-Psw.js";import"./tooltip-C563LrpG.js";import"./ListItem-CBFwejwW.js";import"./Button-DaZ5Xj9O.js";import"./Input-DWL065bb.js";import"./XMark-Vu63tlKp.js";import"./useId-DjmMrSjF.js";import"./Icon-CkGS8ofh.js";import"./Skeleton-Bie46BNt.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./ChevronRight-B1cS3dE4.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";import"./Typography-aMX_Xall.js";import"./AttachmentList-C41BZ8U0.js";import"./AttachmentLink-C1xQ3rsw.js";import"./File-DSnP523V.js";import"./SeenByLog-DVwaCuDV.js";import"./SeenByLogButton-BX3ubFCo.js";import"./SeenByLogItem-B9mOh7Qz.js";import"./Byline-Btf5bXOo.js";import"./Divider-B2Ff9UTl.js";import"./List-BUxiMRhB.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
