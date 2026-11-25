var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-Df5nkPs8.js";import{B as a,u as d}from"./useBookmarks-C8uut4EF.js";import{B as l}from"./BookmarkModal-SoFf1aUw.js";import{L as u}from"./Layout-CTPgBLff.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-gk-Zv7NC.js";import"./BookmarkSettingsItem-BWqVFHWd.js";import"./QueryLabel-CgkP5LJd.js";import"./Plus-BaDdjZ6L.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./SettingsItemBase-uT7-LXU1.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ChevronUp-Bz4Vcv4a.js";import"./ChevronDown-DdFcAhZa.js";import"./ChevronRight-DJP358BJ.js";import"./ItemBase-DPSoNf_4.js";import"./ItemLink-0qGvw1wz.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./Typography-W78b6WhV.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./ContextMenu-IodN0B0m.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./SearchField-C0Yxe_69.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemLabel-DuyLbrJx.js";import"./FieldBase-C4nTzDS1.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./InformationSquare-CXwkU926.js";import"./Pencil-DY9hAmbZ.js";import"./Trash-_1KE3-4v.js";import"./SettingsModal-TGLT5mRb.js";import"./ModalBody-ESjZKsjK.js";import"./Section-CNSG608H.js";import"./Flex-CYtO0dFj.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonIcon-yAUUau4A.js";import"./ButtonLabel-DPkO8s9u.js";import"./TextField-DGYwlIlO.js";import"./SkipLink-BctJCkx5.js";import"./CookieBanner-DBfwuf8y.js";import"./Link-CjVBNz8b.js";import"./Banner-BHR8TN-K.js";import"./GlobalHeader-TYmVKmYX.js";import"./useIsDesktop-CZKmsf4c.js";import"./GlobalAccountButton-CP5a2BWr.js";import"./Enter-n45wvjgT.js";import"./GlobalMenuButton-Dpi4a_VH.js";import"./MenuHamburger-BHNimgxZ.js";import"./AccountSelector--eNdOJ7G.js";import"./Switch-BKc4sxE1.js";import"./AccountMenu-BF2GwXJ0.js";import"./GlobalMenu-BQTKpuvH.js";import"./Checkmark-DZ-Lmkux.js";import"./ArrowUndo-BBF4w0in.js";import"./Globe-CJX2uVTf.js";import"./BreadcrumbsLink-C2L4Ui-h.js";import"./ArrowRight-DrBNAp4X.js";import"./Footer-BOc2nD-C.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
