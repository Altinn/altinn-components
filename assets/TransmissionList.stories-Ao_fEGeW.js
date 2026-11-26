import{t as o}from"./transmissions-CFGYPS4v.js";import{T as m}from"./TransmissionList-B3e4U_xB.js";import"./iframe-DKOj4Qmf.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BVYdVnfR.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ListItem-DDb6uk5w.js";import"./Input-BzqjTNtI.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./ChevronUp-C6mjAtW4.js";import"./ChevronDown-E0Mu4V8Q.js";import"./ChevronRight-BtINKUzX.js";import"./Section-DDkkqRz5.js";import"./Flex-DwWkcKON.js";import"./Typography-eLs7BNQP.js";import"./AttachmentList-D4f8yqmd.js";import"./File-93INN30N.js";import"./SeenByLog-BHAHdRUc.js";import"./SeenByLogItem-CTysGoo-.js";import"./Byline-DdQrd2Ib.js";import"./SeenByLogButton-BTvtEl4i.js";import"./Divider-CzOqnME3.js";import"./List-B40AH4Pi.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
