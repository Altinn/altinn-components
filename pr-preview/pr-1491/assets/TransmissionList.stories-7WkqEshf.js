import{t as o}from"./transmissions-CsFRK40T.js";import{T as m}from"./TransmissionList-YBmNSUyO.js";import"./iframe-BYGPhf7N.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-TM8cTtSh.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ListItem-Bby1Lp_7.js";import"./Input-C9cQp4bZ.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ChevronUp-C71MAo1t.js";import"./ChevronDown-DPBIQHio.js";import"./ChevronRight-BckCGbec.js";import"./Section-BRaGuhHv.js";import"./Flex-DJhBIPT8.js";import"./Typography-BHNcIxxH.js";import"./AttachmentList-CBwVGJLl.js";import"./File-DXM3Yu7z.js";import"./SeenByLog-Bm4CD1Rj.js";import"./SeenByLogItem-BtuC-qAm.js";import"./Byline-BRLzGNKv.js";import"./SeenByLogButton-BGhRlu2n.js";import"./Divider-B0gFAPK4.js";import"./List-BwgjUCyd.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
