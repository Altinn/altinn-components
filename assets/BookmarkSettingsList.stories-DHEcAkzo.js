import{a7 as t}from"./iframe-CeD8DZF_.js";import{B as a,u as n}from"./useBookmarks-B-bAl1iV.js";import{B as d}from"./BookmarkModal-BgwJx50z.js";import{L as c}from"./Layout-CIjwcIba.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cr0Tzvrf.js";import"./BookmarkSettingsItem-pHBwtrfb.js";import"./QueryLabel-DNTlg9WW.js";import"./Plus-StvQ1Urq.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./SettingsItemBase-G5kM6T3P.js";import"./ItemMedia-CjD5QxWk.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./ChevronUp-CcrHqtW6.js";import"./ChevronDown-y5t2TNH2.js";import"./ChevronRight-B8wcZ9md.js";import"./ItemBase-BBKknlL_.js";import"./ItemLink-DvfF8HnK.js";import"./ItemControls-CphkAdhU.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./Typography-D10BEJyK.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./ContextMenu-Civ_gyCw.js";import"./useDropdownMenuController-D9gVQRIM.js";import"./Dropdown-gDr2Qds9.js";import"./SearchField-D9P8-rjO.js";import"./FieldBase-BbgmrWIh.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./InformationSquare-CNpr0xiM.js";import"./MenuElipsisHorizontal-DxLx2qOI.js";import"./Pencil-CkoadffO.js";import"./Trash-YA0mygsZ.js";import"./SettingsModal-DO2hkuYe.js";import"./ModalBody-B4hCRN8z.js";import"./Section-18Uf7Mat.js";import"./Flex-BOkBPJQr.js";import"./ButtonGroup-C3-Lq824.js";import"./ButtonIcon-C0Csvo29.js";import"./ButtonLabel-BzOdEbMB.js";import"./TextField-WBCoU1O_.js";import"./SkipLink-CuhBaYcN.js";import"./Banner-Db1gRFD-.js";import"./GlobalHeader-C9vBsP0x.js";import"./useIsDesktop-ClFmcpth.js";import"./GlobalAccountButton-wEyxwdUc.js";import"./Enter-C_HHSuUn.js";import"./GlobalMenuButton-Bf81O9iC.js";import"./MenuHamburger-5i5jT7Mb.js";import"./AccountSelector-CUefH3va.js";import"./Switch-BPi0Tt-y.js";import"./AccountMenu-BRpxa_gO.js";import"./GlobalMenu-BcMHIVXZ.js";import"./ArrowUndo-CY16ifDv.js";import"./Globe-XElHabot.js";import"./BreadcrumbsLink-J5lk5-3z.js";import"./ArrowRight-BPk6hCSQ.js";import"./Footer-Z2XHXSO9.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
