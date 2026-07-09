import{a7 as t}from"./iframe-BZiA3Dc9.js";import{B as a,u as n}from"./useBookmarks-ByyY98rM.js";import{B as d}from"./BookmarkModal-CIzNnwhY.js";import{L as c}from"./Layout-Dh_gh_Ce.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-S-ctNtGP.js";import"./BookmarkSettingsItem-JbahhOv0.js";import"./QueryLabel-DWtmKCRS.js";import"./Plus-DuB6ksxl.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./SettingsItemBase-B0O87-qU.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./ChevronRight-CRJJFvsY.js";import"./ItemBase-DgeIJNcx.js";import"./ItemLink-essyEfxP.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./Typography-HNFVi96c.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./ContextMenu-98Gzvt6m.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./FieldBase-ueusd3rP.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./InformationSquare-mZWip9WA.js";import"./MenuElipsisHorizontal-C2yCxxi6.js";import"./Pencil-neK5KHtm.js";import"./Trash-DL-j6TXo.js";import"./SettingsModal-DmpepEFy.js";import"./ModalBody-CEOKzm3S.js";import"./Section-B5v4sxTq.js";import"./Flex-DlKNIBbG.js";import"./ButtonGroup-CQ4JbS4J.js";import"./ButtonIcon-CMUqdBu-.js";import"./ButtonLabel-BZQLbjuh.js";import"./TextField-a1zywizD.js";import"./SkipLink-DWgdd-GE.js";import"./Banner-BtKZ61By.js";import"./GlobalHeader-Cu8SF1ir.js";import"./useIsDesktop-CSl4XLc7.js";import"./GlobalAccountButton-UsxKQVTG.js";import"./Enter-D45C4ZyH.js";import"./GlobalMenuButton-Du8ecgvS.js";import"./MenuHamburger-CH0SCgCh.js";import"./AccountSelector-B3eiELKb.js";import"./Switch-BcTJiZEX.js";import"./AccountMenu-C_iFW4C2.js";import"./GlobalMenu-DkcK29pl.js";import"./ArrowUndo-DmjPkDTA.js";import"./Globe-D2JmmsD8.js";import"./BreadcrumbsLink-BfnL9fjg.js";import"./ArrowRight-W2FxJoMq.js";import"./Footer-BELR6Sl2.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
