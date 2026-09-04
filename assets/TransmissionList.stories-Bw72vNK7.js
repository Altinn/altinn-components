import{t as o}from"./transmissions-wJLR4agr.js";import{T as m}from"./TransmissionList-o84CphSe.js";import"./iframe-Bg-ykIGY.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-wTr-8UH_.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ListItem-TtjgHak_.js";import"./Input-DE7Whw6H.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./Typography-DBpPrukr.js";import"./AttachmentList-DXLgUd7P.js";import"./AttachmentLink-BsBImolJ.js";import"./File-Bi2_R2Se.js";import"./SeenByLog-DnYrUgbd.js";import"./SeenByLogItem-FmzdRa1W.js";import"./Byline-CBCSzTOX.js";import"./SeenByLogButton-DsevNz-T.js";import"./Divider-i4XKetPt.js";import"./List-Cc9en0ov.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
