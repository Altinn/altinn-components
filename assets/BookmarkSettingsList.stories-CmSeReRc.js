import{a7 as t}from"./iframe-3eub8g81.js";import{B as a,u as n}from"./useBookmarks-gxHuFK_U.js";import{B as d}from"./BookmarkModal-CpZGsp46.js";import{L as c}from"./Layout-B8rl3WFn.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DENMRGmJ.js";import"./BookmarkSettingsItem-CbGEGd0K.js";import"./QueryLabel-CYu5-yfM.js";import"./Plus-BNfQnDLY.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./SettingsItemBase-B1tn_cXi.js";import"./ItemMedia-BB_XOZ97.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";import"./ItemBase-Dkp179g5.js";import"./ItemLink-BMVyW3FY.js";import"./ItemControls-DXPiBYKt.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./Typography-BfGFMo_X.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./ContextMenu-y8zF4E0Z.js";import"./useDropdownMenuController-F3dY1VLA.js";import"./Dropdown-D34Rh-FK.js";import"./SearchField-DQomiBHs.js";import"./FieldBase-C1gDTj8R.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./InformationSquare-CORGNNV5.js";import"./MenuElipsisHorizontal-C9pt0hzq.js";import"./Pencil-d8zsJ0Y2.js";import"./Trash-BuKvObXQ.js";import"./SettingsModal-DHKl9XyW.js";import"./ModalBody-BLJZdTz1.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./ButtonGroup-D2aDB7np.js";import"./ButtonIcon-CTN-ygEI.js";import"./ButtonLabel-DAR0S7-w.js";import"./TextField-CaFL3_rZ.js";import"./SkipLink-Dr_ESesV.js";import"./Banner-Ctn2nm5g.js";import"./GlobalHeader-CM-mKTys.js";import"./useIsDesktop-85ERKH5L.js";import"./GlobalAccountButton-DKPiMzOb.js";import"./Enter-CvCu2dAb.js";import"./GlobalMenuButton-CKB-x1rg.js";import"./MenuHamburger-CbSlFFZF.js";import"./AccountSelector-OSLyMiiK.js";import"./Switch-CuP7DJRF.js";import"./AccountMenu-CNbXUl8V.js";import"./GlobalMenu-Dz-l5-L4.js";import"./ArrowUndo-N8aO_0gv.js";import"./Globe-CgKM5q3K.js";import"./BreadcrumbsLink-DObLHpyG.js";import"./ArrowRight-Buj25L3x.js";import"./Footer-DyrqFXgR.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
