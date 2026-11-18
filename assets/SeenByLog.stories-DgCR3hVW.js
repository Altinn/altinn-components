var c=Object.defineProperty;var n=(s,l)=>c(s,"name",{value:l,configurable:!0});import{a9 as u,a6 as e,c as g}from"./iframe-Cf4UALw8.js";import{s as y}from"./skatt-Eb53q4vT.js";import{S as d}from"./SeenByLog-BwRKuZXW.js";import{M as b,b as k,a as f}from"./ModalBody-D4pYrcnM.js";import{L as B}from"./List-C8bvHqyv.js";import{T as L}from"./Transmission-BmtSXzAF.js";import"./preload-helper-Cc2_yIPf.js";import"./SeenByLogItem-r8KMLusj.js";import"./Flex-CiSMsFR7.js";import"./Byline-CQqrvp19.js";import"./AvatarGroup-C1FgnCDS.js";import"./Avatar-DPyI2gzd.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./Section-B-7b4QAp.js";import"./SeenByLogButton-CqYd7EB7.js";import"./Divider-BlUpxxSf.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ListItem-BdmDs4G2.js";import"./Input-OKh8JSaI.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./Typography-CsGx0b_o.js";import"./AttachmentList-B2gdev-5.js";import"./File-BaLosNIu.js";const W={title:"Inbox/Dialog/SeenByLog",component:d,tags:["autodocs"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},a=n(s=>{const[l,p]=u.useState(!0),m=n(()=>{p(!1)},"onClose");return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:n(()=>p(!0),"onClick"),children:"Open Modal"}),e.jsxs(b,{open:l,onClose:m,variant:"content",children:[e.jsx(k,{title:"Hvem har sett dialogen?",onClose:m}),e.jsx(f,{children:e.jsx(d,{items:s.items,size:"md"})})]})]})},"SeenByLogModal"),i=n(s=>e.jsx(B,{children:e.jsx(L,{id:"1",seenByLog:{...s,collapsible:!0},sender:y,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})}),"TransmissionSeenBy"),X=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...i.parameters?.docs?.source}}};export{r as Collapsible,t as Default,o as NoTitle,a as SeenByLogModal,i as TransmissionSeenBy,X as __namedExportsOrder,W as default};
