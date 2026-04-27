import{j as t}from"./iframe-BJEbXdzo.js";import{B as a,u as n}from"./useBookmarks-CuS9k0dm.js";import{L as c}from"./Layout-BzQwYHBi.js";import{B as d}from"./BookmarkModal-CGLTs2Jc.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DRE_amb0.js";import"./index-ChGHkNNv.js";import"./SettingsSection-BoWSzGo3.js";import"./Section-BfJWddEs.js";import"./BookmarkSettingsItem-Di3tbRob.js";import"./QueryLabel-EpxeOwi6.js";import"./Plus-DGG8hdRK.js";import"./useId-DgrNWXh_.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Skeleton-DWcIZ1wH.js";import"./SettingsItemBase-OhCuHqzh.js";import"./ChevronRight-CoSPx3Kv.js";import"./ItemLink-DuiVdY3z.js";import"./ItemMedia-CiNZWpX-.js";import"./XMark-sTHnj54s.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./ItemControls-CAq51EMf.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./ContextMenu-BZKtsYlZ.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Dropdown-BWrGCxZb.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./MenuElipsisHorizontal-_50h2TOj.js";import"./SearchField-C43D0Bvg.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./Checkmark-DLPFtMmB.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./List-DutQ8fVG.js";import"./ListItem-lGtwNmac.js";import"./ChevronUp-D3W-us6_.js";import"./ChevronDown-BptX0rEl.js";import"./Divider-D2x5dGTA.js";import"./Pencil-BFgsamTB.js";import"./Trash-C9Nxl2VC.js";import"./SkipLink-DrY8Lhm6.js";import"./GlobalHeader-DfRYBjdR.js";import"./useIsDesktop-DRdiko2E.js";import"./GlobalAccountButton-DSH6mgXV.js";import"./Enter-CVX0CGOP.js";import"./GlobalMenuButton-Rv79SeKD.js";import"./MenuHamburger-K1BgVp7W.js";import"./AccountSelector-Diri-ep2.js";import"./heading-DXUZMSBu.js";import"./AccountMenu-Iz0jaDTX.js";import"./Switch-ClunuO0T.js";import"./GlobalMenu-3Yh4vqe0.js";import"./ArrowUndo-DaYXADnN.js";import"./Globe-BlFk6HBa.js";import"./LocaleSwitcher-DyUL1amM.js";import"./DigdirLogomark-CLtmb5yz.js";import"./SearchbarField-fEPaYotL.js";import"./AutocompleteItem-BwoKZe1C.js";import"./DropdownBase-BYq0xkEJ.js";import"./useClickOutside-B6rTSfnw.js";import"./GlobalMenuButton-BHTFYuDH.js";import"./PadlockLocked-WeDnmgJF.js";import"./ButtonLabel-BDM26i0_.js";import"./ButtonIcon-HUw-G-oR.js";import"./BreadcrumbsLink-f9VdC24X.js";import"./ArrowRight-C1_x0DTX.js";import"./Footer-OcY_P6AN.js";import"./SettingsModal-OUGoSOPu.js";import"./ModalBase-BbF017-v.js";import"./ModalBody-Ef2KdMhz.js";import"./ButtonGroup-CbGBNNFa.js";import"./TextField-CKotFn3f.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
