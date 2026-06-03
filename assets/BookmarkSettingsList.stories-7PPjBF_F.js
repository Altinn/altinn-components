import{a7 as t}from"./iframe-pmb13xcr.js";import{B as a,u as n}from"./useBookmarks-ChWTHBLj.js";import{B as d}from"./BookmarkModal-BkmhTfhg.js";import{L as c}from"./Layout-Cf87m6aM.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-PFiIjJ-b.js";import"./BookmarkSettingsItem-CdMyvWU5.js";import"./QueryLabel-CWOOXAht.js";import"./Plus-CpF1S0sT.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./SettingsItemBase-D-tF3fsW.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./ChevronUp-DD3z1ZBF.js";import"./ChevronDown-7NsihGJj.js";import"./ChevronRight-BcL3woie.js";import"./ItemBase-DNBWN9Yd.js";import"./ItemLink-B34a5swl.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./Typography-BgUhg-DC.js";import"./MagnifyingGlass-HRL7caCa.js";import"./ContextMenu-CkaQH0Em.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./SearchField-xzT30cQx.js";import"./FieldBase-DlkZCCjW.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./MenuElipsisHorizontal-BdVaNuRc.js";import"./Pencil-CcBCiyou.js";import"./Trash-IxXQM3-V.js";import"./SettingsModal-DDb7WpLZ.js";import"./ModalBody-CU8fQCap.js";import"./Section-0UMzqVbn.js";import"./Flex-Bo48iBpz.js";import"./ButtonGroup-DvNffpdA.js";import"./ButtonIcon-B4tRqIle.js";import"./ButtonLabel-BbcEgvaI.js";import"./TextField-kVpI9nVo.js";import"./SkipLink-DvefXCie.js";import"./Banner-BJ2BYs7L.js";import"./GlobalHeader-CHMfbD3_.js";import"./useIsDesktop-BFGrVHfV.js";import"./GlobalAccountButton-Bcpd1x2v.js";import"./Enter-byG7rnTn.js";import"./GlobalMenuButton-gGV7lWR6.js";import"./MenuHamburger-Ml3xcBiW.js";import"./AccountSelector-BkvgFso3.js";import"./Switch-DZAPBem0.js";import"./AccountMenu-BVT6wVM-.js";import"./GlobalMenu-Da_BwT8Y.js";import"./ArrowUndo-CIAjkSEj.js";import"./Globe-U-yptcFZ.js";import"./BreadcrumbsLink-D0SNoY51.js";import"./ArrowRight-BKN4Y0lc.js";import"./Footer-BjpVdnf9.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
