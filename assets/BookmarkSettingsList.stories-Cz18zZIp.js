import{j as t}from"./iframe-DxxW_Hah.js";import{B as a,u as n}from"./useBookmarks-D9BlkbeE.js";import{L as c}from"./Layout-CENO5OUG.js";import{B as d}from"./BookmarkModal-GXHpZ-v7.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CRmH3H-L.js";import"./index-pOAXHZ6n.js";import"./SettingsSection-D8v6CKH6.js";import"./Section-DDQuxuHV.js";import"./BookmarkSettingsItem-iGrAtTu3.js";import"./QueryLabel-DBDpIjTe.js";import"./Plus-CScsMow9.js";import"./useId-CckRU7I8.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./SettingsItemBase-CndiFJna.js";import"./ListItem-dSza7nWX.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./XMark-ChXBbXGN.js";import"./Icon-Cf03fdWw.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Badge-CQ9EBUDZ.js";import"./ChevronUp-rIZe7Kl4.js";import"./ChevronDown-qSt-istD.js";import"./ChevronRight-CqOTbusb.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./ContextMenu-DcBOXvkt.js";import"./useDropdownMenuController-BAV-gCcK.js";import"./Dropdown-_zFGDkyY.js";import"./Tooltip-DIHoftUf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-pJbAwWYV.js";import"./SearchField-ptc2QeHn.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Checkmark-pZi8btQa.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./List-C_geiOhU.js";import"./Divider-DBrd6wZZ.js";import"./Pencil-B5ss49Re.js";import"./Trash-CiL8T8GI.js";import"./SkipLink-B4H813EH.js";import"./GlobalHeader-BdSaxDwB.js";import"./useIsDesktop-B3tDsVL2.js";import"./GlobalAccountButton-Bi-w6ST_.js";import"./Enter-DCMOmqCz.js";import"./GlobalMenuButton-BZt_kvrh.js";import"./MenuHamburger-Be4YtaYC.js";import"./AccountSelector-D1K_AtQ5.js";import"./heading-DEeIb41B.js";import"./AccountMenu-BAmeImH5.js";import"./Switch-Cl1wfjZx.js";import"./GlobalMenu-4eyiyOyU.js";import"./ArrowUndo-CDTBG5mK.js";import"./Globe-D2wyTAMu.js";import"./LocaleSwitcher-DrfHig0J.js";import"./DigdirLogomark-LS5uJ7R1.js";import"./SearchbarField-65WoTiJp.js";import"./AutocompleteItem-DUT1Lmut.js";import"./DropdownBase-BSISdOOS.js";import"./useClickOutside-RChdGwyC.js";import"./GlobalMenuButton-D3E4cvQH.js";import"./PadlockLocked-DJwCVjuj.js";import"./ButtonLabel-BEhiscYg.js";import"./ButtonIcon-Bv6eEJQ5.js";import"./BreadcrumbsLink-CKoSDANO.js";import"./ArrowRight-DC8n_eRS.js";import"./Footer-DdelgHaA.js";import"./SettingsModal-Cf3Cuw8u.js";import"./ModalBase-CtAbLl_j.js";import"./ModalBody-Beg9EMdn.js";import"./ButtonGroup-wgVYayc9.js";import"./TextField-CCvbU-0Y.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
