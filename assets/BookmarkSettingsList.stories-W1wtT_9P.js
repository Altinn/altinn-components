import{j as t}from"./iframe-BM6RZuQM.js";import{B as a,u as n}from"./useBookmarks-BQzvai9F.js";import{L as c}from"./Layout-DZRWYqlP.js";import{B as d}from"./BookmarkModal-DCuqFoNk.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-OzDF1Or4.js";import"./QueryLabel-DVRzqAqw.js";import"./Plus-DESzxFez.js";import"./useId-BYt_OYJh.js";import"./Heading-aHWaPGZz.js";import"./index-DAnedVDn.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Skeleton-DWzjK3h6.js";import"./SettingsItemBase-wy81PUWi.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";import"./ItemLink-ADNTAdax.js";import"./ItemMedia-qdtGx-k7.js";import"./XMark-EbOSJv8a.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./ItemControls-DdRx042_.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./tooltip-DKLQ4JCb.js";import"./Typography-CXaseqiH.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./ContextMenu-CTWKr_fC.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Dropdown-Cm6GAKAK.js";import"./Button-DhtPu9_Y.js";import"./MenuElipsisHorizontal-Bs3D9CID.js";import"./SearchField-BgkLBjBi.js";import"./FieldBase-lFVyN1xh.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./Checkmark-CVccove_.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./Pencil-_eyGXsJC.js";import"./Trash-CeRRfZXt.js";import"./SkipLink-CCgTqTA3.js";import"./Banner-D27RNr2p.js";import"./GlobalHeader-BGMvfPuV.js";import"./useIsDesktop-Dm2dj1pd.js";import"./GlobalAccountButton-BbeQojsg.js";import"./Enter-CBXCMPPv.js";import"./GlobalMenuButton-Bji4cO3L.js";import"./MenuHamburger-BcfCqF_o.js";import"./AccountSelector-CBvboyq8.js";import"./AccountMenu-8uNzYSA_.js";import"./Switch-D6evj3r2.js";import"./GlobalMenu-DptzF8pC.js";import"./ArrowUndo-Bmn4Nzqn.js";import"./Globe-BWe6SIwi.js";import"./BreadcrumbsLink-C4tHqUQj.js";import"./ArrowRight-gJzEyyh7.js";import"./Footer-HAyJleRa.js";import"./SettingsModal-D-ZvKL37.js";import"./ModalBody-tg8E7uYI.js";import"./Section-h9TGEdkh.js";import"./Flex-DCHL4VAz.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonIcon-Cvxr_Dcd.js";import"./ButtonLabel-DbDYSY1l.js";import"./TextField-D940yGFY.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
