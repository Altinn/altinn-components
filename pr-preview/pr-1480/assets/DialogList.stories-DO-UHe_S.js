var h=Object.defineProperty;var s=(e,t)=>h(e,"name",{value:t,configurable:!0});import{a6 as n,c as u,a9 as v}from"./iframe-CqoHfDH7.js";import{i as b}from"./inboxSearchResults-Cr-kP0JS.js";import{i as r}from"./inboxSection-Cna01X-G.js";import{D as x}from"./DialogList-BoETCkiX.js";import{C as k}from"./ContextMenu-8eaHwukY.js";import{M}from"./Modal-uMCcWpy_.js";import{b as j,a as B}from"./ModalBody-CiSC6mzB.js";const D={title:"Inbox/DialogList",component:x,args:{...r}},i={args:{}},a={args:{title:"14 treff i innboks",description:n.jsxs("p",{children:["Begrens søket til"," ",n.jsx(u,{variant:"tinted",size:"mini",children:"Innboks"})," ",n.jsx(u,{variant:"tinted",size:"mini",children:"Arkiv"})," eller ",n.jsx(u,{variant:"tinted",size:"mini",children:"Papirkurv"})]}),items:b.items,groups:{}}},o={args:{description:n.jsx("p",{children:"Her finner du dialoger du har valgt å arkivere."}),items:r.items.filter(e=>e.archived).map(e=>({...e,groupId:"archived"}))}},c={args:{items:r.items.map(e=>({...e,as:"a",href:"#"}))}},m={args:{groups:void 0}},d={args:{items:r.items.slice(0,5).map((e,t)=>({...e,extendedStatusLabel:t%2===0?"Venter på svar":void 0}))}},p=s(()=>{const[e,t]=v.useState(!1),f=r.items.map(g=>{const S={id:g.id+"-contextmenu",onSelect:s(()=>t(!1),"onSelect"),items:[{id:"1",label:"Del",onClick:s(()=>t(!0),"onClick")}]};return{...g,controls:n.jsx(k,{...S})}});return n.jsxs(n.Fragment,{children:[n.jsx(x,{items:f}),n.jsxs(M,{padding:0,spacing:0,open:e,onClose:s(()=>t(!1),"onClose"),variant:"content",children:[n.jsx(j,{title:"Del",onClose:s(()=>t(!1),"onClose"),closeTitle:"Lukk"}),n.jsx(B,{children:n.jsx("p",{children:"Innhold i modal"})})]})]})},"WithContextMenu"),l={args:{items:r.items.slice(0,5).map(e=>({...e,loading:!0}))}},C=["GroupedByDate","SearchResults","Description","AsLink","Ungrouped","WithExtendedStatus","WithContextMenu","Loading"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '14 treff i innboks',
    description: <p>
        Begrens søket til{' '}
        <Button variant="tinted" size="mini">
          Innboks
        </Button>{' '}
        <Button variant="tinted" size="mini">
          Arkiv
        </Button>
        {' eller '}
        <Button variant="tinted" size="mini">
          Papirkurv
        </Button>
      </p>,
    items: inboxSearchResults.items,
    groups: {}
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    description: <p>Her finner du dialoger du har valgt å arkivere.</p>,
    items: inboxSection.items.filter(item => item.archived).map(item => ({
      ...item,
      groupId: 'archived'
    }))
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.map(item => ({
      ...item,
      as: 'a',
      href: '#'
    }))
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    groups: undefined
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined
    }))
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const items = inboxSection.items.map(item => {
    const contextMenu: ContextMenuProps = {
      id: item.id + '-contextmenu',
      onSelect: () => setOpen(false),
      items: [{
        id: '1',
        label: 'Del',
        onClick: () => setOpen(true)
      }]
    };
    return {
      ...item,
      controls: <ContextMenu {...contextMenu} />
    };
  });
  return <>
      <DialogList items={items} />
      <Modal padding={0} spacing={0} open={open} onClose={() => setOpen(false)} variant="content">
        <ModalHeader title="Del" onClose={() => setOpen(false)} closeTitle="Lukk" />
        <ModalBody>
          <p>Innhold i modal</p>
        </ModalBody>
      </Modal>
    </>;
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map(item => ({
      ...item,
      loading: true
    }))
  }
}`,...l.parameters?.docs?.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,AsLink:c,Description:o,GroupedByDate:i,Loading:l,SearchResults:a,Ungrouped:m,WithContextMenu:p,WithExtendedStatus:d,__namedExportsOrder:C,default:D},Symbol.toStringTag,{value:"Module"}));export{A as D,i as G};
