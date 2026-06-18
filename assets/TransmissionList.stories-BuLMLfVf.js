import{t as o}from"./transmissions-DGem9YZu.js";import{T as m}from"./TransmissionList-B6lJ4tka.js";import"./iframe-3eub8g81.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-I56N5WUL.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ListItem-Y8YYbtC7.js";import"./Input-C_lNMvAW.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./Typography-BfGFMo_X.js";import"./AttachmentList-CloLe5Jw.js";import"./AttachmentLink-DleuS7ZL.js";import"./File-DbQdBAfX.js";import"./SeenByLog-CNr-G6p5.js";import"./SeenByLogButton-D4953sjW.js";import"./SeenByLogItem-DVJfkgJs.js";import"./Byline-CCy36c-a.js";import"./Divider-CjLXSzl6.js";import"./List-Bd4lewsS.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
