import{a7 as t}from"./iframe-DK26OyRD.js";import{B as a,u as n}from"./useBookmarks-KU14hdW7.js";import{B as d}from"./BookmarkModal-BT6fhmm0.js";import{L as c}from"./Layout-BcBr38eq.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-0kp9W_Tl.js";import"./BookmarkSettingsItem-G73r0Ssl.js";import"./QueryLabel-CyHqQtKb.js";import"./Plus-BMnL1FI5.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./SettingsItemBase-BP6tVNdJ.js";import"./ItemMedia-eL3WoD14.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./ChevronUp-H846LjQF.js";import"./ChevronDown-BXSVxDRn.js";import"./ChevronRight-CgtnVZss.js";import"./ItemBase-C7L84IL-.js";import"./ItemLink-DFds8MDQ.js";import"./ItemControls-DNRsDyv1.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./Typography-DLY6k0s2.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./ContextMenu-OoWwKfGw.js";import"./useDropdownMenuController-3-_gSr8-.js";import"./Dropdown-DKc7uAuj.js";import"./SearchField-Mgah0vbC.js";import"./FieldBase-BNgybH8j.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./InformationSquare-f4aulv5D.js";import"./MenuElipsisHorizontal-CE-njAYU.js";import"./Pencil-B3lCexD9.js";import"./Trash-DH9PmhSG.js";import"./SettingsModal-CFM_KvJS.js";import"./ModalBody-LJkI2hmG.js";import"./Section-5gLqA0oM.js";import"./Flex-Bsp6DeeI.js";import"./ButtonGroup-3GFoI2vi.js";import"./ButtonIcon-prTPeC3u.js";import"./ButtonLabel-DONh2DdN.js";import"./TextField-DqUmkbQv.js";import"./SkipLink-6fgDvMFq.js";import"./CookieBanner-Ew-yAjYZ.js";import"./Banner-Cnqr2F_o.js";import"./GlobalHeader-CDaMr_Rk.js";import"./useIsDesktop-BZUhQWI_.js";import"./GlobalAccountButton-CJcUpqA1.js";import"./Enter-B85cbUfy.js";import"./GlobalMenuButton-BmlIUW_I.js";import"./MenuHamburger-C6_sJYu4.js";import"./AccountSelector-B1s29TaL.js";import"./Switch-BoDdhyv4.js";import"./AccountMenu-CeZrRttM.js";import"./GlobalMenu-Z48khG5h.js";import"./ArrowUndo-zT6R2bHq.js";import"./Globe-Cc3tC6-3.js";import"./BreadcrumbsLink-8HFo-MC4.js";import"./ArrowRight-Bjn7HgM7.js";import"./Footer-BK9O7jJH.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
