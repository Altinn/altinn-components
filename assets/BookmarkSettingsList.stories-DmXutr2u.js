import{j as t}from"./iframe-Bs6hWG43.js";import{B as a,u as n}from"./useBookmarks-CusGxGrI.js";import{L as c}from"./Layout-DNxAPtyF.js";import{B as d}from"./BookmarkModal-DZTbUFGD.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DYzITT_K.js";import"./index-DbNSDn3W.js";import"./SettingsSection-D-MI1Eqx.js";import"./Section-W4Lgx5KJ.js";import"./BookmarkSettingsItem-DuWYwLsn.js";import"./QueryLabel-CWSkLd8H.js";import"./Plus-D6ext0KH.js";import"./useId-eW1Sa_eP.js";import"./Heading-C3DAZ3La.js";import"./useHighlightedText-ByR3-iok.js";import"./Skeleton-7NyHq6Da.js";import"./SettingsItemBase-BnErxulw.js";import"./ChevronRight-Xe9lB9nu.js";import"./ItemLink-kBPqIX3U.js";import"./ItemMedia-B6-8h9P0.js";import"./XMark-Cx14Anho.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./ItemControls-CsoavSOP.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./ContextMenu-omWY5r2y.js";import"./useDropdownMenuController-D42biJGY.js";import"./Dropdown-z94Rg748.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./MenuElipsisHorizontal-yOcHxLrU.js";import"./SearchField-CTJqYruH.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./Checkmark-YSQh9b-J.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./List-DX6kg0jD.js";import"./ListItem-CFwb-TRN.js";import"./ChevronUp-C8EAI3hT.js";import"./ChevronDown-DB4qADPw.js";import"./Divider-CZVrRyv9.js";import"./Pencil--xQJPhcw.js";import"./Trash-DPxs7CFK.js";import"./SkipLink-BX9Uld8O.js";import"./GlobalHeader-DQKZvfnu.js";import"./useIsDesktop-DbymL6Pk.js";import"./GlobalAccountButton-DfZZ5tRu.js";import"./Enter-KR_yVxD-.js";import"./GlobalMenuButton-L0i_GHoN.js";import"./MenuHamburger-C29TE0o8.js";import"./AccountSelector-B9ncNyCV.js";import"./heading-CPUX60Y9.js";import"./AccountMenu-2CevzA1_.js";import"./Switch-Dn8rI5yW.js";import"./GlobalMenu-CDk0V_ml.js";import"./ArrowUndo-aC05jVU6.js";import"./Globe-a2_PlwKz.js";import"./LocaleSwitcher-Cg9nw2RQ.js";import"./DigdirLogomark-D4D8B7sJ.js";import"./SearchbarField-C4sSsRoV.js";import"./AutocompleteItem-eGa7rilW.js";import"./DropdownBase-C2tKa_m5.js";import"./useClickOutside-ByRbMqF_.js";import"./GlobalMenuButton-CeALzOE9.js";import"./PadlockLocked-BrnR3B2Z.js";import"./ButtonLabel-D0_5jgqT.js";import"./ButtonIcon-B6MS48OU.js";import"./BreadcrumbsLink-DscDe-sp.js";import"./ArrowRight-Ba4RU4P9.js";import"./Footer-BOr26sLy.js";import"./SettingsModal-DEchxt9k.js";import"./ModalBase-DV93AE3m.js";import"./ModalBody-CrrxtmpE.js";import"./ButtonGroup-eeakMgVk.js";import"./TextField-Bs7eKmuu.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
