import{a7 as t}from"./iframe-BKPYfBaP.js";import{B as a,u as n}from"./useBookmarks-d7S1wbtF.js";import{B as d}from"./BookmarkModal-CngUqxSy.js";import{L as c}from"./Layout-CMjm2tJC.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BEKNpnot.js";import"./BookmarkSettingsItem-O_l8lLMH.js";import"./QueryLabel-3FEY_FdN.js";import"./Plus-3k5Jqwe2.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./SettingsItemBase-CDU1KS3L.js";import"./ItemMedia-CfPfvhkB.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";import"./ItemBase-CdLQP71A.js";import"./ItemLink-BZrHh3il.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./Typography-Cdqx97qL.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./ContextMenu-kuBM2y8u.js";import"./useDropdownMenuController-BCeELClC.js";import"./Dropdown-BaK7GwBJ.js";import"./SearchField-BEBaG6GH.js";import"./FieldBase-BZsWcTUs.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./InformationSquare-BcX77Iuf.js";import"./MenuElipsisHorizontal-OrSE-G0S.js";import"./Pencil-lM3EgB-b.js";import"./Trash-Cnwe6yaS.js";import"./SettingsModal-B7N099VA.js";import"./ModalBody-qGK1jZij.js";import"./Section-DIn3fiOi.js";import"./Flex-Dg9OypdH.js";import"./ButtonGroup-CQeTBn3N.js";import"./ButtonIcon-g3sANd5j.js";import"./ButtonLabel-CEapPxhA.js";import"./TextField-C5wmiUHQ.js";import"./SkipLink-BCWqN3F4.js";import"./CookieBanner-C99ddqmD.js";import"./Banner-DMEYucF2.js";import"./GlobalHeader-C_THL8xz.js";import"./useIsDesktop-EkiOMZ7A.js";import"./GlobalAccountButton-DjUCe58B.js";import"./Enter-Cp7eRPyv.js";import"./GlobalMenuButton-BKYW8NoQ.js";import"./MenuHamburger-BprZ1BzR.js";import"./AccountSelector-D2m594M4.js";import"./Switch-T1iKx95o.js";import"./AccountMenu-BBS5mw4I.js";import"./GlobalMenu-Bub5e2_m.js";import"./ArrowUndo-CbmIsveB.js";import"./Globe-DzU898X1.js";import"./BreadcrumbsLink-CVY2PFJQ.js";import"./ArrowRight-CJStjUi1.js";import"./Footer-DwEZ0RGQ.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
