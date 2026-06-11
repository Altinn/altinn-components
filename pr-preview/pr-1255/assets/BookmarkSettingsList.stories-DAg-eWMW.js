import{a7 as t}from"./iframe-DH0sUlof.js";import{B as a,u as n}from"./useBookmarks-5Xvmp9bI.js";import{B as d}from"./BookmarkModal-LIalzajg.js";import{L as c}from"./Layout-BM-re6hZ.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CPWn58Ca.js";import"./BookmarkSettingsItem-CJLI2a9o.js";import"./QueryLabel-DmVMf24-.js";import"./Plus-CKgq15mC.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./SettingsItemBase-BJki3aQX.js";import"./ItemMedia-BGZXzift.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";import"./ItemBase-1sT4ul5N.js";import"./ItemLink-D0iXhSOF.js";import"./ItemControls-BwbZayit.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./Typography-PtbhQdVx.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./ContextMenu-DRV4f9iJ.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./SearchField-CPfjDOA9.js";import"./FieldBase-DCz4GC6j.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuListHeading-DWFD_r7c.js";import"./MenuItem-BT1jodiz.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./MenuElipsisHorizontal-aeLtgluJ.js";import"./Pencil-By2xt4hV.js";import"./Trash-Du_QY7Ml.js";import"./SettingsModal-Cd5h6AtQ.js";import"./ModalBody-Bsp1GUDI.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./ButtonGroup-0Z_3vx9e.js";import"./ButtonIcon-CUIrIkpy.js";import"./ButtonLabel-BhcL_izL.js";import"./TextField-DAaECzgL.js";import"./SkipLink-DlahxJgc.js";import"./Banner-DtLSknn1.js";import"./GlobalHeader-u5_pIhrt.js";import"./useIsDesktop-DDeSw2nv.js";import"./GlobalAccountButton-iTgezSX2.js";import"./Enter-DbOHbWti.js";import"./GlobalMenuButton-CwjgZ_FE.js";import"./MenuHamburger-Cn3ng886.js";import"./AccountSelector-CnqfBXqj.js";import"./Switch-DLlmDxn9.js";import"./AccountMenu-D3rEKCa-.js";import"./GlobalMenu-DMdLNjq8.js";import"./ArrowUndo-CQw5ozEs.js";import"./Globe-CBTwn8IH.js";import"./BreadcrumbsLink-DLp81Nza.js";import"./ArrowRight-CJRbVSUn.js";import"./Footer-BNPP5cgL.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
