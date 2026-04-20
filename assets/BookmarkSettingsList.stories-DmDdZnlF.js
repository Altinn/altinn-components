import{j as t}from"./iframe-yBEatwQ0.js";import{B as a,u as n}from"./useBookmarks-B20QVPHy.js";import{L as c}from"./Layout-CDCf7tWH.js";import{B as d}from"./BookmarkModal-kwW38dQm.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Co0GST2J.js";import"./index-B7J_eA84.js";import"./SettingsSection-CPMsqYtc.js";import"./Section-CLhotqus.js";import"./BookmarkSettingsItem-BePxe9tx.js";import"./QueryLabel-DQ7-405k.js";import"./Plus-CN2BINNw.js";import"./useId-DyCIbqyR.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./SettingsItemBase-CtHYjpOw.js";import"./ChevronRight-DNoffWLc.js";import"./ItemLink-BJ7ieZn8.js";import"./ItemMedia-po0tYTET.js";import"./XMark-DRdfunCf.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./ItemControls-CsC9idfH.js";import"./Badge-Bt5kdhhY.js";import"./MagnifyingGlass-SlzD67D9.js";import"./ContextMenu-5DItNalo.js";import"./useDropdownMenuController-DyufIMTt.js";import"./Dropdown-Dt86DnuG.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Tooltip-ncAjVCVs.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-SYKnk3zn.js";import"./SearchField-Dq16b7ar.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./Checkmark-BOqpEP7R.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./List-FR3qe7-6.js";import"./ListItem-CFEmGYjw.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./Divider-ClYOp7SL.js";import"./Pencil-CeUMbMUM.js";import"./Trash-1ExTWg_2.js";import"./SkipLink-CmWj8Y2R.js";import"./GlobalHeader-DO-ecvI5.js";import"./useIsDesktop-DNc8DhfV.js";import"./GlobalAccountButton-CmvgP5cm.js";import"./Enter-B7qZag5n.js";import"./GlobalMenuButton-DWHl878u.js";import"./MenuHamburger-LWrM74HE.js";import"./AccountSelector-Caxd4S6i.js";import"./heading-BuqOln6O.js";import"./AccountMenu-DMAXPz_2.js";import"./Switch-BDdNKTmo.js";import"./GlobalMenu-CtmdywF4.js";import"./ArrowUndo-osocl8i7.js";import"./Globe-CnEsP9Fx.js";import"./LocaleSwitcher-C9xEzpSq.js";import"./DigdirLogomark-BLU4pLhV.js";import"./SearchbarField-FDl630BK.js";import"./AutocompleteItem-BNY-TR_e.js";import"./DropdownBase-DP_WplSx.js";import"./useClickOutside-De0OSl6s.js";import"./GlobalMenuButton-zUenl8-k.js";import"./PadlockLocked-Dj7qNhL4.js";import"./ButtonLabel-DWbU693S.js";import"./ButtonIcon-kXMu6eE8.js";import"./BreadcrumbsLink-Grsph2mx.js";import"./ArrowRight-B4alZvEI.js";import"./Footer-DZdRv-3a.js";import"./SettingsModal-BtsjTNax.js";import"./ModalBase-C-XV4k6W.js";import"./ModalBody-0bKYBPzE.js";import"./ButtonGroup-Cw-wKcaM.js";import"./TextField-N-ReZJz2.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
