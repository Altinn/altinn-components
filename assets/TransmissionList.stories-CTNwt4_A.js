import{t as o}from"./transmissions-TfcJ1plJ.js";import{T as m}from"./TransmissionList-CetGP0Sa.js";import"./iframe-BOq385O8.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CyaoCY_6.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ListItem-2JfbVmNX.js";import"./Input-B8j-6nyc.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./ChevronUp-DtZBQ8_H.js";import"./ChevronDown-ByPuuZmk.js";import"./ChevronRight-8gth-Lkl.js";import"./Section-B7vrx1o8.js";import"./Flex-CyZuoM67.js";import"./Typography-DYb-ep--.js";import"./AttachmentList-DaOEvsa8.js";import"./AttachmentLink-DVbPpNkd.js";import"./File-C7HHNrZX.js";import"./SeenByLog-B6XqlxhM.js";import"./SeenByLogItem-BQs1CBGm.js";import"./Byline-rv222U39.js";import"./SeenByLogButton-DcloZ8z9.js";import"./Divider-BZdr4uZo.js";import"./List-D7M0evjO.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Outgoing","Incoming"];export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
