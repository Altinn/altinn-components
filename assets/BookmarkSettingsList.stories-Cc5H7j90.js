import{a7 as t}from"./iframe-RnExGCnN.js";import{B as a,u as n}from"./useBookmarks-CIVkSjzq.js";import{B as d}from"./BookmarkModal-nB2iL28m.js";import{L as c}from"./Layout-DIJC5uS7.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-ZXSzWhmh.js";import"./BookmarkSettingsItem-z0m3HVt0.js";import"./QueryLabel-CScutXJW.js";import"./Plus-BRt8-Ub-.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./SettingsItemBase-9o7Vh2w8.js";import"./ItemMedia-D368mX5y.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./ChevronUp-B2SXqU3E.js";import"./ChevronDown-CHkfpXTu.js";import"./ChevronRight-CN6Km5wu.js";import"./ItemBase-Ca-fo2iM.js";import"./ItemLink-teTwYyz-.js";import"./ItemControls-g4j5xbWR.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./Typography-C0LI4Nld.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./ContextMenu-DW3csCOG.js";import"./useDropdownMenuController-BoOePyNF.js";import"./Dropdown-B88VU_C4.js";import"./SearchField-vIwRNxpu.js";import"./FieldBase-DiJ4iC98.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./InformationSquare-CRikKN32.js";import"./MenuElipsisHorizontal-DgcAgh_d.js";import"./Pencil-CKUIrzka.js";import"./Trash-D4qqih4r.js";import"./SettingsModal-D-4zKF3k.js";import"./ModalBody-Bso5XhNl.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./ButtonGroup-CxEAmlK5.js";import"./ButtonIcon-DtB95v_v.js";import"./ButtonLabel-Dd7SipEs.js";import"./TextField-yGpJpctq.js";import"./SkipLink-BXFvptkT.js";import"./CookieBanner-xaf7zN5g.js";import"./Banner-C3B1ipE0.js";import"./GlobalHeader-DbUDUH1N.js";import"./useIsDesktop-D-HcI6XD.js";import"./GlobalAccountButton-iM_fNh5c.js";import"./Enter-D7zjNy7y.js";import"./GlobalMenuButton-BzAAwCnD.js";import"./MenuHamburger-CljCR6Je.js";import"./AccountSelector-DN8G-kUN.js";import"./Switch-cSaA82mK.js";import"./AccountMenu-DL7GHW0M.js";import"./GlobalMenu-B60CzSq-.js";import"./ArrowUndo-DTXf9uKE.js";import"./Globe-RxityyaA.js";import"./BreadcrumbsLink-XgkKfwaq.js";import"./ArrowRight-Cc07q7fo.js";import"./Footer-aeMb_oSK.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
