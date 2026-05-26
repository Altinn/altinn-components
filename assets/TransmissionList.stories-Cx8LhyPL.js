import{t as o}from"./transmissions-Br22W0e1.js";import{T as m}from"./TransmissionList-CFZWXSTa.js";import"./iframe-C32LkOFR.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-GSN19MdN.js";import"./Badge-B5rN9dZh.js";import"./index-B41-Gq6i.js";import"./Tooltip-D2U0c2nY.js";import"./tooltip-C1z0ba6x.js";import"./ListItem-MdjrCvXj.js";import"./Button-DJyTPLgL.js";import"./Input-944JhKVs.js";import"./XMark-CJ_7TJfx.js";import"./useId-C6VS968l.js";import"./Icon-ClcJ2Ugl.js";import"./Skeleton-BFp1Ns5z.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./ChevronUp-BXoYzDan.js";import"./ChevronDown-CFXYCpRP.js";import"./ChevronRight-BRam3foO.js";import"./Section-BW54BVJv.js";import"./Flex-BUJ7sT5C.js";import"./Typography-BtAt1mkJ.js";import"./AttachmentList-Dc0Zh5-5.js";import"./AttachmentLink-5DdUxOwM.js";import"./SeenByLog-C-kVmao2.js";import"./SeenByLogButton-oVl-Q3NJ.js";import"./SeenByLogItem-XKdwlI-t.js";import"./Byline-59VzS1l1.js";import"./Divider-CqvPaPTt.js";import"./List-Bfu0C2So.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
