import{t as o}from"./transmissions-D6-XH3uP.js";import{T as m}from"./TransmissionList-B9LQuZ2O.js";import"./iframe-cf7ESM3q.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C4GFfRJk.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ListItem-CXqD_edS.js";import"./Input-DT4mbTp0.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./ChevronUp-B_u4FtrM.js";import"./ChevronDown-DOXFb4Ko.js";import"./ChevronRight-Dy1T7Tgm.js";import"./Section-DoG5yznh.js";import"./Flex-BG_p9pKV.js";import"./Typography-C5h-r7_j.js";import"./AttachmentList-CFFpOYOO.js";import"./AttachmentLink-DhXh2sKB.js";import"./File-Durrf_pM.js";import"./SeenByLog-D5TB5WYH.js";import"./SeenByLogButton-BnQ2Q7cz.js";import"./SeenByLogItem-ChdToXB8.js";import"./Byline-CbgoR5kF.js";import"./Divider-PAHUgEWK.js";import"./List-8ewPRx_4.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
