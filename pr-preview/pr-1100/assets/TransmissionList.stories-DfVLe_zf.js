import{t as o}from"./transmissions-1AAa6hAv.js";import{T as m}from"./TransmissionList-DJC1SeVo.js";import"./iframe-BTgHnb1V.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BWhqp468.js";import"./Badge-sZl2g-is.js";import"./index-t_Anj6Qz.js";import"./ListItem-C5a5niC3.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./XMark-DMQzhoj3.js";import"./useId-DWidDjIe.js";import"./Icon-PY6OftAR.js";import"./Skeleton-B3M39f3D.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./ChevronUp-Cx3Hy4Md.js";import"./ChevronDown-BdtQrLIc.js";import"./ChevronRight-DEDRS1St.js";import"./Section-B92QpPhv.js";import"./Flex-ujxLNWuk.js";import"./Typography-CR3zr5Vv.js";import"./AttachmentList-Dx6hwvHc.js";import"./AttachmentLink-DE4n2hhv.js";import"./SeenByLog-CCB0j96w.js";import"./SeenByLogButton-IP09Jttv.js";import"./SeenByLogItem-DgeP2bn8.js";import"./Byline-DW7l22NR.js";import"./Divider-DeDDFaQq.js";import"./List-D_Cei_q3.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
