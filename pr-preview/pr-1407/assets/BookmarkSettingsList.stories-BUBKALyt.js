var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-CmcSEjvS.js";import{B as a,u as d}from"./useBookmarks-CPAC6T_y.js";import{B as l}from"./BookmarkModal-Ba2F3NSj.js";import{L as u}from"./Layout-CPXcIC8M.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C4pen0si.js";import"./BookmarkSettingsItem-Ce8FDfyV.js";import"./QueryLabel-6w8JNXyd.js";import"./Plus-DVOeMTJ7.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./SettingsItemBase-DTDRF-eI.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./ChevronRight-B5wtiA4y.js";import"./ItemBase-DGtB-EKc.js";import"./ItemLink-CfNuON4u.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./Typography-sASlV-kd.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./ContextMenu-Bo2fqWGf.js";import"./useDropdownMenuController-CjF5utG_.js";import"./Dropdown-BXdn9jDY.js";import"./SearchField-DQeX1ZYV.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemLabel-s_xPF5R8.js";import"./FieldBase-C-IkhlpM.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./MenuElipsisHorizontal-DcPMVctg.js";import"./Pencil-XLzYDIhm.js";import"./Trash-BCBK84Mw.js";import"./SettingsModal-CfdN6cEJ.js";import"./ModalBody-_pzP4G9c.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./ButtonGroup-Cpml5GDI.js";import"./ButtonIcon-qcPphlSi.js";import"./ButtonLabel-C3jzDSjq.js";import"./TextField-DFisW25Z.js";import"./SkipLink-C3lmtsO4.js";import"./CookieBanner-C288A3qi.js";import"./Link-BjH1AWT3.js";import"./Banner-CREzkBEl.js";import"./GlobalHeader-DFDdUqbN.js";import"./useIsDesktop-BjBT6U_c.js";import"./GlobalAccountButton-DwtAY2mj.js";import"./Enter-FbOIMnu2.js";import"./GlobalMenuButton-YT_8PTBw.js";import"./MenuHamburger-C5VZ8Cb8.js";import"./AccountSelector-DJEPs5Gp.js";import"./Switch-DKqmfKoy.js";import"./AccountMenu-B1ePtIqN.js";import"./GlobalMenu-HlwMHmKy.js";import"./Checkmark-CgRfi7IM.js";import"./ArrowUndo-iwGs3R4E.js";import"./Globe-Ci7WMHae.js";import"./BreadcrumbsLink-B_SrXzGV.js";import"./ArrowRight-DrFP_GgV.js";import"./Footer-UbSvmezm.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),qo=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,qo as __namedExportsOrder,Oo as default};
