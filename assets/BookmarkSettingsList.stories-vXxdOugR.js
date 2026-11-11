var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CXqMdlCC.js";import{B as a,u as d}from"./useBookmarks-D32x-bDi.js";import{B as l}from"./BookmarkModal-ZG4O8Bge.js";import{L as u}from"./Layout-B0Kmw8Wv.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CqtkU6S6.js";import"./BookmarkSettingsItem-DxvsFUlc.js";import"./QueryLabel-CJMXVMRL.js";import"./Plus-BUwnjirz.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./SettingsItemBase-t405G1qu.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ChevronUp-NZ-cp3Wt.js";import"./ChevronDown-BjOSGq_A.js";import"./ChevronRight-DltnHqdC.js";import"./ItemBase-DIYbtX2k.js";import"./ItemLink-CbXALBPD.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./Typography-B65oo-6B.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./ContextMenu-Cob_wV-j.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./SearchField-BQG9p1mb.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemLabel-DvzzIYMd.js";import"./FieldBase-0KjilGfX.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./InformationSquare-ZHKJrQSE.js";import"./Pencil-DgCxJKHO.js";import"./Trash-BZMVy5so.js";import"./SettingsModal-DPE_iqX8.js";import"./ModalBody-DEbIyzzf.js";import"./Section-CK-XPJWb.js";import"./Flex-C0b8jFL9.js";import"./ButtonGroup-ilSUnB_k.js";import"./ButtonIcon-zWanBr0a.js";import"./ButtonLabel-B5q4OgvD.js";import"./TextField-BxHcHNDN.js";import"./SkipLink-CbQhhDZZ.js";import"./CookieBanner-Dor9yVbW.js";import"./Link-CjI5sSKG.js";import"./Banner-DKJntqtX.js";import"./GlobalHeader-ByjAguUA.js";import"./useIsDesktop-BnvVJKv_.js";import"./GlobalAccountButton-W5vizdCb.js";import"./Enter-DmDgRP0Q.js";import"./GlobalMenuButton-B9op-Ewu.js";import"./MenuHamburger-BUucDG4Z.js";import"./AccountSelector-ueRGc7ms.js";import"./Switch-DAhdVzvS.js";import"./AccountMenu-BTXikZ9S.js";import"./GlobalMenu-BWM2UK14.js";import"./Checkmark-CQaorHYz.js";import"./ArrowUndo-CO4CQkvC.js";import"./Globe-uwU59LH4.js";import"./BreadcrumbsLink-C3lWgJ2I.js";import"./ArrowRight-B7D23jat.js";import"./Footer-CzbjZOfK.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
