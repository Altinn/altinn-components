import{t as o}from"./transmissions-B75o3xEB.js";import{T as m}from"./TransmissionList-xneU0gNH.js";import"./iframe-CqoHfDH7.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CZD2ydU3.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ListItem-BJLoZMZK.js";import"./Input-Dq2UXB3O.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ChevronUp-BraeWy4W.js";import"./ChevronDown-CPg5ddv-.js";import"./ChevronRight-jzUrV1wz.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./Typography-rh9OwAWr.js";import"./AttachmentList-B9pWc7U3.js";import"./File-BV07hQ9P.js";import"./SeenByLog-CEaLdgBA.js";import"./SeenByLogItem-BwC7DOOD.js";import"./Byline-DuB4QGtP.js";import"./SeenByLogButton-Ckeiu4Gf.js";import"./Divider-B8eivR7l.js";import"./List-Dy-3Hrrg.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
