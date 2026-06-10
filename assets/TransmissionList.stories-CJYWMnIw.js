import{t as o}from"./transmissions-C8_0YcqM.js";import{T as m}from"./TransmissionList-OELd3qWw.js";import"./iframe-CENvAP26.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-hMEIMgOT.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ListItem-DghPxNCy.js";import"./Input-CMkEMAO8.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./ChevronUp-BFUCM25K.js";import"./ChevronDown-88nFsQYK.js";import"./ChevronRight-CqCnB5Zg.js";import"./Section-Dfl51lKI.js";import"./Flex-yTAvUoR1.js";import"./Typography-BK5AylHP.js";import"./AttachmentList-DKBdki1s.js";import"./AttachmentLink-RRvZSr-o.js";import"./File-CvY0jx6Y.js";import"./SeenByLog-DD7NYZjk.js";import"./SeenByLogButton-Dn1hW3zP.js";import"./SeenByLogItem-CGUYjSjh.js";import"./Byline-T8ktPO6_.js";import"./Divider-Ci72vZ2L.js";import"./List-BoqDu_U2.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
