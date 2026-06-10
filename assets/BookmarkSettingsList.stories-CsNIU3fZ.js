import{a7 as t}from"./iframe-Da53zzTq.js";import{B as a,u as n}from"./useBookmarks-2CdKgeaM.js";import{B as d}from"./BookmarkModal-snS2ycN5.js";import{L as c}from"./Layout--3fNWm7q.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DY0SSfK5.js";import"./BookmarkSettingsItem-Zm4BQQrz.js";import"./QueryLabel-C4bOv65v.js";import"./Plus-D8GF-Tra.js";import"./Heading-DscqP9Yc.js";import"./useHighlightedText-CRKmbQjK.js";import"./SettingsItemBase-Bk5ZV-QL.js";import"./ItemMedia-DBIH2IUr.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./ChevronRight-R352om1g.js";import"./ItemBase-DxSyPEoM.js";import"./ItemLink-LSrTzTCf.js";import"./ItemControls-ohsHtP8K.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./Typography-Dy4MqSc4.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./ContextMenu-C2mB4zeU.js";import"./useDropdownMenuController-XTqI9DN8.js";import"./Dropdown-CHEaMzgw.js";import"./SearchField-C_K7QMu3.js";import"./FieldBase-BU_zP5Yv.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./Input-CoMQYpcI.js";import"./MenuListItem-miRB5bIM.js";import"./MenuListHeading-DpZURBIT.js";import"./MenuItem-CyggXvzt.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./index-nqILkJZM.js";import"./InformationSquare-B_LCnSe8.js";import"./MenuElipsisHorizontal-C9QTcmdo.js";import"./Pencil-DKKwGeYz.js";import"./Trash-CFLNIgyC.js";import"./SettingsModal-BEEglA2y.js";import"./ModalBody-CWm38mqT.js";import"./Section-CfHJUgK6.js";import"./Flex-D2KvdX5w.js";import"./ButtonGroup-D9Sva-zY.js";import"./ButtonIcon-D9kRL-nY.js";import"./ButtonLabel-D6-xX-4X.js";import"./TextField-SHZ6OI7S.js";import"./SkipLink-DFUaYnYK.js";import"./Banner-a6YxsrH0.js";import"./GlobalHeader-B3gZUjPG.js";import"./useIsDesktop-Bce_WwsS.js";import"./GlobalAccountButton-Bk9OXKZz.js";import"./Enter-wL9t8S3m.js";import"./GlobalMenuButton-DyO7-BtI.js";import"./MenuHamburger-C3wVymzF.js";import"./AccountSelector-CAI6zt-c.js";import"./Switch-DAQ_sxHW.js";import"./AccountMenu-DrARlzRz.js";import"./GlobalMenu-DE0duDCs.js";import"./ArrowUndo-G4gIgZFZ.js";import"./Globe-D3SqfVz8.js";import"./BreadcrumbsLink-CJdOFiGK.js";import"./ArrowRight-DypIxPg4.js";import"./Footer-EEwlh3cQ.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
