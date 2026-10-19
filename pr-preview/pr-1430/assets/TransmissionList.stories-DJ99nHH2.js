import{t as o}from"./transmissions-D0vOxrBY.js";import{T as m}from"./TransmissionList-C9E7RnEO.js";import"./iframe-Bv9y2YZF.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CrUcxLlm.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ListItem-C6mw7NGu.js";import"./Input-C95LaLCm.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./ChevronRight-B_ztNHmN.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./Typography-AZvc429m.js";import"./AttachmentList-Dt35cZvL.js";import"./AttachmentLink-CzXwMzRr.js";import"./File-B_YudXxQ.js";import"./SeenByLog-Ze4oW-2D.js";import"./SeenByLogItem-DCMbH4r-.js";import"./Byline-jEJeyCgg.js";import"./SeenByLogButton-DPS3aksO.js";import"./Divider-CX9Qmd6L.js";import"./List-BC0AOX2B.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
