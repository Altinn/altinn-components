import{j as t}from"./iframe-BNDruhPA.js";import{B as a,u as n}from"./useBookmarks-C3LyV4K6.js";import{L as c}from"./Layout-CN_1hec-.js";import{B as d}from"./BookmarkModal-Dcfvb4kJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DdLGZodm.js";import"./index-JM42q3xD.js";import"./SettingsSection-BA6pNIkE.js";import"./Section-CcOIv3Qj.js";import"./BookmarkSettingsItem-DJo6fw8c.js";import"./QueryLabel-l6CQGUJC.js";import"./Plus-BN_WRMVc.js";import"./useId-28rL4Hsl.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./Skeleton-3vFplc_z.js";import"./SettingsItemBase-DfTHf9Q5.js";import"./ChevronRight-Bcu8s-U3.js";import"./ItemLink-B_kfJLa3.js";import"./ItemMedia-C5U6F78e.js";import"./XMark-vbUnhqfT.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./ItemControls-nx23Lp4C.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./ContextMenu-UYo9LY0c.js";import"./useDropdownMenuController-C1OwOjFZ.js";import"./Dropdown-nm23L0U7.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./MenuElipsisHorizontal-Cw34yz3_.js";import"./SearchField-BS2BtTJs.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./Checkmark-BnLjHgWq.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./List-Ckq5YGm7.js";import"./ListItem-CLrzKGmW.js";import"./ChevronUp-dNDMwZOi.js";import"./ChevronDown-1m-leHy9.js";import"./Divider-2s9iAeFh.js";import"./Pencil-CM0Zb_e8.js";import"./Trash-dW9GgNZJ.js";import"./SkipLink-D67JO6nm.js";import"./GlobalHeader-Bi7M2KT8.js";import"./useIsDesktop-qJ8b0dW5.js";import"./GlobalAccountButton-BAW0jaYb.js";import"./Enter-B5ZtRGdD.js";import"./GlobalMenuButton-CTkEM3et.js";import"./MenuHamburger-DxE3fxe3.js";import"./AccountSelector-Cs57riHm.js";import"./heading-UEb8yVFE.js";import"./AccountMenu-Bya8haLy.js";import"./Switch-CRz5pM3y.js";import"./GlobalMenu-DYJkE8Sp.js";import"./ArrowUndo-TNM9HjKV.js";import"./Globe-puhqCle3.js";import"./LocaleSwitcher-XvGjj_qI.js";import"./DigdirLogomark-BiqZgEZs.js";import"./SearchbarField-DETpAOo-.js";import"./AutocompleteItem-Cw3TIONE.js";import"./DropdownBase-B2BHJydV.js";import"./useClickOutside-Cy7tr48u.js";import"./GlobalMenuButton-g3l-WiPf.js";import"./PadlockLocked-oQs_26Wi.js";import"./ButtonLabel-B0odgBfB.js";import"./ButtonIcon-DlPFQqJE.js";import"./BreadcrumbsLink-BhgJ85ua.js";import"./ArrowRight-uGdnhP0W.js";import"./Footer-BjQkf7FG.js";import"./SettingsModal-BEnwQwYs.js";import"./ModalBase-Csr9qX6t.js";import"./ModalBody-BfZsUu8q.js";import"./ButtonGroup-Cj9A7v4t.js";import"./TextField-sZteiMxb.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
