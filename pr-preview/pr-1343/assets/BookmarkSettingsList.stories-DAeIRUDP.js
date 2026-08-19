import{a7 as t}from"./iframe-F_FB4Yxl.js";import{B as a,u as n}from"./useBookmarks-C_JQParj.js";import{B as d}from"./BookmarkModal-Coa37dbI.js";import{L as c}from"./Layout-C-xnLMDU.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DGY2fmdm.js";import"./BookmarkSettingsItem-DMzuF7Dw.js";import"./QueryLabel-BcU5nQUh.js";import"./Plus-CvcVl1NJ.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./SettingsItemBase-Dfyg6Fno.js";import"./ItemMedia-CoUbiAZN.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./ChevronUp-BmFZO6Yq.js";import"./ChevronDown-CmhX0LZg.js";import"./ChevronRight-f1WSa4_L.js";import"./ItemBase-B9Rg_8_o.js";import"./ItemLink-Dh937AuZ.js";import"./ItemControls-4PJArwOE.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./Typography-BQdVTYYF.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./ContextMenu-CIGiPruo.js";import"./useDropdownMenuController-CALQpcRF.js";import"./Dropdown-Qibhj6Vz.js";import"./SearchField-XLSYMjsy.js";import"./FieldBase-DKsxkZ_u.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";import"./MenuListItem-X5TFO5En.js";import"./MenuListDivider-Cy2nuh7X.js";import"./MenuListHeading-BlfnlMHy.js";import"./MenuItem-Cx2LMlDr.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./InformationSquare-DJU8cSbx.js";import"./MenuElipsisHorizontal-d1d63Dvi.js";import"./Pencil-DfhSecaY.js";import"./Trash-FK26Fd-e.js";import"./SettingsModal-CHbp-6JA.js";import"./ModalBody-uLS_r9P8.js";import"./Section-BgR8r3RU.js";import"./Flex-QNMJxvpD.js";import"./ButtonGroup-BZH662VO.js";import"./ButtonIcon-CeLrnMM_.js";import"./ButtonLabel-ClraFuq1.js";import"./TextField-Bb9RCNOR.js";import"./SkipLink-DRkv-qzt.js";import"./CookieBanner-CWO-Qf6C.js";import"./Banner-JujsXbPS.js";import"./GlobalHeader-C811FLdV.js";import"./useIsDesktop-BZjyToB8.js";import"./GlobalAccountButton-Bz1q1Nhp.js";import"./Enter-0fKM4Pjc.js";import"./GlobalMenuButton-Dfx9Vmfc.js";import"./MenuHamburger-cCPt-O4j.js";import"./AccountSelector-DLB9fvZP.js";import"./Switch-B1D8FZID.js";import"./AccountMenu-HO-m1uDR.js";import"./GlobalMenu-C5MEt6-0.js";import"./ArrowUndo-CzLdUdgc.js";import"./Globe-DJMPhBx_.js";import"./BreadcrumbsLink-CXp5PwcS.js";import"./ArrowRight-CeZ_RGfT.js";import"./Footer-vBhtvC1O.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
