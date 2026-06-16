import{a7 as t}from"./iframe-Cj7V21km.js";import{B as a,u as n}from"./useBookmarks-kdV8-nOs.js";import{B as d}from"./BookmarkModal-BTq5OZky.js";import{L as c}from"./Layout-CKzA9fKN.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DM-7OZIV.js";import"./BookmarkSettingsItem-CD1xWfDc.js";import"./QueryLabel-Bp4M4Z81.js";import"./Plus-ubcjdf5p.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./SettingsItemBase-DAczY4vG.js";import"./ItemMedia-CT1Qhol1.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./ChevronRight-DWxpnRfX.js";import"./ItemBase-B85att75.js";import"./ItemLink-D-NZ4xQE.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./Typography-B3pfG5kD.js";import"./MagnifyingGlass-B8zavmyI.js";import"./ContextMenu-BXNKEOUh.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./SearchField-BEMeTu2B.js";import"./FieldBase-D_BM9i5X.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./InformationSquare-NQW98JPt.js";import"./MenuElipsisHorizontal-CgwSiBWF.js";import"./Pencil-Dn6ZrLxy.js";import"./Trash-tfnqqh8_.js";import"./SettingsModal-C38mM1Zv.js";import"./ModalBody-Bg14fQJl.js";import"./Section-fD1somlY.js";import"./Flex-CMfzrDGq.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonIcon-BJPub_WA.js";import"./ButtonLabel-LAa8UsBL.js";import"./TextField-BJ7wP6V8.js";import"./SkipLink-gx7XgO_W.js";import"./Banner-DQZIlCt5.js";import"./GlobalHeader-CfYlg_Ke.js";import"./useIsDesktop-B_K6d_pz.js";import"./GlobalAccountButton-DIIuy-_h.js";import"./Enter-f6aYZdhd.js";import"./GlobalMenuButton-BYeiSNPC.js";import"./MenuHamburger-DoaqNjt8.js";import"./AccountSelector-D24D4-CR.js";import"./Switch-B__v8UGS.js";import"./AccountMenu-B-eZH9r6.js";import"./GlobalMenu-CHtFHwyb.js";import"./ArrowUndo-CNZhAEE7.js";import"./Globe-CzN74s1b.js";import"./BreadcrumbsLink-C_IpMOma.js";import"./ArrowRight-mfl-HMNl.js";import"./Footer-BaPK0KMZ.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
