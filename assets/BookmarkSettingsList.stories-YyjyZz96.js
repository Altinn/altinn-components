import{p as t}from"./iframe-WHERbRNQ.js";import{B as a,u as n}from"./useBookmarks-B-5Kl3Qt.js";import{B as d}from"./BookmarkModal-BuYS7Eos.js";import{L as c}from"./Layout-DN-sZwjL.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DdbFwnvU.js";import"./BookmarkSettingsItem-C6hdaIAJ.js";import"./QueryLabel-ExsbCysj.js";import"./Plus-CNY0bkRi.js";import"./useId-BfbJ7PbP.js";import"./Heading-POmwd9W2.js";import"./index-CPQpJFkN.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./SettingsItemBase-DLWRfTF4.js";import"./ItemMedia-CZ4j0uoG.js";import"./XMark-5kXogJ_J.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./ChevronUp-BIOdACnc.js";import"./ChevronDown-DWIhSCAm.js";import"./ChevronRight-HD9xUhWG.js";import"./ItemBase-BC1KuoSI.js";import"./ItemLink-Bc2_vK4_.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./tooltip-C7TGaz5I.js";import"./Typography-CVWBmure.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./ContextMenu-B3-GsygK.js";import"./useDropdownMenuController-BgP7AVfL.js";import"./Dropdown-BvAU1fs3.js";import"./Button-DkTjWAj1.js";import"./SearchField-CjOGKjR9.js";import"./FieldBase-9wEEVFHi.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./MenuElipsisHorizontal-B223Pxx-.js";import"./Pencil-5xmWOylh.js";import"./Trash-C1kE2B-c.js";import"./SettingsModal-Cgo4pod6.js";import"./ModalBody-7W0CxkDb.js";import"./Section-D-Yeh31t.js";import"./Flex-DJNl6q2s.js";import"./ButtonGroup-BZN8TM8O.js";import"./ButtonIcon-Dpjnx9Q5.js";import"./ButtonLabel-DaknUBOb.js";import"./TextField-XgPuuW3K.js";import"./SkipLink-nOg1JKAu.js";import"./Banner-BnA6bzdN.js";import"./GlobalHeader-m87i1LWh.js";import"./useIsDesktop-CJvITts6.js";import"./GlobalAccountButton-Dh83g-S0.js";import"./Enter-D5TP3xo0.js";import"./GlobalMenuButton-O-KjprMS.js";import"./MenuHamburger-bKOv5Y63.js";import"./AccountSelector-BT2GELq7.js";import"./Switch-DwucQso5.js";import"./AccountMenu-CjEOexO1.js";import"./GlobalMenu-BpeW2zl7.js";import"./ArrowUndo-C_T3lMra.js";import"./Globe-BkGe9tXO.js";import"./BreadcrumbsLink-Bg4aUjlH.js";import"./ArrowRight-CiB0w85r.js";import"./Footer-IvVvXz_P.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Oo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Oo as __namedExportsOrder,_o as default};
