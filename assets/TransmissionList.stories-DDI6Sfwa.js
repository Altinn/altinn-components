import{t as o}from"./transmissions-CDdhKg4m.js";import{T as m}from"./TransmissionList-D6t7BlZ7.js";import"./iframe-CXxOXnma.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-u2IqlSsi.js";import"./Badge-c48mXhtB.js";import"./index-DvzmMrBu.js";import"./Tooltip-CMWO30ox.js";import"./tooltip-F-8CLWbq.js";import"./ListItem-C7pcgmaV.js";import"./Button-Dot-dF6F.js";import"./Input-jSu8pVt5.js";import"./XMark-DvGwYctt.js";import"./useId-CYy4MNIP.js";import"./Icon-CyU2k-nr.js";import"./Skeleton-DaZzKoDP.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ChevronUp-C7KI3ypM.js";import"./ChevronDown-BI53cl-V.js";import"./ChevronRight-fDr-lddl.js";import"./Section-BI582Rxy.js";import"./Flex-Cdw8i_ge.js";import"./Typography-4yj_ylkx.js";import"./AttachmentList-1Trnv17R.js";import"./AttachmentLink-D5Q6qNWr.js";import"./SeenByLog-BGfqYQ4c.js";import"./SeenByLogButton-BK6Y5DG3.js";import"./SeenByLogItem-nGELMoBo.js";import"./Byline-BkcZgi9W.js";import"./Divider-C-Mk1MAd.js";import"./List-CWN0grZu.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
