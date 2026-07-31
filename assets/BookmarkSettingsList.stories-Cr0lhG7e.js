import{a7 as t}from"./iframe-CAjSv_nS.js";import{B as a,u as n}from"./useBookmarks-Dv8Yv8mO.js";import{B as d}from"./BookmarkModal-BrF6Aj0w.js";import{L as c}from"./Layout-ZWNbHIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DNlZtc9u.js";import"./BookmarkSettingsItem-D-RfLDPR.js";import"./QueryLabel-DGaNo9Mv.js";import"./Plus-BAe7a_fr.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./SettingsItemBase-XF7ZTHu0.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";import"./ItemBase-Bsx8jWac.js";import"./ItemLink-BmhLdRET.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./Typography-CP4EAHNP.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./ContextMenu-BXFgsv5t.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./SearchField-BeyrM52L.js";import"./FieldBase-B3aukQxa.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./InformationSquare-CA9knMPH.js";import"./MenuElipsisHorizontal-BDVfbbpF.js";import"./Pencil-CW1VfL-a.js";import"./Trash-CNWgj8JD.js";import"./SettingsModal-r0MnGfEQ.js";import"./ModalBody-BEocNTvo.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./ButtonGroup-CHaM1dTc.js";import"./ButtonIcon-BmNdvyqy.js";import"./ButtonLabel-BEVL1UP8.js";import"./TextField-sSdKcljq.js";import"./SkipLink-C0ps2RQ-.js";import"./Banner-DxIJOORh.js";import"./GlobalHeader-D5ZGSCT-.js";import"./useIsDesktop-CNSJjTJn.js";import"./GlobalAccountButton-DCdJBRGc.js";import"./Enter-DlXm2DlN.js";import"./GlobalMenuButton-CBBmuqFJ.js";import"./MenuHamburger-BbzPLYJ2.js";import"./AccountSelector-CfR9zR4X.js";import"./Switch-D9JMrYde.js";import"./AccountMenu-DqVVwRYg.js";import"./GlobalMenu-DLc3Jzlm.js";import"./ArrowUndo-Dk2uggSE.js";import"./Globe-nvMd5ZQX.js";import"./BreadcrumbsLink-CywEWjrR.js";import"./ArrowRight-BIY-HWMN.js";import"./Footer-CRc1UDyx.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
