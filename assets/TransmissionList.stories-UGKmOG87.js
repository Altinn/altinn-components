import{t as o}from"./transmissions-sMu-wYE9.js";import{T as m}from"./TransmissionList-8dKPl3VC.js";import"./iframe-CSiNS2_t.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-hY9HQQwK.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ListItem-B3moosZM.js";import"./Input-BUqwhKEV.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./ChevronRight-dChxZgZA.js";import"./Section-iGjVnzYd.js";import"./Flex-DavaSday.js";import"./Typography-tfUHPeKu.js";import"./AttachmentList-lF1lcWPt.js";import"./AttachmentLink-DAVIbwh_.js";import"./File-DmG3ZrjZ.js";import"./SeenByLog-IAWNEpLw.js";import"./SeenByLogItem-Ch1h3JaY.js";import"./Byline-Ofgpqf54.js";import"./SeenByLogButton-CYzWkEwH.js";import"./Divider-y9qHaSmE.js";import"./List-DUVcdDRk.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
