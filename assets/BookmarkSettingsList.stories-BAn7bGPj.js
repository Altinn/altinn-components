import{p as t}from"./iframe-43_RSSTf.js";import{B as a,u as n}from"./useBookmarks-CMdsGZ8U.js";import{B as d}from"./BookmarkModal-CF3ak4nd.js";import{L as c}from"./Layout-BVNQbp0-.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CLHDsGsG.js";import"./BookmarkSettingsItem-2J9HQwf8.js";import"./QueryLabel-CTYDh99p.js";import"./Plus-BQyf1Gxm.js";import"./useId-BLkk23cI.js";import"./Heading-2vQl8tBj.js";import"./index-D9XEmR3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./SettingsItemBase-0pp7psHT.js";import"./ItemMedia-C7TJfaPW.js";import"./XMark-Baw5EL5c.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./ItemBase-ByoSv5t_.js";import"./ItemLink-NtTBDy97.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./tooltip-CaRi0lSN.js";import"./Typography-Ct8ipg3s.js";import"./MagnifyingGlass-Bf1420VU.js";import"./ContextMenu-e6118nKX.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./Button-B83AdZGF.js";import"./SearchField-QwXAT1yz.js";import"./FieldBase-DaCzydfk.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./MenuElipsisHorizontal-DSMY0Bj5.js";import"./Pencil-DCFwUbSj.js";import"./Trash-sc3FQnLB.js";import"./SettingsModal-pzz_m3jh.js";import"./ModalBody-RXLH-EOA.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";import"./TextField-C2NHcdr5.js";import"./SkipLink-5Bu7w2kZ.js";import"./Banner-CiIOW2zK.js";import"./GlobalHeader-CBGVi9UL.js";import"./useIsDesktop-CRlQyS-C.js";import"./GlobalAccountButton-l7w_Shmo.js";import"./Enter-DdOnloWp.js";import"./GlobalMenuButton-DBrFEzwi.js";import"./MenuHamburger-aTqKFAcp.js";import"./AccountSelector-CwVIiTFB.js";import"./Switch-YXKvHF1V.js";import"./AccountMenu-DCpMQtOk.js";import"./GlobalMenu-CwqY0ksZ.js";import"./ArrowUndo-B6CsLZ7N.js";import"./Globe-DE_rqwfk.js";import"./BreadcrumbsLink-9DU_cU_H.js";import"./ArrowRight-P2DRNMAa.js";import"./Footer-w3VzYZLG.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
