import{t as o}from"./transmissions-CEGWpMWK.js";import{T as m}from"./TransmissionList-BXHpRz3n.js";import"./iframe-CbC-fLaY.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BRESdqP8.js";import"./Badge-BwpPXd0u.js";import"./index-Ds9VDGIC.js";import"./Tooltip-BulSRtpn.js";import"./tooltip-BtbQ4KG6.js";import"./ListItem-CnbC7rOU.js";import"./Button-B0m1rUs2.js";import"./Input-BNbo7Vjn.js";import"./XMark-DvUzU3_h.js";import"./useId-C2JQsT24.js";import"./Icon-DW3Nd0-m.js";import"./Skeleton-D8kEQByH.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";import"./Section-DypEBfCX.js";import"./Flex-DahTG4Th.js";import"./Typography-BWnrNFau.js";import"./AttachmentList-DcGuQJBR.js";import"./AttachmentLink-Cumd2BtD.js";import"./SeenByLog-Dvcp3mk1.js";import"./SeenByLogButton-CHp1qxx5.js";import"./SeenByLogItem-DGUGfIj8.js";import"./Byline-BrWvWbOl.js";import"./Divider-BLGF5SlA.js";import"./List-DoiqK_JD.js";const H={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const J=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,J as __namedExportsOrder,H as default};
