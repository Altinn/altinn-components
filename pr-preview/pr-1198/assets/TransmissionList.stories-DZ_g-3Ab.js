import{t as o}from"./transmissions-uRlgpd78.js";import{T as m}from"./TransmissionList-DFwkHzsV.js";import"./iframe-DXwGEFZf.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BgK7kmpB.js";import"./Badge-CBgj_4MY.js";import"./index-DpQTH4Pc.js";import"./Tooltip-DxtRZp3O.js";import"./tooltip-OQNLf2nv.js";import"./ListItem-C3blsWJZ.js";import"./Button-BcOfKjgE.js";import"./Input-CjRvyA41.js";import"./XMark-BspkucHC.js";import"./useId-Df52yuGg.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";import"./Section-BSKZ_Frt.js";import"./Flex-U6liI5ZR.js";import"./Typography-CegVoZkA.js";import"./AttachmentList-DtGXh9Zx.js";import"./AttachmentLink-GOSA-QOX.js";import"./SeenByLog-J0soz1dI.js";import"./SeenByLogButton-kAEXIWqd.js";import"./SeenByLogItem-BU3eGMef.js";import"./Byline-DdT-FOev.js";import"./Divider-C7X97dOt.js";import"./List-BgXw8LTl.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,J as __namedExportsOrder,H as default};
