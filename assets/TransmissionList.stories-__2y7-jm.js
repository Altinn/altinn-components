import{t as o}from"./transmissions-ogUXkOXI.js";import{T as m}from"./TransmissionList-DfWxxHbn.js";import"./iframe-CULgtZWU.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-GgIFTAep.js";import"./Badge-CMQ7i3tF.js";import"./index-BvBdYXxj.js";import"./ListItem-7-qwfKHS.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./XMark-BCb0_aBA.js";import"./useId-COk2q28h.js";import"./Icon-G4wS9E1h.js";import"./Skeleton-B_F13Udl.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./ChevronUp-D4lquxp4.js";import"./ChevronDown-BFG40PP5.js";import"./ChevronRight-Q1coQceW.js";import"./Section-CJ2BqCln.js";import"./Flex-CmyJ6DZP.js";import"./Typography-BrN0KsEX.js";import"./AttachmentList-DGnWjUmj.js";import"./AttachmentLink-D_DpoSol.js";import"./SeenByLog-D8x_GpFv.js";import"./SeenByLogButton-CZdj31tZ.js";import"./SeenByLogItem-BJCC3IMX.js";import"./Byline-DmLFgqaT.js";import"./Divider-DQal24HO.js";import"./List-BUOr4CZI.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
