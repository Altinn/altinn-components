var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DS_59AwM.js";import{B as a,u as d}from"./useBookmarks-dvbAfw--.js";import{B as l}from"./BookmarkModal-U1w0chHy.js";import{L as u}from"./Layout-C4w8Gd3e.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-30LDsNSn.js";import"./BookmarkSettingsItem-Dj4F_YdL.js";import"./QueryLabel-C07oFlTP.js";import"./Plus-Wv8vH7eI.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./SettingsItemBase-8GjNQu7K.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ChevronUp-DZ6JxO9u.js";import"./ChevronDown-CX1A4zpd.js";import"./ChevronRight-C7PJPgHr.js";import"./ItemBase-BrUL2VDB.js";import"./ItemLink-BrauzxFU.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./Typography-DXt4lEYU.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./ContextMenu-CCNpCnhA.js";import"./useDropdownMenuController--fJTxwjL.js";import"./Dropdown-DLABBFh7.js";import"./SearchField-CAjTntqL.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemLabel-DXVwsqWf.js";import"./FieldBase-Bv1sQ0dY.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./InformationSquare-DyP2GK92.js";import"./Pencil-BLa1rMHz.js";import"./Trash-CqvnIlMZ.js";import"./SettingsModal-C-3qMdZ6.js";import"./ModalBody-DwWBi8_C.js";import"./Section-C50awZDU.js";import"./Flex-kHR-J2An.js";import"./ButtonGroup-BVrUrJIV.js";import"./ButtonIcon-DfIk3itr.js";import"./ButtonLabel-CM1BrYjJ.js";import"./TextField-D4axFbpH.js";import"./SkipLink-B4jp4en8.js";import"./CookieBanner-D62zvcoE.js";import"./Link-DluIdYG0.js";import"./Banner-CrFenHoT.js";import"./GlobalHeader-qSkTlajx.js";import"./useIsDesktop-BLNCbIMG.js";import"./GlobalAccountButton-B87x-cA4.js";import"./Enter-BzYlsRS4.js";import"./GlobalMenuButton-DtJCYos4.js";import"./MenuHamburger-D2t_fJxS.js";import"./AccountSelector-DeuKRwyu.js";import"./Switch-UOM24JjQ.js";import"./AccountMenu-0gBoOXlr.js";import"./GlobalMenu-B_WcCU9L.js";import"./Checkmark-zqsIpaA_.js";import"./ArrowUndo-D5XHMjLO.js";import"./Globe-CZo01Odx.js";import"./BreadcrumbsLink-DdcZo00M.js";import"./ArrowRight-DdOKe7Au.js";import"./Footer-C6E5xA_w.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
