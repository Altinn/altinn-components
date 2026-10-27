import{t as o}from"./transmissions-DxF1ajs0.js";import{T as m}from"./TransmissionList-BdfjFm1j.js";import"./iframe-CplFPuE2.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-P_2RcU4z.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ListItem-BTgrhjIM.js";import"./Input-BNktXmCP.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";import"./Section-CaXjLAlu.js";import"./Flex-CoXKQauA.js";import"./Typography-pPFkmvZJ.js";import"./AttachmentList-C5vWoJ3-.js";import"./AttachmentLink-CtfwYzh4.js";import"./File-Y3ekZfhU.js";import"./SeenByLog-DIYiRhfO.js";import"./SeenByLogItem-Bzni_D93.js";import"./Byline-7e44F15m.js";import"./SeenByLogButton-DTDZExWe.js";import"./Divider-cR4CUUoH.js";import"./List-DjlZKLgR.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
