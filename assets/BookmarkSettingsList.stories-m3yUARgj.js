import{j as t}from"./iframe-DRbAvM8B.js";import{B as a,u as n}from"./useBookmarks-DSFaeDAM.js";import{L as c}from"./Layout-CC0MUdR8.js";import{B as d}from"./BookmarkModal-DVjiXwkq.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DfEZbiAr.js";import"./index-Dpt5RUeZ.js";import"./SettingsSection-7tq97RBd.js";import"./Section-eG7NPuGp.js";import"./BookmarkSettingsItem-NY7hP8xN.js";import"./QueryLabel-DMedAoip.js";import"./Plus-frPGag5G.js";import"./useId-p3Uu13R2.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./SettingsItemBase-CIv-jZJU.js";import"./ListItem-B48A-xDW.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./XMark-BeNK6Eym.js";import"./Icon-BB196-C1.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Badge-B0bOgxTq.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./ChevronRight-BIwAZUpi.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./ContextMenu-kHX2Z4TH.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Dropdown-VBO2OC6w.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Rg7tFK6D.js";import"./SearchField-Q4hKdicz.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Checkmark-BwvmX3W_.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./List-DqiN2axT.js";import"./Divider-CSQOdO1f.js";import"./Pencil-C62zcy17.js";import"./Trash-D6ryZk36.js";import"./SkipLink-COSXCYDV.js";import"./GlobalHeader-wwWhOxrW.js";import"./useIsDesktop-D-2cHSgo.js";import"./GlobalAccountButton-CERwOHWI.js";import"./Enter-C-BKuRC5.js";import"./GlobalMenuButton-B8eBjVm7.js";import"./MenuHamburger-BigbFIZ4.js";import"./AccountSelector-D00iKOjQ.js";import"./heading-Mk4OWZA8.js";import"./AccountMenu-DK6t1yuC.js";import"./Switch-Wk8JvxKk.js";import"./GlobalMenu-0Qy8g4cA.js";import"./ArrowUndo-HRSWa3P-.js";import"./Globe-MQPa4Wnu.js";import"./LocaleSwitcher-Ch-z2bPb.js";import"./DigdirLogomark-BMcJZH-y.js";import"./SearchbarField-CdwCe6gN.js";import"./AutocompleteItem-2rl8zuEe.js";import"./DropdownBase-Agin9rKC.js";import"./useClickOutside-DcBMNI1Q.js";import"./GlobalMenuButton-B4iCNKeV.js";import"./PadlockLocked-DGHOWM9Z.js";import"./ButtonLabel-DCtnGfPd.js";import"./ButtonIcon-rceAdK8H.js";import"./BreadcrumbsLink-tlqCdmYy.js";import"./ArrowRight-UNFiqinT.js";import"./Footer-C29wXllD.js";import"./SettingsModal-sRXVYMRo.js";import"./ModalBase-OEJeuyA3.js";import"./ModalBody-DFMk_yAO.js";import"./ButtonGroup-r6m6YA7P.js";import"./TextField-CJk_az0l.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
