import{a7 as t}from"./iframe-Dai1liu3.js";import{B as a,u as n}from"./useBookmarks-DNgsAS1o.js";import{B as d}from"./BookmarkModal-2ZJ-kB4q.js";import{L as c}from"./Layout-DJpVorRj.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cn8ytCIG.js";import"./BookmarkSettingsItem-D_9LqEC8.js";import"./QueryLabel-LZ0LjW5Y.js";import"./Plus-DL6goIlD.js";import"./Heading-DmQEE02y.js";import"./useHighlightedText-DBCcFNzk.js";import"./SettingsItemBase-CpsNU8lU.js";import"./ItemMedia-BM0esdrg.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./ChevronRight-B3RrQIZJ.js";import"./ItemBase-DhwZCfor.js";import"./ItemLink-EKwWGdDt.js";import"./ItemControls-5TCj7bye.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./Typography-DKU5x7uE.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./ContextMenu-D6E4TjJ4.js";import"./useDropdownMenuController-D6ah7-Cm.js";import"./Dropdown-qfadPHLV.js";import"./SearchField-RxPS0VwN.js";import"./FieldBase-CqsxpTvX.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./Input-4lJD8g37.js";import"./MenuListItem-CU8Yw_FM.js";import"./MenuListDivider-wVnt0d0h.js";import"./MenuListHeading-uHuYXsTq.js";import"./MenuItem-Bmkwg1bx.js";import"./Checkmark-B5_y3YEn.js";import"./ItemLabel-B5CnFFsc.js";import"./InformationSquare-RpHoIVms.js";import"./MenuElipsisHorizontal-DksIAP7L.js";import"./Pencil-BpPUh0KN.js";import"./Trash-DCzB4pSB.js";import"./SettingsModal-ZO1TvAQM.js";import"./ModalBody-DInWXo4g.js";import"./Section-SIo_MtMG.js";import"./Flex-BVj8i7c1.js";import"./ButtonGroup-D4ZwjyVx.js";import"./ButtonIcon-MD5DjO6C.js";import"./ButtonLabel-DLfBXBU4.js";import"./TextField-DVbi06pN.js";import"./SkipLink-DENJv5fr.js";import"./Banner-CBwA0Xm0.js";import"./GlobalHeader-4BR8YOXY.js";import"./useIsDesktop-DXPdgN4a.js";import"./GlobalAccountButton-XUM0zLK1.js";import"./Enter-0p11sL2T.js";import"./GlobalMenuButton-CudCiNVY.js";import"./MenuHamburger-ClYiMoCo.js";import"./AccountSelector-BbOT5dd7.js";import"./Switch-D6R_arz0.js";import"./AccountMenu-DCeMOsKf.js";import"./GlobalMenu-BxW9IoAn.js";import"./ArrowUndo-iQjbo1Ik.js";import"./Globe-DmZe7dIi.js";import"./BreadcrumbsLink-Cho2xFO4.js";import"./ArrowRight-CoAZ71ey.js";import"./Footer-DOgDPmCe.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
