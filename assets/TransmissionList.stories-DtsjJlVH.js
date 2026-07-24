import{t as o}from"./transmissions-CHStc2yV.js";import{T as m}from"./TransmissionList-DmiI3Ub7.js";import"./iframe-Byxtd80g.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Dqfk6uEd.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./ListItem-NChXZGPS.js";import"./Input-De6ZM0cy.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ChevronUp-DVYZxjEC.js";import"./ChevronDown-Bl8PHeKm.js";import"./ChevronRight-Cr__dFRw.js";import"./Section-BiXimCdL.js";import"./Flex-DvsQk1i3.js";import"./Typography-B9U7pBH4.js";import"./AttachmentList-B2iryNHd.js";import"./AttachmentLink-D4B5zxB7.js";import"./File-Blr_e9g5.js";import"./SeenByLog-CuBUom03.js";import"./SeenByLogItem-zmlyakJ_.js";import"./Byline-Cb3cKld6.js";import"./SeenByLogButton-Dsc3h9mW.js";import"./Divider-B7BfHpuQ.js";import"./List-CP--feze.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
