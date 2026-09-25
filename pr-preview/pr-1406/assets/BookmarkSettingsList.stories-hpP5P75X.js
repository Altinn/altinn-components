import{a7 as t}from"./iframe-vkxhbe5D.js";import{B as a,u as n}from"./useBookmarks-CFq4J9j8.js";import{B as d}from"./BookmarkModal-DnLWOxNx.js";import{L as c}from"./Layout-B-Iqy4ue.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-pP3xGIIj.js";import"./BookmarkSettingsItem-DUd5P9-6.js";import"./QueryLabel-B8IFt_Dj.js";import"./Plus-DvLwQ2c5.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./SettingsItemBase-DC9Hi0Xx.js";import"./ItemMedia-iOETwWXj.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./ChevronRight-BjSUzT6t.js";import"./ItemBase-C6j3qrdE.js";import"./ItemLink-OwzyFxZn.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./Typography-CiocPTHR.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./ContextMenu-BO0qnyJi.js";import"./useDropdownMenuController-Bj71dSIy.js";import"./Dropdown-DT6AevuE.js";import"./SearchField-CsfKU_3v.js";import"./FieldBase-BW43HWjL.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";import"./MenuListItem-BToT8FwM.js";import"./MenuListDivider-DNPFWOP3.js";import"./MenuListHeading-DcoOXLFk.js";import"./MenuItem-CzOEvYQv.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./InformationSquare-BqHcnGOZ.js";import"./MenuElipsisHorizontal-CvNnMNOe.js";import"./Pencil-HvmtkJ1i.js";import"./Trash-kbnaWOjj.js";import"./SettingsModal-DangJQGU.js";import"./ModalBody-DMnwwAr3.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./ButtonGroup-Bd7c8rmX.js";import"./ButtonIcon-BjmAFG2x.js";import"./ButtonLabel-CaIsvuRE.js";import"./TextField-C_iOCERW.js";import"./SkipLink-CpvTmwWZ.js";import"./CookieBanner-D1G_pN_f.js";import"./Banner-CNBQBuO6.js";import"./GlobalHeader-TTkyqfV1.js";import"./useIsDesktop-MoD1iq-0.js";import"./GlobalAccountButton-Cqr21GTJ.js";import"./Enter-CclPmbgv.js";import"./GlobalMenuButton-mmn1s-R9.js";import"./MenuHamburger-BFbOeUvX.js";import"./AccountSelector-BTbHIzc9.js";import"./Switch-IF2_uDNO.js";import"./AccountMenu-BnqQM1_Z.js";import"./GlobalMenu-C3fNzo6k.js";import"./ArrowUndo-Bf20gtxc.js";import"./Globe-uIqv5f3I.js";import"./BreadcrumbsLink-z2Hebclv.js";import"./ArrowRight-Mi96J7mW.js";import"./Footer-cPPwXydN.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
