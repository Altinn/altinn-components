import{t as o}from"./transmissions-BAfCuOru.js";import{T as m}from"./TransmissionList-BrFwMtuL.js";import"./iframe-qDHSBZ_X.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BJDlos-Q.js";import"./Badge-CmtcZ1do.js";import"./index-DTh2bawh.js";import"./ListItem-CtT8THVd.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./XMark-D8iHP3Cp.js";import"./useId-DLE_nI5l.js";import"./Icon-BDVkMuHy.js";import"./Skeleton-CJ3n2_6V.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./ChevronUp-BCgkquKN.js";import"./ChevronDown-By4Pb8IL.js";import"./ChevronRight-Dusr5JiS.js";import"./Section-BGNwMxU-.js";import"./Flex-BTOiCOb2.js";import"./Typography-DhQz7tKb.js";import"./AttachmentList-BaNKUAIl.js";import"./AttachmentLink-DgiqGYzk.js";import"./SeenByLog-B0L-OaGP.js";import"./SeenByLogButton-BHN3k_s8.js";import"./SeenByLogItem-BBDtAwmP.js";import"./Byline-Wskmiy6G.js";import"./Divider-Bq2ZhUaf.js";import"./List-CWWxrTyE.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
