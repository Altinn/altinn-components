import{t as o}from"./transmissions-Nvf8H7Bz.js";import{T as m}from"./TransmissionList-B2nG88Kf.js";import"./iframe-YdRL1NzV.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bo-u63I5.js";import"./Badge-BSGPq3Hw.js";import"./index-SoIsie1y.js";import"./Tooltip-cmmFu2mD.js";import"./tooltip-D0NJwlFT.js";import"./ListItem-C0qt05--.js";import"./Button-BwQOxknK.js";import"./Input-Co3wY2OB.js";import"./XMark-1l7ZvP46.js";import"./useId-DxHKrSZ4.js";import"./Icon-B4-srULI.js";import"./Skeleton-C3i9Ug5T.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ChevronUp-DpeVWcyB.js";import"./ChevronDown-Uy2Tl2KH.js";import"./ChevronRight-DrXpgbb_.js";import"./Section-Bmd_KobT.js";import"./Flex-8MCCOfGV.js";import"./Typography-CYgzLoEf.js";import"./AttachmentList-bNrzihUp.js";import"./AttachmentLink-DtwsZQYQ.js";import"./SeenByLog-LEzY61Bl.js";import"./SeenByLogButton-CvH0ZTi4.js";import"./SeenByLogItem-BV29qnb6.js";import"./Byline-CLkrgOLm.js";import"./Divider-BCSoJ20Y.js";import"./List-ClwLIO8W.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,J as __namedExportsOrder,H as default};
