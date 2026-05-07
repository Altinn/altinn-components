import{j as t}from"./iframe-Cqj3AiBb.js";import{B as a,u as n}from"./useBookmarks-CntO6FnE.js";import{L as c}from"./Layout-f91yRgSY.js";import{B as d}from"./BookmarkModal-BENMAtxw.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BloSIIBV.js";import"./QueryLabel-_2UOa2hv.js";import"./Plus-U9ILyx0n.js";import"./useId-Bi-DL88I.js";import"./Heading-CJiOkJPI.js";import"./index-CHG1hv9Q.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./SettingsItemBase-B6HYWitJ.js";import"./ChevronUp-BaSPXXxx.js";import"./ChevronDown-g18mW4eX.js";import"./ChevronRight-CxmxTIkT.js";import"./ItemLink-Bkhdk8v_.js";import"./ItemMedia-DihsrAKt.js";import"./XMark-ReENydG3.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./ItemControls-eJMUKPOH.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Typography-CV-E4tqG.js";import"./MagnifyingGlass-fMCV_alc.js";import"./ContextMenu-DvzTTWGt.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Dropdown-Cx7yQmcU.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./MenuElipsisHorizontal-DNpXF7Es.js";import"./SearchField-qenOIdRZ.js";import"./FieldBase-DDsWnoQi.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./Checkmark-BFwQvgMU.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./Pencil-BW7gTPSy.js";import"./Trash-B8H25DCw.js";import"./SkipLink-BdUDD80F.js";import"./Banner-BSSTB2OU.js";import"./GlobalHeader-1ZMARuNk.js";import"./useIsDesktop-BA5ox44l.js";import"./GlobalAccountButton-DzTdmx8c.js";import"./Enter-COG8qags.js";import"./GlobalMenuButton-CYW4jJbb.js";import"./MenuHamburger-Cowy_Pyv.js";import"./AccountSelector-K6AFxsIB.js";import"./heading-BCk6Lw7-.js";import"./AccountMenu-DDR4vCda.js";import"./Switch-Dd7wCyBA.js";import"./GlobalMenu-G61wL3ak.js";import"./ArrowUndo-zDsO2X_3.js";import"./Globe-DBjj0c59.js";import"./BreadcrumbsLink-DyfgdHtn.js";import"./ArrowRight-CtrtZlDi.js";import"./Footer-1w6vwepj.js";import"./SettingsModal-B16xHKIZ.js";import"./ModalBody-jsg5kTGr.js";import"./Section-BsXiOSXS.js";import"./Flex-DFnlILDc.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonIcon-CRk-Fq7D.js";import"./ButtonLabel-BBQgFKVt.js";import"./TextField-CKQo9ppU.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
