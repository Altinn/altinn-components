import{j as t}from"./iframe-C30XMp4u.js";import{B as a,u as n}from"./useBookmarks-DFTYnMAe.js";import{L as c}from"./Layout-C8rNfUEH.js";import{B as d}from"./BookmarkModal-BOwH38Gc.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Olz8YtsP.js";import"./index-Dfjgmy9H.js";import"./SettingsSection-C7n6ZqLR.js";import"./Section-DJhGIaQb.js";import"./BookmarkSettingsItem-Cljg-xgX.js";import"./QueryLabel-DA3OdOzv.js";import"./Plus-zIuJSXr8.js";import"./useId-k4Xjw1TB.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./SettingsItemBase-CMzfMjvH.js";import"./ChevronRight-cMtudnfA.js";import"./ItemLink-fzbmrdbP.js";import"./ItemMedia-DZiSht8H.js";import"./XMark-ZCF0kQw6.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./ItemControls-XLXkfke2.js";import"./Badge-BL5WZhsc.js";import"./MagnifyingGlass-BcLoywmE.js";import"./ContextMenu-WHdt3mrD.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Dropdown-MMgMxLyt.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-D27tqclt.js";import"./SearchField-GqHOGaRS.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./Checkmark-BHVaOMRl.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./List-BOu6KRbF.js";import"./ListItem-BjER_6OV.js";import"./ChevronUp-Dd9Cdp1N.js";import"./ChevronDown-BpTniz1S.js";import"./Divider-BlKWfvpJ.js";import"./Pencil-BC0Lwdzv.js";import"./Trash-CAta8Rpy.js";import"./SkipLink-B1TZEgqD.js";import"./GlobalHeader-DEtsUNmo.js";import"./useIsDesktop-r8DH4xrH.js";import"./GlobalAccountButton-CQof3x8e.js";import"./Enter-D_Sz2Y-Z.js";import"./GlobalMenuButton-DHUDLJbk.js";import"./MenuHamburger-C7Jlfysl.js";import"./AccountSelector-CyLyTHT1.js";import"./heading-BBwhIecZ.js";import"./AccountMenu-BVv7F0Yo.js";import"./Switch-Bo_I4-2B.js";import"./GlobalMenu-TBD0AuaX.js";import"./ArrowUndo-DCkDtO0Z.js";import"./Globe-Bp6G8iI8.js";import"./LocaleSwitcher-DhCjFmPB.js";import"./DigdirLogomark-BWFmjM3O.js";import"./SearchbarField-Cx5HsXRX.js";import"./AutocompleteItem-BXbOn6ST.js";import"./DropdownBase-DqPEgLO0.js";import"./useClickOutside-CQbrwNbZ.js";import"./GlobalMenuButton-_oCUabds.js";import"./PadlockLocked-CvUaHTOs.js";import"./ButtonLabel-D_0Lmxqy.js";import"./ButtonIcon-DGwnrj7G.js";import"./BreadcrumbsLink-ChblfGn_.js";import"./ArrowRight-DqsQp-IZ.js";import"./Footer-GJX0-h5b.js";import"./SettingsModal-CbfYNbx6.js";import"./ModalBase-8GeXxfmc.js";import"./ModalBody-BvZW9nvD.js";import"./ButtonGroup-B8wqqWfc.js";import"./TextField-DomInenN.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
