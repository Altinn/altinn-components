import{a7 as t}from"./iframe-B1m5YS-z.js";import{B as a,u as n}from"./useBookmarks-DB54d4VN.js";import{B as d}from"./BookmarkModal-CnDgxm59.js";import{L as c}from"./Layout-DzzYkvFN.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bzazr0mK.js";import"./BookmarkSettingsItem-BHb4DzUF.js";import"./QueryLabel-BfRQ1dHJ.js";import"./Plus-yML150nC.js";import"./Heading-Bdg559v2.js";import"./useHighlightedText-BJ6Snog5.js";import"./SettingsItemBase-DFSvstNB.js";import"./ItemMedia-CbRgbp9l.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./ChevronUp-DD0NwdAM.js";import"./ChevronDown-VNvIPDL4.js";import"./ChevronRight-JufomwYQ.js";import"./ItemBase-CK4FMGcd.js";import"./ItemLink-CGjdbANg.js";import"./ItemControls-DSpZnzMx.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./Typography-D-hgdwYf.js";import"./MagnifyingGlass-DOC044bk.js";import"./ContextMenu-DB8mRJHE.js";import"./useDropdownMenuController-C9-W595w.js";import"./Dropdown-cC7dM-DJ.js";import"./SearchField-txQSfSgU.js";import"./FieldBase-DF02WocK.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";import"./MenuListItem-ePeSws84.js";import"./MenuListDivider-l5hHlt1S.js";import"./MenuListHeading-BVCzBY5R.js";import"./MenuItem-D8A8Uy-E.js";import"./Checkmark-O1YGJ3w1.js";import"./ItemLabel-CGVzYdTz.js";import"./InformationSquare-CbKMIE6G.js";import"./MenuElipsisHorizontal-foXznjOs.js";import"./Pencil-DXddgHqS.js";import"./Trash-B-BtPZD_.js";import"./SettingsModal-BcCqtHIO.js";import"./ModalBody-ByLHH82k.js";import"./Section-BpRK9CgH.js";import"./Flex-ChmU5Mgr.js";import"./ButtonGroup-K8bkOi3q.js";import"./ButtonIcon-u2Ofnhum.js";import"./ButtonLabel-B0ghZbJS.js";import"./TextField-DUJ3VIRd.js";import"./SkipLink-BMkc-XIH.js";import"./CookieBanner-CP-XDUDx.js";import"./Banner-BaHCwq9a.js";import"./GlobalHeader-DteApejV.js";import"./useIsDesktop-qlNRkhP-.js";import"./GlobalAccountButton-DyKdbs9d.js";import"./Enter-CQoyFxIR.js";import"./GlobalMenuButton--22YmBty.js";import"./MenuHamburger-J5IpwwPp.js";import"./AccountSelector-COtL-r3p.js";import"./Switch-Cqc-6BhM.js";import"./AccountMenu-CNzrFvkn.js";import"./GlobalMenu-D497HZpV.js";import"./ArrowUndo-BPOEUuun.js";import"./Globe-DqsoLw-O.js";import"./BreadcrumbsLink-yCWs0BDr.js";import"./ArrowRight-CQBfMp8o.js";import"./Footer-gxxD47Ip.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
