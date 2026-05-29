import{t as o}from"./transmissions-7XCJsSJZ.js";import{T as m}from"./TransmissionList-tT0hfPjC.js";import"./iframe-D7BK96qe.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bz0nQXAT.js";import"./Badge-CP0to2q5.js";import"./index-CL9j6gFH.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";import"./ListItem-BwjNTMuN.js";import"./Button-UbmuloFB.js";import"./Input-wwG44gvy.js";import"./XMark-DKvmykI8.js";import"./useId-B1IjdNvC.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";import"./Section-G7MRDbZ9.js";import"./Flex-DKrdkBVD.js";import"./Typography-CoOY9SxO.js";import"./AttachmentList-BUtx4gr-.js";import"./AttachmentLink-Cf9u9n4e.js";import"./File-BKQJfDE6.js";import"./SeenByLog-R4J6Zkt3.js";import"./SeenByLogButton-CAjkFzU6.js";import"./SeenByLogItem-E8EAjr1D.js";import"./Byline-Q4XhunLC.js";import"./Divider-DoxmSZvL.js";import"./List-D3gzZVMY.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,K as __namedExportsOrder,J as default};
