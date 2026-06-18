import{a7 as e,c as l,aa as S}from"./iframe-DK-3qaH3.js";import{M as h}from"./Modal-BMwuvlhH.js";import{i as v}from"./inboxSearchResults-BZYsupgJ.js";import{i as r}from"./inboxSection-BRP1GHPe.js";import{D as g}from"./DialogList-AlpuoggO.js";import{C as b}from"./ContextMenu-DSn14Iqq.js";import{b as k,a as M}from"./ModalBody-DZQNHHny.js";const j={title:"Inbox/DialogList",component:g,tags:["beta"],args:{...r}},n={args:{}},a={args:{title:"14 treff i innboks",description:e.jsxs("p",{children:["Begrens søket til"," ",e.jsx(l,{variant:"tinted",size:"mini",children:"Innboks"})," ",e.jsx(l,{variant:"tinted",size:"mini",children:"Arkiv"})," eller ",e.jsx(l,{variant:"tinted",size:"mini",children:"Papirkurv"})]}),items:v.items,groups:{}}},i={args:{description:e.jsx("p",{children:"Her finner du dialoger du har valgt å arkivere."}),items:r.items.filter(t=>t.archived).map(t=>({...t,groupId:"archived"}))}},o={args:{items:r.items.map(t=>({...t,as:"a",href:"#"}))}},c={args:{groups:void 0}},m={args:{items:r.items.slice(0,5).map((t,s)=>({...t,extendedStatusLabel:s%2===0?"Venter på svar":void 0}))}},d=()=>{const[t,s]=S.useState(!1),x=r.items.map(u=>{const f={id:u.id+"-contextmenu",onSelect:()=>s(!1),items:[{id:"1",label:"Del",onClick:()=>s(!0)}]};return{...u,controls:e.jsx(b,{...f})}});return e.jsxs(e.Fragment,{children:[e.jsx(g,{items:x}),e.jsxs(h,{padding:0,spacing:0,open:t,onClose:()=>s(!1),variant:"content",children:[e.jsx(k,{title:"Del",onClose:()=>s(!1),closeTitle:"Lukk"}),e.jsx(M,{children:e.jsx("p",{children:"Innhold i modal"})})]})]})},p={args:{items:r.items.slice(0,5).map(t=>({...t,loading:!0}))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: <p>Her finner du dialoger du har valgt å arkivere.</p>,
    items: inboxSection.items.filter(item => item.archived).map(item => ({
      ...item,
      groupId: 'archived'
    }))
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.map(item => ({
      ...item,
      as: 'a',
      href: '#'
    }))
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    groups: undefined
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined
    }))
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map(item => ({
      ...item,
      loading: true
    }))
  }
}`,...p.parameters?.docs?.source}}};const B=["GroupedByDate","SearchResults","Description","AsLink","Ungrouped","WithExtendedStatus","WithContextMenu","Loading"],_=Object.freeze(Object.defineProperty({__proto__:null,AsLink:o,Description:i,GroupedByDate:n,Loading:p,SearchResults:a,Ungrouped:c,WithContextMenu:d,WithExtendedStatus:m,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as D,n as G};
