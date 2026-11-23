import{t as o}from"./transmissions-DnWrLxAO.js";import{T as m}from"./TransmissionList-CorE2j3A.js";import"./iframe-HroKCH1i.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-D2lsWori.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ListItem-CUjfvC8Z.js";import"./Input-KntdUcqG.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ChevronUp-CmHElL6S.js";import"./ChevronDown-DmtpYDji.js";import"./ChevronRight-CnU_-vpz.js";import"./Section-C0qOnBgx.js";import"./Flex-CL3BtjUZ.js";import"./Typography-mUXdli5h.js";import"./AttachmentList-HjoyNTsI.js";import"./File-FWnNtxFp.js";import"./SeenByLog-8SAfRI2V.js";import"./SeenByLogItem-Sxuyi5qN.js";import"./Byline-DwpDZTWm.js";import"./SeenByLogButton-CnG9oYwB.js";import"./Divider-C14K5hFz.js";import"./List-D5BQ3DHy.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
