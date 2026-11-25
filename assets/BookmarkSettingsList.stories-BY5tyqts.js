var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-BW6sNfUG.js";import{B as a,u as d}from"./useBookmarks-CUHHh3eo.js";import{B as l}from"./BookmarkModal-8TgXwt8U.js";import{L as u}from"./Layout-BRGO3Pxh.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-uJdjEIIP.js";import"./BookmarkSettingsItem-DXfoRzl_.js";import"./QueryLabel-RFsuRDbV.js";import"./Plus-CdPXJ-Lc.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./SettingsItemBase-D0ADEhJm.js";import"./ItemMedia-C8rbfA3l.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";import"./ChevronRight-DCXIgdRg.js";import"./ItemBase-CfaNBgoH.js";import"./ItemLink-BFgdINRy.js";import"./ItemControls-Bqaen0yJ.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./Typography-DluWU8As.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./ContextMenu-Ci0D4hVi.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./SearchField--GRE4W__.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemLabel-Dcm3mA4k.js";import"./FieldBase-CiEo5wf3.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./InformationSquare-1mOGr1dD.js";import"./Pencil-BGM-ab9r.js";import"./Trash-V_KyvxF_.js";import"./SettingsModal-CPgr95ko.js";import"./ModalBody-iaAxc7Vl.js";import"./Section-C6OUO-lD.js";import"./Flex-Ws1WKTNd.js";import"./ButtonGroup-CkPO8wDs.js";import"./ButtonIcon-ByUF5niU.js";import"./ButtonLabel-ByUlEqji.js";import"./TextField-B3MTsir2.js";import"./SkipLink-Vo-PXquq.js";import"./CookieBanner-CiOG0Kpd.js";import"./Link-Bp8Nw_8-.js";import"./Banner-DHc3Yjej.js";import"./GlobalHeader-Dd8WtTln.js";import"./useIsDesktop-K1BK9pQC.js";import"./GlobalAccountButton-BjtDDNLZ.js";import"./Enter-Dt6b_6kn.js";import"./GlobalMenuButton-C4dWsTVa.js";import"./MenuHamburger-DnvsbnfP.js";import"./AccountSelector-Dd-cE7hX.js";import"./Switch-BQQXs8vx.js";import"./AccountMenu-eYdaPZUA.js";import"./GlobalMenu-DMhb8QD9.js";import"./Checkmark-Br7Bq_3w.js";import"./ArrowUndo-gaLA-SPG.js";import"./Globe-fpE-1Baj.js";import"./BreadcrumbsLink-XSdj1u1V.js";import"./ArrowRight-JAuvZFV7.js";import"./Footer-GDlyG5dh.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
