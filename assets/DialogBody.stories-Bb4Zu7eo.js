import{j as e}from"./iframe-DolAyTrH.js";import{D as m}from"./DialogBody-BC2f5KcC.js";import{D as o}from"./DialogAttachments-DRTwbNqo.js";import{D as d}from"./DialogActions-Ck8OeA6_.js";const c={title:"Inbox/Dialog/DialogBody",component:m,tags:["beta"],args:{sender:{type:"company",name:"Skatteetaten",imageUrl:"https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96"},recipientLabel:"til",recipient:{type:"person",name:"Recipient name"},children:e.jsx("p",{children:"Dialog summary."}),seenByLog:{collapsible:!0,title:"Sett av deg+3",items:[{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"}]}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(o,{title:"1 attachment",items:[{href:"#",label:"Document.pdf"}]}),e.jsx(d,{items:[{id:"1",priority:"primary",label:"Primary"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}},r={args:{loading:!0},tags:["skip-test"]},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sander Svendsen"})," er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder."]}),e.jsx("h6",{children:"Ansvarlig lege"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Nærmeste leder"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(o,{title:"2 attachments",items:[{href:"#",label:"Document 1.pdf"},{href:"#",label:"Document 2.pdf"}]})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(o,{title:"4 attachments",items:[{href:"#",label:"Short document.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker"}},{href:"#",label:"A long document title that it will wrap mulitple lines.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker",color:"neutral"}},{href:"#",metadata:"PDF, 1.5 MB",label:"Another document with a ridicoulous title that should wrap multiple lines.pdf"},{disabled:!0,href:"#",metadata:"PDF, 1.5 MB",label:"Disabled document.pdf",badge:{variant:"tinted",label:"Utløpt",color:"neutral"}}]})]})}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(d,{items:[{id:"1",priority:"primary",label:"Primary CTA"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  tags: ['skip-test']
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <h6>Header 6</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Header 6</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const p=["Default","Loading","Summary","ExtendedContent","WithAttachments","WithAttachmentsMetadata","WithActions"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ExtendedContent:n,Loading:r,Summary:t,WithActions:l,WithAttachments:s,WithAttachmentsMetadata:i,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{a as D,n as E,r as L,l as W,b as a,s as b};
