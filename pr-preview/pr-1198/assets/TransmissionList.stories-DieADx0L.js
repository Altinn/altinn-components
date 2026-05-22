import{t as o}from"./transmissions-BSGz2BIK.js";import{T as m}from"./TransmissionList-7bKsyvGh.js";import"./iframe-C6Awlou2.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-XpCFYnlR.js";import"./Badge-4PTsP983.js";import"./index-DlBZqmFk.js";import"./Tooltip-CsuAugEU.js";import"./tooltip-wBWP-9p3.js";import"./ListItem-B4a0Y9mW.js";import"./Button-xDUaTd0f.js";import"./Input-DYyIZxUH.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ChevronUp-CFyLtqTc.js";import"./ChevronDown-BaaUSGet.js";import"./ChevronRight-BPFGJ1iV.js";import"./Section-Bo2XNiOH.js";import"./Flex-CdwLgxBs.js";import"./Typography-B5eitD86.js";import"./AttachmentList-Kh1vuZcv.js";import"./AttachmentLink-BL10_H4P.js";import"./SeenByLog-B1Lee4DV.js";import"./SeenByLogButton-CVuDalN1.js";import"./SeenByLogItem-B4YYN1TE.js";import"./Byline-BNoBNYMp.js";import"./Divider-Dv9ZwaQV.js";import"./List-BRK8Eu__.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
