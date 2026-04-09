import{t as o}from"./transmissions-Wfi-0QFw.js";import{T as m}from"./TransmissionList-Cmb4q_SS.js";import"./iframe-DgiLb7Jh.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BnWSTIJL.js";import"./Badge-DFo-bNGw.js";import"./index-CzzvqmNv.js";import"./ListItem-DCHK_eIp.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./XMark-DE16CL-6.js";import"./useId-6J1VG5PF.js";import"./Icon-uoDJWBW9.js";import"./Skeleton-CjXkBVSw.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./ChevronUp-X_MpgVb_.js";import"./ChevronDown-1x60-vzB.js";import"./ChevronRight-B8GqJ6hU.js";import"./Section-BoeinIOl.js";import"./Flex-BfnRV8tR.js";import"./Typography-Bp8CNLT3.js";import"./AttachmentList-DIIMKUvc.js";import"./AttachmentLink-8CpMApB2.js";import"./SeenByLog-CwkelWbo.js";import"./SeenByLogButton-RvkZHYAE.js";import"./SeenByLogItem-DoZ5FcTt.js";import"./Byline-58BLL4Ck.js";import"./Divider-D-bz7DwV.js";import"./List-DTj7XRDi.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
