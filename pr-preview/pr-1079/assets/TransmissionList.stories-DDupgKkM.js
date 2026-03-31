import{t as o}from"./transmissions-DSrSNYMa.js";import{T as m}from"./TransmissionList-BGMcUACO.js";import"./iframe-CFpZEpOT.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BcEZJNBR.js";import"./Badge-CiO-ESqG.js";import"./index-CMCH-iYZ.js";import"./ListItem-qVW9-kPs.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./XMark-DsxdrTa7.js";import"./useId-Bpa1--zZ.js";import"./Icon-CcpuJg5J.js";import"./Skeleton-BxeTCVQ2.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./ChevronUp-B6qove2P.js";import"./ChevronDown-COoSRgYT.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Section-0tWdfaTG.js";import"./Flex-LzaqVov5.js";import"./Typography-CFFVnqbI.js";import"./AttachmentList-DIKFTVSj.js";import"./AttachmentLink-DF8D1dtM.js";import"./SeenByLog-DKFU4ifW.js";import"./SeenByLogButton-CW-IioyK.js";import"./SeenByLogItem-VTXEmFXo.js";import"./Byline-BdIMXO9i.js";import"./Divider-B_IjgFoE.js";import"./List-p1cS4I4-.js";const K={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
