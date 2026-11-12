var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-D6r7-MD4.js";import{B as a,u as d}from"./useBookmarks-FcTSZB8I.js";import{B as l}from"./BookmarkModal-DYWDTxMK.js";import{L as u}from"./Layout-BRmwP_5T.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BVbqxAfY.js";import"./BookmarkSettingsItem-B3ZZ8SjR.js";import"./QueryLabel-BbjKedSs.js";import"./Plus-1rnJG1Or.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./SettingsItemBase-CykaSvC5.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./ItemBase-CTt5NrfE.js";import"./ItemLink-C_nP4AK3.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./Typography-CHbDBJK8.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./ContextMenu-B9oz4ZZo.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemLabel-CjCW6exE.js";import"./FieldBase-BsGJArhX.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./InformationSquare-Rb80un_D.js";import"./Pencil-Dl5wJ2cx.js";import"./Trash-DWkOlGVD.js";import"./SettingsModal-C3nFnbLP.js";import"./ModalBody-d0UpXorR.js";import"./Section-CZyWrzO9.js";import"./Flex-BbelGz4F.js";import"./ButtonGroup-Br96c_T4.js";import"./ButtonLabel-D2IlmIEz.js";import"./TextField-DN0N8XPX.js";import"./SkipLink-K_XE-14U.js";import"./CookieBanner-mcZo0drp.js";import"./Link-D2eIT9zV.js";import"./Banner-CnMYqtk3.js";import"./GlobalHeader-dbQ9aWQK.js";import"./GlobalAccountButton-rYKbRJ-F.js";import"./Enter-BLoa4ehM.js";import"./GlobalMenuButton-CrF0dpnX.js";import"./MenuHamburger-JGC_mwz5.js";import"./AccountSelector-C_iWFF6J.js";import"./Switch-Tw7A9AdD.js";import"./AccountMenu-B-JRC4BL.js";import"./GlobalMenu-DJU_f6BY.js";import"./Checkmark-CffPLTp9.js";import"./ArrowUndo-CVxqjMaC.js";import"./Globe-DyYompeK.js";import"./BreadcrumbsLink-foBwcV3t.js";import"./ArrowRight-DyaydeNs.js";import"./Footer-BLEwrhcX.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
