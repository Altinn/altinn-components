import{a7 as t}from"./iframe-BRsjK6zm.js";import{B as a,u as n}from"./useBookmarks-LPNUmYdo.js";import{B as d}from"./BookmarkModal-DoZRtR9L.js";import{L as c}from"./Layout-CPG6ZAlW.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D2OP8CpX.js";import"./BookmarkSettingsItem-CpyyXkig.js";import"./QueryLabel-HjdY1XKB.js";import"./Plus-DpGZy_zu.js";import"./Heading-tpemMnuB.js";import"./useHighlightedText-P3be0gWv.js";import"./SettingsItemBase-2meAm_XM.js";import"./ItemMedia-BuhaiW7f.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./ChevronUp-B4spzIlB.js";import"./ChevronDown-kQjoglkI.js";import"./ChevronRight-GPnb-Lf1.js";import"./ItemBase-6wELWcHH.js";import"./ItemLink-CfHLQLAQ.js";import"./ItemControls-DOwQd-aH.js";import"./Badge-BbcJeGFK.js";import"./Tooltip-Bg2GzV5c.js";import"./Typography-BVRUlHaM.js";import"./MagnifyingGlass-Cybsybf0.js";import"./ContextMenu-CMMvswJT.js";import"./useDropdownMenuController-CBf3Z2H_.js";import"./Dropdown-C5aQ46PU.js";import"./SearchField-DVi64UUy.js";import"./FieldBase-C-kV1fOX.js";import"./Field-COSptDWF.js";import"./Label-DkpDVbDp.js";import"./Input-_uBO5XEg.js";import"./MenuListItem-BiWM2UBU.js";import"./MenuListDivider-zBNVAq_M.js";import"./MenuListHeading-DoVWXZX2.js";import"./MenuItem-CcGRfHNR.js";import"./Checkmark-BGtGEGuc.js";import"./ItemLabel-DL87Mmkd.js";import"./InformationSquare-CJ79Iw8R.js";import"./MenuElipsisHorizontal-DwejWzSi.js";import"./Pencil-BQ48Slda.js";import"./Trash-B8s36VDT.js";import"./SettingsModal-BhAlGfSs.js";import"./ModalBody-Cx-bJ05q.js";import"./Section-DAR_XxTX.js";import"./Flex-CYDzZKtj.js";import"./ButtonGroup-DZmKTqxp.js";import"./ButtonIcon-CO4iGeIF.js";import"./ButtonLabel-w8kuoY5Z.js";import"./TextField-C6J0EMA9.js";import"./SkipLink-BecwOMmn.js";import"./CookieBanner-BjjsRJIH.js";import"./Banner-oosowav6.js";import"./GlobalHeader-DI7sD759.js";import"./useIsDesktop-3lbmZgtL.js";import"./GlobalAccountButton-csRo9bkD.js";import"./Enter-BOV8ge-G.js";import"./GlobalMenuButton-DSpvP_gz.js";import"./MenuHamburger-CE13cPrY.js";import"./AccountSelector-CaAKvhfi.js";import"./Switch-FM0gdVbC.js";import"./AccountMenu-C2lPWDZG.js";import"./GlobalMenu-Dsw6uNxT.js";import"./ArrowUndo-X6vse5zm.js";import"./Globe-BqtL28OT.js";import"./BreadcrumbsLink-DW0IvuA7.js";import"./ArrowRight-DPf3fQp2.js";import"./Footer-Dk21LuRk.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
