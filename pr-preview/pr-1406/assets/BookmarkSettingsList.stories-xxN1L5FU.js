import{a7 as t}from"./iframe-CH8mgD3C.js";import{B as a,u as n}from"./useBookmarks-DLY15o-O.js";import{B as d}from"./BookmarkModal-DB1OMaX1.js";import{L as c}from"./Layout-BOzR4hEv.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BlkNFW_W.js";import"./BookmarkSettingsItem-CtIagCo2.js";import"./QueryLabel-DQAKsAS1.js";import"./Plus-OvBsSWIf.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./SettingsItemBase-CONpdlrT.js";import"./ItemMedia-BK3BNMj0.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./ChevronUp-BTM5yc0u.js";import"./ChevronDown-Cn-stDPP.js";import"./ChevronRight-CQGN_WtL.js";import"./ItemBase-D0teP5S2.js";import"./ItemLink-dU306ec_.js";import"./ItemControls-dstWsIeL.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./Typography-ClkFzU7o.js";import"./MagnifyingGlass-BnEAksKO.js";import"./ContextMenu-DPetgM9y.js";import"./useDropdownMenuController-FcQfptKr.js";import"./Dropdown-D9qzdFMY.js";import"./SearchField-UH995Up-.js";import"./FieldBase-D9urOdyW.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";import"./MenuListItem-dmpcOffB.js";import"./MenuListDivider-Dpg_gFHI.js";import"./MenuListHeading-Bwq8QFZh.js";import"./MenuItem-B2UgnfYQ.js";import"./Checkmark-BQdUfCkA.js";import"./ItemLabel-DGIpgk0p.js";import"./InformationSquare-Dm8hsCNK.js";import"./MenuElipsisHorizontal-BOQd7k3G.js";import"./Pencil-BymtTdRm.js";import"./Trash-BAAoSTtu.js";import"./SettingsModal-CscdPQmC.js";import"./ModalBody-B0R0uENp.js";import"./Section-BXIrXZ89.js";import"./Flex-f5LhVaqN.js";import"./ButtonGroup-DasozfmK.js";import"./ButtonIcon-Cv6m6W2w.js";import"./ButtonLabel-Bl84KvUO.js";import"./TextField-BHWc_bX8.js";import"./SkipLink-71KCplzA.js";import"./CookieBanner-C7jEkkAH.js";import"./Banner-GE6f-K6T.js";import"./GlobalHeader-CyVwwBdQ.js";import"./useIsDesktop-yZuWpI0r.js";import"./GlobalAccountButton-BkrEb-fP.js";import"./Enter-nR_uMI8e.js";import"./GlobalMenuButton-CLHfKO0X.js";import"./MenuHamburger-31PylNbM.js";import"./AccountSelector-CAnGzmSM.js";import"./Switch-sgpnl_WC.js";import"./AccountMenu-0MdarHIi.js";import"./GlobalMenu-OXov9hzk.js";import"./ArrowUndo-CjwPyzKk.js";import"./Globe-MreKg2lO.js";import"./BreadcrumbsLink-BhxLV-hv.js";import"./ArrowRight-C0Td8hNJ.js";import"./Footer-BubM0sCM.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
