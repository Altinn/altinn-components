import{t as o}from"./transmissions-BpNa3nT_.js";import{T as m}from"./TransmissionList-Cod_WNfi.js";import"./iframe-DV7mfmQb.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-FUlhA3mO.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./ListItem-h1JSOOHz.js";import"./Input-C3PsoH0G.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./Heading-qQ_NecB3.js";import"./useHighlightedText-DBlSdXli.js";import"./ChevronUp-DkTvQyLF.js";import"./ChevronDown-M6oDtO0s.js";import"./ChevronRight-y8OcgkDI.js";import"./Section-BXLF8mP1.js";import"./Flex-DFf5qQ3F.js";import"./Typography-DQaNXpVK.js";import"./AttachmentList-BBP-xojA.js";import"./File-Bfc1A-iw.js";import"./SeenByLog-Cs4s-9eI.js";import"./SeenByLogItem-B4M0hKfq.js";import"./Byline-OaIm3aGM.js";import"./SeenByLogButton-CrTg5a5q.js";import"./Divider-DNlHMi_J.js";import"./List-Chcy__Pc.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
