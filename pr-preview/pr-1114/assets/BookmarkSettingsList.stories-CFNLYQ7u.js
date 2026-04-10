import{j as t}from"./iframe-COdTICiz.js";import{B as a,u as n}from"./useBookmarks-CLjwUT5B.js";import{L as c}from"./Layout-CCv_9m94.js";import{B as d}from"./BookmarkModal-DFufwR_8.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BH1BXZbH.js";import"./index-eHSiAaoN.js";import"./SettingsSection-Crur75C6.js";import"./Section-Cld6nU2J.js";import"./BookmarkSettingsItem-CjiK7Sce.js";import"./QueryLabel-Bt1Ae0Sb.js";import"./Plus-D6hG0ghA.js";import"./useId-lT615UMD.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./Skeleton-DCT9M7tY.js";import"./SettingsItemBase-BGMVA5Q_.js";import"./ChevronRight-tPPKpYH4.js";import"./ItemLink-CDxFMY6P.js";import"./ItemMedia-BN92MYHv.js";import"./XMark-CpgXVK2Q.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./ItemControls-DRloD8XX.js";import"./Badge-CTG2EWNm.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./ContextMenu-BHpDncYb.js";import"./useDropdownMenuController-BmS2V_T_.js";import"./Dropdown-riK9lB0y.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./Tooltip-CFVYTWjg.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BknfGU10.js";import"./SearchField-DQWZ98wb.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./Checkmark-D_NJmpQs.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./List-whgW15bu.js";import"./ListItem-B7SDP4f5.js";import"./ChevronUp-Dz_g_pRj.js";import"./ChevronDown-CXIH_g9t.js";import"./Divider-B4U8jiT-.js";import"./Pencil-Bwxcj8Rb.js";import"./Trash-BPlCWJiN.js";import"./SkipLink-BB7mpVA6.js";import"./GlobalHeader-St57eerb.js";import"./useIsDesktop-DEFSCjxp.js";import"./GlobalAccountButton-D1Lv_IVG.js";import"./Enter-B-JGtAL9.js";import"./GlobalMenuButton-C7ARe-0P.js";import"./MenuHamburger-CqtO9W0U.js";import"./AccountSelector-DTUpawFT.js";import"./heading-B2C3mS9o.js";import"./AccountMenu-DyMm6NVs.js";import"./Switch-CIYopdq4.js";import"./GlobalMenu-Cx_xYbAi.js";import"./ArrowUndo-BLH3jHa2.js";import"./Globe-CyJqeJ-s.js";import"./LocaleSwitcher-C8OAuXmV.js";import"./DigdirLogomark-DT64Nygk.js";import"./SearchbarField-KQ8gdvkJ.js";import"./AutocompleteItem-DvVVdN1n.js";import"./DropdownBase-D-GeILtx.js";import"./useClickOutside-mdIAXV_q.js";import"./GlobalMenuButton-cX8v2nux.js";import"./PadlockLocked-X4Kj6P07.js";import"./ButtonLabel-BeR2LbuU.js";import"./ButtonIcon-BSRBlnsV.js";import"./BreadcrumbsLink-DOaM8raI.js";import"./ArrowRight-CzrVTxVq.js";import"./Footer-D4O9mpB8.js";import"./SettingsModal-Bp-X6zsb.js";import"./ModalBase-D_HQkA4J.js";import"./ModalBody-IM9JDPu9.js";import"./ButtonGroup-BKCkWJMA.js";import"./TextField-CI3PMdUh.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
