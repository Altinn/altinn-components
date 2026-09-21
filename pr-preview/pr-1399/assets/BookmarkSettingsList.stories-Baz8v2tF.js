import{a7 as t}from"./iframe-DJfn40-D.js";import{B as a,u as n}from"./useBookmarks-C9J86NDq.js";import{B as d}from"./BookmarkModal-Cc13AUEB.js";import{L as c}from"./Layout-DeQH63ds.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CxHWIKXS.js";import"./BookmarkSettingsItem-BwTvCXt6.js";import"./QueryLabel-Dkv8HuzX.js";import"./Plus-CBmVVX8g.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./SettingsItemBase-Dvp7GxLZ.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./ChevronUp-CDdzZBKT.js";import"./ChevronDown-D_48qJ0I.js";import"./ChevronRight-DB6kCZkt.js";import"./ItemBase-BZeziJXo.js";import"./ItemLink-DnwAIVP3.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./Typography-XfwuV3u8.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./ContextMenu-CaiQMd7K.js";import"./useDropdownMenuController-CsyOSzoH.js";import"./Dropdown-D88HD4zP.js";import"./SearchField-BCijVFY-.js";import"./FieldBase-D1U1BxD2.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuListDivider-D98MnUWk.js";import"./MenuListHeading-DOsHnXss.js";import"./MenuItem-BcYTRISI.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./InformationSquare-TILYX_Pd.js";import"./MenuElipsisHorizontal-BQYr1o0J.js";import"./Pencil-DBsrn80f.js";import"./Trash-QlCQ_OLM.js";import"./SettingsModal-D-UeQJQp.js";import"./ModalBody-byCqzvmH.js";import"./Section-DRGrLW1j.js";import"./Flex-BuCXAFdl.js";import"./ButtonGroup-HFpGrSBK.js";import"./ButtonIcon-C08Tz3FQ.js";import"./ButtonLabel-D0AuKm4B.js";import"./TextField-Cn0Doatu.js";import"./SkipLink-B0RLkGat.js";import"./CookieBanner-CnLaRd5P.js";import"./Banner-BTSklFiS.js";import"./GlobalHeader-D5nRV2Yh.js";import"./useIsDesktop-RLD3NYM2.js";import"./GlobalAccountButton-B-3XKkAK.js";import"./Enter-D3OUH4Bc.js";import"./GlobalMenuButton-CHseIkzq.js";import"./MenuHamburger-C0Qf3lmv.js";import"./AccountSelector-BBqvPS7P.js";import"./Switch-BdNLaEmp.js";import"./AccountMenu-Dstivpuc.js";import"./GlobalMenu-DsSivbZT.js";import"./ArrowUndo-B2-52xOX.js";import"./Globe-DFC7DByl.js";import"./BreadcrumbsLink-C06X9E0X.js";import"./ArrowRight-MRvFTX7F.js";import"./Footer-DleAaVEF.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
