import{j as t}from"./iframe-DUgQHy5z.js";import{B as a,u as n}from"./useBookmarks-BtBuqf3n.js";import{L as c}from"./Layout-BZqbsijE.js";import{B as d}from"./BookmarkModal-B78j5YUR.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CL-SSZvT.js";import"./index-CHKdKrFD.js";import"./SettingsSection-C11iBrng.js";import"./Section-BJevJr8H.js";import"./BookmarkSettingsItem-B5ohy-6t.js";import"./QueryLabel-CsEx37Me.js";import"./Plus-DMuAFtu8.js";import"./useId-BEmmm-9F.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./SettingsItemBase-wZ9q0lCm.js";import"./ChevronRight-DcPr7c69.js";import"./ItemLink-CrE95sD-.js";import"./ItemMedia-CtpZg4yw.js";import"./XMark-CIC6hSAY.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./ItemControls-eEEzDso3.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./ContextMenu-OokjuZ1o.js";import"./useDropdownMenuController-DoVSojsp.js";import"./Dropdown-VwXyzPyy.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./MenuElipsisHorizontal-CPhuLJJA.js";import"./SearchField-DrvAfAqD.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./Checkmark-CEKDqcfc.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./List-EmWT1t1G.js";import"./ListItem-BxV254vh.js";import"./ChevronUp-DELRJlHt.js";import"./ChevronDown-BTaF_AA-.js";import"./Divider-D8pG1bsQ.js";import"./Pencil-BAkLhBJy.js";import"./Trash-palqR5xc.js";import"./SkipLink-CL8IM75n.js";import"./GlobalHeader-AhP8Fdlc.js";import"./useIsDesktop-DrWtlE9w.js";import"./GlobalAccountButton-CFVCgB7k.js";import"./Enter-B9HoLh_R.js";import"./GlobalMenuButton-Bj6xqra8.js";import"./MenuHamburger-BFRrh2Ww.js";import"./AccountSelector-PedD5jOO.js";import"./heading-BK46rBC9.js";import"./AccountMenu-8gwTG4_u.js";import"./Switch-B4GoFuUp.js";import"./GlobalMenu-B7zYaWxz.js";import"./ArrowUndo-Dawpb3je.js";import"./Globe-lsKPohrg.js";import"./LocaleSwitcher-CYVwjmO7.js";import"./DigdirLogomark-l4757U5o.js";import"./SearchbarField-BqKLD53f.js";import"./AutocompleteItem-Cw4u_fUl.js";import"./DropdownBase-B1LZuzwC.js";import"./useClickOutside-nQxD6K1b.js";import"./GlobalMenuButton-DpenfYJr.js";import"./PadlockLocked-OauvSILz.js";import"./ButtonLabel-3HSCNrVA.js";import"./ButtonIcon-CVfXAbGb.js";import"./BreadcrumbsLink-CLbFZOqN.js";import"./ArrowRight-DqPQUdvA.js";import"./Footer-eJAGQdQL.js";import"./SettingsModal-s9mgmAX2.js";import"./ModalBase-BV94wsIh.js";import"./ModalBody-D3QXhoSO.js";import"./ButtonGroup-Co0foBbC.js";import"./TextField-Zqz37qEC.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
