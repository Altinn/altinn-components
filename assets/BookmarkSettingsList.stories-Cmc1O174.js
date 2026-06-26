import{a7 as t}from"./iframe-BlxKDeRn.js";import{B as a,u as n}from"./useBookmarks-efz-G8A2.js";import{B as d}from"./BookmarkModal-CrivFy57.js";import{L as c}from"./Layout-B73xvpB6.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BkS0Vn46.js";import"./BookmarkSettingsItem-DlhJwKt8.js";import"./QueryLabel-wjFaPa27.js";import"./Plus-D-AEmb15.js";import"./Heading-PlHpJzKQ.js";import"./useHighlightedText-Cf7684f7.js";import"./SettingsItemBase-D3DnnDxm.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./ChevronUp-BgX0VOdQ.js";import"./ChevronDown-DW-ZLG_4.js";import"./ChevronRight-DNG7F-LS.js";import"./ItemBase-C3ArhSiR.js";import"./ItemLink-CTQIRsl2.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./Typography-CdulF3LZ.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./ContextMenu-DJmCRmo5.js";import"./useDropdownMenuController-_els-HSa.js";import"./Dropdown-CwQ5F4MG.js";import"./SearchField-CTOOlDoc.js";import"./FieldBase-_XE-YVEJ.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./InformationSquare-D-Ph66nw.js";import"./MenuElipsisHorizontal-Dj8zKARE.js";import"./Pencil-EaIkCZrK.js";import"./Trash-epouAA_y.js";import"./SettingsModal-DtHl80GM.js";import"./ModalBody-BIhvolNB.js";import"./Section-phQiwh1A.js";import"./Flex-ETYKhAb5.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonIcon-COE5rocZ.js";import"./ButtonLabel-Cw-39_hF.js";import"./TextField-D1EOpeD3.js";import"./SkipLink-eav45shA.js";import"./Banner-BtnDPWVi.js";import"./GlobalHeader-C4HRPfH0.js";import"./useIsDesktop--Uj-L73j.js";import"./GlobalAccountButton-1OnJI3Rg.js";import"./Enter-B2Te9yrh.js";import"./GlobalMenuButton-q8sy_pc7.js";import"./MenuHamburger-BYEHlw1B.js";import"./AccountSelector-dVt603LR.js";import"./Switch-CR8TgQ3y.js";import"./AccountMenu-DDNzCUWV.js";import"./GlobalMenu-X9SaRmvB.js";import"./ArrowUndo-DQ842Ieg.js";import"./Globe-Bqpcj0j2.js";import"./BreadcrumbsLink-BKmKvpHc.js";import"./ArrowRight-D2xrV8w1.js";import"./Footer-DEuuu4V-.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
