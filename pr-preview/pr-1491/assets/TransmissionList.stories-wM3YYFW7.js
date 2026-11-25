import{t as o}from"./transmissions-DKBtvi4m.js";import{T as m}from"./TransmissionList-dO0Vz7Wn.js";import"./iframe-CjTVLX0J.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-C0m6eFUE.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ListItem-BsQLulwX.js";import"./Input-B0rqselK.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";import"./ChevronRight-B7WfXeCo.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./Typography-D5LJyQSI.js";import"./AttachmentList-DvnLd7eu.js";import"./File-Cx1fYx9W.js";import"./SeenByLog-qFw0rLqt.js";import"./SeenByLogItem-BBnEv75B.js";import"./Byline-DCQwseqO.js";import"./SeenByLogButton-D2UFcDZ9.js";import"./Divider-BNWONtts.js";import"./List-D_f5-yc3.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
