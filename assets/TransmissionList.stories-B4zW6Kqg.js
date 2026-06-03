import{t as o}from"./transmissions-CErLv58y.js";import{T as m}from"./TransmissionList-CM07x7av.js";import"./iframe-DxDA2A5n.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BUA52nkx.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ListItem-4aUvxfhJ.js";import"./Input-DR3-2m3e.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./ChevronUp-ChUSKAgV.js";import"./ChevronDown-Cl8SGDa2.js";import"./ChevronRight-B7TpiReR.js";import"./Section-BxDgugwi.js";import"./Flex-CfINokNW.js";import"./Typography-BpmyNFuo.js";import"./AttachmentList-DoDdI1Rt.js";import"./AttachmentLink-DxxjLm-H.js";import"./File-DF9Ovga3.js";import"./SeenByLog-BUYFGwfC.js";import"./SeenByLogButton-CQ5_4rR2.js";import"./SeenByLogItem-QQYjMGZ7.js";import"./Byline-CkX8RVoL.js";import"./Divider-CDppsivb.js";import"./List-BQK37DtS.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
