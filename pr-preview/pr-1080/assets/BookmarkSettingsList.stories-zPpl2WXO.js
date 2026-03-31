import{j as t}from"./iframe-CRyMHjBa.js";import{B as a,u as n}from"./useBookmarks-BfNyl5o0.js";import{L as c}from"./Layout-CPPXYelY.js";import{B as d}from"./BookmarkModal-CxJ_McFq.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-B-FAPRYp.js";import"./index-DHHnxdIx.js";import"./SettingsSection-BvzS6fsS.js";import"./Section-CFSk5LUB.js";import"./BookmarkSettingsItem-C_P3qCMC.js";import"./QueryLabel-C16cTESP.js";import"./Plus-OcRWzOJe.js";import"./useId-Gvikg1Q9.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./SettingsItemBase-BxbYqQ6C.js";import"./ListItem-DD-4gcQV.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./XMark-Bzo2iZ4y.js";import"./Icon-BfxILC1T.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Badge-DxjDnsAp.js";import"./ChevronUp-CBBTERwT.js";import"./ChevronDown-BlPSQm6Z.js";import"./ChevronRight-CBrYYsjR.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./ContextMenu-CLs9-bGN.js";import"./useDropdownMenuController-7zQVYc9O.js";import"./Dropdown-BU08g0A_.js";import"./Tooltip-BOYFMKfm.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DMdAke1l.js";import"./SearchField-DHI_G06y.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Checkmark-DF0LRIQJ.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./List-RBs8EUgU.js";import"./Divider-D2QbJSlC.js";import"./Pencil-pZXlCpUf.js";import"./Trash-DL1Wx2eb.js";import"./SkipLink-DBYxvgc-.js";import"./GlobalHeader-CAzm1HJ3.js";import"./useIsDesktop-C5D59x5L.js";import"./GlobalAccountButton-B7qbMhL_.js";import"./Enter-NlahA1dS.js";import"./GlobalMenuButton-DzZdIbix.js";import"./MenuHamburger-DmjW5Kyi.js";import"./AccountSelector-BINlozsb.js";import"./heading-Bibxhi_K.js";import"./AccountMenu-CMsKOU5R.js";import"./Switch-FFOJZeUz.js";import"./GlobalMenu-CJcqLv45.js";import"./ArrowUndo-Cf7oOlPP.js";import"./Globe-BT2C-xlC.js";import"./LocaleSwitcher-CxU1rRqr.js";import"./DigdirLogomark-DPqXGvO2.js";import"./SearchbarField-Bw2MRBgk.js";import"./AutocompleteItem-CPNkGDfs.js";import"./DropdownBase-eqswJ89b.js";import"./useClickOutside-CPg_rkSq.js";import"./GlobalMenuButton-BfoZZwDn.js";import"./PadlockLocked-lyWIGQea.js";import"./ButtonLabel-B13q6XrT.js";import"./ButtonIcon-DQSQ565Q.js";import"./BreadcrumbsLink-DG92EI4a.js";import"./ArrowRight-BuoWqs5I.js";import"./Footer-Bx-MHzOJ.js";import"./SettingsModal-DI6vhMWA.js";import"./ModalBase-yMC1x3OO.js";import"./ModalBody-Cn1xB_Vi.js";import"./ButtonGroup-Be2TeWIw.js";import"./TextField-x3HX7SH4.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
