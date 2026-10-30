var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-BenRi1VF.js";import{B as a,u as d}from"./useBookmarks-DVDZXfOt.js";import{B as l}from"./BookmarkModal-Df5vbQD3.js";import{L as u}from"./Layout-BaFIQMFl.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DrYFOky6.js";import"./BookmarkSettingsItem-CwIWcYZ5.js";import"./QueryLabel-D1OISUcv.js";import"./Plus-EZwUhJBV.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./SettingsItemBase-BVk4INCK.js";import"./ItemMedia-BMPM4W1l.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./ChevronRight-B0Rwz_dW.js";import"./ItemBase-DRcUVeh_.js";import"./ItemLink-C36VfNvp.js";import"./ItemControls-C62YDQLR.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./Typography-CY6bfOBd.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./ContextMenu-DWCYTvGm.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./SearchField-BPBX14Ku.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemLabel-lIFyccob.js";import"./FieldBase-Blf3tEjx.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./MenuListDivider-v6fvRPAn.js";import"./InformationSquare-g2viFsxF.js";import"./MenuElipsisHorizontal-DAMpcxKP.js";import"./Pencil-BiBSexrg.js";import"./Trash-D1ucPBDs.js";import"./SettingsModal-S5lNaw-2.js";import"./ModalBody-BDISOh7_.js";import"./Section-DdVAzkd7.js";import"./Flex-BtqRQeFd.js";import"./ButtonGroup-DfExJwTd.js";import"./ButtonIcon-DzVR_6eI.js";import"./ButtonLabel-Dc0yF6DK.js";import"./TextField-FwFzsLvU.js";import"./SkipLink-9tkRb9KF.js";import"./CookieBanner-BI95DtPT.js";import"./Link-Da3i2jr6.js";import"./Banner-BU1fzH68.js";import"./GlobalHeader-C_LFs9_B.js";import"./useIsDesktop-Dbk7V61U.js";import"./GlobalAccountButton-CVgp1u6R.js";import"./Enter-BTbdLEvm.js";import"./GlobalMenuButton-BYMAxANz.js";import"./MenuHamburger-ByVQVVUg.js";import"./AccountSelector-BlVpD02u.js";import"./Switch-D8Udb4vC.js";import"./AccountMenu-jsP8YXhm.js";import"./GlobalMenu-DAsIO-EP.js";import"./Checkmark-Dysfm6au.js";import"./ArrowUndo-CMj0IFjQ.js";import"./Globe-DUdAh6-W.js";import"./BreadcrumbsLink-BYA8JUuU.js";import"./ArrowRight-C2GQq3jg.js";import"./Footer-CzHwnD-6.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),qo=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
