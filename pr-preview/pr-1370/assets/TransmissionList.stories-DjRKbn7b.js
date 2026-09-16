import{t as o}from"./transmissions-D41osR6C.js";import{T as m}from"./TransmissionList-CQsXRj07.js";import"./iframe-DK26OyRD.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DZWT9EXh.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./ListItem-DdxVCvKn.js";import"./Input-DpIg0EIy.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./ChevronUp-H846LjQF.js";import"./ChevronDown-BXSVxDRn.js";import"./ChevronRight-CgtnVZss.js";import"./Section-5gLqA0oM.js";import"./Flex-Bsp6DeeI.js";import"./Typography-DLY6k0s2.js";import"./AttachmentList-CKJ8-JXx.js";import"./AttachmentLink-IWxxu5t2.js";import"./File-DbuB39SE.js";import"./SeenByLog-83MZzMh_.js";import"./SeenByLogItem-DHlK5VDq.js";import"./Byline-c7qUJLHL.js";import"./SeenByLogButton-DHXIRNRf.js";import"./Divider-BVXfMNk1.js";import"./List-CCKc6phr.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
