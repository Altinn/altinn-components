import{t as o}from"./transmissions-CCLp0bvc.js";import{T as m}from"./TransmissionList-CGjAquEd.js";import"./iframe-B7zm1HIO.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Vl4GlTih.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./ListItem-CiWjvc3C.js";import"./Input-w1DANTSA.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./ChevronRight-BItcH0VL.js";import"./Section-DkuWWe6d.js";import"./Flex-N2sBTmCS.js";import"./Typography-DnprxIFo.js";import"./AttachmentList-K-ZBslfa.js";import"./AttachmentLink-YS1jcbS3.js";import"./File-Ci5ib_i1.js";import"./SeenByLog-CYLMfHD-.js";import"./SeenByLogButton-DCMMoRqr.js";import"./SeenByLogItem-DDQbAY-e.js";import"./Byline-avPt5eDg.js";import"./Divider-DLUyO367.js";import"./List-CkiccdRL.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
