import{j as t}from"./iframe-aFNUvxii.js";import{B as a,u as n}from"./useBookmarks-BulVkVrU.js";import{L as c}from"./Layout-CClz_j9W.js";import{B as d}from"./BookmarkModal-ClYwi3Kl.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-Dc74h7e4.js";import"./QueryLabel-B_OsfgH3.js";import"./Plus-BzMVfyBN.js";import"./useId-W_OLMGMd.js";import"./Heading-F0__TKrp.js";import"./index-DmNdTbFH.js";import"./useHighlightedText-DGtjyph8.js";import"./Skeleton-Cd5GNeeI.js";import"./SettingsItemBase-BmExxp2p.js";import"./ChevronUp-DqbXbD5l.js";import"./ChevronDown-CHfhU-Uc.js";import"./ChevronRight-B0RIPM-U.js";import"./ItemLink-DcFOssNC.js";import"./ItemMedia-Di01sVY_.js";import"./XMark-BNsj9R6R.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./ItemControls-BgCWQjxP.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./Typography-Co9p8t4Z.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./ContextMenu-Q0cpQIs-.js";import"./useDropdownMenuController-MoNgRnPR.js";import"./Dropdown-C8yUJUHT.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./MenuElipsisHorizontal-BORchHTr.js";import"./SearchField-CnqR4pyv.js";import"./FieldBase-Bx4PyUkS.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./Checkmark-CrF1sW3U.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./Pencil-DO0XgvAI.js";import"./Trash-CL4Cjfxa.js";import"./SkipLink-CmxPLaBk.js";import"./Banner-DjqI9Yw0.js";import"./GlobalHeader-selM6OJ0.js";import"./useIsDesktop-DIUXR7J2.js";import"./GlobalAccountButton-DgmIJ2Zc.js";import"./Enter-BWGj_m6z.js";import"./GlobalMenuButton-BoMuERWd.js";import"./MenuHamburger-CgxLJfBy.js";import"./AccountSelector-BE11oYdw.js";import"./heading-BjvQlmHQ.js";import"./AccountMenu-DU7oO0kk.js";import"./Switch-D8wch2ck.js";import"./GlobalMenu-D0p8K38H.js";import"./ArrowUndo-CI1maQ0_.js";import"./Globe-Bor6Iwii.js";import"./BreadcrumbsLink-D1wYzl-o.js";import"./ArrowRight-C6LNBpBr.js";import"./Footer-CEdOokS_.js";import"./SettingsModal-C1pSNUTr.js";import"./ModalBody-D69AqkWD.js";import"./Section-BIq-JpVN.js";import"./Flex-DARe3czq.js";import"./ButtonGroup-Cv-I5W75.js";import"./ButtonIcon-DeVYwviE.js";import"./ButtonLabel-BCreAq1S.js";import"./TextField-BPeazG1S.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
