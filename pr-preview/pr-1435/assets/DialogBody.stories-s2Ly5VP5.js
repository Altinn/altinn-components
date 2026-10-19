var D=Object.defineProperty;var a=(r,t)=>D(r,"name",{value:t,configurable:!0});import{a7 as e,aa as j}from"./iframe-C_3qWz8U.js";import{d as p}from"./dialogBody-DIY7DVsL.js";import{S as x}from"./SeenByLog-CX09IyWC.js";import{M as k,b as B,a as S}from"./ModalBody-BKf16YWY.js";import{D as y}from"./DialogBody-WBhIkvCJ.js";import{D as g}from"./DialogAttachments-Cq0gT-kN.js";import{D as u}from"./DialogActions-BuQpkAU3.js";const A=a(({title:r,items:t,endUserLabel:b,open:f,onClose:h})=>e.jsxs(k,{open:f,onClose:h,variant:"content",children:[e.jsx(B,{title:r,onClose:h}),e.jsx(S,{children:e.jsx(x,{items:t,size:"md",endUserLabel:b})})]}),"DialogSeenByLog"),L={title:"Inbox/Dialog/DialogBody",component:y,tags:["beta"],args:{sender:{type:"company",name:"Skatteetaten",imageUrl:"https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96"},recipientLabel:"til",recipient:{type:"person",name:"Recipient name"},children:e.jsx("p",{children:"Dialog summary."}),seenByLog:{collapsible:!0,title:"Sett av deg+3",items:[{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"}]}}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(g,{title:"1 attachment",items:[{href:"#",label:"Document.pdf"}]}),e.jsx(u,{items:[{id:"1",priority:"primary",label:"Primary"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}},i={args:{loading:!0},tags:["skip-test"]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sander Svendsen"})," er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder."]}),e.jsx("h6",{children:"Ansvarlig lege"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Nærmeste leder"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(g,{title:"2 attachments",items:[{href:"#",label:"Document 1.pdf"},{href:"#",label:"Document 2.pdf"}]})]})}},d={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(g,{title:"4 attachments",items:[{href:"#",label:"Short document.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker"}},{href:"#",label:"A long document title that it will wrap mulitple lines.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker",color:"neutral"}},{href:"#",metadata:"PDF, 1.5 MB",label:"Another document with a ridicoulous title that should wrap multiple lines.pdf"},{disabled:!0,href:"#",metadata:"PDF, 1.5 MB",label:"Disabled document.pdf",badge:{variant:"tinted",label:"Utløpt",color:"neutral"}}]})]})}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(u,{items:[{id:"1",priority:"primary",label:"Primary CTA"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}},c=a(()=>{const[r,t]=j.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(y,{...p,seenByLog:{title:p.seenByLog?.title,items:p.seenByLog?.items??[],onClick:a(()=>t(!0),"onClick")},activityLog:{label:"Aktivitetslogg",onClick:a(()=>console.log("Aktivitetslogg clicked"),"onClick")},accessInfo:{label:"Om fullmakt og tjeneste",onClick:a(()=>console.log("Om fullmakt og tjeneste clicked"),"onClick")},children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(u,{items:[{id:"1",priority:"primary",label:"Primary"},{id:"2",priority:"secondary",label:"Secondary"}]})]}),e.jsx(A,{title:"Hvem har sett dialogen?",items:p.seenByLog?.items??[],open:r,onClose:a(()=>t(!1),"onClose")})]})},"WithInfoRow");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="1 attachment" items={[{
        href: '#',
        label: 'Document.pdf'
      }]} />
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  tags: ['skip-test']
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>
          <strong>Sander Svendsen</strong> er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder.
        </p>
        <h6>Ansvarlig lege</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Nærmeste leder</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <h6>Header 6</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Header 6</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="2 attachments" items={[{
        href: '#',
        label: 'Document 1.pdf'
      }, {
        href: '#',
        label: 'Document 2.pdf'
      }]} />
      </>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="4 attachments" items={[{
        href: '#',
        label: 'Short document.pdf',
        metadata: 'PDF, 2.3 MB',
        badge: {
          variant: 'outline',
          label: 'Utløper om 2 uker'
        }
      }, {
        href: '#',
        label: 'A long document title that it will wrap mulitple lines.pdf',
        metadata: 'PDF, 2.3 MB',
        badge: {
          variant: 'outline',
          label: 'Utløper om 2 uker',
          color: 'neutral'
        }
      }, {
        href: '#',
        metadata: 'PDF, 1.5 MB',
        label: 'Another document with a ridicoulous title that should wrap multiple lines.pdf'
      }, {
        disabled: true,
        href: '#',
        metadata: 'PDF, 1.5 MB',
        label: 'Disabled document.pdf',
        badge: {
          variant: 'tinted',
          label: 'Utløpt',
          color: 'neutral'
        }
      }]} />
      </>
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary CTA'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </>
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [seenByLogOpen, setSeenByLogOpen] = useState(false);
  return <>
      <DialogBody {...dialogBody} seenByLog={{
      title: dialogBody.seenByLog?.title,
      items: dialogBody.seenByLog?.items ?? [],
      onClick: () => setSeenByLogOpen(true)
    }} activityLog={{
      label: 'Aktivitetslogg',
      onClick: () => console.log('Aktivitetslogg clicked')
    }} accessInfo={{
      label: 'Om fullmakt og tjeneste',
      onClick: () => console.log('Om fullmakt og tjeneste clicked')
    }}>
        <p>Dialog summary.</p>
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </DialogBody>
      <DialogSeenByLog title="Hvem har sett dialogen?" items={dialogBody.seenByLog?.items ?? []} open={seenByLogOpen} onClose={() => setSeenByLogOpen(false)} />
    </>;
}`,...c.parameters?.docs?.source}}};const M=["Default","Loading","Summary","ExtendedContent","WithAttachments","WithAttachmentsMetadata","WithActions","WithInfoRow"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ExtendedContent:o,Loading:i,Summary:n,WithActions:m,WithAttachments:l,WithAttachmentsMetadata:d,WithInfoRow:c,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{s as D,o as E,i as L,m as W,W as a,l as b};
