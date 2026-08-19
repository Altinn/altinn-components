import{t as o}from"./transmissions-CTjIMds0.js";import{T as m}from"./TransmissionList-DkO8O56n.js";import"./iframe-F_FB4Yxl.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CbVFz-4K.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./ListItem-QexinWWd.js";import"./Input-CADZ4I-X.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./ChevronUp-BmFZO6Yq.js";import"./ChevronDown-CmhX0LZg.js";import"./ChevronRight-f1WSa4_L.js";import"./Section-BgR8r3RU.js";import"./Flex-QNMJxvpD.js";import"./Typography-BQdVTYYF.js";import"./AttachmentList-BFUNc_na.js";import"./AttachmentLink-DqAnCB21.js";import"./File-Cz15N1YA.js";import"./SeenByLog-96hzz4fq.js";import"./SeenByLogItem-BGkmBdDM.js";import"./Byline-DojDAdb5.js";import"./SeenByLogButton-VHc1Zw1a.js";import"./Divider-DRq0LYFI.js";import"./List-WSKqvn9S.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
