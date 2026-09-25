import{t as o}from"./transmissions-Bv7_EmJF.js";import{T as m}from"./TransmissionList-B8VGacp_.js";import"./iframe-C7-WWuUz.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BZArJDHU.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ListItem-BwvScdgk.js";import"./Input-DA__wV57.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./ChevronUp-DrJugmYh.js";import"./ChevronDown-BuDxjQRv.js";import"./ChevronRight-C0CFQIi6.js";import"./Section-D_PXiQbH.js";import"./Flex-C-tyhriT.js";import"./Typography-BeOUX7s0.js";import"./AttachmentList-BLo8UMcB.js";import"./AttachmentLink-Dre5EbqK.js";import"./File-CVs1pNAs.js";import"./SeenByLog-B57Q_frX.js";import"./SeenByLogItem-jP0Y6iEL.js";import"./Byline-Bu5GhJ1F.js";import"./SeenByLogButton-BZivseWR.js";import"./Divider-DZxigWxI.js";import"./List-BnL4RjGS.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
