import{a7 as t}from"./iframe-DJnynaCo.js";import{B as a,u as n}from"./useBookmarks-DLqdJ0yb.js";import{B as d}from"./BookmarkModal-Dt7paQLe.js";import{L as c}from"./Layout-CkIK5wuF.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dk5q8tzl.js";import"./BookmarkSettingsItem-B2Z3sSL1.js";import"./QueryLabel-CXwlxZCc.js";import"./Plus-Ddr8PqBX.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./SettingsItemBase-BVfGOX_L.js";import"./ItemMedia-UE0Xgjah.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./ChevronUp-BZfYUYCO.js";import"./ChevronDown-CYeA95Pw.js";import"./ChevronRight-C7aaNXCF.js";import"./ItemBase-B5VYCo0l.js";import"./ItemLink-1GRrmWZq.js";import"./ItemControls-CHuQfTIH.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./Typography-CiLhkoi6.js";import"./MagnifyingGlass-D5ryHey3.js";import"./ContextMenu-lI42Papp.js";import"./useDropdownMenuController-CZOriFGV.js";import"./Dropdown-DqJi5yfL.js";import"./SearchField-DQ5LjUme.js";import"./FieldBase-D0EiQS06.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./InformationSquare-Bwpxsw1g.js";import"./MenuElipsisHorizontal-q9aEJHux.js";import"./Pencil-DKL8RehX.js";import"./Trash-CbXj-0_h.js";import"./SettingsModal-3TFzA_aN.js";import"./ModalBody-cEHsgsLM.js";import"./Section-CrYFAueX.js";import"./Flex-DolhwIS-.js";import"./ButtonGroup-BNd80tZA.js";import"./ButtonIcon-CQYxhvkg.js";import"./ButtonLabel-Dj11Yzi6.js";import"./TextField-Cj0UT2Iw.js";import"./SkipLink-BwaYSGZo.js";import"./CookieBanner-JzSOTciE.js";import"./Banner-BojpkkzL.js";import"./GlobalHeader-Dk3367s9.js";import"./useIsDesktop-E8FB6fc7.js";import"./GlobalAccountButton-BonYyVlz.js";import"./Enter-Cnl_XCis.js";import"./GlobalMenuButton-C9LbZkye.js";import"./MenuHamburger-C7HX5DPN.js";import"./AccountSelector-BM2Wt3GI.js";import"./Switch-zYeYtYcJ.js";import"./AccountMenu-D7yd4CHs.js";import"./GlobalMenu-BrMnNOoZ.js";import"./ArrowUndo-_eOhqtEM.js";import"./Globe-ws9jjJHv.js";import"./BreadcrumbsLink-DEcSSvvK.js";import"./ArrowRight-BfehACc8.js";import"./Footer-Dho8J8QT.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
