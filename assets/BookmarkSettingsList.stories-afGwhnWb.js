import{j as t}from"./iframe-C32LkOFR.js";import{B as a,u as n}from"./useBookmarks-CXCy5kXY.js";import{L as c}from"./Layout-ClIfaedj.js";import{B as d}from"./BookmarkModal-D_wmNmfk.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DQpZXHwn.js";import"./QueryLabel-qSZLfQuY.js";import"./Plus-BuKKYKtN.js";import"./useId-C6VS968l.js";import"./Heading-C2AVc7ZV.js";import"./index-B41-Gq6i.js";import"./useHighlightedText-TWz6a-kb.js";import"./Skeleton-BFp1Ns5z.js";import"./SettingsItemBase-3DPHee1e.js";import"./ChevronUp-BXoYzDan.js";import"./ChevronDown-CFXYCpRP.js";import"./ChevronRight-BRam3foO.js";import"./ItemLink-BpCtkCJ8.js";import"./ItemMedia-Bzb68dd0.js";import"./XMark-CJ_7TJfx.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./ItemControls-6sDFc5WV.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./tooltip-C1z0ba6x.js";import"./Typography-BtAt1mkJ.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./ContextMenu-afhlnX7Z.js";import"./useDropdownMenuController-CToZfoEW.js";import"./Dropdown-3ScmWyOY.js";import"./Button-DJyTPLgL.js";import"./MenuElipsisHorizontal-DLqsyN8R.js";import"./SearchField-CSvKC2kE.js";import"./FieldBase-C4PiPQJY.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./MenuItem-B2ec7Awl.js";import"./Checkmark-Cohtyyf2.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./InformationSquare-BqsScoMm.js";import"./Pencil-xx8gyCLH.js";import"./Trash-C9CuwFFb.js";import"./SkipLink-BmqkZxDx.js";import"./Banner-CoV19vuj.js";import"./GlobalHeader-CM21Tz7Y.js";import"./useIsDesktop-CuiebE6s.js";import"./GlobalAccountButton-DggAbOBa.js";import"./Enter-D1Z6jONJ.js";import"./GlobalMenuButton-V0XO2gXT.js";import"./MenuHamburger-CP22A_hy.js";import"./AccountSelector-2ay3anmC.js";import"./AccountMenu-D13tDpE5.js";import"./Switch-6v-VyuZR.js";import"./GlobalMenu-ChS1f4Nk.js";import"./ArrowUndo-C8csTNhw.js";import"./Globe-AP3W_AdN.js";import"./BreadcrumbsLink-OzEeyPy1.js";import"./ArrowRight-BJ4fh4f2.js";import"./Footer-mMzCBzLk.js";import"./SettingsModal-BZYvkT5f.js";import"./ModalBody-Dqmc2GiO.js";import"./Section-BW54BVJv.js";import"./Flex-BUJ7sT5C.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonIcon-C8Th3GXI.js";import"./ButtonLabel-zcuLnIEs.js";import"./TextField-9LtiQjkC.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
