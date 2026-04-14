import{j as t}from"./iframe-DolAyTrH.js";import{B as a,u as n}from"./useBookmarks-BTH3ANXe.js";import{L as c}from"./Layout-BdSR75_G.js";import{B as d}from"./BookmarkModal-rf1UzBQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DJLVkQLj.js";import"./index-BGgdxP5s.js";import"./SettingsSection-CoMsqyl_.js";import"./Section-B969stp2.js";import"./BookmarkSettingsItem-XHMmTKmZ.js";import"./QueryLabel-C-7eU317.js";import"./Plus-J7cjNzSf.js";import"./useId-CHjpN4lF.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./SettingsItemBase-Bu0lXv33.js";import"./ChevronRight-Duke-dAu.js";import"./ItemLink-BGVSEM8D.js";import"./ItemMedia-feu0z7mp.js";import"./XMark-DTdVjjyM.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./ItemControls-B_Hdv8nx.js";import"./Badge-XZ4zcUXX.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./ContextMenu-_AeiDa13.js";import"./useDropdownMenuController-Bq_IdB92.js";import"./Dropdown-ByKasinV.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./Tooltip-kZb4i6VJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-LYiBdi-l.js";import"./SearchField-O-g-s0at.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./MenuItem-BC8KVIYh.js";import"./Checkmark-CMV0hymD.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./List-4xKYlKr8.js";import"./ListItem-mIgAbn_b.js";import"./ChevronUp-DUU9T22i.js";import"./ChevronDown-BVkX7yzQ.js";import"./Divider-BpkIomQy.js";import"./Pencil-BKQYcRUh.js";import"./Trash-BtLK7IU-.js";import"./SkipLink-DrU6aOJ6.js";import"./GlobalHeader-CuK2GS4B.js";import"./useIsDesktop-D-mQaJBC.js";import"./GlobalAccountButton-XGIWnErk.js";import"./Enter-D2mFNsxJ.js";import"./GlobalMenuButton-Dujei7vc.js";import"./MenuHamburger-vJW3XQDF.js";import"./AccountSelector-BGmqqq0U.js";import"./heading-BYn_QqeZ.js";import"./AccountMenu-DZ4zTclY.js";import"./Switch-D5tSqIJ9.js";import"./GlobalMenu-3iMzqL7Q.js";import"./ArrowUndo-C7YcKz4U.js";import"./Globe-Bd3DNFDf.js";import"./LocaleSwitcher-DfhReAJ6.js";import"./DigdirLogomark-Cvm9wTuX.js";import"./SearchbarField-B-N7Dj6Y.js";import"./AutocompleteItem-cQfQ0dve.js";import"./DropdownBase-aUL7f3Ms.js";import"./useClickOutside-BBRnn-L_.js";import"./GlobalMenuButton-fDfC7Urt.js";import"./PadlockLocked-BB5yMzM8.js";import"./ButtonLabel-DHuLovfa.js";import"./ButtonIcon-BQckLi1i.js";import"./BreadcrumbsLink-BK7OVVvy.js";import"./ArrowRight-BvlW0tCH.js";import"./Footer-Bo0920TH.js";import"./SettingsModal-Dq6hA2Z9.js";import"./ModalBase-Biclu8IY.js";import"./ModalBody-BDCdjJbS.js";import"./ButtonGroup-D7dkSlZP.js";import"./TextField-BlEMz5sX.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
