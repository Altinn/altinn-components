import{a7 as t}from"./iframe-Byxtd80g.js";import{B as a,u as n}from"./useBookmarks-Uqg3EuO3.js";import{B as d}from"./BookmarkModal-CZUsMr5_.js";import{L as c}from"./Layout-CiO1zpji.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-ClfrC7iO.js";import"./BookmarkSettingsItem-BSWlouJn.js";import"./QueryLabel-DnOFkVTS.js";import"./Plus-Baef_WWy.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./SettingsItemBase-2DYeJ-V9.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./ChevronUp-DVYZxjEC.js";import"./ChevronDown-Bl8PHeKm.js";import"./ChevronRight-Cr__dFRw.js";import"./ItemBase-qkA6J1-6.js";import"./ItemLink-C9iiSAim.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./Typography-B9U7pBH4.js";import"./MagnifyingGlass-DByXWuC9.js";import"./ContextMenu-Dlglwr41.js";import"./useDropdownMenuController-Ci6S68lA.js";import"./Dropdown-BDuW_1gv.js";import"./SearchField-BrxR5w_Y.js";import"./FieldBase-BpV90x03.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./MenuItem-BIjlfqyX.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./InformationSquare-CfrYT55Z.js";import"./MenuElipsisHorizontal-DpIat2lo.js";import"./Pencil-CQNmJx2T.js";import"./Trash-LkpJF2Ft.js";import"./SettingsModal-WDsBlCXN.js";import"./ModalBody-Cv8Rj8gS.js";import"./Section-BiXimCdL.js";import"./Flex-DvsQk1i3.js";import"./ButtonGroup-DCrOTCLv.js";import"./ButtonIcon-CXrG2Sb4.js";import"./ButtonLabel-7acsPO9C.js";import"./TextField-WU3s1dS7.js";import"./SkipLink-BUWYdX92.js";import"./Banner-Ddc-tGxp.js";import"./GlobalHeader-DWsMWGtk.js";import"./useIsDesktop-CYSB9jRz.js";import"./GlobalAccountButton-CNkq2zuz.js";import"./Enter-DFJxMCsB.js";import"./GlobalMenuButton-BdMc7Jix.js";import"./MenuHamburger-Djtct37j.js";import"./AccountSelector-CBY95elg.js";import"./Switch-DoXdTS8C.js";import"./AccountMenu-BjXJgVD2.js";import"./GlobalMenu-C4_99jMK.js";import"./ArrowUndo-gwde95g9.js";import"./Globe-Bz6a-Y3A.js";import"./BreadcrumbsLink-BmWUVzBP.js";import"./ArrowRight-CAGT-3Md.js";import"./Footer-BqZStntt.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
