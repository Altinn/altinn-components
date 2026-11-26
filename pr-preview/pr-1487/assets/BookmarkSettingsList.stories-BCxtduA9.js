var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-DwHkmT0f.js";import{B as a,u as d}from"./useBookmarks-BmOFAMZJ.js";import{B as l}from"./BookmarkModal-X-dy5m6Y.js";import{L as u}from"./Layout-BQsHSQbg.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D8t-dYWs.js";import"./BookmarkSettingsItem-CQo-tjNr.js";import"./QueryLabel-BqXpqRm2.js";import"./Plus-Ridmc-ni.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./SettingsItemBase-CKmbFkX3.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";import"./ChevronRight-B3vSh-CA.js";import"./ItemBase-Ck4UvHPX.js";import"./ItemLink-32-6kvwj.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./Typography-BKrXxvhH.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./ContextMenu-CEbN3Pip.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./SearchField-BE9AHyrE.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemLabel-hjkm06Ot.js";import"./FieldBase-CpcKIkx4.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./InformationSquare-CaoePqPY.js";import"./Pencil-By4gU6oQ.js";import"./Trash-B4bAWeXV.js";import"./SettingsModal-CgPo0XsY.js";import"./ModalBody-DRCMelZn.js";import"./Section-BzvI0xQr.js";import"./Flex-DUzkq__j.js";import"./ButtonGroup-DYVDsbWZ.js";import"./ButtonIcon-BjFimnAA.js";import"./ButtonLabel-ByPzwwTy.js";import"./TextField-DuUrFaPE.js";import"./SkipLink-BHSNcdDG.js";import"./CookieBanner-BNxN1y6b.js";import"./Link-CBokgU09.js";import"./Banner-Bf1wdY8O.js";import"./GlobalHeader-Bg7Xr32E.js";import"./useIsDesktop-bDdggvni.js";import"./GlobalAccountButton-BCPzrpzR.js";import"./Enter-DzGA_rgK.js";import"./GlobalMenuButton-siMtATqH.js";import"./MenuHamburger-Cqjxk-FQ.js";import"./AccountSelector-fntBMO38.js";import"./Switch-BbEJ57Wz.js";import"./AccountMenu-COjSW_5W.js";import"./GlobalMenu-CxMd4U83.js";import"./Checkmark-DmU4T3LZ.js";import"./ArrowUndo-COZnsPlQ.js";import"./Globe-Bx9qVXn3.js";import"./BreadcrumbsLink-uezuQMUt.js";import"./ArrowRight-PJmGhzt9.js";import"./Footer-Bz1uqfW8.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
