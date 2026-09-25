import{a7 as t}from"./iframe-CsUY_6Pm.js";import{B as a,u as n}from"./useBookmarks-DS_TRkng.js";import{B as d}from"./BookmarkModal-BZz262A4.js";import{L as c}from"./Layout-2r98IG_H.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C86uaFsI.js";import"./BookmarkSettingsItem-DjKWQLnp.js";import"./QueryLabel-BgpnKryv.js";import"./Plus-BIbNWuxu.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./SettingsItemBase-CwbNbw14.js";import"./ItemMedia-B6mVrqKC.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./ChevronUp-Bv6xfL3F.js";import"./ChevronDown-B43wHz9B.js";import"./ChevronRight-JfwdXccy.js";import"./ItemBase-BpJAdC-Z.js";import"./ItemLink-CKOy_adf.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./Typography-DW6BWOsI.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./ContextMenu-bLhI4Wts.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./SearchField-R79aEMhJ.js";import"./FieldBase-Bxx9Lpmm.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemLabel-CCNLeNoZ.js";import"./InformationSquare-DR0XxH_N.js";import"./MenuElipsisHorizontal-CtugNeIq.js";import"./Pencil-B-1qLJgF.js";import"./Trash-DlYZzTYR.js";import"./SettingsModal-DEcYPgJ9.js";import"./ModalBody-CQkVoQZl.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./ButtonGroup-BnfYb0Ol.js";import"./ButtonIcon-BS7n_J2G.js";import"./ButtonLabel-DqKrA-HR.js";import"./TextField-BZE1wr5O.js";import"./SkipLink-DYlBXY28.js";import"./CookieBanner-CliFXN59.js";import"./Banner-LimNMmBw.js";import"./GlobalHeader-DwrM5d74.js";import"./useIsDesktop-Cc_8xX4Z.js";import"./GlobalAccountButton-B44Wu4bJ.js";import"./Enter-BUt0WH5P.js";import"./GlobalMenuButton-2oXs0ofK.js";import"./MenuHamburger-DJzN0Krn.js";import"./AccountSelector-BaizeLuy.js";import"./Switch-CpugYT5v.js";import"./AccountMenu-BdzfA9pM.js";import"./GlobalMenu-Cn3tY8Le.js";import"./Checkmark-CVdJCRST.js";import"./ArrowUndo-BxC8gcYi.js";import"./Globe-C1HPlGb6.js";import"./BreadcrumbsLink-DLe1bh7n.js";import"./ArrowRight-DFumfY7H.js";import"./Footer-jH1217mv.js";const Fo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Go=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Go as __namedExportsOrder,Fo as default};
