import{aa as d,a7 as e,c}from"./iframe-B2qSCuzl.js";import{s as u}from"./skatt-Eb53q4vT.js";import{S as p}from"./SeenByLog-DCZUUodm.js";import{M as g,b as y,a as b}from"./ModalBody-DivKqOfu.js";import{L as k}from"./List-CHDOpQxZ.js";import{T as f}from"./Transmission-BREEyPkx.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-GYYkN8GN.js";import"./AvatarGroup-BepXVr5f.js";import"./Avatar-BRPRyGzj.js";import"./SeenByLogItem-BW98GjnB.js";import"./Flex-DUbFTLOy.js";import"./Byline-uBpvUPL7.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./Section-vcV9OTBL.js";import"./Divider-HnqZMYFb.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ListItem-DsEnLTXV.js";import"./Input-BEYjfhLL.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";import"./Typography-CidHk-ga.js";import"./AttachmentList-DCzTXYrs.js";import"./AttachmentLink-0kI8cgLC.js";import"./File-Cg4G2T_1.js";const Q={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},s={},t={args:{collapsible:!0}},r={args:{title:void 0}},o=n=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(g,{open:m,onClose:l,variant:"content",children:[e.jsx(y,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(b,{children:e.jsx(p,{items:n.items,size:"md"})})]})]})},a=n=>e.jsx(k,{children:e.jsx(f,{id:"1",seenByLog:{...n,collapsible:!0},sender:u,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...a.parameters?.docs?.source}}};const V=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{t as Collapsible,s as Default,r as NoTitle,o as SeenByLogModal,a as TransmissionSeenBy,V as __namedExportsOrder,Q as default};
