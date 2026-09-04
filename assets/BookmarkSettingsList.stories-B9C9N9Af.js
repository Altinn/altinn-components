import{a7 as t}from"./iframe-qmQCxFa-.js";import{B as a,u as n}from"./useBookmarks-DQq5J2PS.js";import{B as d}from"./BookmarkModal-BUSpD03u.js";import{L as c}from"./Layout-CMJIFTG2.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BTzsKN7O.js";import"./BookmarkSettingsItem-c1SkPXYj.js";import"./QueryLabel-CV-T5JTx.js";import"./Plus-CuimFGeS.js";import"./Heading-BfhEliS6.js";import"./useHighlightedText-DvW-80BF.js";import"./SettingsItemBase-DSkR0SRZ.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./ChevronRight-D4PJikp-.js";import"./ItemBase-BQ6Vg0LW.js";import"./ItemLink-CpI2Nssx.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./Typography-CwhPNAxM.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./ContextMenu-BKNR-8e0.js";import"./useDropdownMenuController-D_F6_m9G.js";import"./Dropdown-Bfr6s4KY.js";import"./SearchField-yI2IHctk.js";import"./FieldBase-uaodyCSq.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./InformationSquare-dfx4dBae.js";import"./MenuElipsisHorizontal-BZ2CkxHW.js";import"./Pencil-Dfd5juPj.js";import"./Trash-Bwnj9cI7.js";import"./SettingsModal-BgKQBtSZ.js";import"./ModalBody-90KYXdlU.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./ButtonGroup-_CfbD1Th.js";import"./ButtonIcon-BsscKFAt.js";import"./ButtonLabel-B8phRdNa.js";import"./TextField-BtJt0HFX.js";import"./SkipLink-DoDy8lU9.js";import"./CookieBanner-hu1hKcA9.js";import"./Banner-Cp4TjmRF.js";import"./GlobalHeader-D8wvftgy.js";import"./useIsDesktop-DzLUth4w.js";import"./GlobalAccountButton-olPj8oba.js";import"./Enter-CyT7V59U.js";import"./GlobalMenuButton-bWyM-m1J.js";import"./MenuHamburger-Ctdi4oJ4.js";import"./AccountSelector-CFzi5oPP.js";import"./Switch-BpxOeCv0.js";import"./AccountMenu-7Da30E-e.js";import"./GlobalMenu-DsiiNGkM.js";import"./ArrowUndo-D_qzoLkT.js";import"./Globe-B7Kw2TJm.js";import"./BreadcrumbsLink-COpG7DxF.js";import"./ArrowRight-CXWBv3FI.js";import"./Footer-CF_NHtRf.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
