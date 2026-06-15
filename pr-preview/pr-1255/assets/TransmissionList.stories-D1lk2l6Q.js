import{t as o}from"./transmissions-yWEcIo0F.js";import{T as m}from"./TransmissionList-Ci942cuI.js";import"./iframe-h3kpEY-8.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CwBj2156.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ListItem-De57F-VP.js";import"./Input-BilJ5YTK.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./ChevronUp-ChyOGEvh.js";import"./ChevronDown-lfOvIfMJ.js";import"./ChevronRight-zeeAR8pp.js";import"./Section-CgbWqpsb.js";import"./Flex-BmiGVQGS.js";import"./Typography-ByLPxgtz.js";import"./AttachmentList-D2dCb-Ry.js";import"./AttachmentLink-BYt6Zfgx.js";import"./File-CTz_kpJX.js";import"./SeenByLog-Dge3Ncii.js";import"./SeenByLogButton-DmHDhIih.js";import"./SeenByLogItem-DdhV7bTI.js";import"./Byline-iQF-_OTI.js";import"./Divider-BULkqhJ0.js";import"./List-BrnOjuxG.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
