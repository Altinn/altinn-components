import{j as t}from"./iframe-BTgHnb1V.js";import{B as a,u as n}from"./useBookmarks-B8jRdnvZ.js";import{L as c}from"./Layout-WYElIMtj.js";import{B as d}from"./BookmarkModal-DjXRqj91.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-ujxLNWuk.js";import"./index-t_Anj6Qz.js";import"./SettingsSection-CI79OlSU.js";import"./Section-B92QpPhv.js";import"./BookmarkSettingsItem-BNsgH2D7.js";import"./QueryLabel-CdQVl2J-.js";import"./Plus-D5thgfNG.js";import"./useId-DWidDjIe.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./SettingsItemBase-DjpUHouN.js";import"./ListItem-C5a5niC3.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./XMark-DMQzhoj3.js";import"./Icon-PY6OftAR.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Badge-sZl2g-is.js";import"./ChevronUp-Cx3Hy4Md.js";import"./ChevronDown-BdtQrLIc.js";import"./ChevronRight-DEDRS1St.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./ContextMenu-BNqnjHRO.js";import"./useDropdownMenuController-DQ81-Fhy.js";import"./Dropdown-Dca6GJ-b.js";import"./Tooltip-CnMb4V-4.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-C3hBnT_b.js";import"./SearchField-Dea1MzEn.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Checkmark-jKAH024b.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./List-D_Cei_q3.js";import"./Divider-DeDDFaQq.js";import"./Pencil-DP4F3rfz.js";import"./Trash-CNgFJdUI.js";import"./SkipLink-DKG50N1n.js";import"./GlobalHeader-DPO5eL9F.js";import"./useIsDesktop-DJp9AwJx.js";import"./GlobalAccountButton-Bb0imfOn.js";import"./Enter-DkoMGejS.js";import"./GlobalMenuButton-CZfdpJzJ.js";import"./MenuHamburger-COTFwDMl.js";import"./AccountSelector-BtVRf3AN.js";import"./heading-Dg8Ur50F.js";import"./AccountMenu-DAKN4S5H.js";import"./Switch-DG17p5gU.js";import"./GlobalMenu-CiBKit8n.js";import"./ArrowUndo-vJkbQsmL.js";import"./Globe-DOckyNhZ.js";import"./LocaleSwitcher-ComnVM5v.js";import"./DigdirLogomark-DKMKyo2l.js";import"./SearchbarField-H7iFpAxy.js";import"./AutocompleteItem-ufEr20HH.js";import"./DropdownBase-DkBWmYvT.js";import"./useClickOutside-CCvWuVdp.js";import"./GlobalMenuButton-KIWIdr7d.js";import"./PadlockLocked-BrWDbaw_.js";import"./ButtonLabel-BxBMzqVA.js";import"./ButtonIcon-_poyNtkQ.js";import"./BreadcrumbsLink-hDoBladM.js";import"./ArrowRight-DEkU6yzP.js";import"./Footer-BBWfxTaC.js";import"./SettingsModal-C8T63fzD.js";import"./ModalBase-BVMwxguh.js";import"./ModalBody-QLR0FUOK.js";import"./ButtonGroup-CI4RwwaJ.js";import"./TextField-B9Bz6RJW.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
