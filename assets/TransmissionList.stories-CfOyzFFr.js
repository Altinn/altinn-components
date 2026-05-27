import{t as o}from"./transmissions-MYbAweGH.js";import{T as m}from"./TransmissionList-DwWMb1_D.js";import"./iframe-WHERbRNQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BLmCyyi7.js";import"./Badge-DPxfDcUM.js";import"./index-CPQpJFkN.js";import"./Tooltip-C3iERcDF.js";import"./tooltip-C7TGaz5I.js";import"./ListItem-DNg50TZS.js";import"./Button-DkTjWAj1.js";import"./Input-D2AEap14.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./Icon-jpLauUO9.js";import"./Skeleton-rNcUZaAx.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Heading-POmwd9W2.js";import"./useHighlightedText-CCsQk8zm.js";import"./ChevronUp-BIOdACnc.js";import"./ChevronDown-DWIhSCAm.js";import"./ChevronRight-HD9xUhWG.js";import"./Section-D-Yeh31t.js";import"./Flex-DJNl6q2s.js";import"./Typography-CVWBmure.js";import"./AttachmentList-C7J7EWrP.js";import"./AttachmentLink-DUCgeyoR.js";import"./File-GnNKfjpt.js";import"./SeenByLog-CAbfAiUW.js";import"./SeenByLogButton-Bpk1bogl.js";import"./SeenByLogItem-BRPFR2HG.js";import"./Byline-CDFoh2Gc.js";import"./Divider-BWARbb1_.js";import"./List-D4V152hW.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
