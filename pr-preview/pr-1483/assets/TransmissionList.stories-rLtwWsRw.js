import{t as o}from"./transmissions-B5ocjiOl.js";import{T as m}from"./TransmissionList-BlvvgyOx.js";import"./iframe-DmXJhoHi.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CI5wM7tj.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ListItem-B6VvmXU-.js";import"./Input-BP2xOaTX.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ChevronUp-kg_frLlM.js";import"./ChevronDown-CCUi9si5.js";import"./ChevronRight-BBhULSEW.js";import"./Section-Db3Vzokt.js";import"./Flex-B-7ly2La.js";import"./Typography-TuByLUlM.js";import"./AttachmentList-C2sePZrS.js";import"./File-DnbDKgFQ.js";import"./SeenByLog-B-T2-0Xh.js";import"./SeenByLogItem-DNfYcc88.js";import"./Byline-BCfahRVM.js";import"./SeenByLogButton-CavYM8bF.js";import"./Divider-Crxk48ty.js";import"./List-B0PM0fvI.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
