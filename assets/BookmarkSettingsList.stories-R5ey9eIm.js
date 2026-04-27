import{j as t}from"./iframe-B56t8i7v.js";import{B as a,u as n}from"./useBookmarks-CDEotEN0.js";import{L as c}from"./Layout-BYGEUjkd.js";import{B as d}from"./BookmarkModal-CShg2YL1.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BSViFEWJ.js";import"./index-CHgNdXFp.js";import"./SettingsSection-D9n9j1H_.js";import"./Section-DXg-mnVx.js";import"./BookmarkSettingsItem-B78VzUBF.js";import"./QueryLabel-nVdg74zq.js";import"./Plus-DP2GFhc-.js";import"./useId-Ce_44NzT.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./Skeleton-Cer98cLN.js";import"./SettingsItemBase-dnhUSNJ6.js";import"./ChevronRight-VYKVaZtU.js";import"./ItemLink-CR2F4UR3.js";import"./ItemMedia-DJxakqLL.js";import"./XMark-CQR84vCO.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./ItemControls-DurpuKFn.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-U17pnqdh.js";import"./ContextMenu-WzTnKvto.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Dropdown-CjWcilfw.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./MenuElipsisHorizontal-CC_TKBZM.js";import"./SearchField-BtQfQfgA.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./Checkmark-cFLQXWmW.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./List-Cf0-_oGc.js";import"./ListItem-DXm9Ifb4.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./Divider-BSd8txhR.js";import"./Pencil-2DT9n4xE.js";import"./Trash-CCj34_zQ.js";import"./SkipLink-BzaWDs5X.js";import"./GlobalHeader-Cv2v4Ele.js";import"./useIsDesktop-CFGjVeHW.js";import"./GlobalAccountButton-D3OVC-Q3.js";import"./Enter-DsW-azvR.js";import"./GlobalMenuButton-HddiGDOg.js";import"./MenuHamburger-CjzDwfM6.js";import"./AccountSelector-CwFOsb_h.js";import"./heading-DXmPhnVV.js";import"./AccountMenu-BF1zYUjX.js";import"./Switch-Ch_BWUCO.js";import"./GlobalMenu-DBRvdXnl.js";import"./ArrowUndo-BZ7sluk3.js";import"./Globe-CfQppjOD.js";import"./LocaleSwitcher-4omjkH2E.js";import"./DigdirLogomark-BaJ-0QN5.js";import"./SearchbarField-rAjucfX_.js";import"./AutocompleteItem-D-FpMDwU.js";import"./DropdownBase-C18X2TO4.js";import"./useClickOutside-D5Pq4X4m.js";import"./GlobalMenuButton-DQfy5APG.js";import"./PadlockLocked-BohZXiRX.js";import"./ButtonLabel-B2zAlRRB.js";import"./ButtonIcon-RQaEMoLk.js";import"./BreadcrumbsLink-BImxYaPp.js";import"./ArrowRight-CTIl-Czw.js";import"./Footer-CtbZV6ZL.js";import"./SettingsModal-cif9potf.js";import"./ModalBase-DAC3P7wf.js";import"./ModalBody-DZEYNo_5.js";import"./ButtonGroup-DUjF8sgK.js";import"./TextField-CxRl2dGO.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
