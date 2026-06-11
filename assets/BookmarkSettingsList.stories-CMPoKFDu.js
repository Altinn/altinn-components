import{a7 as t}from"./iframe-CvGAoPsc.js";import{B as a,u as n}from"./useBookmarks-WkXo7MEZ.js";import{B as d}from"./BookmarkModal-CDbHjoea.js";import{L as c}from"./Layout-DB-ZHrgi.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CZTVrDBq.js";import"./BookmarkSettingsItem-B_ff4-H2.js";import"./QueryLabel-DtGA44qw.js";import"./Plus-gM9Gdbeo.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./SettingsItemBase-Dh_SFKyx.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./ChevronUp-BlXkTO7h.js";import"./ChevronDown-CQ4dl58P.js";import"./ChevronRight-CMCEl43v.js";import"./ItemBase-DqG20n5b.js";import"./ItemLink-mA2zY14C.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./Typography-BnX3Du0Y.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./ContextMenu-XF95haZj.js";import"./useDropdownMenuController-DHE3Yfxx.js";import"./Dropdown-wMqb1yc7.js";import"./SearchField-BnKKet4K.js";import"./FieldBase-DoX_7GiJ.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuListHeading-CgytQ4SA.js";import"./MenuItem-CixWxF6L.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";import"./MenuElipsisHorizontal-BGx_HU9M.js";import"./Pencil-UIXs5vM8.js";import"./Trash-DafTCCNM.js";import"./SettingsModal-D2U2f8HB.js";import"./ModalBody-BEoDIyb7.js";import"./Section-25rkGJ0B.js";import"./Flex-DO5C4y-8.js";import"./ButtonGroup-CN_FlQBy.js";import"./ButtonIcon-Bu8EM3Rn.js";import"./ButtonLabel-CH2OrlmQ.js";import"./TextField-CXoYm8q0.js";import"./SkipLink-CwoLSiTH.js";import"./Banner-DxO_ecX0.js";import"./GlobalHeader-CJ7KScNa.js";import"./useIsDesktop-BpNoUBvD.js";import"./GlobalAccountButton-rTJcz3cc.js";import"./Enter-CYlJSX23.js";import"./GlobalMenuButton-Di3y6noj.js";import"./MenuHamburger-CVGE1V0h.js";import"./AccountSelector-D9ke-ipZ.js";import"./Switch-CooEQBmn.js";import"./AccountMenu-DnYi-wsG.js";import"./GlobalMenu-Jqp01vWV.js";import"./ArrowUndo-BoaXS6mH.js";import"./Globe-OMjNTatx.js";import"./BreadcrumbsLink-ner52-o7.js";import"./ArrowRight-ZbtdXKxz.js";import"./Footer-BbXCUZPN.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
