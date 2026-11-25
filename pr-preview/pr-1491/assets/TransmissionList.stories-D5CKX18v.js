import{t as o}from"./transmissions-DxY-d0bO.js";import{T as m}from"./TransmissionList-B6rzrIXB.js";import"./iframe-C0_zUbkp.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CGFFb_38.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ListItem-xt8GYkjd.js";import"./Input-CmIpmweJ.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./ChevronUp-Co9i1NxZ.js";import"./ChevronDown-C32tY52G.js";import"./ChevronRight-C6nH0agV.js";import"./Section-De3iQrxY.js";import"./Flex-CfJLZ-_w.js";import"./Typography-CXAuaEKv.js";import"./AttachmentList-DIB_tNmT.js";import"./File-C8QtxbpY.js";import"./SeenByLog-CxA1LQ9k.js";import"./SeenByLogItem-DjLKqT78.js";import"./Byline-Wy5O6x8B.js";import"./SeenByLogButton-DVWClROb.js";import"./Divider-DlYLbIrB.js";import"./List-C1WZiao5.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
