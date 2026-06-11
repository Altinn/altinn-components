import{aa as d,a7 as e,c}from"./iframe-DH0sUlof.js";import{s as u}from"./skatt-Eb53q4vT.js";import{S as p}from"./SeenByLog-b_1ZK6Kd.js";import{M as g,b as y,a as b}from"./ModalBody-Bsp1GUDI.js";import{L as k}from"./List-Cm-mvG7i.js";import{T as f}from"./Transmission-DCQ3zBPm.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-CtN-F9hb.js";import"./AvatarGroup-CNi2rl48.js";import"./Avatar-FXELAR9V.js";import"./SeenByLogItem-B4lThwDI.js";import"./Flex-D6bQl7-N.js";import"./Byline-DXHjbIjw.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./Section-DMcOoGW4.js";import"./Divider-vXDeR0m7.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ListItem-B0cRuGOu.js";import"./Input-CNoKo11u.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";import"./Typography-PtbhQdVx.js";import"./AttachmentList-DNuDDRmt.js";import"./AttachmentLink-B2Vg0nQN.js";import"./File-cqMoKmQT.js";const Q={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},s={},t={args:{collapsible:!0}},r={args:{title:void 0}},o=n=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(g,{open:m,onClose:l,variant:"content",children:[e.jsx(y,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(b,{children:e.jsx(p,{items:n.items,size:"md"})})]})]})},a=n=>e.jsx(k,{children:e.jsx(f,{id:"1",seenByLog:{...n,collapsible:!0},sender:u,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
