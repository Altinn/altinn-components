import{t as o}from"./transmissions-B5pg91CX.js";import{T as m}from"./TransmissionList-D6AjWVyI.js";import"./iframe-xlSYDLmX.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CdX_OX2b.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ListItem-B7QDJ_pJ.js";import"./Input-r4bRN1Qy.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./Typography-CBKRdQ-b.js";import"./AttachmentList-nyR4RzCq.js";import"./File-BRQkQvkt.js";import"./SeenByLog-CUhO0OQ8.js";import"./SeenByLogItem-Cy6sqJ9g.js";import"./Byline-lo6AH7M_.js";import"./SeenByLogButton-BSK-CwZM.js";import"./Divider-DywCGJJG.js";import"./List-4DslVlnz.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
