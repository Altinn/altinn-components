import{t as o}from"./transmissions-EnuMRZ5H.js";import{T as m}from"./TransmissionList-BUMWIcZJ.js";import"./iframe-pmb13xcr.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C4nzYuYj.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ListItem-DeYVBNax.js";import"./Input-CJNvWYoB.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./ChevronUp-DD3z1ZBF.js";import"./ChevronDown-7NsihGJj.js";import"./ChevronRight-BcL3woie.js";import"./Section-0UMzqVbn.js";import"./Flex-Bo48iBpz.js";import"./Typography-BgUhg-DC.js";import"./AttachmentList-CnGzbpok.js";import"./AttachmentLink-Cm54wvjm.js";import"./File-BPEQ7dJC.js";import"./SeenByLog-BceB2Mep.js";import"./SeenByLogButton-DAktTQAU.js";import"./SeenByLogItem-C0xxPpJb.js";import"./Byline-BOyDTWco.js";import"./Divider-LyAC-Ayz.js";import"./List-7Zz6NyrJ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
