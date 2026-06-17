import{a7 as t}from"./iframe-C7E9hFuS.js";import{B as a,u as n}from"./useBookmarks-26N1-4jb.js";import{B as d}from"./BookmarkModal-Bc-MuT11.js";import{L as c}from"./Layout-QZ03RjEt.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D_e4EtIh.js";import"./BookmarkSettingsItem-DGxXVc4C.js";import"./QueryLabel-Aobr193k.js";import"./Plus-oNsn4BMp.js";import"./Heading-BjzdT1Qv.js";import"./useHighlightedText-BVZd64N7.js";import"./SettingsItemBase-CPoBfSiQ.js";import"./ItemMedia-CHApnQjH.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./ChevronUp-COfk5MU7.js";import"./ChevronDown-S6psbACT.js";import"./ChevronRight-BkycUKsy.js";import"./ItemBase-DTwNvInU.js";import"./ItemLink-CVrGLXSa.js";import"./ItemControls-BSxWin7C.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./Typography-BHaJGqRT.js";import"./MagnifyingGlass-K55ud6sH.js";import"./ContextMenu-C0QCVczp.js";import"./useDropdownMenuController-DFRzn_Ll.js";import"./Dropdown-CODOojNF.js";import"./SearchField-B7eNYfaD.js";import"./FieldBase-C9YC6jMS.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuListDivider-cJmmi06P.js";import"./MenuListHeading-anY2tX0X.js";import"./MenuItem-CJIUM84a.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./InformationSquare-CD5xLXKd.js";import"./MenuElipsisHorizontal-B5xkva7P.js";import"./Pencil-CBjVXzpj.js";import"./Trash-DXVTUHc5.js";import"./SettingsModal-j4C-0Lav.js";import"./ModalBody-DhpjA3GN.js";import"./Section-0LkdBczO.js";import"./Flex-DW6TlYd6.js";import"./ButtonGroup-CAvVorAa.js";import"./ButtonIcon-tBnnQk-x.js";import"./ButtonLabel-BhxdBqOX.js";import"./TextField-DjMHb-qS.js";import"./SkipLink-9pzYjtrE.js";import"./Banner-CcfMajdr.js";import"./GlobalHeader-BuKswla7.js";import"./useIsDesktop-BDcFo9PR.js";import"./GlobalAccountButton-BiAnCgIT.js";import"./Enter-sEU0XBf0.js";import"./GlobalMenuButton-CBNrdNQt.js";import"./MenuHamburger-abx8EBUu.js";import"./AccountSelector-LTlsWdJD.js";import"./Switch-DgHdWaYE.js";import"./AccountMenu-B5v9nrPH.js";import"./GlobalMenu-D42m9FNT.js";import"./ArrowUndo-DzBP3Rj-.js";import"./Globe-DOmdNZca.js";import"./BreadcrumbsLink-SjSjctN6.js";import"./ArrowRight-DuVCIaDO.js";import"./Footer-ChHv5HPB.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
