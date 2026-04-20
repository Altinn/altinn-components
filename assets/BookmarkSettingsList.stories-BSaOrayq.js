import{j as t}from"./iframe-Dj7Cj6th.js";import{B as a,u as n}from"./useBookmarks-DFBwVlzG.js";import{L as c}from"./Layout-es8Ao78i.js";import{B as d}from"./BookmarkModal-Byz7-oVT.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BFoeedqd.js";import"./index-CddsnUaU.js";import"./SettingsSection-DIxl5GJt.js";import"./Section-H920sslu.js";import"./BookmarkSettingsItem-DMzK4ckd.js";import"./QueryLabel-D8IzkRES.js";import"./Plus-CoZtisp_.js";import"./useId-ByPI58ip.js";import"./Heading-CYqNNVt0.js";import"./useHighlightedText-BEM-o_8x.js";import"./Skeleton-D2EJPpRT.js";import"./SettingsItemBase-8IR7mEqN.js";import"./ChevronRight-DoyD_DMf.js";import"./ItemLink-hS_z791-.js";import"./ItemMedia-ClCn_Pwn.js";import"./XMark-CFOHUWx0.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./ItemControls-Dm3s3qCz.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./ContextMenu-Td8HQLi8.js";import"./useDropdownMenuController-BLxYI4kb.js";import"./Dropdown-DRhtJuEv.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./MenuElipsisHorizontal-B-ABMDTg.js";import"./SearchField-IAcAy2TF.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./Checkmark-BGb3abOV.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./List-DYKtwJbC.js";import"./ListItem-CdIQewdQ.js";import"./ChevronUp-CdPgOeEh.js";import"./ChevronDown-sTkixeUo.js";import"./Divider-BwiEsQnP.js";import"./Pencil-DpJA5VDj.js";import"./Trash-BWaUzv09.js";import"./SkipLink-Dr74kghJ.js";import"./GlobalHeader-D3JhTZPv.js";import"./useIsDesktop-BKsQq4_B.js";import"./GlobalAccountButton-0PyjBcdU.js";import"./Enter-sPrpAKYg.js";import"./GlobalMenuButton-Bowl3RQO.js";import"./MenuHamburger-B1BfC5RA.js";import"./AccountSelector-C14m-YBO.js";import"./heading-i_QgmUBR.js";import"./AccountMenu-BM2-kv7T.js";import"./Switch-CsETL5z-.js";import"./GlobalMenu-Dvw0iAmJ.js";import"./ArrowUndo-BweBUO2a.js";import"./Globe-D9vLtYKA.js";import"./LocaleSwitcher-BY0D54vR.js";import"./DigdirLogomark-DrjZrxjV.js";import"./SearchbarField-wx8e5rZs.js";import"./AutocompleteItem-DaGGpqzH.js";import"./DropdownBase-ZEELqAjW.js";import"./useClickOutside-BktmS85N.js";import"./GlobalMenuButton-at_G1dDS.js";import"./PadlockLocked-DMO0v4Jz.js";import"./ButtonLabel-DExUchGn.js";import"./ButtonIcon-B8pHyvH7.js";import"./BreadcrumbsLink-CdyGbAHB.js";import"./ArrowRight-xr6Qdu7g.js";import"./Footer-CRnUphPr.js";import"./SettingsModal-AKXr0_zI.js";import"./ModalBase-D6AxN5ds.js";import"./ModalBody-pkjmwJOi.js";import"./ButtonGroup-FtWKGzEG.js";import"./TextField-CaM97Ew6.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
