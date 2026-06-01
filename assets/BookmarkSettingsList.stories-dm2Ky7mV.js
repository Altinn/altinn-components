import{p as t}from"./iframe-HmDeAVAp.js";import{B as a,u as n}from"./useBookmarks-DX5E-k3z.js";import{B as d}from"./BookmarkModal-D4BYig0c.js";import{L as c}from"./Layout-C7oBUU0V.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-l9Wd3rxx.js";import"./BookmarkSettingsItem-39oinc23.js";import"./QueryLabel-BRRwgwPe.js";import"./Plus-DQEVi2NZ.js";import"./useId-BNhfXdUV.js";import"./Heading-CYuK0FXt.js";import"./index-CDtevUxF.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Skeleton-C_Dxe6ID.js";import"./SettingsItemBase-xPZwhobn.js";import"./ItemMedia-CLlob8fs.js";import"./XMark-DFSmJjac.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Icon-DE5JaAj2.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./ItemBase-p8rf4Jdz.js";import"./ItemLink-DyGCCHkK.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./tooltip-DaXe8rKK.js";import"./Typography-C3y2BBzr.js";import"./MagnifyingGlass-BBPHMis4.js";import"./ContextMenu-oQVSL7Ks.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./Button-SB9AH0kY.js";import"./SearchField-jJndU2uH.js";import"./FieldBase-DgiW3HLY.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./MenuElipsisHorizontal-BDeVXpR4.js";import"./Pencil-Cc85wKcP.js";import"./Trash-DTo3Lvzs.js";import"./SettingsModal-CygK-Zxf.js";import"./ModalBody-HgcUYgus.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./ButtonGroup-IIZdVlDD.js";import"./ButtonIcon-CIUJ6U7l.js";import"./ButtonLabel-fQ3RMke8.js";import"./TextField-CQ0deXKf.js";import"./SkipLink-D23OaqaJ.js";import"./Banner-DXjLYb3h.js";import"./GlobalHeader-CufXuMSy.js";import"./useIsDesktop-DO6OG2LW.js";import"./GlobalAccountButton-DvDpR5SP.js";import"./Enter-CAZ7ckdy.js";import"./GlobalMenuButton-zo8Gaxdk.js";import"./MenuHamburger-DdsOhgur.js";import"./AccountSelector-M8HWKIKD.js";import"./Switch-BqrMYGGB.js";import"./AccountMenu-CqB4ytQn.js";import"./GlobalMenu-CMqwihJF.js";import"./ArrowUndo-5PN4IUrs.js";import"./Globe-BEIMQJ4I.js";import"./BreadcrumbsLink-CKGTzOaK.js";import"./ArrowRight-IsDuRZS-.js";import"./Footer-pGg2oEmV.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const qo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,qo as __namedExportsOrder,Oo as default};
