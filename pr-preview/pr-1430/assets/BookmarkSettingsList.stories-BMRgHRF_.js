var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-C7zNVDTT.js";import{B as n,u as d}from"./useBookmarks-BH6pwHuD.js";import{B as l}from"./BookmarkModal-0rrddBrG.js";import{L as u}from"./Layout-Bm3GWiKE.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CRscwWGI.js";import"./BookmarkSettingsItem-V61JXHwA.js";import"./QueryLabel-mdVQ8Qmd.js";import"./Plus-D2iqct3P.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./SettingsItemBase-CJYffbTY.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./ItemBase-DuoRnkB5.js";import"./ItemLink-B4RQLXhb.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./Typography-4gq5i4xU.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./ContextMenu-CXs2yOxo.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./SearchField-DGzlCViu.js";import"./FieldBase-CRVXDoio.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./InformationSquare-BvDWZ3oM.js";import"./MenuElipsisHorizontal-CFqNpdCJ.js";import"./Pencil-BydWQv5g.js";import"./Trash-DXsDcsqv.js";import"./SettingsModal-BI6AVWDn.js";import"./ModalBody-DHblQtRU.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonIcon-BPuZWt5t.js";import"./ButtonLabel-CpQPvS5S.js";import"./TextField-DUvaSDR4.js";import"./SkipLink-bYGbYPzo.js";import"./CookieBanner-BmiFJVUa.js";import"./Banner-rY54sJaF.js";import"./GlobalHeader-BtYj7AEn.js";import"./useIsDesktop-DvOzZNPR.js";import"./GlobalAccountButton-DfGs1d0C.js";import"./Enter-D72Fb-f9.js";import"./GlobalMenuButton-CItGckp8.js";import"./MenuHamburger-PG0UCurc.js";import"./AccountSelector-Lplja8Da.js";import"./Switch-BTuJol9o.js";import"./AccountMenu-3SdWfky9.js";import"./GlobalMenu-Cw9Lq0Ju.js";import"./ArrowUndo-nuZh3Ffr.js";import"./Globe-CqKzv9dh.js";import"./BreadcrumbsLink-CLjQgSHD.js";import"./ArrowRight-Bp2_CMNo.js";import"./Footer-BXZRNiiV.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
