import{t as o}from"./transmissions-ChwkOHVD.js";import{T as m}from"./TransmissionList-DY-xoiMT.js";import"./iframe-DZEBeon6.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-fGDUv9d2.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ListItem-DC7_3uyt.js";import"./Input-mPEfjr4P.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ChevronUp-Bz_NdsyW.js";import"./ChevronDown-CwSFKLVt.js";import"./ChevronRight-USTqc2u1.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";import"./Typography-4TCMsL9d.js";import"./AttachmentList-B2jS_XSy.js";import"./AttachmentLink-BsaOL9j5.js";import"./File-nQ5zYkJt.js";import"./SeenByLog-GVk8Wl4X.js";import"./SeenByLogItem-RBeXRW2R.js";import"./Byline-5JFdG98w.js";import"./SeenByLogButton-CKopiWIm.js";import"./Divider-CQj3YKL0.js";import"./List-BvRijqX6.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
