import{a7 as t}from"./iframe-CD11FhkO.js";import{B as a,u as n}from"./useBookmarks-D1qrF1A6.js";import{B as d}from"./BookmarkModal-BHQs5VV9.js";import{L as c}from"./Layout-BScoOvrU.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-PhHDaKm4.js";import"./BookmarkSettingsItem-DoI_Swl5.js";import"./QueryLabel-0SXHX8FH.js";import"./Plus-CAOm99TL.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./SettingsItemBase-DhVahffU.js";import"./ItemMedia-Da1KaWKQ.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./ChevronUp-BuZXJZ6x.js";import"./ChevronDown-Z-rCEWMI.js";import"./ChevronRight-DorAbKkm.js";import"./ItemBase-B_lF_RDH.js";import"./ItemLink-D4O7kIZI.js";import"./ItemControls-BM5eXiWu.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./Typography-CsSTPRBO.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./ContextMenu-DfXjvmV5.js";import"./useDropdownMenuController-Ggnaqgq1.js";import"./Dropdown-C71BxREr.js";import"./SearchField-DTHysOBi.js";import"./FieldBase-BjWFGCCi.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuListDivider-C8FBE3A1.js";import"./MenuListHeading-CEMMnaXl.js";import"./MenuItem-Q62E5xuF.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./InformationSquare-885_pUeZ.js";import"./MenuElipsisHorizontal-CFTAtZFs.js";import"./Pencil-Dd6CRKuL.js";import"./Trash-wzs9uMoD.js";import"./SettingsModal-CN3EwZPn.js";import"./ModalBody-DMNSFyMM.js";import"./Section-Cxsr3_z_.js";import"./Flex-BFs7VkGF.js";import"./ButtonGroup-CI_suWzv.js";import"./ButtonIcon-DSZ34whE.js";import"./ButtonLabel-CGB1_n10.js";import"./TextField-DiXyD-K6.js";import"./SkipLink-DCRaymoV.js";import"./CookieBanner-ud0JRUH0.js";import"./Banner-BAvaKpH7.js";import"./GlobalHeader-uBaOBhlP.js";import"./useIsDesktop-DOnYt3KQ.js";import"./GlobalAccountButton-CN7oEsou.js";import"./Enter-BNdrBqs7.js";import"./GlobalMenuButton-SR9h2YBR.js";import"./MenuHamburger-D8TsZxA8.js";import"./AccountSelector-BkHl2jam.js";import"./Switch-UF2Hsrez.js";import"./AccountMenu-Be1YwfaQ.js";import"./GlobalMenu-CyQUTWaE.js";import"./ArrowUndo-U7c-XydM.js";import"./Globe-BiVm3Xkx.js";import"./BreadcrumbsLink-B3Oo2Zs_.js";import"./ArrowRight-B1BVxTuR.js";import"./Footer-C2EKRjZO.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
