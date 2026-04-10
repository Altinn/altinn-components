import{j as t}from"./iframe-bdb8MxAl.js";import{B as a,u as n}from"./useBookmarks-B-DUG5nM.js";import{L as c}from"./Layout-B5SWTd_C.js";import{B as d}from"./BookmarkModal-DKnlyWgv.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-7ZoZ5Zdr.js";import"./index-p3wA3m8m.js";import"./SettingsSection-ncVCy3EU.js";import"./Section-CT0nm1G-.js";import"./BookmarkSettingsItem-DX6nuRWP.js";import"./QueryLabel-CWbhe0_b.js";import"./Plus-B7BchYDv.js";import"./useId-m2lwd_Ct.js";import"./Heading-BV-bgYII.js";import"./useHighlightedText-BZip2xbp.js";import"./Skeleton-BMmeChMq.js";import"./SettingsItemBase-DhUjUk5N.js";import"./ChevronRight-Cnln8IKV.js";import"./ItemLink-CZYTlEil.js";import"./ItemMedia-Bzsndyr0.js";import"./XMark-ml8n1JcF.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./ItemControls-CoqYqtfq.js";import"./Badge-CZZ-T3gy.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./ContextMenu-CzMuKD40.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Dropdown-B41Ltmad.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-yLxiENdI.js";import"./SearchField-Q9bTEqZH.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./Checkmark-YAJv3o3m.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./List-Dq0MjOQZ.js";import"./ListItem-Hms5tlXl.js";import"./ChevronUp-CsyoBPJv.js";import"./ChevronDown-De8akAeb.js";import"./Divider-BxkAC3mV.js";import"./Pencil-lBAbtMb2.js";import"./Trash-D-U6L-Nc.js";import"./SkipLink-DL1YCw3z.js";import"./GlobalHeader-BljCWCc9.js";import"./useIsDesktop-DMUmR05m.js";import"./GlobalAccountButton-BruaN5lm.js";import"./Enter-_vVTAZJN.js";import"./GlobalMenuButton-CDci02Yx.js";import"./MenuHamburger-_0XpI-Lc.js";import"./AccountSelector-D4nv2p9a.js";import"./heading-sEJMbgb9.js";import"./AccountMenu-DtpSdk3c.js";import"./Switch-CdWboNxd.js";import"./GlobalMenu-XP_zC5Yr.js";import"./ArrowUndo-IV-u59mp.js";import"./Globe-CMrbWTkv.js";import"./LocaleSwitcher-Q8_x-qLN.js";import"./DigdirLogomark-BygySONI.js";import"./SearchbarField-CWUc0lsQ.js";import"./AutocompleteItem-CzmyM9Lt.js";import"./DropdownBase-CBSDfrb-.js";import"./useClickOutside-DjQk6OJX.js";import"./GlobalMenuButton-n97YraGw.js";import"./PadlockLocked-DVxlbziO.js";import"./ButtonLabel-CEDslqSZ.js";import"./ButtonIcon-DpQ6wq1u.js";import"./BreadcrumbsLink-B2V_pftG.js";import"./ArrowRight-6jmD34cI.js";import"./Footer-CMBwceeP.js";import"./SettingsModal-enhi0fRg.js";import"./ModalBase-Bp5S3I6D.js";import"./ModalBody-BsZkJKis.js";import"./ButtonGroup-BdDqNtW_.js";import"./TextField-BdRzS3zi.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
