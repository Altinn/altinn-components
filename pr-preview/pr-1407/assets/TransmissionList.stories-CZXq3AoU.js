import{t as o}from"./transmissions-wx2ta1c0.js";import{T as m}from"./TransmissionList-b7IxEYP1.js";import"./iframe-BenRi1VF.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BU1V3vhd.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ListItem-DZ4jGznm.js";import"./Input-CYuEMmfW.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./ChevronRight-B0Rwz_dW.js";import"./Section-DdVAzkd7.js";import"./Flex-BtqRQeFd.js";import"./Typography-CY6bfOBd.js";import"./AttachmentList-DR2W5BgK.js";import"./AttachmentLink-B11SoVxN.js";import"./File-B8QfmHjG.js";import"./SeenByLog-2aJdRG2Z.js";import"./SeenByLogItem-bUGYvvj1.js";import"./Byline-BbatCE13.js";import"./SeenByLogButton-BFs7qVod.js";import"./Divider-DgHIbTcc.js";import"./List-4vc_1Wif.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
