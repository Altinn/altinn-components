import{t as o}from"./transmissions-DUz6hi3s.js";import{T as m}from"./TransmissionList-DUqxVAIm.js";import"./iframe-BRsjK6zm.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DQwPlnvW.js";import"./Badge-BbcJeGFK.js";import"./Tooltip-Bg2GzV5c.js";import"./ListItem-B2uke9vo.js";import"./Input-_uBO5XEg.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./Heading-tpemMnuB.js";import"./useHighlightedText-P3be0gWv.js";import"./ChevronUp-B4spzIlB.js";import"./ChevronDown-kQjoglkI.js";import"./ChevronRight-GPnb-Lf1.js";import"./Section-DAR_XxTX.js";import"./Flex-CYDzZKtj.js";import"./Typography-BVRUlHaM.js";import"./AttachmentList-DGtLR2sT.js";import"./AttachmentLink-CjeZDzUy.js";import"./File-CqJFvFz4.js";import"./SeenByLog-C0q3ZQZH.js";import"./SeenByLogItem-wbM86Nzy.js";import"./Byline-C7W6OXau.js";import"./SeenByLogButton-BP5lavHt.js";import"./Divider-BfJqSdO1.js";import"./List-CVWi44Xg.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
