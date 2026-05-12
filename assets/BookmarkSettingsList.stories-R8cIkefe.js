import{j as t}from"./iframe-CU9tIbvZ.js";import{B as a,u as n}from"./useBookmarks-BMmT4Nn9.js";import{L as c}from"./Layout-BcITZW7a.js";import{B as d}from"./BookmarkModal-DGLMu9bU.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-XjQIlsau.js";import"./QueryLabel-B_RPNkEN.js";import"./Plus-3VXDUyQo.js";import"./useId-BEikXtHv.js";import"./Heading-DKJvmFhb.js";import"./index-Bd_n44R2.js";import"./useHighlightedText-okRrJvjD.js";import"./Skeleton-WB8_C3gk.js";import"./SettingsItemBase-Doj18tTe.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";import"./ItemLink-FRejQ3nm.js";import"./ItemMedia-DuuCC0AM.js";import"./XMark-DTYd927G.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./ItemControls-BgF8Asgd.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Typography-w6SEqUo0.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./ContextMenu-CYUHBwBA.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Dropdown-DgULA5TZ.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./MenuElipsisHorizontal-sU1biIaO.js";import"./SearchField-CWeqUa0W.js";import"./FieldBase-Bc5lvX-i.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./Checkmark-DOBFSC3X.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./Pencil-D7DLdTN0.js";import"./Trash-hYNo9HK3.js";import"./SkipLink-BPw_y4WX.js";import"./Banner-CR_tqmXk.js";import"./GlobalHeader-DufVtYeK.js";import"./useIsDesktop-CrKRXhnc.js";import"./GlobalAccountButton-BZeph8Sb.js";import"./Enter-BHytXVt5.js";import"./GlobalMenuButton-CCe0RjIi.js";import"./MenuHamburger-Cl0yoDLg.js";import"./AccountSelector-DsAWvJxU.js";import"./heading-HMF_CCjH.js";import"./AccountMenu-BCXmoxcp.js";import"./Switch-BFjqI2KQ.js";import"./GlobalMenu-CYF_KfY_.js";import"./ArrowUndo-C5gTjs_w.js";import"./Globe-dRDAEiut.js";import"./BreadcrumbsLink-C_FTpjJv.js";import"./ArrowRight-CFzj4t3F.js";import"./Footer-DEg1EnyP.js";import"./SettingsModal-KtnV1Bjh.js";import"./ModalBody-c-JjnOdb.js";import"./Section-BozmV6Om.js";import"./Flex-Aa4xg00u.js";import"./ButtonGroup-Bc7spR1E.js";import"./ButtonIcon-DRnipxiZ.js";import"./ButtonLabel-ChcktKem.js";import"./TextField-UzGxD5QZ.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
