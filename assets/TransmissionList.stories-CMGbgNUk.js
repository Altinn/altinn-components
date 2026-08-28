import{t as o}from"./transmissions-uRiiSe9I.js";import{T as m}from"./TransmissionList-ykp9HW3s.js";import"./iframe-Drliw4W2.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BniPoGB1.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./ListItem-Df4h6uIX.js";import"./Input-BD6Nzkxf.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Heading-CnkMiV4w.js";import"./useHighlightedText-Cu370CX4.js";import"./ChevronUp-W1N7Dm2d.js";import"./ChevronDown-CG1jtrk-.js";import"./ChevronRight-_-mAy6yU.js";import"./Section-zMN4ePg0.js";import"./Flex-Bge8S33P.js";import"./Typography-DpltYWx0.js";import"./AttachmentList-KgWnkVhm.js";import"./AttachmentLink-DGWPwyy6.js";import"./File-Hl4JhrQ9.js";import"./SeenByLog-PqHpWz0G.js";import"./SeenByLogItem-CvB-ttFm.js";import"./Byline-rCAiTbRr.js";import"./SeenByLogButton-Cu3cZ8Ze.js";import"./Divider-h1zWDTZp.js";import"./List-_2Jr2q9P.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Outgoing","Incoming"];export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
