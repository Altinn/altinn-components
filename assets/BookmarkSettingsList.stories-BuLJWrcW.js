import{a7 as t}from"./iframe-Bg-ykIGY.js";import{B as a,u as n}from"./useBookmarks-B3tD61fv.js";import{B as d}from"./BookmarkModal-CEqo2qhz.js";import{L as c}from"./Layout-CvpjqPJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-TQu19WT_.js";import"./BookmarkSettingsItem-DjB4Rm8F.js";import"./QueryLabel-Dv04T57B.js";import"./Plus-CRKlQLAt.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./SettingsItemBase-DbC3k_m0.js";import"./ItemMedia-CbKN8wGb.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";import"./ItemBase-oVSLgwcy.js";import"./ItemLink-D1jwa25l.js";import"./ItemControls-ChQuM1Jl.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./Typography-DBpPrukr.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./ContextMenu-55s2ID-Y.js";import"./useDropdownMenuController-Bq5ui6IL.js";import"./Dropdown-BqiaInOV.js";import"./SearchField-BC3zApJG.js";import"./FieldBase-DJSWyb1T.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./InformationSquare-CVG9J0Nh.js";import"./MenuElipsisHorizontal-vrQ73KRy.js";import"./Pencil-CPgt8liN.js";import"./Trash-D0nu_cWD.js";import"./SettingsModal-DoDAcvH9.js";import"./ModalBody-9RwRyUWe.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./ButtonGroup-D3TFK-sP.js";import"./ButtonIcon-BN0vPuAv.js";import"./ButtonLabel-DGmLIPRz.js";import"./TextField-C5-1usr1.js";import"./SkipLink-DUZCAgBJ.js";import"./CookieBanner-J5rw2cCh.js";import"./Banner-BGmQv_6w.js";import"./GlobalHeader-0IBksqQV.js";import"./useIsDesktop-CvqDUnjE.js";import"./GlobalAccountButton-DqkYqPmk.js";import"./Enter-Bp_EcGzr.js";import"./GlobalMenuButton-BkpjWEGe.js";import"./MenuHamburger-CVmRJGX8.js";import"./AccountSelector-Djl-K9hW.js";import"./Switch-BMj-uGOR.js";import"./AccountMenu-CWifJSh4.js";import"./GlobalMenu-D6m_y0cV.js";import"./ArrowUndo-DUSAMG1W.js";import"./Globe-Dutz8jhq.js";import"./BreadcrumbsLink-DxhoIpPE.js";import"./ArrowRight-CEIu9B9J.js";import"./Footer-Dq2z0t-4.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
