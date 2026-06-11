import{t as o}from"./transmissions-DbykuhXi.js";import{T as m}from"./TransmissionList-CKVi_Th-.js";import"./iframe-CvGAoPsc.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C_nuK8hw.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ListItem-CuEPEVad.js";import"./Input-CQ0xvTw5.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./ChevronUp-BlXkTO7h.js";import"./ChevronDown-CQ4dl58P.js";import"./ChevronRight-CMCEl43v.js";import"./Section-25rkGJ0B.js";import"./Flex-DO5C4y-8.js";import"./Typography-BnX3Du0Y.js";import"./AttachmentList-Cl_cnASc.js";import"./AttachmentLink-DE65Rlkl.js";import"./File-BbnM_6o9.js";import"./SeenByLog-BN-wKaah.js";import"./SeenByLogButton-RNulvzeC.js";import"./SeenByLogItem-DJ_KZN-P.js";import"./Byline-CWR-GxDU.js";import"./Divider-Dnx3nDKK.js";import"./List-DsJgCFOz.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
