import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Button-L6T5IVdq.js";import{t as i}from"./SeenByLog-B-uDDjpD.js";import{t as a}from"./List-BNjZuxCc.js";import{t as o}from"./Transmission-DQj1gR_5.js";import{t as s}from"./ModalBase-BCoKaUL8.js";import{n as c,t as l}from"./ModalBody-CcVlYYQR.js";import{t as u}from"./skatt-Blgau9wG.js";var d=e(t(),1),f=n(),p={title:`Inbox/Dialog/SeenByLog`,component:i,tags:[`autodocs`,`beta`],parameters:{},args:{title:`Sett av deg+4`,endUserLabel:`Deg`,items:[{id:`5`,type:`person`,name:`Joachim Soltvedt`,seenAt:`2025-05-17 08:15`,seenAtLabel:`17. mai kl 08.15`},{id:`4`,type:`person`,name:`Freyr Alexandersson`,seenAt:`2025-04-15 12:25`,seenAtLabel:`16. april kl 12.25`},{id:`3`,type:`person`,name:`Aune Heggebø`,seenAt:`2025-04-15 11:22`,seenAtLabel:`15. april kl 11.22`},{id:`8`,type:`system`,name:`Regnskap AS`,seenAt:`2025-04-11 11:22`,seenAtLabel:`15. april kl 11.22`},{id:`2`,type:`person`,name:`Mathias Dyngeland`,isEndUser:!0,seenAt:`2025-02-03 08:45`,seenAtLabel:`6. januar kl 08.45`},{id:`1`,type:`person`,name:`Felix Horn Myhre`,seenAt:`2025-01-01 08:30`,seenAtLabel:`1. januar kl 08.30`}]}},m={},h={args:{collapsible:!0}},g={args:{title:void 0}},_=e=>{let[t,n]=(0,d.useState)(!0),a=()=>{n(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{onClick:()=>n(!0),children:`Open Modal`}),(0,f.jsxs)(s,{open:t,onClose:a,variant:`content`,children:[(0,f.jsx)(c,{title:`Hvem har sett dialogen?`,onClose:a}),(0,f.jsx)(l,{children:(0,f.jsx)(i,{items:e.items,size:`md`})})]})]})},v=e=>(0,f.jsx)(a,{children:(0,f.jsx)(o,{id:`1`,seenByLog:{...e,collapsible:!0},sender:u,title:`Forsendelsen er godkjent.`,type:{value:`acceptance`,label:`Godkjent`},attachments:{items:[{href:`#`,label:`Dokument 1.pdf`},{href:`#`,label:`Dokument 2.pdf`}]},children:(0,f.jsx)(`p`,{children:`Forsendelsen din er godkjent.`})})});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Collapsible`,`NoTitle`,`SeenByLogModal`,`TransmissionSeenBy`];export{h as Collapsible,m as Default,g as NoTitle,_ as SeenByLogModal,v as TransmissionSeenBy,y as __namedExportsOrder,p as default};