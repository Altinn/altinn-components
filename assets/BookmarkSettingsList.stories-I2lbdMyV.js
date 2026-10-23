var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-Ck42qOx1.js";import{B as n,u as d}from"./useBookmarks-5OQ6QMa0.js";import{B as l}from"./BookmarkModal-Lpo053Id.js";import{L as u}from"./Layout-DO1kRlg1.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BBAeNj9K.js";import"./BookmarkSettingsItem-CaLvxFch.js";import"./QueryLabel-HCbK7DZ5.js";import"./Plus-1EeeSaLT.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./SettingsItemBase-BOQ-SQ7r.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./ChevronRight-DWZnEevf.js";import"./ItemBase-CjTMF0wf.js";import"./ItemLink-D_slDvwR.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./Typography-nObbjg0R.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./ContextMenu-B0efyfFm.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./SearchField-B8KiDBUc.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./FieldBase-ly-5mtcw.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";import"./MenuElipsisHorizontal-BhzA5KpZ.js";import"./Pencil-6kCQ5ICS.js";import"./Trash-hM9OCzu1.js";import"./SettingsModal-DgcCT0IL.js";import"./ModalBody-0O6NY7SM.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonIcon-CYrEachb.js";import"./ButtonLabel-5wbsHXmv.js";import"./TextField-BT_NxReM.js";import"./SkipLink-DHkdA6Mx.js";import"./CookieBanner-Dp8DU3hx.js";import"./Link-DG8ufNV-.js";import"./Banner-CXO-NfdB.js";import"./GlobalHeader-C_xj6DIj.js";import"./useIsDesktop-Bk2hO8WM.js";import"./GlobalAccountButton-BtmdH2Tx.js";import"./Enter-BsxyvaAW.js";import"./GlobalMenuButton-DkFOr-X_.js";import"./MenuHamburger-CF5_JoaO.js";import"./AccountSelector-DRpQGVU6.js";import"./Switch-B1H2K7js.js";import"./AccountMenu-D1k5sfyr.js";import"./GlobalMenu-s93dAZzh.js";import"./ArrowUndo-BORXbKBL.js";import"./Globe-4hEu2YgG.js";import"./BreadcrumbsLink-DvaHLwgW.js";import"./ArrowRight-B3peGAbp.js";import"./Footer-C7cpYrr2.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const _o=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
