import{a7 as t}from"./iframe-BRgClhpr.js";import{B as a,u as n}from"./useBookmarks-DUQ7X5c3.js";import{B as d}from"./BookmarkModal-BsHuoD-f.js";import{L as c}from"./Layout-CFZIVaCq.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C_5VwfPF.js";import"./BookmarkSettingsItem-ZXt4ydYr.js";import"./QueryLabel-DGuFu2RL.js";import"./Plus-Bhd65Ctm.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./SettingsItemBase-DGTy7aHu.js";import"./ItemMedia-DpaVUI33.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./ChevronUp-D-x3gjGi.js";import"./ChevronDown-B8Xryl2N.js";import"./ChevronRight-BLIKQh_h.js";import"./ItemBase-D-9VP-93.js";import"./ItemLink-eV9BuEU9.js";import"./ItemControls-WDxokqHy.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./Typography-BKJ9hmvo.js";import"./MagnifyingGlass-DQctf2To.js";import"./ContextMenu-BusqlWA9.js";import"./useDropdownMenuController-CFHgccGy.js";import"./Dropdown-DgbN3_NI.js";import"./SearchField--IrWsBEa.js";import"./FieldBase-D8LAV1W4.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./Input-C7r6_Ftd.js";import"./MenuListItem-rBdScGXY.js";import"./MenuListDivider-DSrBiGuI.js";import"./MenuListHeading-BqZAg_LU.js";import"./MenuItem-jszC7nZR.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./InformationSquare-DK9XnxPK.js";import"./MenuElipsisHorizontal-CzndoW4V.js";import"./Pencil--kE4PfwL.js";import"./Trash-Dik4P95g.js";import"./SettingsModal-DtDMfpcs.js";import"./ModalBody-B3ugA79U.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";import"./ButtonGroup-Ce1vy6GX.js";import"./ButtonIcon-CvMB-V2D.js";import"./ButtonLabel-DsKejs7R.js";import"./TextField-BidQRnSi.js";import"./SkipLink-DXTOBfiU.js";import"./CookieBanner-5AUIHilU.js";import"./Banner-C2g3vyhu.js";import"./GlobalHeader-4OsSnXaE.js";import"./useIsDesktop-6x5OXkzD.js";import"./GlobalAccountButton-DwK-oShf.js";import"./Enter-D6YYWoZK.js";import"./GlobalMenuButton-DOZVMEr-.js";import"./MenuHamburger-B9b99sAx.js";import"./AccountSelector-Duq7-VMY.js";import"./Switch-DYiR82-q.js";import"./AccountMenu-C-ENxWCB.js";import"./GlobalMenu-CVN_I2xe.js";import"./ArrowUndo-Din4NvuX.js";import"./Globe-DcV2okmN.js";import"./BreadcrumbsLink-DdoqkALs.js";import"./ArrowRight-BXMFSAvd.js";import"./Footer-qgy5hGN-.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
