import{j as t}from"./iframe-BFO1Hsm7.js";import{B as a,u as n}from"./useBookmarks-DGEJXvZp.js";import{L as c}from"./Layout-D-gHpmnQ.js";import{B as d}from"./BookmarkModal-DRyhgW3y.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-PO3xAgX2.js";import"./QueryLabel-BnybXsgq.js";import"./Plus-CzDIu3KD.js";import"./useId-Bk4Ffxqs.js";import"./Heading-BaJonbem.js";import"./index-q4P8UESO.js";import"./useHighlightedText-BBNMb3RU.js";import"./Skeleton-BRac3_14.js";import"./SettingsItemBase-DTbuN6sq.js";import"./ChevronUp-DlVSDhFe.js";import"./ChevronDown-zCo1cSZK.js";import"./ChevronRight-CdUbwk3C.js";import"./ItemLink-BjgcGFX2.js";import"./ItemMedia-C5bbkB29.js";import"./XMark-DHT-JiZe.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./ItemControls-Dko-TfIa.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./tooltip-DUJ67ouq.js";import"./Typography-Bd9N_lP-.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./ContextMenu-0mdRRQji.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Dropdown-DNakKmHK.js";import"./Button-D67YnkXJ.js";import"./MenuElipsisHorizontal-0YAAkQrN.js";import"./SearchField-BsaRMZXP.js";import"./FieldBase-BLwJwwaJ.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./Checkmark-BeWey6nu.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";import"./Pencil-AXfhse9x.js";import"./Trash-BNKVyqtr.js";import"./SkipLink-DCimeCDr.js";import"./Banner-BkHrm4P6.js";import"./GlobalHeader-DeLiNnPk.js";import"./useIsDesktop-zysGFr7R.js";import"./GlobalAccountButton-CdDGEqm1.js";import"./Enter-BwsZcqun.js";import"./GlobalMenuButton-CN1CEQ6C.js";import"./MenuHamburger-rt2ExzIR.js";import"./AccountSelector-BgiUgb5b.js";import"./AccountMenu-DB3Kg0sC.js";import"./Switch-CJtdm7zY.js";import"./GlobalMenu-CYhbT-0y.js";import"./ArrowUndo-CSUnA5tv.js";import"./Globe-Bjnfe1Wy.js";import"./BreadcrumbsLink-Djqw2xtc.js";import"./ArrowRight-CuiiB8iB.js";import"./Footer-C9scgH_c.js";import"./SettingsModal-DOhzTr3z.js";import"./ModalBody-ZdU_Iwx_.js";import"./Section-D_8M4GBJ.js";import"./Flex-QSO1QCFn.js";import"./ButtonGroup-VRxYnWM6.js";import"./ButtonIcon-kFKVjrxN.js";import"./ButtonLabel-0Y2_Ghd1.js";import"./TextField-LW3IKJUT.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
