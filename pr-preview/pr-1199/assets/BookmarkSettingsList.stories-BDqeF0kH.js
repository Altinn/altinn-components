import{j as t}from"./iframe-D-ID03Ik.js";import{B as a,u as n}from"./useBookmarks-Bw8fh10_.js";import{L as c}from"./Layout-DP4RRJlF.js";import{B as d}from"./BookmarkModal-6k9KfcnO.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BKaTOud3.js";import"./QueryLabel-CG_dAIz0.js";import"./Plus-DTGwq1FZ.js";import"./useId-DxZoCrQU.js";import"./Heading-BD0s_Obx.js";import"./index-DpFyEq-2.js";import"./useHighlightedText-Db1ksA0v.js";import"./Skeleton--3bwKnDN.js";import"./SettingsItemBase-RyTWVWwB.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";import"./ItemLink-CKC9Zcw7.js";import"./ItemMedia-BTzF80jS.js";import"./XMark-DAr8sgUQ.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./ItemControls-Bpd8WrWV.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./tooltip-CH7-mov_.js";import"./Typography-COzCTzPW.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./ContextMenu-CNtum_0S.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Dropdown-CPTBx2eu.js";import"./Button-CO1zFGa4.js";import"./MenuElipsisHorizontal-aZjOJxtA.js";import"./SearchField-D--HBqax.js";import"./FieldBase-DmpPz6xV.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./Checkmark-WbwQiDGB.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./Pencil-BM-DRb1F.js";import"./Trash-B9VlyYzI.js";import"./SkipLink--OTapE-3.js";import"./Banner-BHTuFT8I.js";import"./GlobalHeader-DH42BEfr.js";import"./useIsDesktop-bpU9K9vW.js";import"./GlobalAccountButton-C8oi4QS_.js";import"./Enter-C3raXanf.js";import"./GlobalMenuButton-B600tKdA.js";import"./MenuHamburger-DWdWswT9.js";import"./AccountSelector-CvEBBQj7.js";import"./AccountMenu-BK-tXBl9.js";import"./Switch-BD5e0ry_.js";import"./GlobalMenu-Bqru864B.js";import"./ArrowUndo-C5nWWLI0.js";import"./Globe-DJcvVyi1.js";import"./BreadcrumbsLink-CndBd5Jb.js";import"./ArrowRight-nWKAuBPp.js";import"./Footer-mTgV9zpv.js";import"./SettingsModal-Be5AEnKf.js";import"./ModalBody-CNB4VnH4.js";import"./Section-Df_v2ciX.js";import"./Flex-pOoXofWS.js";import"./ButtonGroup-vd8KP0y5.js";import"./ButtonIcon-BTj5a5hg.js";import"./ButtonLabel-D9Z2FXBW.js";import"./TextField-Xdm4FrUx.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
