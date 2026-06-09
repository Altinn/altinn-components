import{a7 as t}from"./iframe-D6Pw3lmv.js";import{B as a,u as n}from"./useBookmarks-CXx4aiq4.js";import{B as d}from"./BookmarkModal-BHX9BlfV.js";import{L as c}from"./Layout-CwNHuIGl.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-AaKLsWFm.js";import"./BookmarkSettingsItem-Cr6vNUAq.js";import"./QueryLabel-DBYtGOs4.js";import"./Plus-yZ7u7aad.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./SettingsItemBase-XkXN956I.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./ChevronRight-DrJyRyMs.js";import"./ItemBase-D25TzUDm.js";import"./ItemLink-J0cRTxzg.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./Typography-bPKdoJNM.js";import"./MagnifyingGlass-xEXh01wv.js";import"./ContextMenu-BxW7sU72.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./SearchField-EcYIPpv0.js";import"./FieldBase-q3f36oGg.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./MenuElipsisHorizontal-Coq-MnNJ.js";import"./Pencil-CawRBz37.js";import"./Trash-B3d5chwP.js";import"./SettingsModal-DtZGdoZV.js";import"./ModalBody-eofliHBo.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./ButtonGroup-BukNZ9_Z.js";import"./ButtonIcon-BZRYAWT7.js";import"./ButtonLabel-Byk5sCAh.js";import"./TextField-1Y0CJPxo.js";import"./SkipLink-Dr2pSQlS.js";import"./Banner-sn-Q5tmD.js";import"./GlobalHeader-q-BY9sFU.js";import"./useIsDesktop-7_H-1XDj.js";import"./GlobalAccountButton-FshSIaE5.js";import"./Enter-BA1biyqm.js";import"./GlobalMenuButton-Cp5uiN-M.js";import"./MenuHamburger-DaPB2oTh.js";import"./AccountSelector-CtJq3hwS.js";import"./Switch-DTtTZAwl.js";import"./AccountMenu-CyGLqcYr.js";import"./GlobalMenu-Cw_AcEfT.js";import"./ArrowUndo-EhrKGXZn.js";import"./Globe-BCYHihqy.js";import"./BreadcrumbsLink-DxLhd7PP.js";import"./ArrowRight-C4ZxVRSW.js";import"./Footer-YZCYtUnl.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
