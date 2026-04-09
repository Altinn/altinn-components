import{j as t}from"./iframe-DgiLb7Jh.js";import{B as a,u as n}from"./useBookmarks-BwkUJMfr.js";import{L as c}from"./Layout-BI5foert.js";import{B as d}from"./BookmarkModal-DX48aE7U.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BfnRV8tR.js";import"./index-CzzvqmNv.js";import"./SettingsSection-CjPQtDT3.js";import"./Section-BoeinIOl.js";import"./BookmarkSettingsItem-KAHWl30C.js";import"./QueryLabel-BitPHzo5.js";import"./Plus-gYiwb3vr.js";import"./useId-6J1VG5PF.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./Skeleton-CjXkBVSw.js";import"./SettingsItemBase-CIYWNZwc.js";import"./ListItem-DCHK_eIp.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./XMark-DE16CL-6.js";import"./Icon-uoDJWBW9.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Badge-DFo-bNGw.js";import"./ChevronUp-X_MpgVb_.js";import"./ChevronDown-1x60-vzB.js";import"./ChevronRight-B8GqJ6hU.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./ContextMenu-DG0-Wypj.js";import"./useDropdownMenuController-fXPHld1D.js";import"./Dropdown-Bk4mNQmY.js";import"./Tooltip-00zSbMAL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BoLrkDy9.js";import"./SearchField-CTb1s1hd.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Checkmark-49Lv_3MM.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./List-DTj7XRDi.js";import"./Divider-D-bz7DwV.js";import"./Pencil-BqMVvXmZ.js";import"./Trash-1SNvNmMf.js";import"./SkipLink-BX8KOB_3.js";import"./GlobalHeader-0ez9IeII.js";import"./useIsDesktop-DnJ6rrKA.js";import"./GlobalAccountButton-_wm6uLjw.js";import"./Enter-CoTeHJl9.js";import"./GlobalMenuButton-DS6N-aPk.js";import"./MenuHamburger-DsSm4Trc.js";import"./AccountSelector-C05Lq8GR.js";import"./heading-pw09yoix.js";import"./AccountMenu-DJcMWRL0.js";import"./Switch-CQ9i4TBM.js";import"./GlobalMenu-xjQY7x9-.js";import"./ArrowUndo-Dx5hHpGf.js";import"./Globe-r95Jct_q.js";import"./LocaleSwitcher-De0lo3Os.js";import"./DigdirLogomark-CWW_1YHS.js";import"./SearchbarField-Dx4FUd9u.js";import"./AutocompleteItem-CSfi4S0p.js";import"./DropdownBase-DIlZu5cZ.js";import"./useClickOutside-DXlVgUmO.js";import"./GlobalMenuButton-juDUvOYf.js";import"./PadlockLocked-CvlPqwA8.js";import"./ButtonLabel-Ch_U16-K.js";import"./ButtonIcon-CpeMN0SU.js";import"./BreadcrumbsLink-C5ieb-Mz.js";import"./ArrowRight-OkB-GOOC.js";import"./Footer-8PLHztbd.js";import"./SettingsModal-BHJhNZE_.js";import"./ModalBase-BLc5GE5E.js";import"./ModalBody-CYaAfA_z.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./TextField-vX1ciD8r.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
