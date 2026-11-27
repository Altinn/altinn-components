var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DV7mfmQb.js";import{B as a,u as d}from"./useBookmarks-wuqoKg4Y.js";import{B as l}from"./BookmarkModal-CSJsn_uy.js";import{L as u}from"./Layout-BK0w3PMD.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFlkLZpJ.js";import"./BookmarkSettingsItem-7XSL_9cF.js";import"./QueryLabel-Cj9siz0V.js";import"./Plus-sUzSSeT3.js";import"./Heading-qQ_NecB3.js";import"./useHighlightedText-DBlSdXli.js";import"./SettingsItemBase-COVJBOeY.js";import"./ItemMedia-CxtJxXCZ.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./ChevronUp-DkTvQyLF.js";import"./ChevronDown-M6oDtO0s.js";import"./ChevronRight-y8OcgkDI.js";import"./ItemBase-bFDQRcxo.js";import"./ItemLink-BKByZLmO.js";import"./ItemControls-DXTFa1Wt.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./Typography-DQaNXpVK.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./ContextMenu-B5CXTleL.js";import"./useDropdownMenuController-D9bRT85Q.js";import"./Dropdown-B1DFc__X.js";import"./SearchField-DyUxixY-.js";import"./MenuListItem-BNAb4_WQ.js";import"./MenuListDivider-uDPIzbn6.js";import"./MenuItem-_arBrpFq.js";import"./CheckboxUncheckedIcon-W9wh7zhg.js";import"./RadioUncheckedIcon-DHe0o4Rd.js";import"./ItemLabel-DhOVpPar.js";import"./FieldBase-BPbtcuhV.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";import"./InformationSquare-Z-eNQMTk.js";import"./Pencil-DZXooZR4.js";import"./Trash-C1yoK2W5.js";import"./SettingsModal-CdI5wiK5.js";import"./ModalBody-33j9noUT.js";import"./Section-BXLF8mP1.js";import"./Flex-DFf5qQ3F.js";import"./ButtonGroup-D14KKgW3.js";import"./ButtonIcon-DlYSIism.js";import"./ButtonLabel-BoFyGOO4.js";import"./TextField-BMcHuUVO.js";import"./SkipLink-DWhpD2JE.js";import"./CookieBanner-DIELrxAP.js";import"./Link-td4tSMf0.js";import"./Banner-BYfqFn6r.js";import"./GlobalHeader-DXyqSPVs.js";import"./useIsDesktop-DCLIk5lP.js";import"./GlobalAccountButton-CxEaXp2V.js";import"./Enter-v_RE-Mu9.js";import"./GlobalMenuButton-BQS4sS8d.js";import"./MenuHamburger-CxPazaXX.js";import"./AccountSelector-BHau9V2C.js";import"./Switch-DNLwrdXr.js";import"./AccountMenu-DM2EBnSH.js";import"./GlobalMenu-Qbd1zlxn.js";import"./Checkmark-B-M1QuTd.js";import"./ArrowUndo-m6YZv1rE.js";import"./Globe-DaOEOAky.js";import"./BreadcrumbsLink-CBwmeyQz.js";import"./ArrowRight-C_osjboa.js";import"./Footer-BiqT7Jqb.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
