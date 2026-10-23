var h=Object.defineProperty;var r=(e,s)=>h(e,"name",{value:s,configurable:!0});import{a7 as t,c as u,aa as v}from"./iframe-Ck42qOx1.js";import{M as b}from"./Modal-BbtGn49k.js";import{i as k}from"./inboxSearchResults-_kdki4Xw.js";import{i as n}from"./inboxSection-wwfs9AIG.js";import{D as x}from"./DialogList-BSTvlob2.js";import{C as M}from"./ContextMenu-B0efyfFm.js";import{b as j,a as B}from"./ModalBody-0O6NY7SM.js";const D={title:"Inbox/DialogList",component:x,tags:["beta"],args:{...n}},a={args:{}},i={args:{title:"14 treff i innboks",description:t.jsxs("p",{children:["Begrens søket til"," ",t.jsx(u,{variant:"tinted",size:"mini",children:"Innboks"})," ",t.jsx(u,{variant:"tinted",size:"mini",children:"Arkiv"})," eller ",t.jsx(u,{variant:"tinted",size:"mini",children:"Papirkurv"})]}),items:k.items,groups:{}}},o={args:{description:t.jsx("p",{children:"Her finner du dialoger du har valgt å arkivere."}),items:n.items.filter(e=>e.archived).map(e=>({...e,groupId:"archived"}))}},c={args:{items:n.items.map(e=>({...e,as:"a",href:"#"}))}},m={args:{groups:void 0}},d={args:{items:n.items.slice(0,5).map((e,s)=>({...e,extendedStatusLabel:s%2===0?"Venter på svar":void 0}))}},p=r(()=>{const[e,s]=v.useState(!1),f=n.items.map(g=>{const S={id:g.id+"-contextmenu",onSelect:r(()=>s(!1),"onSelect"),items:[{id:"1",label:"Del",onClick:r(()=>s(!0),"onClick")}]};return{...g,controls:t.jsx(M,{...S})}});return t.jsxs(t.Fragment,{children:[t.jsx(x,{items:f}),t.jsxs(b,{padding:0,spacing:0,open:e,onClose:r(()=>s(!1),"onClose"),variant:"content",children:[t.jsx(j,{title:"Del",onClose:r(()=>s(!1),"onClose"),closeTitle:"Lukk"}),t.jsx(B,{children:t.jsx("p",{children:"Innhold i modal"})})]})]})},"WithContextMenu"),l={args:{items:n.items.slice(0,5).map(e=>({...e,loading:!0}))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const C=["GroupedByDate","SearchResults","Description","AsLink","Ungrouped","WithExtendedStatus","WithContextMenu","Loading"],A=Object.freeze(Object.defineProperty({__proto__:null,AsLink:c,Description:o,GroupedByDate:a,Loading:l,SearchResults:i,Ungrouped:m,WithContextMenu:p,WithExtendedStatus:d,__namedExportsOrder:C,default:D},Symbol.toStringTag,{value:"Module"}));export{A as D,a as G};
