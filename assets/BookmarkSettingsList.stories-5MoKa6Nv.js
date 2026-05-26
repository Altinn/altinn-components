import{p as t}from"./iframe-a6n42jIx.js";import{B as a,u as n}from"./useBookmarks-Cyu6ozTU.js";import{B as d}from"./BookmarkModal-bTqB-833.js";import{L as c}from"./Layout-BRGvJwwG.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BnSKl7OB.js";import"./BookmarkSettingsItem-BDnDMVKy.js";import"./QueryLabel-CSxDB6uf.js";import"./Plus-DWNwY5kK.js";import"./useId-JsUrCC3L.js";import"./Heading-Dza3pExo.js";import"./index-D2z1-3lt.js";import"./useHighlightedText-Bq-Ej33u.js";import"./Skeleton-BMznOa58.js";import"./SettingsItemBase-B7NLkNBM.js";import"./ItemMedia-9TYJyMgm.js";import"./XMark-ENWUN_kz.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./ItemLink-BU8f8KGB.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./Typography-K_BS0H0I.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./ContextMenu-D_LAygeA.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./Button-DYhT04-k.js";import"./SearchField-Cpk_dpFX.js";import"./FieldBase-BOMRGuHX.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./Checkmark-NdO0COsu.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./MenuElipsisHorizontal-B575Bwb2.js";import"./Pencil-CAqbJXAc.js";import"./Trash-BiwQCIF6.js";import"./SettingsModal-CcO2d848.js";import"./ModalBody-BJnVO0Kt.js";import"./Section-SbJC69tZ.js";import"./Flex-BTGTFkLF.js";import"./ButtonGroup-r8c9eAn-.js";import"./ButtonIcon-BSWg8HV7.js";import"./ButtonLabel-00C_O_zy.js";import"./TextField-BZ7hsKcf.js";import"./SkipLink-D-DRY7Zf.js";import"./Banner-BszWFQr2.js";import"./GlobalHeader-DUds1LOj.js";import"./useIsDesktop-Dz8Xfx0T.js";import"./GlobalAccountButton-Blp41UeO.js";import"./Enter-DL78dUQh.js";import"./GlobalMenuButton-D7X6GhxI.js";import"./MenuHamburger-CET8gFNo.js";import"./AccountSelector-Bjg775ES.js";import"./Switch-SU31XbhY.js";import"./AccountMenu-1G5b85NP.js";import"./GlobalMenu-DXCefBzj.js";import"./ArrowUndo-BXKQsB65.js";import"./Globe-DFgIDL35.js";import"./BreadcrumbsLink-DlIyvrPR.js";import"./ArrowRight-xh97N2k0.js";import"./Footer-RvPt9ieO.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
