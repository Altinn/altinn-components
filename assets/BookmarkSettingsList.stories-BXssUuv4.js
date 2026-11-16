var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DmXJhoHi.js";import{B as a,u as d}from"./useBookmarks-DmBquCGU.js";import{B as l}from"./BookmarkModal-CAeDMcLp.js";import{L as u}from"./Layout-BNEsenvv.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CAAj79LJ.js";import"./BookmarkSettingsItem-BnhyQO4y.js";import"./QueryLabel-D8Z-pXBg.js";import"./Plus-B95oMHgF.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./SettingsItemBase-CiqW82Hr.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ChevronUp-kg_frLlM.js";import"./ChevronDown-CCUi9si5.js";import"./ChevronRight-BBhULSEW.js";import"./ItemBase-DxatjkN9.js";import"./ItemLink-BEcGVWl4.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./Typography-TuByLUlM.js";import"./MagnifyingGlass-CDTvYECp.js";import"./ContextMenu-ONCJp8MR.js";import"./useDropdownMenuController-AOASv4wb.js";import"./Dropdown-CroQAroQ.js";import"./SearchField-CmQy5YNq.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuListDivider-DKZNTDIg.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemLabel-D6letihH.js";import"./FieldBase-BmJ_0UFe.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./InformationSquare-Cf67cLsl.js";import"./Pencil-GUDMTPOZ.js";import"./Trash-xpT0Cazm.js";import"./SettingsModal-CSapL9iW.js";import"./ModalBody-BU-B0KnO.js";import"./Section-Db3Vzokt.js";import"./Flex-B-7ly2La.js";import"./ButtonGroup-BIAjr8pe.js";import"./ButtonIcon-CnF9Iw1q.js";import"./ButtonLabel-DJ2eDReA.js";import"./TextField-BxIncV3C.js";import"./SkipLink-BxnEsoeu.js";import"./CookieBanner-DZqY9auT.js";import"./Link-BjqOX3GS.js";import"./Banner-BcZHwV-S.js";import"./GlobalHeader-BpNPcjS5.js";import"./useIsDesktop-D83JTRia.js";import"./GlobalAccountButton-DM2LTbX6.js";import"./Enter-DUaYSprT.js";import"./GlobalMenuButton-BweM8LWf.js";import"./MenuHamburger-yvSkcOAR.js";import"./AccountSelector-w020BGct.js";import"./Switch-BZW1Dg-b.js";import"./AccountMenu-CsFhDjFt.js";import"./GlobalMenu-Bbgknqne.js";import"./Checkmark-DUuS217X.js";import"./ArrowUndo-B2pBTWYN.js";import"./Globe-D0j6prq4.js";import"./BreadcrumbsLink-Cb9za7U9.js";import"./ArrowRight-DuS0zOcP.js";import"./Footer-B548l57S.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
