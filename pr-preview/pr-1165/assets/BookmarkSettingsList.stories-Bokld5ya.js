import{j as t}from"./iframe-BakMcPB9.js";import{B as a,u as n}from"./useBookmarks-Dcg7BQhd.js";import{L as c}from"./Layout-BmmA0eVB.js";import{B as d}from"./BookmarkModal-D5RTpldQ.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-D_Gbr3UA.js";import"./QueryLabel-CPNmRYE5.js";import"./Plus-CsNf283B.js";import"./useId-Btw-Kuqp.js";import"./Heading-Dpm-6zaj.js";import"./index-DAwqyEdM.js";import"./useHighlightedText-nzhiVGnc.js";import"./Skeleton-CIZGLt5B.js";import"./SettingsItemBase-CgS3639z.js";import"./ChevronUp-D-5UFsw8.js";import"./ChevronDown-DMRBxZop.js";import"./ChevronRight-C2TalX8u.js";import"./ItemLink-Dn0iTF8z.js";import"./ItemMedia-CMtvzv_T.js";import"./XMark-D8cLqedS.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./ItemControls-BIaUvdXD.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Typography-BzplxmiV.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./ContextMenu-z94PUUNE.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Dropdown-UmxICHKp.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./MenuElipsisHorizontal-554EG_sf.js";import"./SearchField-rHpPiKo0.js";import"./FieldBase-B35pktZu.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./Checkmark-Bv6xEUnW.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./Pencil-BCvakCZg.js";import"./Trash-C23JfHvO.js";import"./SkipLink-tzg0heUh.js";import"./GlobalHeader-D9Rb4Fvy.js";import"./useIsDesktop-DD1-kwof.js";import"./GlobalAccountButton-D1ZtEyDi.js";import"./Enter-DtzLbGWD.js";import"./GlobalMenuButton-DaRZu45x.js";import"./MenuHamburger-ChSiVscJ.js";import"./AccountSelector-DNnZOxUy.js";import"./heading-EL6ZIu79.js";import"./AccountMenu-CQ_VEF0u.js";import"./Switch-xtMa6te7.js";import"./GlobalMenu-CQkoXXqX.js";import"./ArrowUndo-B1TPuteg.js";import"./Globe-DotiYBci.js";import"./BreadcrumbsLink-TKbmZpM7.js";import"./ArrowRight-16ulrcEm.js";import"./Footer-PisAEy7f.js";import"./SettingsModal-CxuQHGWI.js";import"./ModalBody-BH-DS5mt.js";import"./Section-C3ywv7P2.js";import"./Flex-73Lku4Kd.js";import"./ButtonGroup-4RnrqVmD.js";import"./ButtonIcon-boAFcVxG.js";import"./ButtonLabel-BvF3ABNB.js";import"./TextField-BIeeTmj2.js";const qo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const wo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,wo as __namedExportsOrder,qo as default};
