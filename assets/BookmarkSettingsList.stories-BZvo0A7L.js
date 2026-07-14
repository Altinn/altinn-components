import{a7 as t}from"./iframe-DymAqe7-.js";import{B as a,u as n}from"./useBookmarks-CkXkl_ZZ.js";import{B as d}from"./BookmarkModal-ClagqMTx.js";import{L as c}from"./Layout-Ch8DN8Vp.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B3cy-uAB.js";import"./BookmarkSettingsItem-CjtpOwr7.js";import"./QueryLabel-COzfai_T.js";import"./Plus-k9X7JJ5T.js";import"./Heading-D0_eZ5cX.js";import"./useHighlightedText-CHgJbocK.js";import"./SettingsItemBase-CcCy9gQm.js";import"./ItemMedia-BNXDJXQ4.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./ChevronUp-DmvfmoSK.js";import"./ChevronDown-D0JeQuoP.js";import"./ChevronRight-DBeZxa-Y.js";import"./ItemBase-CCp86b5G.js";import"./ItemLink-BckblcU7.js";import"./ItemControls-DPpG0bqy.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./Typography-CpmuPi_2.js";import"./MagnifyingGlass-DYyWgrew.js";import"./ContextMenu-B6RF4Vop.js";import"./useDropdownMenuController-DAEYpjlT.js";import"./Dropdown-Cp-0Evcf.js";import"./SearchField-BGWHdZv0.js";import"./FieldBase-CV5Nsw3m.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuListDivider-D_6Pn6hY.js";import"./MenuListHeading-D0t38-BK.js";import"./MenuItem-Q0-LXmKI.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./InformationSquare-DzVIiFVQ.js";import"./MenuElipsisHorizontal-DLk1idta.js";import"./Pencil-CHu6UKWn.js";import"./Trash-440SdK96.js";import"./SettingsModal-BR0dL4iR.js";import"./ModalBody-B4NkrjfW.js";import"./Section-VcJzw9XS.js";import"./Flex-SVKdN4dv.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./ButtonIcon-X8AJhbmq.js";import"./ButtonLabel-CUwAx-eR.js";import"./TextField-C7QREjp_.js";import"./SkipLink-B5HYg5en.js";import"./Banner-CocSma32.js";import"./GlobalHeader-CzihCqsA.js";import"./useIsDesktop-j0VFbwFh.js";import"./GlobalAccountButton-BfY3GnpM.js";import"./Enter-DWMjdkvw.js";import"./GlobalMenuButton-Dede5A4W.js";import"./MenuHamburger-Dd-pEmxt.js";import"./AccountSelector-BKcRoBdU.js";import"./Switch-BGPW__x6.js";import"./AccountMenu-B3vhIwOB.js";import"./GlobalMenu-DKRvnmZn.js";import"./ArrowUndo-CorOpU9E.js";import"./Globe-DfCPO3oM.js";import"./BreadcrumbsLink-BJTZ_Q0Q.js";import"./ArrowRight-CKcVQFjK.js";import"./Footer-CL1Hmlk_.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
