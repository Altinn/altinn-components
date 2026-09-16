import{a7 as t}from"./iframe-C-THn91T.js";import{B as a,u as n}from"./useBookmarks-DQPwn-HD.js";import{B as d}from"./BookmarkModal-ByBxOHRU.js";import{L as c}from"./Layout-BC3G_NXR.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CEKxQFuP.js";import"./BookmarkSettingsItem-CHXHOmZD.js";import"./QueryLabel-BE2Yv0GN.js";import"./Plus-CP2q7sax.js";import"./Heading-Bt4tEn1t.js";import"./useHighlightedText-LohBehUX.js";import"./SettingsItemBase-DtPqDwRe.js";import"./ItemMedia-DiPL1djx.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./ChevronUp-BW3alSKD.js";import"./ChevronDown-FLKzC-yj.js";import"./ChevronRight-SDiRgKYv.js";import"./ItemBase-nvQYs82a.js";import"./ItemLink-DalQXR0q.js";import"./ItemControls-AJskvBhb.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./Typography-BHSdNY0l.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./ContextMenu-B70W48kK.js";import"./useDropdownMenuController-CYkklUYZ.js";import"./Dropdown-DGlWBLGp.js";import"./SearchField-3MMOEmrN.js";import"./FieldBase-3tu8AQku.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";import"./MenuListItem-BtLexDfB.js";import"./MenuListDivider-C2y_tXgh.js";import"./MenuListHeading-Djui1q9T.js";import"./MenuItem-B98ufrdD.js";import"./Checkmark-CKSWNkLN.js";import"./ItemLabel-DD7gOu3Q.js";import"./InformationSquare-DjaHtlyP.js";import"./MenuElipsisHorizontal-eJprcIlu.js";import"./Pencil-CD4Tw7gQ.js";import"./Trash-Bge9W0Oj.js";import"./SettingsModal-_T4heT05.js";import"./ModalBody-CWjR2JlU.js";import"./Section-BoYAWl0A.js";import"./Flex-C1ZLhAqe.js";import"./ButtonGroup-CfikcDtR.js";import"./ButtonIcon-NqW4JNJH.js";import"./ButtonLabel-BXCrqDSx.js";import"./TextField-_1OHmAsK.js";import"./SkipLink-BorD0Vun.js";import"./CookieBanner-MaMXHGQC.js";import"./Banner-CXOiW7PU.js";import"./GlobalHeader-C4nUX4zG.js";import"./useIsDesktop-BCIhQ_z4.js";import"./GlobalAccountButton-LT05uIqY.js";import"./Enter-BepWxp12.js";import"./GlobalMenuButton-6gEGZn4M.js";import"./MenuHamburger-DEQ-9aGN.js";import"./AccountSelector-8ptbkDm6.js";import"./Switch-CNSdXRMG.js";import"./AccountMenu-CvwSXAfG.js";import"./GlobalMenu-Cs8XxjMp.js";import"./ArrowUndo-_3NlNhzo.js";import"./Globe-DbtFb8Ri.js";import"./BreadcrumbsLink-DSCmSbWH.js";import"./ArrowRight-Cci1rcXt.js";import"./Footer-a6Rdq57Z.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
