import{j as t}from"./iframe-CULgtZWU.js";import{B as a,u as n}from"./useBookmarks-Cu0JrZ82.js";import{L as c}from"./Layout-d3l2g32r.js";import{B as d}from"./BookmarkModal-Bnpc5DDn.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CmyJ6DZP.js";import"./index-BvBdYXxj.js";import"./SettingsSection-Y4Trji-o.js";import"./Section-CJ2BqCln.js";import"./BookmarkSettingsItem-cOgPAzyg.js";import"./QueryLabel-egWIh23v.js";import"./Plus-Bkcc1EK1.js";import"./useId-COk2q28h.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./Skeleton-B_F13Udl.js";import"./SettingsItemBase-BnGX8C3g.js";import"./ChevronRight-Q1coQceW.js";import"./ItemLink-C0_9WLDr.js";import"./ItemMedia-CstP66eQ.js";import"./XMark-BCb0_aBA.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./ItemControls-RibfoZmh.js";import"./Badge-CMQ7i3tF.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./ContextMenu-k6Bt9SEs.js";import"./useDropdownMenuController-BqzfaV4g.js";import"./Dropdown-CNyPz2U1.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Tooltip-Bn52Dko6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-rU7wqAx9.js";import"./SearchField-D5aR-gNH.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./Checkmark-DEc7m9Qo.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./List-BUOr4CZI.js";import"./ListItem-7-qwfKHS.js";import"./ChevronUp-D4lquxp4.js";import"./ChevronDown-BFG40PP5.js";import"./Divider-DQal24HO.js";import"./Pencil-JQfhOjFB.js";import"./Trash-D7-j-WnU.js";import"./SkipLink-UR16frtz.js";import"./GlobalHeader-23MvgCdw.js";import"./useIsDesktop-BnaV_SOG.js";import"./GlobalAccountButton-CEvViDAG.js";import"./Enter-BQaYlrrr.js";import"./GlobalMenuButton-B_XHxkjy.js";import"./MenuHamburger-CkaaaQ8r.js";import"./AccountSelector-BIsIg5Yx.js";import"./heading-CQxdWFWT.js";import"./AccountMenu-CEVdyG7q.js";import"./Switch-Bdau_C5W.js";import"./GlobalMenu-CmuMbTUl.js";import"./ArrowUndo-Dr_lpKdM.js";import"./Globe-3EAnc9RM.js";import"./LocaleSwitcher-C0h4HgGV.js";import"./DigdirLogomark-CS3N3Ha5.js";import"./SearchbarField-DL72xyHa.js";import"./AutocompleteItem-DCBlnwWW.js";import"./DropdownBase-HXGtRlZY.js";import"./useClickOutside-DLBxhGg-.js";import"./GlobalMenuButton-CVLMagrS.js";import"./PadlockLocked-D7rnItsj.js";import"./ButtonLabel-CGNJgIpu.js";import"./ButtonIcon-B5uSU7rb.js";import"./BreadcrumbsLink-CGC-b-uK.js";import"./ArrowRight-D4axlmcW.js";import"./Footer-BAe-u7kI.js";import"./SettingsModal-3ZJSqfXg.js";import"./ModalBase-Cbwlfwj5.js";import"./ModalBody-Boi5XIYD.js";import"./ButtonGroup-CUeGctwp.js";import"./TextField-Pqc6-CBj.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
