import{t as o}from"./transmissions-CciHj5e6.js";import{T as m}from"./TransmissionList-DiI-nBsG.js";import"./iframe-DWR_BPge.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-PseeLCc1.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ListItem-DKhaVzxg.js";import"./Input-_0Vw9ldu.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./Typography-Ck9DnhQz.js";import"./AttachmentList-BVgp_56Y.js";import"./AttachmentLink-A146xEe3.js";import"./File-CX8eDPR2.js";import"./SeenByLog-DzRvk9Lv.js";import"./SeenByLogButton-Ddx4hHIJ.js";import"./SeenByLogItem-bJ4ypYQ2.js";import"./Byline-CHZhg7wc.js";import"./Divider-Dr2O11m-.js";import"./List-CSRccNVp.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
