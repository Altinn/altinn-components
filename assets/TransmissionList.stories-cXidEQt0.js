import{t as o}from"./transmissions-DcX1gSxu.js";import{T as m}from"./TransmissionList-BmS01d8q.js";import"./iframe-Bka3lqwZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BPnQqfW5.js";import"./Badge-Dr-ny6rj.js";import"./index-97QH58ax.js";import"./ListItem-CvqbKmOV.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./XMark-BopKFElT.js";import"./useId-BOUKUp4S.js";import"./Icon-DoXRGO_6.js";import"./Skeleton-ECUY2hPc.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ChevronUp-1mXV-FY3.js";import"./ChevronDown-7HdAqi_x.js";import"./ChevronRight-1C-HJkAE.js";import"./Section-DgAAlgWN.js";import"./Flex-CDu7UET9.js";import"./Typography-CMwGEMpO.js";import"./AttachmentList-C8FS73qX.js";import"./AttachmentLink-DUb0eyVQ.js";import"./SeenByLog-BRsZMhcp.js";import"./SeenByLogButton-BB1zJYE-.js";import"./SeenByLogItem-wp3TdpZB.js";import"./Byline-BxTXxcQb.js";import"./Divider-BS5IHdZL.js";import"./List-DrMi80p5.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const M=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,M as __namedExportsOrder,K as default};
