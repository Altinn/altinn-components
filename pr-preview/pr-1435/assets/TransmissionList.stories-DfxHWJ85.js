import{t as o}from"./transmissions-DMLwG9Qd.js";import{T as m}from"./TransmissionList-D6jfm6jQ.js";import"./iframe-C_3qWz8U.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-Dcu4PUZl.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ListItem-CEzqSoAw.js";import"./Input-BnIvU9G4.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./Typography-BcJ8Dd08.js";import"./AttachmentList-C_2lfk0A.js";import"./AttachmentLink-Br5tLhcB.js";import"./File-DA3CSR9o.js";import"./SeenByLog-CX09IyWC.js";import"./SeenByLogItem-BeiGarMS.js";import"./Byline-nDS7FPa_.js";import"./SeenByLogButton-B07ISqNS.js";import"./Divider-DiesIRLe.js";import"./List-DqRWyw1C.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
