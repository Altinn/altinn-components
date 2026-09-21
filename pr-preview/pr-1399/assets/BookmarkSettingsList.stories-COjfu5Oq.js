import{a7 as t}from"./iframe-Bjjt_sJ1.js";import{B as a,u as n}from"./useBookmarks-BZKkr4rj.js";import{B as d}from"./BookmarkModal-D7Y22Lc2.js";import{L as c}from"./Layout-D-2PqHUC.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CfDnO3tS.js";import"./BookmarkSettingsItem-eexFRxjQ.js";import"./QueryLabel-C_C9G4Wu.js";import"./Plus-Bfa-1JFY.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./SettingsItemBase-0ckim70l.js";import"./ItemMedia-cRp9TeR0.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./ChevronRight-MBNaUHNp.js";import"./ItemBase-DDpnq5qx.js";import"./ItemLink-BbRKplZ0.js";import"./ItemControls-Cf0gBB0S.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./Typography-D6uVUzG3.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./ContextMenu-BqCCj7wW.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./SearchField-CN96vdWl.js";import"./FieldBase-xSixxw66.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./Input-PLxdr44a.js";import"./MenuListItem-CebbbonR.js";import"./MenuListDivider-CP2Z2JTV.js";import"./MenuListHeading-NxhgYwSy.js";import"./MenuItem-Cqr4SOJp.js";import"./Checkmark-BJpweToD.js";import"./ItemLabel-C7-OFrDm.js";import"./InformationSquare-BBRKQU3y.js";import"./MenuElipsisHorizontal-288HpaRD.js";import"./Pencil-rnP_ihQA.js";import"./Trash-BgkXZGdB.js";import"./SettingsModal-dzs029Zb.js";import"./ModalBody-5UKBpkiI.js";import"./Section-DbOZVIjc.js";import"./Flex-GHRWEM3Q.js";import"./ButtonGroup-uHmrofaO.js";import"./ButtonIcon-CkyJNeMs.js";import"./ButtonLabel-BfWuYCD9.js";import"./TextField-n_MdoiyB.js";import"./SkipLink-B1H3T31O.js";import"./CookieBanner-6xRW-1Qn.js";import"./Banner-BYQfVBWu.js";import"./GlobalHeader-D8qULcBH.js";import"./useIsDesktop-CwMXfazp.js";import"./GlobalAccountButton-Ce3Zf5Fc.js";import"./Enter-WRiMo9vg.js";import"./GlobalMenuButton-CmzY2bLf.js";import"./MenuHamburger-eRZMUoq9.js";import"./AccountSelector-lid9XKme.js";import"./Switch-Bxi23Qi_.js";import"./AccountMenu-CAbMrgYV.js";import"./GlobalMenu-CoF4fWnf.js";import"./ArrowUndo-Cp2tx0-P.js";import"./Globe-BMQfVA0C.js";import"./BreadcrumbsLink-C-l_OAmd.js";import"./ArrowRight-yOSf5xFz.js";import"./Footer-DzYKJ8WH.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
