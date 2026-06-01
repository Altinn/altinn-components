import{a7 as t}from"./iframe-D3QbR5Le.js";import{B as a,u as n}from"./useBookmarks-z-ZJ6D-g.js";import{B as d}from"./BookmarkModal-9-v_d_-2.js";import{L as c}from"./Layout-98uq2Nbn.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CKRyFifW.js";import"./BookmarkSettingsItem-BPixmuii.js";import"./QueryLabel-CW90pEyQ.js";import"./Plus-CH4rOE0f.js";import"./Heading-D807jdih.js";import"./useHighlightedText-Cs6VCP7b.js";import"./SettingsItemBase-Lt2ogKyw.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./ChevronUp-CTGCEiGM.js";import"./ChevronDown-B0RV9pqr.js";import"./ChevronRight-CW8WMRnL.js";import"./ItemBase-CEAJBqnC.js";import"./ItemLink-CZhIWltI.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./Typography-Dc0CQRXO.js";import"./MagnifyingGlass-odaglt7B.js";import"./ContextMenu-DszTDAnz.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./SearchField-C1oRwJ9X.js";import"./FieldBase-BVisqjo6.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuListHeading-CUGWWC4c.js";import"./MenuItem-p2P7kMgy.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./MenuElipsisHorizontal-Tn2MvOgZ.js";import"./Pencil-BG4ZqV49.js";import"./Trash-BkS8tkBS.js";import"./SettingsModal-CeyZSZ--.js";import"./ModalBody-BwpzmVNb.js";import"./Section-C8MEyA5r.js";import"./Flex-Dql3tqb8.js";import"./ButtonGroup-BYb3YlMN.js";import"./ButtonIcon-Ye1m4QhY.js";import"./ButtonLabel-ChXqurd4.js";import"./TextField-BeFFvfBE.js";import"./SkipLink-BWk-WkdK.js";import"./Banner-Bm_QqOdx.js";import"./GlobalHeader-D1uyhSdI.js";import"./useIsDesktop-CIdvrOYU.js";import"./GlobalAccountButton-Bh_bdKG1.js";import"./Enter-DsDy1cdk.js";import"./GlobalMenuButton-Cc_W4ERZ.js";import"./MenuHamburger-LJWJnc75.js";import"./AccountSelector-BEMkPd7g.js";import"./Switch-BOPbfOkf.js";import"./AccountMenu-B24E_x6q.js";import"./GlobalMenu-BS9XoGzt.js";import"./ArrowUndo-K62ELgv2.js";import"./Globe-DRoKw-je.js";import"./BreadcrumbsLink-m0IJbbKb.js";import"./ArrowRight-DLgRKrIE.js";import"./Footer-Cvhx4ZNB.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
