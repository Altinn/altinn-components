import{r as d,j as e}from"./iframe-BNDruhPA.js";import{S as l}from"./SeenByLog-Dxb8kQS8.js";import{B as c}from"./Button-CaDKAluY.js";import{M as u}from"./ModalBase-Csr9qX6t.js";import{M as g,a as y}from"./ModalBody-BfZsUu8q.js";import{L as b}from"./List-Ckq5YGm7.js";import{T as f}from"./Transmission-CJAlMfxw.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-CGIt7E_8.js";import"./AvatarGroup-CBYJn5rG.js";import"./index-JM42q3xD.js";import"./Avatar-Bc7K3VQ6.js";import"./useId-28rL4Hsl.js";import"./Skeleton-3vFplc_z.js";import"./SeenByLogItem-DGNHoAr9.js";import"./Flex-DdLGZodm.js";import"./Byline-DEqke9rA.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Section-CcOIv3Qj.js";import"./Divider-2s9iAeFh.js";import"./button-Bu4lXR2T.js";import"./XMark-vbUnhqfT.js";import"./Icon-Ch0vKaKK.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./ListItem-CLrzKGmW.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./ChevronUp-dNDMwZOi.js";import"./ChevronDown-1m-leHy9.js";import"./ChevronRight-Bcu8s-U3.js";import"./Typography-0VzQ_bGw.js";import"./AttachmentList-d35k8Evf.js";import"./AttachmentLink-BinyybPb.js";const se={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{r as Collapsible,t as Default,o as NoTitle,s as SeenByLogModal,n as TransmissionSeenBy,ne as __namedExportsOrder,se as default};
