import{a7 as t}from"./iframe-B8reGtNb.js";import{B as a,u as n}from"./useBookmarks-CEPDhFy0.js";import{B as d}from"./BookmarkModal-DQ0f9AR2.js";import{L as c}from"./Layout-BtIVNKSD.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-G7RJHCVr.js";import"./BookmarkSettingsItem-DHvuIKv6.js";import"./QueryLabel-DSQbBYwx.js";import"./Plus-Ck-NVedy.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./SettingsItemBase-CCVK-afE.js";import"./ItemMedia-B3mE-krC.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./ChevronUp-B4Qw2TyU.js";import"./ChevronDown-Cin8-QCk.js";import"./ChevronRight-BRSkVVAW.js";import"./ItemBase-BENKYjCv.js";import"./ItemLink-c5exwetX.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./Typography-Dxv9MSbD.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./ContextMenu-V8_bDbgd.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./SearchField-CW2nl4m_.js";import"./FieldBase-DDJWfLpA.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuListHeading-BEkIHHSP.js";import"./MenuItem-b6Fzjl6t.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./MenuElipsisHorizontal-CRPur8Uj.js";import"./Pencil-DTE761Vg.js";import"./Trash-BwJUxhUJ.js";import"./SettingsModal-D614nUcg.js";import"./ModalBody-BAO_heQB.js";import"./Section-DovdLmcg.js";import"./Flex-qoZntq9f.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonIcon-CniHZAXy.js";import"./ButtonLabel-CwlIsNoM.js";import"./TextField-MODjpRwD.js";import"./SkipLink-DFS3DuOU.js";import"./Banner-r-U3Cb6i.js";import"./GlobalHeader-pkP8gSeA.js";import"./useIsDesktop-8-GHnyaN.js";import"./GlobalAccountButton-DuBGo6fg.js";import"./Enter-CLqIKE_3.js";import"./GlobalMenuButton-BiVkXz99.js";import"./MenuHamburger-CHdAjUqn.js";import"./AccountSelector-B35oC7Oo.js";import"./Switch-BkDsJFfA.js";import"./AccountMenu-CsigFq3b.js";import"./GlobalMenu-ClOo-T6M.js";import"./ArrowUndo-CqT7_P72.js";import"./Globe-DPkwBtVA.js";import"./BreadcrumbsLink-CBiRFfdZ.js";import"./ArrowRight-BiaOeh9q.js";import"./Footer-BDdV_XIi.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
