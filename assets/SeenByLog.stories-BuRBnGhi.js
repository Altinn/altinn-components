import{r as d,j as e}from"./iframe-CU9tIbvZ.js";import{S as l}from"./SeenByLog-MUlQ8cIJ.js";import{B as c}from"./Button-DwluG-LJ.js";import{M as u,a as g,b as y}from"./ModalBody-c-JjnOdb.js";import{L as b}from"./List-CmEHIyyJ.js";import{T as f}from"./Transmission-gF9JIvAw.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-BL8dUMzD.js";import"./AvatarGroup-D82OEK4D.js";import"./index-Bd_n44R2.js";import"./Avatar-CPYUWVLR.js";import"./useId-BEikXtHv.js";import"./Skeleton-WB8_C3gk.js";import"./SeenByLogItem-BH2b0Zhp.js";import"./Flex-Aa4xg00u.js";import"./Byline-Bqw1wwsS.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Section-BozmV6Om.js";import"./Divider-DZU-0-lX.js";import"./button-DfPuT9nv.js";import"./XMark-DTYd927G.js";import"./Icon-BBvHNxu7.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./ListItem-CfMUAyha.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";import"./Typography-w6SEqUo0.js";import"./AttachmentList-DjD8rs5I.js";import"./AttachmentLink-BNDer6L-.js";const oe={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...n.parameters?.docs?.source}}};const se=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{r as Collapsible,t as Default,o as NoTitle,s as SeenByLogModal,n as TransmissionSeenBy,se as __namedExportsOrder,oe as default};
