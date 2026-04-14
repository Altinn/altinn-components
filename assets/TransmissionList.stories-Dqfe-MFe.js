import{t as o}from"./transmissions-CM8veg7q.js";import{T as m}from"./TransmissionList-C5Oayxvg.js";import"./iframe-DolAyTrH.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DpvP8QPU.js";import"./Badge-XZ4zcUXX.js";import"./index-BGgdxP5s.js";import"./ListItem-mIgAbn_b.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./XMark-DTdVjjyM.js";import"./useId-CHjpN4lF.js";import"./Icon-DyTdluPS.js";import"./Skeleton-CgJZAB6S.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./ChevronUp-DUU9T22i.js";import"./ChevronDown-BVkX7yzQ.js";import"./ChevronRight-Duke-dAu.js";import"./Section-B969stp2.js";import"./Flex-DJLVkQLj.js";import"./Typography-BxahTxrH.js";import"./AttachmentList-D2YBNHv2.js";import"./AttachmentLink-DsFe4YGb.js";import"./SeenByLog-ua92kMYf.js";import"./SeenByLogButton-DpgcCLrK.js";import"./SeenByLogItem-BxjxTINu.js";import"./Byline-BQhmmGjU.js";import"./Divider-BpkIomQy.js";import"./List-4xKYlKr8.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
