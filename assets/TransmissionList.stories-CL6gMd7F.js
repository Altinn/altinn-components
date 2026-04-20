import{t as o}from"./transmissions-D-rn6vCY.js";import{T as m}from"./TransmissionList-B16BWDNw.js";import"./iframe-BqnZkKPi.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CIeM8KjS.js";import"./Badge-wAZ__xuM.js";import"./index-DAuAfjpD.js";import"./ListItem-C4Du7a0f.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./XMark-Y2_85_oc.js";import"./useId-9kVvsXig.js";import"./Icon-CnWjusVH.js";import"./Skeleton-1qnYSSLw.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./ChevronRight-DE1wtPln.js";import"./Section-CvCvg2MJ.js";import"./Flex-Dfcm_wdC.js";import"./Typography-DM76If-Q.js";import"./AttachmentList-KZvi3wyy.js";import"./AttachmentLink-W-xmuoa2.js";import"./SeenByLog-CySmm9Np.js";import"./SeenByLogButton-C_HnvNCG.js";import"./SeenByLogItem-CTsQrk3X.js";import"./Byline-BgerGoMP.js";import"./Divider-BztRnATF.js";import"./List-BhyjlMCS.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
