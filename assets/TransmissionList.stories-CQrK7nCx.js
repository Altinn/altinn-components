import{t as o}from"./transmissions-DRXoADjl.js";import{T as m}from"./TransmissionList-DsfpoeYU.js";import"./iframe-a6n42jIx.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BKyBQbRy.js";import"./Badge-BmuPJ3WS.js";import"./index-D2z1-3lt.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./ListItem-CKB37Xdc.js";import"./Button-DYhT04-k.js";import"./Input-BUxVKC9v.js";import"./XMark-ENWUN_kz.js";import"./useId-JsUrCC3L.js";import"./Icon-C2KYL6xM.js";import"./Skeleton-BMznOa58.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./Section-SbJC69tZ.js";import"./Flex-BTGTFkLF.js";import"./Typography-K_BS0H0I.js";import"./AttachmentList-BkzTBqSu.js";import"./AttachmentLink-BaVfB-gt.js";import"./SeenByLog-B5bK2jdJ.js";import"./SeenByLogButton-J9nO15zf.js";import"./SeenByLogItem-CHVx4TK5.js";import"./Byline-ByWU9zoP.js";import"./Divider-C9QIo7Lb.js";import"./List-COoWd7bx.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
