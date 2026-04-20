import{j as t}from"./iframe-BqnZkKPi.js";import{B as a,u as n}from"./useBookmarks-D04DUqQD.js";import{L as c}from"./Layout-CsNO6HfY.js";import{B as d}from"./BookmarkModal-C7sQuXvs.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Dfcm_wdC.js";import"./index-DAuAfjpD.js";import"./SettingsSection-BUH76TAD.js";import"./Section-CvCvg2MJ.js";import"./BookmarkSettingsItem-CA1h5vQz.js";import"./QueryLabel-BFhE5IIA.js";import"./Plus-7ff66Hwu.js";import"./useId-9kVvsXig.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./Skeleton-1qnYSSLw.js";import"./SettingsItemBase--Dvcwneu.js";import"./ChevronRight-DE1wtPln.js";import"./ItemLink-mzPSXjXe.js";import"./ItemMedia-BIsU1ixF.js";import"./XMark-Y2_85_oc.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Icon-CnWjusVH.js";import"./ItemControls-CZQ275uO.js";import"./Badge-wAZ__xuM.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./ContextMenu-D7gS0wo-.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Dropdown-hZuchDzz.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Dd8yBnUU.js";import"./SearchField-ufWryraF.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./Checkmark-BnBY066L.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./List-BhyjlMCS.js";import"./ListItem-C4Du7a0f.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./Divider-BztRnATF.js";import"./Pencil-Bp1DEFxq.js";import"./Trash-CfRAqYTy.js";import"./SkipLink-CMzddnlP.js";import"./GlobalHeader-CDxF1fv7.js";import"./useIsDesktop-BGZ_Vqay.js";import"./GlobalAccountButton-BQuFjW8t.js";import"./Enter-Cu4gLX2q.js";import"./GlobalMenuButton-DbvkdHm2.js";import"./MenuHamburger-CS_46M_p.js";import"./AccountSelector-hWy7QaqW.js";import"./heading-DO439Ftr.js";import"./AccountMenu-B39lY3R_.js";import"./Switch-BBnTu_Uu.js";import"./GlobalMenu-CiD0mdir.js";import"./ArrowUndo-DUL77TcE.js";import"./Globe-C0LXQqCK.js";import"./LocaleSwitcher-BtWYVqID.js";import"./DigdirLogomark-MEPp8H96.js";import"./SearchbarField-yaEGn2Ew.js";import"./AutocompleteItem-DU64l0Df.js";import"./DropdownBase-BDN0b22I.js";import"./useClickOutside-CkSl4dLB.js";import"./GlobalMenuButton-VknE8s_R.js";import"./PadlockLocked-DRp9Nxaq.js";import"./ButtonLabel-DoJ9xNj_.js";import"./ButtonIcon-dIUFz82l.js";import"./BreadcrumbsLink-DijZewDq.js";import"./ArrowRight-DYe8V0HY.js";import"./Footer-BtF19aFj.js";import"./SettingsModal-Ds32jFFb.js";import"./ModalBase-CxE9fIF-.js";import"./ModalBody-B72hH_Lv.js";import"./ButtonGroup-DF4p7rG3.js";import"./TextField-D-rWllbm.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
