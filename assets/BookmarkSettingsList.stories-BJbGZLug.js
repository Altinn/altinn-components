var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-Cf4UALw8.js";import{B as a,u as d}from"./useBookmarks-zU-RkRxo.js";import{B as l}from"./BookmarkModal-DZdQYYHs.js";import{L as u}from"./Layout-2Z_4kzXe.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CfWidWjC.js";import"./BookmarkSettingsItem-CcNjhIWm.js";import"./QueryLabel-BAJfrwFL.js";import"./Plus-sEq00D2Y.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./SettingsItemBase-zn0lCP7Y.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./Typography-CsGx0b_o.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./ContextMenu-DZnF37e0.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemLabel-C9vfNdbz.js";import"./FieldBase-DSaLFDie.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./InformationSquare-uRwoVJB-.js";import"./Pencil-01g24vDz.js";import"./Trash-B_p5hHVd.js";import"./SettingsModal-YzyxvoqZ.js";import"./ModalBody-D4pYrcnM.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonIcon-DQVaPbHm.js";import"./ButtonLabel-DhfYOY4K.js";import"./TextField-DiuOYn3x.js";import"./SkipLink-CgCDDMsC.js";import"./CookieBanner-BQBopbaZ.js";import"./Link-ApESsW5M.js";import"./Banner-CE7cR7yb.js";import"./GlobalHeader-DtmiGd7W.js";import"./useIsDesktop-B8RqtL_d.js";import"./GlobalAccountButton-DxY6wyot.js";import"./Enter-KlBUq896.js";import"./GlobalMenuButton-W3knbd65.js";import"./MenuHamburger-DwSFJE3g.js";import"./AccountSelector-CSU8nWht.js";import"./Switch-DuCdX2cJ.js";import"./AccountMenu-Ba6_WV3b.js";import"./GlobalMenu-Y6Sa8-oh.js";import"./Checkmark-Dha_gRss.js";import"./ArrowUndo-ucfdJHsw.js";import"./Globe-C1KW9qlQ.js";import"./BreadcrumbsLink-zy9RVUNR.js";import"./ArrowRight-C3hJKAqP.js";import"./Footer-BL-GZqKp.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
