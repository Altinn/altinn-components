import{a7 as t}from"./iframe-B2qSCuzl.js";import{B as a,u as n}from"./useBookmarks--uSUZsgN.js";import{B as d}from"./BookmarkModal-Bno0XrCB.js";import{L as c}from"./Layout-76ZEl-bN.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-4wlPj4vw.js";import"./BookmarkSettingsItem-D89I7WrO.js";import"./QueryLabel-Ci40n7fV.js";import"./Plus-C423HqNe.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./SettingsItemBase-C7zixA8u.js";import"./ItemMedia-C3fquT_8.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";import"./ItemBase-BlhljEQ3.js";import"./ItemLink-BLJ5L0E3.js";import"./ItemControls-i4q63th9.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./Typography-CidHk-ga.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./ContextMenu-nwu6xbhA.js";import"./useDropdownMenuController-B1sM5Fkl.js";import"./Dropdown-CXjz9DNR.js";import"./SearchField-M5wz_Je4.js";import"./FieldBase-LsrXuCdT.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./index-L4tlORLO.js";import"./InformationSquare-Bz2aeVSU.js";import"./MenuElipsisHorizontal-B1j_W8j_.js";import"./Pencil-CrmJZ54t.js";import"./Trash-DxBU9Rfy.js";import"./SettingsModal-BLit_PVt.js";import"./ModalBody-DivKqOfu.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";import"./ButtonGroup-DPqV5ihn.js";import"./ButtonIcon-BiMVSz7h.js";import"./ButtonLabel-YAaoCcyd.js";import"./TextField-DTc4Gwi9.js";import"./SkipLink-CfzACGl1.js";import"./Banner-C-RrrCPx.js";import"./GlobalHeader-Ddqn6DNs.js";import"./useIsDesktop-DFn6uBJT.js";import"./GlobalAccountButton-CZP785Uy.js";import"./Enter-D2BxqJId.js";import"./GlobalMenuButton-v9hWJoq1.js";import"./MenuHamburger-CgPTbI81.js";import"./AccountSelector-DqwMajub.js";import"./Switch-BaESAcvv.js";import"./AccountMenu-DTvV-i8u.js";import"./GlobalMenu-4TKKPZA1.js";import"./ArrowUndo-CSSrSj6Y.js";import"./Globe-BwntYx03.js";import"./BreadcrumbsLink-FVIP7hU1.js";import"./ArrowRight-DmbHvLhG.js";import"./Footer-ClXdpL_M.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
