var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-xlSYDLmX.js";import{B as a,u as d}from"./useBookmarks-BYUL0KBH.js";import{B as l}from"./BookmarkModal-yH7bv6lx.js";import{L as u}from"./Layout-DLGCtKJK.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C7Dhr05-.js";import"./BookmarkSettingsItem-DneIkLgl.js";import"./QueryLabel-B1YmIHq2.js";import"./Plus-B94II9lJ.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./SettingsItemBase-CebRWWIM.js";import"./ItemMedia-DF0c3SDh.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./ItemBase-D6wd74Ed.js";import"./ItemLink-DzpDCAH4.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./Typography-CBKRdQ-b.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./ContextMenu-DIOKC6O7.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./SearchField-Cm1bebf2.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemLabel-eTSb-Z0L.js";import"./FieldBase-CKEKDcDW.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./InformationSquare-DlLj2oH8.js";import"./Pencil-Ka3OhVM5.js";import"./Trash-Dtf6X4Tk.js";import"./SettingsModal-C1-SabfD.js";import"./ModalBody-2B3xwQox.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./ButtonGroup-CmZy2FTH.js";import"./ButtonIcon-C0Iduzzq.js";import"./ButtonLabel-DtsaJMNL.js";import"./TextField-CPjrIzns.js";import"./SkipLink-DbFcsqGo.js";import"./CookieBanner-Bv33FMRA.js";import"./Link-Dd0FvdCr.js";import"./Banner-Dy_L3DR8.js";import"./GlobalHeader-CPP82mBY.js";import"./GlobalAccountButton-uCDrrwKM.js";import"./Enter-BB3yJ8-F.js";import"./GlobalMenuButton-BmrRLFGS.js";import"./MenuHamburger-Di3wOkSc.js";import"./AccountSelector-BEsgKni_.js";import"./Switch-GVxp4VPn.js";import"./AccountMenu-PFjNuNzI.js";import"./GlobalMenu-i-XbP5Gh.js";import"./Checkmark-opEEWy2T.js";import"./ArrowUndo-5Pl34Luc.js";import"./Globe-5mzhGoRG.js";import"./BreadcrumbsLink-CGJPd532.js";import"./ArrowRight-BtJExjIH.js";import"./Footer-oYNbV1h3.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
