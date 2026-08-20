import{a7 as t}from"./iframe-DklMp8b9.js";import{B as a,u as n}from"./useBookmarks-CrcTP53P.js";import{B as d}from"./BookmarkModal-ANP3tzPO.js";import{L as c}from"./Layout-f64AdWh5.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dcu-XksR.js";import"./BookmarkSettingsItem-Cc-3UTNB.js";import"./QueryLabel-B2mp9rlQ.js";import"./Plus-K4OeXXOA.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./SettingsItemBase-DzHt0haO.js";import"./ItemMedia-DvKDb3Qz.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./ChevronRight-D0aoAfw5.js";import"./ItemBase-CSc5nv8o.js";import"./ItemLink-DZ5c6nF6.js";import"./ItemControls-o8s7abF_.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./Typography-CuZWB-pA.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./ContextMenu-gGcdLnQv.js";import"./useDropdownMenuController-DMmUICAl.js";import"./Dropdown-DhZusmq8.js";import"./SearchField-1BQmUb8n.js";import"./FieldBase-nXdK7v3U.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./Input-DDvcPBDR.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuListDivider-DdHQwvZL.js";import"./MenuListHeading-vYUhz8ky.js";import"./MenuItem-DGElsCwp.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./InformationSquare-D2eEvTI2.js";import"./MenuElipsisHorizontal-BvtZk3Yv.js";import"./Pencil-D_LVI6ol.js";import"./Trash-BjmzrZmW.js";import"./SettingsModal-Cv0cYgwh.js";import"./ModalBody-r6-Hi5A7.js";import"./Section-DuAEz57j.js";import"./Flex-CsvoEycQ.js";import"./ButtonGroup-Vwrh_ftH.js";import"./ButtonIcon-D6knLLc8.js";import"./ButtonLabel-Dr-psq7U.js";import"./TextField-Clj1v6xC.js";import"./SkipLink-DcWlHZ2f.js";import"./CookieBanner-BENwD0ho.js";import"./Banner-Cd2OR1gW.js";import"./GlobalHeader-Crga5beo.js";import"./useIsDesktop-DqMigurS.js";import"./GlobalAccountButton-Baon00uw.js";import"./Enter-Di4UbUKP.js";import"./GlobalMenuButton-DNuIJr5i.js";import"./MenuHamburger-D1P7yy_p.js";import"./AccountSelector-C6B2v7aH.js";import"./Switch-U5XtUBKg.js";import"./AccountMenu-CzIC7XMk.js";import"./GlobalMenu-CTz7ruIN.js";import"./ArrowUndo-XGcYnPEb.js";import"./Globe-uIsVdgwX.js";import"./BreadcrumbsLink-CRtGICGj.js";import"./ArrowRight-CkjKlDQ1.js";import"./Footer-DK_O4cK3.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
