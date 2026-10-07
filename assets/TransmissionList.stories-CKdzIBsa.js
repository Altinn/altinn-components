import{t as o}from"./transmissions-3uiwHthj.js";import{T as m}from"./TransmissionList-tW5KHE8c.js";import"./iframe-RnExGCnN.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-euk1xbGx.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ListItem-DU4tohCc.js";import"./Input--YjiHlpM.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./ChevronUp-B2SXqU3E.js";import"./ChevronDown-CHkfpXTu.js";import"./ChevronRight-CN6Km5wu.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./Typography-C0LI4Nld.js";import"./AttachmentList-cSoa2EXN.js";import"./AttachmentLink-6pu77m_w.js";import"./File-Dcq5H8md.js";import"./SeenByLog-BPXSXLnm.js";import"./SeenByLogItem-CKFNCfc_.js";import"./Byline-DsvvFWAw.js";import"./SeenByLogButton-B3vftTJ4.js";import"./Divider-DV7P9Vl3.js";import"./List-CY0yYtOa.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
