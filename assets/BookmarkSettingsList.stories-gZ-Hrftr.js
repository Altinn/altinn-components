var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-qf9-WDF6.js";import{B as a,u as d}from"./useBookmarks-DdsH7N9c.js";import{B as l}from"./BookmarkModal-BgKj1WbB.js";import{L as u}from"./Layout-CSnqG8x3.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DZRK4ukY.js";import"./BookmarkSettingsItem-Bk_FjZU6.js";import"./QueryLabel-BOHBnPIE.js";import"./Plus-BtfN9nMF.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./SettingsItemBase-C_rg0cBx.js";import"./ItemMedia-Fak15njE.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./ChevronUp-eh4muoQm.js";import"./ChevronDown-DGrlTQ0v.js";import"./ChevronRight-NAoaHsS_.js";import"./ItemBase-D6prNm16.js";import"./ItemLink-BIW48rc2.js";import"./ItemControls-BmhBXfnl.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./Typography-BcM5UJCL.js";import"./MagnifyingGlass-Cdozzsty.js";import"./ContextMenu-CTJnsyVJ.js";import"./useDropdownMenuController-CAFbDRJV.js";import"./Dropdown-uPy0PMPK.js";import"./SearchField-_nVMBmov.js";import"./MenuListItem-DipxFI8g.js";import"./MenuListDivider-jbpIOTgw.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemLabel-99ZX_KO1.js";import"./FieldBase-D7ZJbpSW.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./InformationSquare-Diuvkxkj.js";import"./Pencil-I9HQNCfk.js";import"./Trash-BZaaSweo.js";import"./SettingsModal-FCkxCcqJ.js";import"./ModalBody-DN9VxJSA.js";import"./Section-ChrYIfRO.js";import"./Flex-CKfD6hy-.js";import"./ButtonGroup-DXN6Nzfu.js";import"./ButtonIcon-R8pdQrM7.js";import"./ButtonLabel-BM87ZlED.js";import"./TextField-CV6k6a3U.js";import"./SkipLink-Bg14e_ii.js";import"./CookieBanner-CUQkNZM8.js";import"./Link-CQZsL-OO.js";import"./Banner-DxeQHfsW.js";import"./GlobalHeader-CFG6zT8I.js";import"./useIsDesktop-BRT8QPRE.js";import"./GlobalAccountButton-BqeBlZWz.js";import"./Enter-BpHTk3PW.js";import"./GlobalMenuButton-DbdbRywD.js";import"./MenuHamburger-BHbrSeUX.js";import"./AccountSelector-BFArgWJU.js";import"./Switch--rdxT6CY.js";import"./AccountMenu-DNB1BImf.js";import"./GlobalMenu-CMrJlHCd.js";import"./Checkmark-B3HuJqdN.js";import"./ArrowUndo-DrB_qkGV.js";import"./Globe-DO9_UsMD.js";import"./BreadcrumbsLink-DKa8_fUt.js";import"./ArrowRight-e4eyEntm.js";import"./Footer-TeWfJg9L.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
