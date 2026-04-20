import{t as o}from"./transmissions-D7_bGnro.js";import{T as m}from"./TransmissionList-DgU1inha.js";import"./iframe-yBEatwQ0.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Ch7C2z3L.js";import"./Badge-Bt5kdhhY.js";import"./index-B7J_eA84.js";import"./ListItem-CFEmGYjw.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./XMark-DRdfunCf.js";import"./useId-DyCIbqyR.js";import"./Icon-m6GSRHhZ.js";import"./Skeleton-D2AOT5bt.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./ChevronRight-DNoffWLc.js";import"./Section-CLhotqus.js";import"./Flex-Co0GST2J.js";import"./Typography-ggurnZ72.js";import"./AttachmentList-BAxnrwPL.js";import"./AttachmentLink-C3Rh0tvY.js";import"./SeenByLog-DfEK8BuT.js";import"./SeenByLogButton-CjqOM9wk.js";import"./SeenByLogItem-WOKJnFl4.js";import"./Byline-DhO_oqaK.js";import"./Divider-ClYOp7SL.js";import"./List-FR3qe7-6.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
