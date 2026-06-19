import{a7 as t}from"./iframe-DmJr8_aG.js";import{B as a,u as n}from"./useBookmarks-D5OQ4IVS.js";import{B as d}from"./BookmarkModal-DmWtLk-6.js";import{L as c}from"./Layout-DLxPsprs.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DCAZlAYS.js";import"./BookmarkSettingsItem-BY8ZphRp.js";import"./QueryLabel-D06Z-39I.js";import"./Plus-CfdwKNmJ.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./SettingsItemBase-CadGMhEl.js";import"./ItemMedia-BAIJH8U4.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";import"./ItemBase-DGqNBtsw.js";import"./ItemLink-CF3E9h13.js";import"./ItemControls-C3FVXvI0.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./Typography-B5vyFnSY.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./ContextMenu-Ce4MM7JC.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./SearchField-DIEgnIKm.js";import"./FieldBase-B-b_vsUI.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuListDivider-DxYIfIoZ.js";import"./MenuListHeading-D4ODluyz.js";import"./MenuItem-BAlZe3i8.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./InformationSquare-BDz-_K2o.js";import"./MenuElipsisHorizontal-BSIPnNnd.js";import"./Pencil-Cm64c2kP.js";import"./Trash-BOmSsjSD.js";import"./SettingsModal-B1XNc6l-.js";import"./ModalBody-C0hCt4EK.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./ButtonGroup-ps_HIdpu.js";import"./ButtonIcon-lLWPwtnI.js";import"./ButtonLabel-CTdEbbj7.js";import"./TextField-Cv73iNpE.js";import"./SkipLink-bd2dEo_L.js";import"./Banner-sSuuPOtA.js";import"./GlobalHeader-1MFRCnK1.js";import"./useIsDesktop-BUXnVuQb.js";import"./GlobalAccountButton-BTNSY6aM.js";import"./Enter-BRo8_hWS.js";import"./GlobalMenuButton-DFRDjsP2.js";import"./MenuHamburger-EwCvIS65.js";import"./AccountSelector-BW4qny3W.js";import"./Switch-NPoiVkTV.js";import"./AccountMenu-C4U3FMVS.js";import"./GlobalMenu-BbbSy8Mv.js";import"./ArrowUndo-oxrOyorJ.js";import"./Globe-0sVjJkCt.js";import"./BreadcrumbsLink-CE_H6JB9.js";import"./ArrowRight-BWjamCg9.js";import"./Footer-BOms_iP6.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
