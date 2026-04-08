import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,t as n}from"./useBookmarks-gW1R2TrA.js";import{t as r}from"./BookmarkModal-AfOEB1sy.js";import{t as i}from"./Layout-oRerHG_B.js";var a=e(),o={component:t,title:`Bookmarks/BookmarkSettingsList`,tags:[`beta`],parameters:{layout:`fullscreen`},decorators:[(e,{args:t})=>(0,a.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`.5em`},children:(0,a.jsx)(i,{children:(0,a.jsx)(e,{...t})})})],args:{}},s=()=>{let{expandedId:e,onClose:i,items:o}=n({grouped:!1}),s=e&&o.find(t=>t.id===e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{items:o}),e&&(0,a.jsx)(r,{...s,title:`Rediger søk`,open:e!==``,onClose:i,buttons:[{label:`Lagre`,onClick:()=>i()},{label:`Slett`,variant:`outline`,onClick:()=>i()}]})]})},c=()=>{let{expandedId:e,onClose:i,items:o}=n({grouped:!0}),s=e&&o.find(t=>t.id===e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{items:o,groups:{1:{title:`Med tittel`},2:{title:`Uten tittel`}}}),e&&(0,a.jsx)(r,{...s,title:`Rediger søk`,open:e!==``,onClose:i,buttons:[{label:`Lagre`,onClick:()=>i()},{label:`Slett`,variant:`outline`,onClick:()=>i()}]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...c.parameters?.docs?.source}}};var l=[`BookmarksList`,`GroupedBookmarksList`];export{s as BookmarksList,c as GroupedBookmarksList,l as __namedExportsOrder,o as default};