import{t as o}from"./transmissions-SmzFavtf.js";import{T as m}from"./TransmissionList-C9_3kViu.js";import"./iframe-CAjSv_nS.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Cd83I5Yh.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ListItem-tV3UUBFk.js";import"./Input-BnE3VUoY.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./Typography-CP4EAHNP.js";import"./AttachmentList-Ck51gZdn.js";import"./AttachmentLink-C_Tys8W8.js";import"./File-CihFSu03.js";import"./SeenByLog-BDx7g_GQ.js";import"./SeenByLogItem-f8aeo_x4.js";import"./Byline-Cj2qEBxk.js";import"./SeenByLogButton-D8a_YyrL.js";import"./Divider-DwgePPkW.js";import"./List-Cb27YNZb.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
