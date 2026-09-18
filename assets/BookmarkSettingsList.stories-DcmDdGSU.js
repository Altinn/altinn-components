import{a7 as t}from"./iframe-CId_qj2z.js";import{B as a,u as n}from"./useBookmarks-M3MLgCcc.js";import{B as d}from"./BookmarkModal-D-NrZIkJ.js";import{L as c}from"./Layout-BCfIVaUx.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CkWSpni-.js";import"./BookmarkSettingsItem-BFkbEyUm.js";import"./QueryLabel-CPRldmCT.js";import"./Plus-D70awSlJ.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./SettingsItemBase-DJsVo98M.js";import"./ItemMedia-DATZMrih.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";import"./ItemBase-Bm8A6BXO.js";import"./ItemLink-BiQUVyar.js";import"./ItemControls-s3x5r9Y_.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./Typography-DeDqtkyf.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./ContextMenu-Cr3y-cbT.js";import"./useDropdownMenuController-B3cgP-Sn.js";import"./Dropdown-C5rYnJno.js";import"./SearchField-CLqhaeqA.js";import"./FieldBase-BhNxXsJd.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./InformationSquare-DbymG94h.js";import"./MenuElipsisHorizontal-DurHs02G.js";import"./Pencil-Dc-4Qphu.js";import"./Trash-CdB6ueTj.js";import"./SettingsModal-Ypx-VLJc.js";import"./ModalBody-Dz1aFIAA.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./ButtonGroup-BzI-lfVi.js";import"./ButtonIcon-6rERrVIq.js";import"./ButtonLabel-CxcuksMv.js";import"./TextField-QbJymoSS.js";import"./SkipLink-BMQYzgWt.js";import"./CookieBanner-SdGvx2gZ.js";import"./Banner-B0-Pgj7d.js";import"./GlobalHeader-CSY_h-G4.js";import"./useIsDesktop-VkDY77Uv.js";import"./GlobalAccountButton-Bh66e_Bq.js";import"./Enter-B6AWK89G.js";import"./GlobalMenuButton-CjxzpDAE.js";import"./MenuHamburger-Dw1f-W1K.js";import"./AccountSelector-ifVYb22t.js";import"./Switch-Jy7pPJYw.js";import"./AccountMenu-CwINr1xx.js";import"./GlobalMenu-tCZNMjum.js";import"./ArrowUndo-BYpV408O.js";import"./Globe-Ciny8H7f.js";import"./BreadcrumbsLink-Wp6NhKEF.js";import"./ArrowRight-Cltu3VqV.js";import"./Footer-CYamDtWe.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
