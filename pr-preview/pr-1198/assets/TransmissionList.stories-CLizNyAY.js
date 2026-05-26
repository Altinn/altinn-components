import{t as o}from"./transmissions-BrHghvh3.js";import{T as m}from"./TransmissionList-BN3iQEZn.js";import"./iframe-DU0n7__8.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-W8KhNNr7.js";import"./Badge-DWaei4kj.js";import"./index-sAFX08uI.js";import"./Tooltip-DMnOwjPw.js";import"./tooltip-UENHGvJl.js";import"./ListItem-DQYNDMBV.js";import"./Button-pXyw-iqn.js";import"./Input-Cjh3ClWU.js";import"./XMark-DGVnrVrT.js";import"./useId-DCXiBgwp.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ChevronUp-B4O89os7.js";import"./ChevronDown-Bfnu4XYc.js";import"./ChevronRight-B4fDZY6k.js";import"./Section-DwU7Gyqo.js";import"./Flex-C_O_eubX.js";import"./Typography-DOUoXZCv.js";import"./AttachmentList-DISvz8Fo.js";import"./AttachmentLink-De5Kqrqb.js";import"./SeenByLog-atPcjhVq.js";import"./SeenByLogButton-Bu2gyyFa.js";import"./SeenByLogItem-B7yuq18s.js";import"./Byline-D-DCimye.js";import"./Divider-DCKDjoOC.js";import"./List-D0aDTMjw.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
