import{t as o}from"./transmissions-C_1fs4P-.js";import{T as m}from"./TransmissionList-KnhCyzpi.js";import"./iframe-DklMp8b9.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DTH3yrK3.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./ListItem-CrAQg8rM.js";import"./Input-DDvcPBDR.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./ChevronRight-D0aoAfw5.js";import"./Section-DuAEz57j.js";import"./Flex-CsvoEycQ.js";import"./Typography-CuZWB-pA.js";import"./AttachmentList-C8dy1zis.js";import"./AttachmentLink-oxkdj-mD.js";import"./File-DuN_oUjC.js";import"./SeenByLog-Cf2CHlkz.js";import"./SeenByLogItem-OY2aovGU.js";import"./Byline-BE2tNCTu.js";import"./SeenByLogButton-CYTzQz3u.js";import"./Divider-C_Jo3wvY.js";import"./List-CVcEBF4a.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
