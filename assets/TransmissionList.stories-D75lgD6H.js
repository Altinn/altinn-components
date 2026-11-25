import{t as o}from"./transmissions-m-lNSjLl.js";import{T as m}from"./TransmissionList-B2xS_nRa.js";import"./iframe-BW6sNfUG.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DpdlharP.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./ListItem-sjVLqN5k.js";import"./Input-gnkfXNcC.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";import"./ChevronRight-DCXIgdRg.js";import"./Section-C6OUO-lD.js";import"./Flex-Ws1WKTNd.js";import"./Typography-DluWU8As.js";import"./AttachmentList-BWCGZTl1.js";import"./File-EcF4yKkc.js";import"./SeenByLog-BrBJVecU.js";import"./SeenByLogItem-ptPL9xwC.js";import"./Byline-BE-T5e6F.js";import"./SeenByLogButton-CCDPQlfs.js";import"./Divider-DHERf67l.js";import"./List-LxK0i123.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
