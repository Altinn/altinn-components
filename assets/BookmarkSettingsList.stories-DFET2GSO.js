var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-BhbNl8M-.js";import{B as n,u as d}from"./useBookmarks-CZjp2Wyr.js";import{B as l}from"./BookmarkModal-CEZXNPoK.js";import{L as u}from"./Layout-Bi2sLomB.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-6KerkDf-.js";import"./BookmarkSettingsItem-BsSXnYXs.js";import"./QueryLabel-y5wveDgK.js";import"./Plus-BcmDIJkz.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./SettingsItemBase-CAbwX_aT.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./ItemBase-H82chU0B.js";import"./ItemLink-BMM2GMUL.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Typography-DcyIPmTi.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./ContextMenu-Ij8B0w81.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./FieldBase--SCvu2WQ.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";import"./Pencil-BF3VQhmx.js";import"./Trash-Df4Pkq18.js";import"./SettingsModal-C5lElqHH.js";import"./ModalBody-MK76vZzv.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonIcon-7FhxMerM.js";import"./ButtonLabel-Cq2XOZ5S.js";import"./TextField-hoToHKJf.js";import"./SkipLink-q81YSldO.js";import"./CookieBanner-CKCrzmx7.js";import"./Banner-BMb1L36s.js";import"./GlobalHeader-CSzpOvf-.js";import"./useIsDesktop-CoNfvEt7.js";import"./GlobalAccountButton-DJLFYXlr.js";import"./Enter-DgJZC0JW.js";import"./GlobalMenuButton-CQFUYfha.js";import"./MenuHamburger-DEHtIGqF.js";import"./AccountSelector-Bq_sOzpk.js";import"./Switch-HPZGYIQM.js";import"./AccountMenu-C1XnEBmu.js";import"./GlobalMenu-Sj7JrfLA.js";import"./ArrowUndo-D9tJ-Erq.js";import"./Globe-DCB48zAy.js";import"./BreadcrumbsLink-lneiUb_j.js";import"./ArrowRight-40scby1E.js";import"./Footer-DQFb1BdE.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
