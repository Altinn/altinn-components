import{a7 as t}from"./iframe-CDUjh_2z.js";import{B as a,u as n}from"./useBookmarks-B6T5S1C-.js";import{B as d}from"./BookmarkModal-CHCpcvuO.js";import{L as c}from"./Layout-Clzy8C9-.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CCO_lxMe.js";import"./BookmarkSettingsItem-DvnSPKtj.js";import"./QueryLabel-YAE07W5y.js";import"./Plus-BtkWHSVH.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./SettingsItemBase-DK_EOKe4.js";import"./ItemMedia-Bai-Urcu.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./ChevronUp-B_5rOd5t.js";import"./ChevronDown-BUU9mFY7.js";import"./ChevronRight-CG3NwLwQ.js";import"./ItemBase-vEAAYhB2.js";import"./ItemLink-6wM2985X.js";import"./ItemControls-Kup6bLJb.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./Typography-HCvo8I75.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./ContextMenu-D3Cy3w9b.js";import"./useDropdownMenuController-DBEdm3zN.js";import"./Dropdown-Cq9y5l3q.js";import"./SearchField-D9cu5VJD.js";import"./FieldBase-CC2tJByH.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";import"./MenuListItem-CGgNB0ZA.js";import"./MenuListHeading-DztGiWDu.js";import"./MenuItem-GdPNBIG6.js";import"./Checkmark-DLLLSSlc.js";import"./ItemLabel-Cz51yrrd.js";import"./index-BAc6HH-X.js";import"./InformationSquare-CT1i7ej7.js";import"./MenuElipsisHorizontal-Ce-EEiTj.js";import"./Pencil-CWKCGX6N.js";import"./Trash-0-27J6Eh.js";import"./SettingsModal-DYhCA59-.js";import"./ModalBody-BznBWo4M.js";import"./Section-xHms6zkB.js";import"./Flex-Bc1_yHC5.js";import"./ButtonGroup-Bu9UDZzJ.js";import"./ButtonIcon-BlI-wN7T.js";import"./ButtonLabel-C8ei22k7.js";import"./TextField-CAPXyLNN.js";import"./SkipLink-DAr2beFj.js";import"./Banner-BJWNA3Mr.js";import"./GlobalHeader-DGA7DqaJ.js";import"./useIsDesktop-DP7wam1j.js";import"./GlobalAccountButton-CsTmajHT.js";import"./Enter-CRniGYFa.js";import"./GlobalMenuButton-CRXTMqKw.js";import"./MenuHamburger-CKCKhSKS.js";import"./AccountSelector-_TaMLnZT.js";import"./Switch-BsB9C13J.js";import"./AccountMenu-_5VktjzI.js";import"./GlobalMenu-DBasIg4L.js";import"./ArrowUndo-CzbSWIbd.js";import"./Globe-BKGQk3fV.js";import"./BreadcrumbsLink-BK8g_MEW.js";import"./ArrowRight-D9kIYyTz.js";import"./Footer-4DjpfKHj.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
