import{j as t}from"./iframe-Dip44woq.js";import{B as a,u as n}from"./useBookmarks-BBqQ8S-A.js";import{L as c}from"./Layout-CKqm4ieD.js";import{B as d}from"./BookmarkModal-Bco5ApI_.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DHvZRHuw.js";import"./index-B24kaf2B.js";import"./SettingsSection-CqNovwvQ.js";import"./Section-DCVufQoJ.js";import"./BookmarkSettingsItem-Di6xl7Ux.js";import"./QueryLabel-DWMewu_E.js";import"./Plus-C3AvEGJ3.js";import"./useId-CMLjH0Fx.js";import"./Heading-BGLknJpX.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./SettingsItemBase-DHRJnpHs.js";import"./ChevronRight-DRGzZC3s.js";import"./ItemLink-bytzRO3r.js";import"./ItemMedia-5XSAaYKs.js";import"./XMark-CynTM0oO.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./ItemControls-CIGgXmTN.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./ContextMenu-DjyLYrv8.js";import"./useDropdownMenuController-NZ0hfOf3.js";import"./Dropdown-CRmvDx32.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./MenuElipsisHorizontal-BqnYRL06.js";import"./SearchField-B2BM1-WP.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./Checkmark-DnUC-Av1.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./List-oCmeNZU4.js";import"./ListItem-BNxxo84x.js";import"./ChevronUp-DojBOeEB.js";import"./ChevronDown-DtUCUzdZ.js";import"./Divider-ds1jujj6.js";import"./Pencil-BoP13ir1.js";import"./Trash-DY5xEA5p.js";import"./SkipLink-CwaCffme.js";import"./GlobalHeader-C60dwVDm.js";import"./useIsDesktop-HyFNYbFn.js";import"./GlobalAccountButton-BL9D6NQJ.js";import"./Enter-DlNfZ4mj.js";import"./GlobalMenuButton-2ptrDH0k.js";import"./MenuHamburger-C9PbWBPt.js";import"./AccountSelector-DLWjSVBQ.js";import"./heading-CZOpUMaj.js";import"./AccountMenu-BiUerS57.js";import"./Switch-CqTFD8P8.js";import"./GlobalMenu-Be7yGBi3.js";import"./ArrowUndo-Bg7IEuKV.js";import"./Globe-DTH2zuL3.js";import"./LocaleSwitcher-Cva4kqQD.js";import"./DigdirLogomark-Rv9s0pnb.js";import"./SearchbarField-CQ_oXs66.js";import"./AutocompleteItem-DqL8HUjl.js";import"./DropdownBase-xu4PDQuO.js";import"./useClickOutside-CNOakT_u.js";import"./GlobalMenuButton-CnuPQLVy.js";import"./PadlockLocked-BM6Gz5EO.js";import"./ButtonLabel-CTEP1jnZ.js";import"./ButtonIcon-CsjjU3Og.js";import"./BreadcrumbsLink-DdabHYel.js";import"./ArrowRight-CfbuML6m.js";import"./Footer-CluTAxsI.js";import"./SettingsModal-ClZXCBdG.js";import"./ModalBase-DLErh85x.js";import"./ModalBody-CSIMme3q.js";import"./ButtonGroup-BAe3FIfN.js";import"./TextField-PVRs0zYl.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
