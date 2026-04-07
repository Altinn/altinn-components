import{j as t}from"./iframe-B1AqnzaQ.js";import{B as a,u as n}from"./useBookmarks-BXzidz5p.js";import{L as c}from"./Layout-EpCmyJ_1.js";import{B as d}from"./BookmarkModal-DLCR4Si3.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DsTgjl9e.js";import"./index-Ddi2Dmvi.js";import"./SettingsSection-GZbxYuVq.js";import"./Section-BiNpoqqK.js";import"./BookmarkSettingsItem-bpHXa5qX.js";import"./QueryLabel-Cv9IsP_R.js";import"./Plus-DnGMnLWk.js";import"./useId-D3sFZbtB.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./Skeleton-6Posg2tf.js";import"./SettingsItemBase-qMCsAtpC.js";import"./ListItem-DtW6UlaD.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./XMark-COJVLPGF.js";import"./Icon-68Gi_xA8.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Badge-DUhzLQsC.js";import"./ChevronUp-DDB3rTR_.js";import"./ChevronDown-yd2Fwy4k.js";import"./ChevronRight-BOPTtlba.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./ContextMenu-BbOAT8ce.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Dropdown-CFvQqfeA.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Bgx9uzOH.js";import"./SearchField-BEy1JMqM.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Checkmark-Ci7lq5dQ.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./List-BG7le78U.js";import"./Divider-BmD1gm9l.js";import"./Pencil-_Oq1v0M6.js";import"./Trash-DvhW7kU1.js";import"./SkipLink-Lf1L7eyi.js";import"./GlobalHeader-BX2LLAeW.js";import"./useIsDesktop-DKxFqwuA.js";import"./GlobalAccountButton-Ds0eL8Qh.js";import"./Enter-B5mipRj9.js";import"./GlobalMenuButton-IGS6-nbH.js";import"./MenuHamburger-lneezgpH.js";import"./AccountSelector-BJzxParc.js";import"./heading-B1eUioiz.js";import"./AccountMenu-Cm8YHXc8.js";import"./Switch-CES7Axv9.js";import"./GlobalMenu-CxK9ENA6.js";import"./ArrowUndo-Co9BHkhM.js";import"./Globe-Ba6M6rzW.js";import"./LocaleSwitcher-COrP_HJv.js";import"./DigdirLogomark-MLuz8EdC.js";import"./SearchbarField-Crisi6Aq.js";import"./AutocompleteItem-CCXjG5Ba.js";import"./DropdownBase-D9RV5RWU.js";import"./useClickOutside-CJx0BeZh.js";import"./GlobalMenuButton-CoiBpDm5.js";import"./PadlockLocked-CobcO1qj.js";import"./ButtonLabel-CKRky11D.js";import"./ButtonIcon-B4FLSCwL.js";import"./BreadcrumbsLink-ejFt06Ra.js";import"./ArrowRight-BdZ-SkoS.js";import"./Footer-B_aa7vc_.js";import"./SettingsModal-4_6AHUU_.js";import"./ModalBase-D8Fgbk92.js";import"./ModalBody-CFyARQ-s.js";import"./ButtonGroup-Kwyl4wzf.js";import"./TextField-B-n87mcL.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
