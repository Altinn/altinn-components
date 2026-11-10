import{t as o}from"./transmissions-s7YMyMVX.js";import{T as m}from"./TransmissionList-Tr6ECz3L.js";import"./iframe-Yc5vADWD.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DmtheIE6.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./ListItem-p9NlHhpX.js";import"./Input-XB5O9fra.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./Heading-DEfYMi8I.js";import"./useHighlightedText-DPM1PtgE.js";import"./ChevronUp-CHIwOCup.js";import"./ChevronDown-DOVICByK.js";import"./ChevronRight-BvgS2wwu.js";import"./Section-CEOcJou8.js";import"./Flex-B3cYS6HF.js";import"./Typography-BbQNKF3N.js";import"./AttachmentList-DnPAsuTU.js";import"./File-CSgcZ8pS.js";import"./SeenByLog-DuliCpmn.js";import"./SeenByLogItem-BL8X8Zet.js";import"./Byline-CRSkwqC3.js";import"./SeenByLogButton-DzxI2NZD.js";import"./Divider-KmVnp2I8.js";import"./List-CIhxK0fT.js";const w={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
