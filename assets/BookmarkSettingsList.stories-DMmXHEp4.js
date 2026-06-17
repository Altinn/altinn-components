import{a7 as t}from"./iframe-CGVyzYP6.js";import{B as a,u as n}from"./useBookmarks-DNM64eTB.js";import{B as d}from"./BookmarkModal-BESsGbit.js";import{L as c}from"./Layout-Djoy4dwP.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DakKUenW.js";import"./BookmarkSettingsItem-B_M1Sz0h.js";import"./QueryLabel-DSrmKpGM.js";import"./Plus-BK1pztAq.js";import"./Heading-EfRG8byd.js";import"./useHighlightedText-Bh9EAdhA.js";import"./SettingsItemBase-D_jhxmpU.js";import"./ItemMedia-DPok0_Uu.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./ChevronUp-C5-b6A0s.js";import"./ChevronDown-BnuaQ1Jn.js";import"./ChevronRight-_qaR5Ukf.js";import"./ItemBase-Czu03lhj.js";import"./ItemLink-BK6jfXpZ.js";import"./ItemControls-DA3hAeY8.js";import"./Badge-DjC88ORp.js";import"./Tooltip-BCyYy-oX.js";import"./Typography-CpGYIokR.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./ContextMenu-6V2WGQT0.js";import"./useDropdownMenuController-_RUVZb-i.js";import"./Dropdown-85NQ92f7.js";import"./SearchField-Dki50BLg.js";import"./FieldBase-CPq342qa.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./Input-ChwQfPxo.js";import"./MenuListItem-BZZ7Na45.js";import"./MenuListDivider-rcUBnQ13.js";import"./MenuListHeading-Dp87R0C9.js";import"./MenuItem-D-GQTJGG.js";import"./Checkmark-pskdQzRC.js";import"./ItemLabel-C1oepsPk.js";import"./InformationSquare-CCTfPPnt.js";import"./MenuElipsisHorizontal-V5cJLUxq.js";import"./Pencil-CPCAdLW0.js";import"./Trash-DC850SXw.js";import"./SettingsModal-D6JNoI1O.js";import"./ModalBody-BShtfl0N.js";import"./Section-Dto-LHOR.js";import"./Flex-Ba3off4t.js";import"./ButtonGroup-C56yvq46.js";import"./ButtonIcon-DxwlIUls.js";import"./ButtonLabel-Cv6t8WFf.js";import"./TextField-TmUNtNfi.js";import"./SkipLink-CC4_NF6J.js";import"./Banner-Dd6wYduJ.js";import"./GlobalHeader-KnAWlONX.js";import"./useIsDesktop-CnSO8iXf.js";import"./GlobalAccountButton-B-nzRDvZ.js";import"./Enter-DEYVRIyR.js";import"./GlobalMenuButton-XgUkx309.js";import"./MenuHamburger-DPcE0NSO.js";import"./AccountSelector-DxjEJAN4.js";import"./Switch-DoetDUYG.js";import"./AccountMenu-Dk2HLUGM.js";import"./GlobalMenu-BFT1yppM.js";import"./ArrowUndo-Cdz_QOzf.js";import"./Globe-B1ZFYYzZ.js";import"./BreadcrumbsLink-D57LKQws.js";import"./ArrowRight-Boev_Mr3.js";import"./Footer-Dm2gyZcv.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
