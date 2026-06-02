import{a7 as t}from"./iframe-DTEeNdyk.js";import{B as a,u as n}from"./useBookmarks-BhTtI3JP.js";import{B as d}from"./BookmarkModal-BIOqiQvQ.js";import{L as c}from"./Layout-zd1Jbph-.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CTNN937Q.js";import"./BookmarkSettingsItem-WexxmnIp.js";import"./QueryLabel-WJ_IgqD6.js";import"./Plus-DS0hvWVt.js";import"./Heading-DUvNz5de.js";import"./useHighlightedText-D9AI5Zbv.js";import"./SettingsItemBase-CuUzDCHv.js";import"./ItemMedia-BWl2RL2w.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./ChevronUp-C99xJaCq.js";import"./ChevronDown-MYe8GL0o.js";import"./ChevronRight-DC0APSAK.js";import"./ItemBase-CqyVza2q.js";import"./ItemLink-TlorRN3x.js";import"./ItemControls-BKFWWzHw.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./Typography-CqVDEuXx.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./ContextMenu-P3ylAoeJ.js";import"./useDropdownMenuController-BMwPFGHP.js";import"./Dropdown-JTdvFb7I.js";import"./SearchField-BDcWIDhP.js";import"./FieldBase-DjxBgQLC.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./Input-BxybDda_.js";import"./MenuListItem-DQq69WCb.js";import"./MenuListHeading-vODo-CbQ.js";import"./MenuItem-CveCSlsE.js";import"./Checkmark-BHFJ8diG.js";import"./ItemLabel-CiRGygZk.js";import"./index-szorRtVx.js";import"./InformationSquare-W352tleo.js";import"./MenuElipsisHorizontal-D7VYWEMV.js";import"./Pencil-CfDxv_rg.js";import"./Trash-AIwDZ54o.js";import"./SettingsModal-dBfWKUwq.js";import"./ModalBody-CfnSJT4_.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./ButtonGroup-C9iOkEQW.js";import"./ButtonIcon-3YefSWar.js";import"./ButtonLabel-aN9xoT5L.js";import"./TextField-CwRDu9ti.js";import"./SkipLink-BQ0quxgA.js";import"./Banner-Cx1S5Gk6.js";import"./GlobalHeader-Demohmzm.js";import"./useIsDesktop-CsLXW2aR.js";import"./GlobalAccountButton-DR8Ihfz_.js";import"./Enter-DGPu3-79.js";import"./GlobalMenuButton-CkDzf5SO.js";import"./MenuHamburger-CcnTvTdx.js";import"./AccountSelector-C95OiXNs.js";import"./Switch-DCLLijOX.js";import"./AccountMenu-DLxJWnQZ.js";import"./GlobalMenu-DOC0q_oq.js";import"./ArrowUndo-Cnbp38kB.js";import"./Globe-B_qZwdh4.js";import"./BreadcrumbsLink-DHl0oFpd.js";import"./ArrowRight-CXw79idp.js";import"./Footer-EQly7KRI.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
