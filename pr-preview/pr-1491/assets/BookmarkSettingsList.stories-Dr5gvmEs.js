var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CjTVLX0J.js";import{B as a,u as d}from"./useBookmarks-B6LDI1T2.js";import{B as l}from"./BookmarkModal-jPNGRSAU.js";import{L as u}from"./Layout-DLSiGAx-.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DyQl0UH7.js";import"./BookmarkSettingsItem-DZbyOdVn.js";import"./QueryLabel-B1UB3cfm.js";import"./Plus-DW7oopwP.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./SettingsItemBase-B1Ukcnj2.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";import"./ChevronRight-B7WfXeCo.js";import"./ItemBase-DigRLYQR.js";import"./ItemLink-Dxgw-kvc.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./Typography-D5LJyQSI.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./ContextMenu-txLONgGE.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./SearchField-BoWCGyO9.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemLabel-QKtbke7Z.js";import"./FieldBase-C5zYRo5L.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./InformationSquare-DA1l9Dlv.js";import"./Pencil-Ds4gSOcY.js";import"./Trash-f0oxT1Hh.js";import"./SettingsModal-Bh9cutIH.js";import"./ModalBody-Bv7CSic6.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./ButtonGroup-CI4WR3eO.js";import"./ButtonIcon-DqZCck6e.js";import"./ButtonLabel-Bj2vcKLA.js";import"./TextField-22K0hTJ0.js";import"./SkipLink-CFVJJW-V.js";import"./CookieBanner-BoBiIGVA.js";import"./Link-CwJzganA.js";import"./Banner-CCUC8ahN.js";import"./GlobalHeader-CYRnFvVR.js";import"./useIsDesktop-CRXCxfgX.js";import"./GlobalAccountButton-CN0jJRTe.js";import"./Enter-C-VRq7pc.js";import"./GlobalMenuButton-C4Qn8CNp.js";import"./MenuHamburger-BrSo9lJ8.js";import"./AccountSelector-D_UDBNlC.js";import"./Switch-DudTedAR.js";import"./AccountMenu-BAN1_qc4.js";import"./GlobalMenu-Dx6KsJmK.js";import"./Checkmark-MZRBZVNG.js";import"./ArrowUndo-ButKzzqn.js";import"./Globe-xX74n395.js";import"./BreadcrumbsLink-BwoDhCel.js";import"./ArrowRight-DIDpPpC_.js";import"./Footer-BDn4xEy5.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
