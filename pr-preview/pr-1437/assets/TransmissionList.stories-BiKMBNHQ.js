import{t as o}from"./transmissions-Dsz7iqmk.js";import{T as m}from"./TransmissionList-BMRmPNFo.js";import"./iframe-BXiLaIo1.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BC06aJLv.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./ListItem-CTd9WB7d.js";import"./Input-BQGhDE8-.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Heading-BSdWQg6G.js";import"./useHighlightedText-K6CHyIcM.js";import"./ChevronUp-yA5Flpqo.js";import"./ChevronDown-DR7pfG2a.js";import"./ChevronRight-CsaEnGk6.js";import"./Section-SFy5BcqJ.js";import"./Flex-BVJPbTQ_.js";import"./Typography-DfF7AP8y.js";import"./AttachmentList-Jh9ZEr9P.js";import"./AttachmentLink-dmzqJzM8.js";import"./File-DmNJJwz9.js";import"./SeenByLog-C989vs9d.js";import"./SeenByLogItem-CYyozt3O.js";import"./Byline-om9Qq1nr.js";import"./SeenByLogButton-DjnDmTtK.js";import"./Divider-DPQQ_dI7.js";import"./List-BNBV8ThU.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
