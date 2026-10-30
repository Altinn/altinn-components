var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-BEPBrhYh.js";import{B as a,u as d}from"./useBookmarks-anLu_hdx.js";import{B as l}from"./BookmarkModal-9q83jMUf.js";import{L as u}from"./Layout-DCDXVfbM.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B9HVKiow.js";import"./BookmarkSettingsItem-DDB39L0h.js";import"./QueryLabel-B4VYwWAl.js";import"./Plus-DAOB77qZ.js";import"./Heading-BqUC1GBi.js";import"./useHighlightedText-DWAIm2UF.js";import"./SettingsItemBase-DRG8OS7r.js";import"./ItemMedia-CYSGtJhU.js";import"./Avatar-qDEqb0bI.js";import"./AvatarGroup-Gy14OH0C.js";import"./ChevronUp-Bk9rr-UB.js";import"./ChevronDown-BSSTTv90.js";import"./ChevronRight-BrDrfe7a.js";import"./ItemBase-A6nm7hoq.js";import"./ItemLink-7n7ztO7T.js";import"./ItemControls-CZ-8cGPW.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./Typography-_e1X1oy3.js";import"./MagnifyingGlass-l6jgUFkE.js";import"./ContextMenu-CekCrG_1.js";import"./useDropdownMenuController-DdlZblN1.js";import"./Dropdown-CldWVtsu.js";import"./SearchField-r0pyJJeA.js";import"./MenuListItem-2YHve_kq.js";import"./MenuListHeading-T5KLvVq-.js";import"./MenuItem-H_qy6f71.js";import"./Checkmark-QQMx0dPf.js";import"./ItemLabel-BAi-NqVp.js";import"./FieldBase-BC5T5LJl.js";import"./Field-DhJVWLwL.js";import"./Label-jwx91OTT.js";import"./Input-DvI4J5FV.js";import"./MenuListDivider-DmSDyTka.js";import"./InformationSquare-D8scBrIA.js";import"./MenuElipsisHorizontal-BM49I1I7.js";import"./Pencil-CdQx39Wx.js";import"./Trash-C1lJDto_.js";import"./SettingsModal-R8oYHUmp.js";import"./ModalBody-3_P61XP4.js";import"./Section-Dz1fz0TX.js";import"./Flex-x8IfBbMo.js";import"./ButtonGroup-7udc4H2h.js";import"./ButtonIcon-RzrWxu6x.js";import"./ButtonLabel-BsY3dJmG.js";import"./TextField-DARZj023.js";import"./SkipLink-CkAz1fvp.js";import"./CookieBanner-Cl_qHuXI.js";import"./Link-BR4Ky0AC.js";import"./Banner-FQfjiqcM.js";import"./GlobalHeader-C6MfFN6C.js";import"./useIsDesktop-BW8ld6Da.js";import"./GlobalAccountButton-CV724ZOt.js";import"./Enter-eQD-eOZr.js";import"./GlobalMenuButton-BBIPux6p.js";import"./MenuHamburger-CXEb9Ato.js";import"./AccountSelector-DuBTmlxF.js";import"./Switch-kGpFVWzx.js";import"./AccountMenu-BFJ5YJHn.js";import"./GlobalMenu-CKxZKQb2.js";import"./ArrowUndo-Bn6ibvxZ.js";import"./Globe-IgiMzoZ3.js";import"./BreadcrumbsLink-C0C6OCT3.js";import"./ArrowRight-CdAaftPP.js";import"./Footer-DxQXXNlI.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
