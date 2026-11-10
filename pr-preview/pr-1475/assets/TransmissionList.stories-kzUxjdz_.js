import{t as o}from"./transmissions-DUcdKQ5G.js";import{T as m}from"./TransmissionList-BEbMZe2Y.js";import"./iframe-CFooeFlc.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-Dfd4NCjp.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ListItem-C2Qf4kSI.js";import"./Input-CijTBA3T.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./ChevronUp-2AABqykr.js";import"./ChevronDown-DRjCt-FM.js";import"./ChevronRight-Pp6aFK2W.js";import"./Section-Dn7ldTEr.js";import"./Flex-DvJJETpK.js";import"./Typography-DZMMTX6d.js";import"./AttachmentList-aR2dXpK5.js";import"./File-Cd_VJFMv.js";import"./SeenByLog-BbOyK-Ip.js";import"./SeenByLogItem-T2XncoBT.js";import"./Byline-DN2wvwMz.js";import"./SeenByLogButton-zfodPd24.js";import"./Divider-DaMuzylu.js";import"./List-Bol19yIV.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
