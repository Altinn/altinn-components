import{t as o}from"./transmissions-CTeHPkQh.js";import{T as m}from"./TransmissionList-BIEWZPEa.js";import"./iframe-ITS-2hJr.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-yxoSb9aG.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./ListItem-5Rr0WNcR.js";import"./Input-eieVqTh_.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./Typography-8PAPF6ji.js";import"./AttachmentList-D-jzX0TA.js";import"./AttachmentLink-C-by3tVe.js";import"./File-BJbWXz_I.js";import"./SeenByLog-C0xUL4m2.js";import"./SeenByLogItem-D1xWHZAK.js";import"./Byline-D-FlqTL-.js";import"./SeenByLogButton-DPP9-S3m.js";import"./Divider-XNCFH8Co.js";import"./List-B0u74Cjz.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
