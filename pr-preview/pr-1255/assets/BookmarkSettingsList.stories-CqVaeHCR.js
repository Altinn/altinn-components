import{a7 as t}from"./iframe-Dm8TtyEm.js";import{B as a,u as n}from"./useBookmarks-DNKkkmok.js";import{B as d}from"./BookmarkModal-CRbI8ks6.js";import{L as c}from"./Layout-DCgY1UDH.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C6oFKHtp.js";import"./BookmarkSettingsItem-BdBPnYZ4.js";import"./QueryLabel-D-jYG4Lg.js";import"./Plus-C1QsrUU0.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./SettingsItemBase-CyHCeD-o.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./ChevronUp-Bb-oLMAx.js";import"./ChevronDown-DmzEbvsc.js";import"./ChevronRight-C5Kx_riS.js";import"./ItemBase-DBsEIeJ_.js";import"./ItemLink-Cf5EIcQf.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./Typography-DQcL3Ryl.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./ContextMenu-WVnf3R79.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./SearchField-BpAQrR42.js";import"./FieldBase-CGX4UQb4.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./MenuElipsisHorizontal-CbjX2CGq.js";import"./Pencil-BxLrlvXI.js";import"./Trash-RbVwKsoy.js";import"./SettingsModal-024qYl2I.js";import"./ModalBody-BPhOhrPb.js";import"./Section-BrWI6aLb.js";import"./Flex-Cpk93h3c.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonIcon-DDq-LKvW.js";import"./ButtonLabel-BVYKz0oP.js";import"./TextField-Bh_yj_hG.js";import"./SkipLink-dA1an7OV.js";import"./Banner-7lwLg6nV.js";import"./GlobalHeader-ONe65a5C.js";import"./useIsDesktop-PfKLad4r.js";import"./GlobalAccountButton-CNPdUPYy.js";import"./Enter-Blu4zaop.js";import"./GlobalMenuButton-BK6FRizj.js";import"./MenuHamburger-B-zrC2zx.js";import"./AccountSelector-_-HMhAyF.js";import"./Switch-DFtj9zqM.js";import"./AccountMenu-DGBBpGC3.js";import"./GlobalMenu-DLmJOPU5.js";import"./ArrowUndo-DB164unm.js";import"./Globe-gYssCq7T.js";import"./BreadcrumbsLink-Cmiur_RN.js";import"./ArrowRight-BSwHEhfL.js";import"./Footer-CjfYJLnz.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
