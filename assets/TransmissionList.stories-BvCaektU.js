import{t as o}from"./transmissions-By1WVI24.js";import{T as m}from"./TransmissionList-CHNvi757.js";import"./iframe-bg3nhc5C.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BQNngsEj.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./ListItem-Dk0WBAMJ.js";import"./Input-ByvRROIc.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./ChevronUp-DDZW1UU0.js";import"./ChevronDown-DjIEzGIr.js";import"./ChevronRight-fbKP0qVJ.js";import"./Section-0QuSZB3S.js";import"./Flex-CxgPTFrH.js";import"./Typography-Ci1MUa-H.js";import"./AttachmentList-bkebCOcN.js";import"./AttachmentLink-CdSGf16s.js";import"./File-CZS7UAXf.js";import"./SeenByLog-DtBKtq2O.js";import"./SeenByLogButton-PV0ipSH_.js";import"./SeenByLogItem-B4uKTCZg.js";import"./Byline-B0jov5iH.js";import"./Divider-CjoRgoCi.js";import"./List-v1Yie3cK.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
