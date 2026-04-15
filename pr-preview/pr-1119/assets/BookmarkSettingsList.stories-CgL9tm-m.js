import{j as t}from"./iframe-BWWyepKi.js";import{B as a,u as n}from"./useBookmarks-DdGQkxIx.js";import{L as c}from"./Layout-DxwsDiJG.js";import{B as d}from"./BookmarkModal-y8xwXTnB.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-C8xEqik7.js";import"./index-fkRlyifr.js";import"./SettingsSection-DozXiDbI.js";import"./Section-B8U8libR.js";import"./BookmarkSettingsItem-Bl9hRPdF.js";import"./QueryLabel-DBvi2_kM.js";import"./Plus-i5lFDX1a.js";import"./useId-CMCVT55W.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Skeleton-CYDyiFkf.js";import"./SettingsItemBase-uMe3DJCi.js";import"./ChevronRight-I2Pyvoyr.js";import"./ItemLink-BmfX1JZV.js";import"./ItemMedia-h4TQiEvV.js";import"./XMark-DJOirLMA.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./ItemControls-jVI2cRmn.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-B591vdqr.js";import"./ContextMenu-Bmz4Uucx.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Dropdown-BWKRG_29.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./MenuElipsisHorizontal-xqi8fzGv.js";import"./SearchField-BuZQEnM8.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./Checkmark-C84HjHaR.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./List-QdfDgzch.js";import"./ListItem-EuoB6Qe0.js";import"./ChevronUp-BJ9TGsTi.js";import"./ChevronDown-DWRTbX5l.js";import"./Divider-BnKww764.js";import"./Pencil-BiV53kl3.js";import"./Trash-DMXRjDw8.js";import"./SkipLink-5FCUJ-hc.js";import"./GlobalHeader-CGmJJx38.js";import"./useIsDesktop-CYXiMf6h.js";import"./GlobalAccountButton-R1zWR0tC.js";import"./Enter-CKhL2F_O.js";import"./GlobalMenuButton-C_VNwpGJ.js";import"./MenuHamburger-R6t8Z0iD.js";import"./AccountSelector-vwjn9EYg.js";import"./heading-CaI-LR9D.js";import"./AccountMenu-CMtdAaLw.js";import"./Switch-Cap1vkPZ.js";import"./GlobalMenu-Ait5tYRn.js";import"./ArrowUndo-B3f9JFxf.js";import"./Globe-qk8GfdhN.js";import"./LocaleSwitcher-ZSDiFb3W.js";import"./DigdirLogomark-C75i41t_.js";import"./SearchbarField-DXpZt8O3.js";import"./AutocompleteItem-BW8L80bJ.js";import"./DropdownBase-CDaTtZub.js";import"./useClickOutside-DqlHBtqe.js";import"./GlobalMenuButton-Bx1gyj5Q.js";import"./PadlockLocked-BoC2y4lf.js";import"./ButtonLabel-C9m85BPo.js";import"./ButtonIcon-CknArlPu.js";import"./BreadcrumbsLink-Bzsm7kxW.js";import"./ArrowRight-8Ucc1x_N.js";import"./Footer-Ce0L7FBb.js";import"./SettingsModal-Cb4D0vgb.js";import"./ModalBase-6CWkGVU3.js";import"./ModalBody-Bam-amgL.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./TextField-RXQ8ysQd.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
