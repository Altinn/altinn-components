import{j as t}from"./iframe-YdRL1NzV.js";import{B as a,u as n}from"./useBookmarks-B4U93SgS.js";import{L as c}from"./Layout-Iag71sqT.js";import{B as d}from"./BookmarkModal-uioo9agG.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-Dzr2GNwi.js";import"./QueryLabel-BLfanfjW.js";import"./Plus-BNGbhyZ6.js";import"./useId-DxHKrSZ4.js";import"./Heading-56B0sdRG.js";import"./index-SoIsie1y.js";import"./useHighlightedText-DI-ykGTt.js";import"./Skeleton-C3i9Ug5T.js";import"./SettingsItemBase-Ncp9urLT.js";import"./ChevronUp-DpeVWcyB.js";import"./ChevronDown-Uy2Tl2KH.js";import"./ChevronRight-DrXpgbb_.js";import"./ItemLink-sUnd8Dq1.js";import"./ItemMedia-BNRd-cb6.js";import"./XMark-1l7ZvP46.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./ItemControls-CMhfwURs.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./tooltip-D0NJwlFT.js";import"./Typography-CYgzLoEf.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./ContextMenu-BsQBLQnd.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Dropdown-CFQlkMFa.js";import"./Button-BwQOxknK.js";import"./MenuElipsisHorizontal-D5EdTq6X.js";import"./SearchField-Cp2PZLrm.js";import"./FieldBase-KNsWphki.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./Checkmark-Ple-kG_b.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./Pencil-DEU5Dtos.js";import"./Trash-Bas2iEP8.js";import"./SkipLink-D0iiulSE.js";import"./Banner-tOIBFdrS.js";import"./GlobalHeader-PQkGriiL.js";import"./useIsDesktop-DNaKtoN_.js";import"./GlobalAccountButton-DVQpzDNl.js";import"./Enter-BrhwR_zU.js";import"./GlobalMenuButton-C4kt-Hl6.js";import"./MenuHamburger-B0s_IErD.js";import"./AccountSelector-CBZe8-wp.js";import"./AccountMenu-GRew5JA2.js";import"./Switch-D1PNyCrc.js";import"./GlobalMenu-qKqkr7qf.js";import"./ArrowUndo-DdxLKHJA.js";import"./Globe-Bkro2Ij1.js";import"./BreadcrumbsLink-D1bNirUt.js";import"./ArrowRight-BXATOlQ9.js";import"./Footer-D46-qINA.js";import"./SettingsModal-CSoyY2cF.js";import"./ModalBody-CTEW1e2E.js";import"./Section-Bmd_KobT.js";import"./Flex-8MCCOfGV.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonIcon-c6Xu1QVp.js";import"./ButtonLabel-DtM2G-uP.js";import"./TextField-BcGNRTBS.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
