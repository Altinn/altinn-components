import{a7 as t}from"./iframe-DWR_BPge.js";import{B as a,u as n}from"./useBookmarks-DjtHQlBm.js";import{B as d}from"./BookmarkModal-j2u8UuIC.js";import{L as c}from"./Layout-DTTJ7Xp4.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D6mVZHWX.js";import"./BookmarkSettingsItem-LEQ7ilyA.js";import"./QueryLabel-BwIEHFu9.js";import"./Plus-F3v00gKT.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./SettingsItemBase-ucDTJ2CS.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./Typography-Ck9DnhQz.js";import"./MagnifyingGlass-G_PIqG58.js";import"./ContextMenu-DE4xWtGE.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./FieldBase-BMAVe4Iy.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./MenuElipsisHorizontal-DiWRRmpM.js";import"./Pencil-BslVK5Li.js";import"./Trash-D3VLDrQo.js";import"./SettingsModal-B9paxYpJ.js";import"./ModalBody-TFV96CG9.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";import"./TextField-CnsffK4d.js";import"./SkipLink-D0EPO6S4.js";import"./Banner-CCPjbEN-.js";import"./GlobalHeader-BYtDyOx9.js";import"./useIsDesktop-DdH_mZZT.js";import"./GlobalAccountButton-DUBOmq2b.js";import"./Enter-BY3t1N2F.js";import"./GlobalMenuButton-BTKROSAX.js";import"./MenuHamburger-LlREICSw.js";import"./AccountSelector-BBcM0hG1.js";import"./Switch-Cw7BxWBg.js";import"./AccountMenu-9n885YDY.js";import"./GlobalMenu-DyiBiW-8.js";import"./ArrowUndo-DNQ5VHUr.js";import"./Globe-C2nJg-Wj.js";import"./BreadcrumbsLink-DNn7cUlp.js";import"./ArrowRight-BDGEOzRy.js";import"./Footer-zRZEA-p5.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
