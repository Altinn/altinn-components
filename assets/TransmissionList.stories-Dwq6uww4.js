import{t as o}from"./transmissions-BtrY6Dlc.js";import{T as m}from"./TransmissionList-Bt_ahhg1.js";import"./iframe-BbAJh2l_.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DN70DtEv.js";import"./Badge-Bayw0f9c.js";import"./index-D4eFSvt3.js";import"./ListItem-1XPivOtK.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./XMark-CBD09dy-.js";import"./useId-DlaeWOGU.js";import"./Icon-BPIDnrjf.js";import"./Skeleton-DCAPmpFX.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ChevronUp-BK_whBfS.js";import"./ChevronDown-B5pHKuJa.js";import"./ChevronRight-C-emBdlp.js";import"./Section-DKBhzXh6.js";import"./Flex-c7I9zH32.js";import"./Typography-Dc6esLAJ.js";import"./AttachmentList-C_BXjDVb.js";import"./AttachmentLink-cD6Qpht5.js";import"./SeenByLog-9r0xM1ha.js";import"./SeenByLogButton-BIat9IfM.js";import"./SeenByLogItem-BSbqdyS5.js";import"./Byline-C1SJ4NmZ.js";import"./Divider-DNbY4sde.js";import"./List-BLhrP6Wq.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
