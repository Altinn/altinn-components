import{j as t}from"./iframe-CHILL5tZ.js";import{B as a,u as n}from"./useBookmarks-CRiqYtoS.js";import{L as c}from"./Layout-BIMAB44E.js";import{B as d}from"./BookmarkModal-lIw7pjeb.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-A7S1F2F0.js";import"./index-D0JdUEkn.js";import"./SettingsSection-BPkatNoj.js";import"./Section-DgehUQNo.js";import"./BookmarkSettingsItem-D95JpZxg.js";import"./QueryLabel-dJX6ZjnM.js";import"./Plus-V3d-3j45.js";import"./useId-CxjMVxT3.js";import"./Heading-B80Wap_u.js";import"./useHighlightedText-sycLCu80.js";import"./Skeleton-BX9QnUCy.js";import"./SettingsItemBase-B9ImwOxd.js";import"./ChevronRight-C2HiJ5JV.js";import"./ItemLink-SjZ2P_5W.js";import"./ItemMedia-BDXURQdO.js";import"./XMark-DQxCv5Yn.js";import"./Avatar-BEHn6hs3.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Icon-DK0uLDnk.js";import"./ItemControls-Okligr0R.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./ContextMenu-CxnnjBKA.js";import"./useDropdownMenuController-BYzUrJMj.js";import"./Dropdown-riFJwjzV.js";import"./Button-BhP7fHb4.js";import"./button-BIgBCVIC.js";import"./MenuElipsisHorizontal-wDeQJ2Yp.js";import"./SearchField-DpxDm5xW.js";import"./FieldBase-DGrlYpX7.js";import"./Typography-BDbDV84g.js";import"./Label-BmNpXiOX.js";import"./index-ASxRsC3U.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuListHeading-D8Av5awU.js";import"./MenuItem-DaU4SSfC.js";import"./Checkmark-nA2yaQnq.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./List-BcksO0y4.js";import"./ListItem-foRln84O.js";import"./ChevronUp-DXNAPjGw.js";import"./ChevronDown-D4I_nLcA.js";import"./Divider-BUzBNLe4.js";import"./Pencil-K0vHtV_R.js";import"./Trash-DeMvNL0c.js";import"./SkipLink-DRg_3P3P.js";import"./GlobalHeader-DWKLSMDh.js";import"./useIsDesktop-BR3A0ctr.js";import"./GlobalAccountButton-adWmBg9P.js";import"./Enter-C7OsDEIN.js";import"./GlobalMenuButton-3lr_HKp5.js";import"./MenuHamburger-DS0wNl2W.js";import"./AccountSelector-wcrObOw4.js";import"./heading-CGHXTt7C.js";import"./AccountMenu-oQh0DcVf.js";import"./Switch-BLGSmnhn.js";import"./GlobalMenu-DcO1ewm1.js";import"./ArrowUndo-DLyXjA6N.js";import"./Globe-BcFcVMh8.js";import"./BreadcrumbsLink-gygmVdlg.js";import"./ArrowRight-CF515o8k.js";import"./Footer-DbKlq_36.js";import"./SettingsModal-DqS_MZrV.js";import"./ModalBody-D4FH2jV5.js";import"./ButtonGroup-85VHWPxh.js";import"./ButtonIcon-C3eOYnF4.js";import"./ButtonLabel-CO3yS6Gk.js";import"./TextField-BKpAQTe7.js";const Ao={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Do=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Do as __namedExportsOrder,Ao as default};
