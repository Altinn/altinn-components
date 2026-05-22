import{r as d,j as e}from"./iframe-DXwGEFZf.js";import{S as p}from"./SeenByLog-J0soz1dI.js";import{B as c}from"./Button-BcOfKjgE.js";import{M as u,a as g,b as y}from"./ModalBody-v2jc6j_q.js";import{L as b}from"./List-BgXw8LTl.js";import{T as f}from"./Transmission-BgK7kmpB.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-kAEXIWqd.js";import"./AvatarGroup-vB7eodsE.js";import"./index-DpQTH4Pc.js";import"./Avatar-OxvpOCq4.js";import"./useId-Df52yuGg.js";import"./Skeleton-CD7VUCi3.js";import"./SeenByLogItem-BU3eGMef.js";import"./Flex-U6liI5ZR.js";import"./Byline-DdT-FOev.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./tooltip-OQNLf2nv.js";import"./Section-BSKZ_Frt.js";import"./Divider-C7X97dOt.js";import"./XMark-BspkucHC.js";import"./Icon-DEVqj2eM.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ListItem-C3blsWJZ.js";import"./Input-CjRvyA41.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";import"./Typography-CegVoZkA.js";import"./AttachmentList-DtGXh9Zx.js";import"./AttachmentLink-GOSA-QOX.js";const $={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},s={args:{collapsible:!0}},r={args:{title:void 0}},o=a=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:l,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(y,{children:e.jsx(p,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Hvem har sett dialogen?" onClose={onClose} />
        <ModalBody>
          <SeenByLog items={args.items} size="md" />
        </ModalBody>
      </ModalBase>
    </>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
  return <List>
      <Transmission id="1" seenByLog={{
      ...args,
      collapsible: true
    }} sender={skatt} title="Forsendelsen er godkjent." type={{
      value: 'acceptance',
      label: 'Godkjent'
    }} attachments={{
      items: [{
        href: '#',
        label: 'Dokument 1.pdf'
      }, {
        href: '#',
        label: 'Dokument 2.pdf'
      }]
    }}>
        <p>Forsendelsen din er godkjent.</p>
      </Transmission>
    </List>;
}`,...n.parameters?.docs?.source}}};const ee=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{s as Collapsible,t as Default,r as NoTitle,o as SeenByLogModal,n as TransmissionSeenBy,ee as __namedExportsOrder,$ as default};
