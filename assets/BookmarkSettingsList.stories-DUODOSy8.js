import{a7 as t}from"./iframe-bg3nhc5C.js";import{B as a,u as n}from"./useBookmarks-UMN5nhtC.js";import{B as d}from"./BookmarkModal-DzenJoU3.js";import{L as c}from"./Layout-DbGppvai.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DS82y3su.js";import"./BookmarkSettingsItem-BD5q6-AE.js";import"./QueryLabel-CBnA5vPq.js";import"./Plus-T7SFOg3q.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./SettingsItemBase-D_4-RuwQ.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./ChevronUp-DDZW1UU0.js";import"./ChevronDown-DjIEzGIr.js";import"./ChevronRight-fbKP0qVJ.js";import"./ItemBase-D5zPuNeb.js";import"./ItemLink-Cxg09-QY.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./Typography-Ci1MUa-H.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./ContextMenu-BEQqNyYm.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./SearchField-CjXdfZ37.js";import"./FieldBase-CPws21pp.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuListHeading-CPNZr4rU.js";import"./MenuItem-Dnd2bkX1.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./MenuElipsisHorizontal-CKVexCzt.js";import"./Pencil-Dse0QxSq.js";import"./Trash-Dwyh85Wc.js";import"./SettingsModal-BOtM7eQZ.js";import"./ModalBody-CViOeQEG.js";import"./Section-0QuSZB3S.js";import"./Flex-CxgPTFrH.js";import"./ButtonGroup-BzB2tyZw.js";import"./ButtonIcon-Bj-DkHCc.js";import"./ButtonLabel-ga4a8HUc.js";import"./TextField-9MWE8u_5.js";import"./SkipLink-ErdrsmAc.js";import"./Banner-B6oDKj9_.js";import"./GlobalHeader-DTtVb6RE.js";import"./useIsDesktop-BPgxFBNN.js";import"./GlobalAccountButton-DmQYm9X_.js";import"./Enter-Bsfd8W3r.js";import"./GlobalMenuButton-DKrunHI2.js";import"./MenuHamburger-COo8Z9YV.js";import"./AccountSelector-BkKbokx0.js";import"./Switch-CmEosvvM.js";import"./AccountMenu-BZxvQYdp.js";import"./GlobalMenu-DdWdZSiA.js";import"./ArrowUndo-aIXjtX94.js";import"./Globe-tjr1QJXu.js";import"./BreadcrumbsLink-VxLZ3mrA.js";import"./ArrowRight-CUr7cz5B.js";import"./Footer-DhRHdCJp.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
