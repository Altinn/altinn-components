import{a7 as t}from"./iframe-Ca4u80-y.js";import{B as a,u as n}from"./useBookmarks-DR5t9rO2.js";import{B as d}from"./BookmarkModal-sda4Njj2.js";import{L as c}from"./Layout-CHTHE8No.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D83_Vp30.js";import"./BookmarkSettingsItem-DdJQLBl0.js";import"./QueryLabel-beq-TejI.js";import"./Plus-Oh3Xr98D.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./SettingsItemBase-BP_HO1-t.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./ChevronRight-eVASrmJg.js";import"./ItemBase-CQLw8VD6.js";import"./ItemLink-C3-H5hes.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./Typography-DWDEZq_R.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./ContextMenu-Cne7NUId.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./FieldBase-BaoqxAAt.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./InformationSquare-C5WU0eyN.js";import"./MenuElipsisHorizontal-ZgAigsFC.js";import"./Pencil-D8gZucHs.js";import"./Trash-CQegPx8Y.js";import"./SettingsModal-CiFfnuDg.js";import"./ModalBody-BlWXQol1.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonIcon-CPwlrksd.js";import"./ButtonLabel-DymAo8y_.js";import"./TextField-Bew3xIV0.js";import"./SkipLink-CBj3210P.js";import"./CookieBanner-C9aSgqV6.js";import"./Banner-Dc9MSI6P.js";import"./GlobalHeader-DlkkAHQ1.js";import"./useIsDesktop-DM4EaZ7O.js";import"./GlobalAccountButton-B2aUt3kB.js";import"./Enter-CDkzTut5.js";import"./GlobalMenuButton-DIR4PI9u.js";import"./MenuHamburger-D2oXTqoK.js";import"./AccountSelector-QiIXaFT4.js";import"./Switch-DdbPUpTN.js";import"./AccountMenu-2Nuk4Gjc.js";import"./GlobalMenu-0Vc719P-.js";import"./ArrowUndo-DOf__dU6.js";import"./Globe-OIrchniO.js";import"./BreadcrumbsLink-DSNygZEc.js";import"./ArrowRight-D2rxZe9t.js";import"./Footer-BIWGl213.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
