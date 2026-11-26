var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-ucBQ5HcJ.js";import{B as a,u as d}from"./useBookmarks-B6PcqV-y.js";import{B as l}from"./BookmarkModal-D1YTCZi0.js";import{L as u}from"./Layout-Bi_cyIDV.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-zMhFd5Ju.js";import"./BookmarkSettingsItem-3rZxJ94u.js";import"./QueryLabel-D9hTlaww.js";import"./Plus-DM17n_Wh.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./SettingsItemBase-oktmz-O4.js";import"./ItemMedia-BkaFl7YX.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./ChevronUp-Bnv01usE.js";import"./ChevronDown-CmXAxF6f.js";import"./ChevronRight-Vb4FEV6b.js";import"./ItemBase-CwHYgeFH.js";import"./ItemLink-Dm0lO5Ir.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./Typography-z9HgrCC2.js";import"./MagnifyingGlass-asWGm_ME.js";import"./ContextMenu-CFrUWzsT.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./SearchField-0Y9a3sbc.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemLabel-CZZsCEBi.js";import"./FieldBase-BybGrojy.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./InformationSquare-BC6md9kr.js";import"./Pencil-Bfq6JxVJ.js";import"./Trash-C9fnn7OA.js";import"./SettingsModal-BSAlKkZB.js";import"./ModalBody-BJrMsUN-.js";import"./Section-BY1hSuM_.js";import"./Flex-obMty-VJ.js";import"./ButtonGroup-57G882s-.js";import"./ButtonIcon-DUU9Fits.js";import"./ButtonLabel-DiEo7qm4.js";import"./TextField-ChL6EJBp.js";import"./SkipLink-C9txk-sp.js";import"./CookieBanner-D6pUxKNo.js";import"./Link-DTV1xOLq.js";import"./Banner-DxB99WTc.js";import"./GlobalHeader-ByviVgf0.js";import"./useIsDesktop-CZdAsrqy.js";import"./GlobalAccountButton-CmEoR21v.js";import"./Enter-sVXY8qmI.js";import"./GlobalMenuButton-DNlExkap.js";import"./MenuHamburger-C-aSHA5_.js";import"./AccountSelector-BGKY4awQ.js";import"./Switch-CHgN2QZU.js";import"./AccountMenu-gaXytgsv.js";import"./GlobalMenu-DyY00_9O.js";import"./Checkmark-CqXmhnrs.js";import"./ArrowUndo-DNTrsBCI.js";import"./Globe-CHPxy7FF.js";import"./BreadcrumbsLink-OD0nSb2F.js";import"./ArrowRight-DqCWEA7H.js";import"./Footer-8BfLpNjA.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
