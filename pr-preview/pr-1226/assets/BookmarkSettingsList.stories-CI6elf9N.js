import{a7 as t}from"./iframe-Ci8DJ-6R.js";import{B as a,u as n}from"./useBookmarks-Dk3mW6TJ.js";import{B as d}from"./BookmarkModal-DFod5_df.js";import{L as c}from"./Layout-EZqSkW4f.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-7RMszhcf.js";import"./BookmarkSettingsItem-DEa86Yfi.js";import"./QueryLabel-Dg-wTRTc.js";import"./Plus-5W3QRt0z.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./SettingsItemBase-B7ADsorz.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./ChevronUp-aSivYnb8.js";import"./ChevronDown-DepqY6FK.js";import"./ChevronRight-BEnuMmPo.js";import"./ItemBase-B5l2T3D-.js";import"./ItemLink-DgdDmtkg.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./Typography-C-nn41yV.js";import"./MagnifyingGlass--VnpSKzI.js";import"./ContextMenu-DXVFrfFn.js";import"./useDropdownMenuController-C7yQw1zK.js";import"./Dropdown-DPTyogAf.js";import"./SearchField-BI6hQSM3.js";import"./FieldBase-CJmJ_FUR.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./MenuElipsisHorizontal-CrejXsZ9.js";import"./Pencil-VFlwHoyG.js";import"./Trash-C8Gu1dIX.js";import"./SettingsModal-DXXu6Uto.js";import"./ModalBody-r5nbGSQx.js";import"./Section-C3vz0YaC.js";import"./Flex-UXtVwom-.js";import"./ButtonGroup-BYverAEg.js";import"./ButtonIcon-DbIq7rLn.js";import"./ButtonLabel-eTtLvekB.js";import"./TextField-Cb5Akx0Q.js";import"./SkipLink-QsLUwNBd.js";import"./Banner-BM99tWId.js";import"./GlobalHeader-D9_ebSdi.js";import"./useIsDesktop-BHChZWCT.js";import"./GlobalAccountButton-nts2RdNV.js";import"./Enter-DGbkUpmN.js";import"./GlobalMenuButton-DiaTFD82.js";import"./MenuHamburger-wLQDd0FF.js";import"./AccountSelector-KUwZjk4j.js";import"./Switch-C_mJJsLr.js";import"./AccountMenu-6piFieQ8.js";import"./GlobalMenu-DWxznB32.js";import"./ArrowUndo-vXvPRQCY.js";import"./Globe-D7e39i-c.js";import"./BreadcrumbsLink-CG6bohXP.js";import"./ArrowRight-D8Hr5Ggc.js";import"./Footer-PvMpWrFK.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
