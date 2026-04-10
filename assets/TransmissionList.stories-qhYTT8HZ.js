import{t as o}from"./transmissions-CejZ7DXM.js";import{T as m}from"./TransmissionList-tPslq_pZ.js";import"./iframe-DpqvNfuX.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DYgFJgAr.js";import"./Badge-DH_aKElc.js";import"./index-Ct2h27FF.js";import"./ListItem-CCCiwYYh.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./XMark-D5GqdRxj.js";import"./useId-BXmkKvJa.js";import"./Icon-DaddCVMS.js";import"./Skeleton-CUXlhXSK.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./ChevronUp-Dxkuhvvs.js";import"./ChevronDown-wC2GJNFy.js";import"./ChevronRight-l4sUB0S3.js";import"./Section-CtbhQhiL.js";import"./Flex-BVIzbH2w.js";import"./Typography-7MtHaiXa.js";import"./AttachmentList-BhR7k61v.js";import"./AttachmentLink-DKIfWyjR.js";import"./SeenByLog-wbu9LbiB.js";import"./SeenByLogButton-DqQBpjGn.js";import"./SeenByLogItem-BjACC0jx.js";import"./Byline-D3lAONhk.js";import"./Divider-Cx6flCJn.js";import"./List-CLF93S-1.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
