var c=Object.defineProperty;var t=(s,l)=>c(s,"name",{value:l,configurable:!0});import{aa as u,a7 as e,c as g}from"./iframe-BhbNl8M-.js";import{s as y}from"./skatt-Eb53q4vT.js";import{S as d}from"./SeenByLog-jHaMO83N.js";import{M as b,b as k,a as f}from"./ModalBody-MK76vZzv.js";import{L as B}from"./List-CK1afVUo.js";import{T as L}from"./Transmission-BGQuJZz1.js";import"./preload-helper-Cc2_yIPf.js";import"./SeenByLogItem-C7e2jWPn.js";import"./Flex-ywhhAUvJ.js";import"./Byline-Dz5EAti2.js";import"./AvatarGroup-B4pMcHMh.js";import"./Avatar-BNyDKZi7.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Section-w9Om4z74.js";import"./SeenByLogButton-BqPCRn1z.js";import"./Divider-DT7uBvpy.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ListItem-BZwC__IQ.js";import"./Input-jGspNcB3.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./Typography-DcyIPmTi.js";import"./AttachmentList-D0ts3BtR.js";import"./AttachmentLink-C9qZJGLd.js";import"./File-CtbY2wj6.js";const X={title:"Inbox/Dialog/SeenByLog",component:d,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},r={},o={args:{collapsible:!0}},a={args:{title:void 0}},n=t(s=>{const[l,p]=u.useState(!0),m=t(()=>{p(!1)},"onClose");return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:t(()=>p(!0),"onClick"),children:"Open Modal"}),e.jsxs(b,{open:l,onClose:m,variant:"content",children:[e.jsx(k,{title:"Hvem har sett dialogen?",onClose:m}),e.jsx(f,{children:e.jsx(d,{items:s.items,size:"md"})})]})]})},"SeenByLogModal"),i=t(s=>e.jsx(B,{children:e.jsx(L,{id:"1",seenByLog:{...s,collapsible:!0},sender:y,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})}),"TransmissionSeenBy");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...i.parameters?.docs?.source}}};const Y=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{o as Collapsible,r as Default,a as NoTitle,n as SeenByLogModal,i as TransmissionSeenBy,Y as __namedExportsOrder,X as default};
