import{a7 as t}from"./iframe-Dvni_u8W.js";import{B as a,u as n}from"./useBookmarks-D976PKoH.js";import{B as d}from"./BookmarkModal-CJiUkK0J.js";import{L as c}from"./Layout-BGl9isD0.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-wTmWM5n-.js";import"./BookmarkSettingsItem-D-SuKQf3.js";import"./QueryLabel-DG1XE8v8.js";import"./Plus-B_1zWORh.js";import"./Heading-CzH7HB6a.js";import"./useHighlightedText-CLLTD9Wh.js";import"./SettingsItemBase-OGpKX3i4.js";import"./ItemMedia-BulytyAO.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./ChevronUp-B-cuVFt7.js";import"./ChevronDown-wy-_efuj.js";import"./ChevronRight-CHz63rRB.js";import"./ItemBase-Dhpm696r.js";import"./ItemLink-DONwvW-Z.js";import"./ItemControls-C8iXC4AM.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./Typography-UWzQw34I.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./ContextMenu-DLU0U19W.js";import"./useDropdownMenuController-C43pfIK4.js";import"./Dropdown-BFgXRZ9P.js";import"./SearchField-CJEH8bYw.js";import"./FieldBase-ChKWoxnf.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./InformationSquare-ZFR98d1q.js";import"./MenuElipsisHorizontal-ChUvvCwa.js";import"./Pencil-ybWtIKP9.js";import"./Trash-0Q12wXYH.js";import"./SettingsModal-C7UnawWN.js";import"./ModalBody-CMihPznN.js";import"./Section-CvMDXfkz.js";import"./Flex-C0xjv22N.js";import"./ButtonGroup-ChfLiHIR.js";import"./ButtonIcon-DaGhQDc3.js";import"./ButtonLabel-BlQ3B1gR.js";import"./TextField-CtJ9zWcQ.js";import"./SkipLink-hRoxc1kk.js";import"./CookieBanner-CeeBIT1G.js";import"./Banner-BoSTLP2u.js";import"./GlobalHeader-D5aJ-opJ.js";import"./useIsDesktop-DMsXss5A.js";import"./GlobalAccountButton-BOXarTgy.js";import"./Enter-91QmnNLS.js";import"./GlobalMenuButton-Dr-fNS4N.js";import"./MenuHamburger-CK-iwV4z.js";import"./AccountSelector-C1nANC_E.js";import"./Switch-B4_rtYEL.js";import"./AccountMenu-m11kAcd8.js";import"./GlobalMenu-e9zJErKU.js";import"./ArrowUndo-CuxdBiYe.js";import"./Globe-B2BhyoCX.js";import"./BreadcrumbsLink-DAhEjbpJ.js";import"./ArrowRight-tjt3Q36Y.js";import"./Footer-DzMo6NBS.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
