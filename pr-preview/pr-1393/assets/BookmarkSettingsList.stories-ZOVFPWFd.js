import{a7 as t}from"./iframe-DXZBp66t.js";import{B as a,u as n}from"./useBookmarks-DOXGF13u.js";import{B as d}from"./BookmarkModal-CLM6n4Gi.js";import{L as c}from"./Layout-CysC2mVo.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CLawwFGJ.js";import"./BookmarkSettingsItem-CZUOtiq1.js";import"./QueryLabel-Biq9YjMJ.js";import"./Plus-k_IuB4VT.js";import"./Heading-Dabq2F6t.js";import"./useHighlightedText-D_TdPqyJ.js";import"./SettingsItemBase-DfAAl5Xt.js";import"./ItemMedia-C0bdVmnE.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./ChevronUp-BmPa9GH0.js";import"./ChevronDown-nMZldMxX.js";import"./ChevronRight-Cf4DVjz-.js";import"./ItemBase-jUefiPXL.js";import"./ItemLink-DQt-IKdJ.js";import"./ItemControls-CKEXZGvE.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./Typography-YwBvvLgA.js";import"./MagnifyingGlass-D2DSD_Zc.js";import"./ContextMenu-BUJ5Tr27.js";import"./useDropdownMenuController-DlFwuKli.js";import"./Dropdown-C18yy08p.js";import"./SearchField-Bxud3zBq.js";import"./FieldBase-Cs4Gpo93.js";import"./Field-awsdGPJZ.js";import"./Label-Byvm_JcV.js";import"./Input--Cg-6oUs.js";import"./MenuListItem-Clm2r-Mx.js";import"./MenuListDivider-CFvZmzp8.js";import"./MenuListHeading-vVix4BjR.js";import"./MenuItem-iQrBISbT.js";import"./Checkmark-B8V7JmGk.js";import"./ItemLabel-ErnjkFel.js";import"./InformationSquare-CBzXkt4t.js";import"./MenuElipsisHorizontal-DFviO9eH.js";import"./Pencil-DooY5P5c.js";import"./Trash-BVvBgCOa.js";import"./SettingsModal-ClZOd0n6.js";import"./ModalBody-CKaAr9E1.js";import"./Section-CFAnjMLz.js";import"./Flex-D7Hg4_mS.js";import"./ButtonGroup-B2DxSKEE.js";import"./ButtonIcon-qbUbLnzO.js";import"./ButtonLabel-BlR3YqzS.js";import"./TextField-i7J-tqY2.js";import"./SkipLink-BO7qyG7b.js";import"./CookieBanner-DwmVMdaX.js";import"./Banner-xz-lB1OG.js";import"./GlobalHeader-C96Wb7sY.js";import"./useIsDesktop-Cud2DW9w.js";import"./GlobalAccountButton-Bg057Jyv.js";import"./Enter-EW9WI_Pj.js";import"./GlobalMenuButton-B2YEDLcR.js";import"./MenuHamburger-DnF-IkV4.js";import"./AccountSelector-DHpuqMB5.js";import"./Switch-1iQtSxG7.js";import"./AccountMenu-FoCE235I.js";import"./GlobalMenu-DzxHPD6o.js";import"./ArrowUndo-BqzKGiFR.js";import"./Globe-Cjrb3YCu.js";import"./BreadcrumbsLink-CoaUA2nb.js";import"./ArrowRight-CFon2rf8.js";import"./Footer-BGsrA2VR.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
