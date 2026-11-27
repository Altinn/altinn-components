import{t}from"./transmissions-BbwSf5yk.js";import{T as a}from"./TransmissionList-C4RDHNyW.js";import"./iframe-DS_59AwM.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CuKhIDCh.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ListItem-BLKKpBT1.js";import"./Input-3GNdcrOi.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ChevronUp-DZ6JxO9u.js";import"./ChevronDown-CX1A4zpd.js";import"./ChevronRight-C7PJPgHr.js";import"./Section-C50awZDU.js";import"./Flex-kHR-J2An.js";import"./Typography-DXt4lEYU.js";import"./AttachmentList-B_wcH2or.js";import"./File-dcjuYSSr.js";import"./HiddenItems-BguHvWDi.js";import"./SeenByLog-C83gd2Ae.js";import"./SeenByLogItem-Dzk4-DsC.js";import"./Byline-Bh_ck5J2.js";import"./SeenByLogButton-SU5rer4T.js";import"./Divider-BmGfcyT4.js";import"./List-ZKKcKTbY.js";const A={title:"Inbox/TransmissionList",component:a,parameters:{},args:{items:t}},r={args:{}},i={args:{items:t.filter(o=>o?.type?.value==="submission")}},e={args:{items:t.filter(o=>o?.type?.value!=="submission")}},s={args:{items:[...t.slice(0,1),{id:"hidden",byline:"4. oktober 2026 kl. 08.17",hiddenLabel:"Forsendelse du ikke har tilgang til å se."}]}},j=["Default","Outgoing","Incoming","WithHiddenTransmission"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...(transmissions.slice(0, 1) as TransmissionListProps['items']), {
      id: 'hidden',
      byline: '4. oktober 2026 kl. 08.17',
      hiddenLabel: 'Forsendelse du ikke har tilgang til å se.'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"A transmission the user isn't allowed to see. It keeps its date, but shows only `hiddenLabel` and can't be expanded.",...s.parameters?.docs?.description}}};export{r as Default,e as Incoming,i as Outgoing,s as WithHiddenTransmission,j as __namedExportsOrder,A as default};
