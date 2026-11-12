var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-DdPcKG0O.js";import{B as a,u as d}from"./useBookmarks-CkFd9k9Z.js";import{B as l}from"./BookmarkModal-D02YA16P.js";import{L as u}from"./Layout-abpSdaPk.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B_zDT5uM.js";import"./BookmarkSettingsItem-BouIKIy2.js";import"./QueryLabel-DkMYvJ8o.js";import"./Plus-DSTjtDMb.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./SettingsItemBase-BEidFSPz.js";import"./ItemMedia-BsdmKVrj.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./ChevronUp-DhLREmKD.js";import"./ChevronDown-Bg2scdYv.js";import"./ChevronRight-Cmdt4Cn7.js";import"./ItemBase-Dx89ucny.js";import"./ItemLink-DgNk0tuY.js";import"./ItemControls-Bf5MqGaN.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./Typography-D4dRQ14t.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./ContextMenu-DTBMpttb.js";import"./useDropdownMenuController-C4DxR2qZ.js";import"./useIsDesktop-Db5oQl2d.js";import"./Dropdown-COjWQps0.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemLabel-vi7acRQa.js";import"./FieldBase-V879Q4R4.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./InformationSquare-RfPtjfhK.js";import"./Pencil-D505gK5y.js";import"./Trash-CS2QUAEY.js";import"./SettingsModal-CIV3DCAg.js";import"./ModalBody-ClEfishX.js";import"./Section-C3SZ48VL.js";import"./Flex-Cxkl80LA.js";import"./ButtonGroup-7J0PZlIk.js";import"./ButtonLabel-Dt_XRmzl.js";import"./TextField-oWVFtQ_r.js";import"./SkipLink-XB2ueEYu.js";import"./CookieBanner-DqZLgQb-.js";import"./Link-BOlpc0iE.js";import"./Banner-CZ375lTk.js";import"./GlobalHeader-AGgSr_4d.js";import"./GlobalAccountButton-YjQ0C6XK.js";import"./Enter-HqcRumc5.js";import"./GlobalMenuButton-sxX9OeGz.js";import"./MenuHamburger-D6OlWMiZ.js";import"./AccountSelector-D-sw94Xn.js";import"./Switch-GG9A6A0W.js";import"./AccountMenu-B95Q69sF.js";import"./GlobalMenu-JRG16Ahg.js";import"./Checkmark-CRn1GEhZ.js";import"./ArrowUndo-Bxuz6WKg.js";import"./Globe-BDvt3sjf.js";import"./BreadcrumbsLink-DBNxqeKE.js";import"./ArrowRight-Dgw6wxdS.js";import"./Footer-rqwLtXl1.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
