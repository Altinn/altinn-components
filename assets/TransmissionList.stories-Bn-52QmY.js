import{t as o}from"./transmissions-Du_sEFEp.js";import{T as m}from"./TransmissionList-CzyaHTch.js";import"./iframe-BaqLtPTs.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-gUfEv8e3.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ListItem-B1zZ41e6.js";import"./Input-BbFz6Lbp.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";import"./ChevronRight-Dg4XRKaD.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./Typography-DwSVJfAa.js";import"./AttachmentList-ypsPSy4i.js";import"./AttachmentLink-C0R8AbGj.js";import"./File-BxMvjRkD.js";import"./SeenByLog-BDaELRdW.js";import"./SeenByLogItem-DnMCDfA4.js";import"./Byline-BEr8_98B.js";import"./SeenByLogButton-BcOHrlFJ.js";import"./Divider-BwGpb8y3.js";import"./List-CSO-iXDD.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
