import{aa as d,a7 as e,c}from"./iframe-DzC97elN.js";import{s as u}from"./skatt-Eb53q4vT.js";import{S as p}from"./SeenByLog-72Ryjfl6.js";import{M as g,b as y,a as b}from"./ModalBody-CsfaIftq.js";import{L as k}from"./List-ReLHH8Pg.js";import{T as f}from"./Transmission-CTMtkYfN.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-By9jg5Ka.js";import"./AvatarGroup-CKA1h7_5.js";import"./Avatar-B0Bwnqej.js";import"./SeenByLogItem-CX-VKXa6.js";import"./Flex-CXtmXiNa.js";import"./Byline-BOlCNzmJ.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./Section-B7XqZvfR.js";import"./Divider-DUDd6Ifg.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./ListItem-Cp-qX0cT.js";import"./Input-DIyKL79r.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./Typography-CtPp6NJn.js";import"./AttachmentList-DtHEHcWS.js";import"./AttachmentLink-n7oXjs9n.js";import"./File-hNgqcgD7.js";const Q={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},s={},t={args:{collapsible:!0}},r={args:{title:void 0}},o=n=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(g,{open:m,onClose:l,variant:"content",children:[e.jsx(y,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(b,{children:e.jsx(p,{items:n.items,size:"md"})})]})]})},a=n=>e.jsx(k,{children:e.jsx(f,{id:"1",seenByLog:{...n,collapsible:!0},sender:u,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
