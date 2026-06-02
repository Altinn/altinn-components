import{a7 as t}from"./iframe-DxDA2A5n.js";import{B as a,u as n}from"./useBookmarks-DioW8eY4.js";import{B as d}from"./BookmarkModal-C6EEyfhA.js";import{L as c}from"./Layout-BAI3eunZ.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CesabFz-.js";import"./BookmarkSettingsItem-B_o0Pq-b.js";import"./QueryLabel-Bj_jripS.js";import"./Plus-BRpGG8-t.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./SettingsItemBase-ly1O-6oF.js";import"./ItemMedia-CnqN7ZMq.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./ChevronUp-ChUSKAgV.js";import"./ChevronDown-Cl8SGDa2.js";import"./ChevronRight-B7TpiReR.js";import"./ItemBase-kZocBRUl.js";import"./ItemLink-DTz0HDfI.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./Typography-BpmyNFuo.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./ContextMenu-7PiEHvyZ.js";import"./useDropdownMenuController-CF0cOpjK.js";import"./Dropdown-BtLUP2GJ.js";import"./SearchField-m29TWzvo.js";import"./FieldBase-D6edMMqi.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./MenuItem-DvVfNxyY.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./index-BrQU956K.js";import"./InformationSquare-D_k5oT3G.js";import"./MenuElipsisHorizontal-LmdkdYP-.js";import"./Pencil-QMYxfCej.js";import"./Trash-Cq15ZLAx.js";import"./SettingsModal-DloPD4cW.js";import"./ModalBody-D3jXQH23.js";import"./Section-BxDgugwi.js";import"./Flex-CfINokNW.js";import"./ButtonGroup-BwP7xmaH.js";import"./ButtonIcon-qeGPxIpM.js";import"./ButtonLabel-B4aFnIiY.js";import"./TextField-DdAaSiak.js";import"./SkipLink-CR6gNYnp.js";import"./Banner-BoWc2ajf.js";import"./GlobalHeader-nX9Hnel7.js";import"./useIsDesktop-RJ_PrM3C.js";import"./GlobalAccountButton-BxZcOP3U.js";import"./Enter-BtGZyTuG.js";import"./GlobalMenuButton-BEhXHvT6.js";import"./MenuHamburger-SuiAu3Wg.js";import"./AccountSelector-C-M1O6Hc.js";import"./Switch-yAEuxwZz.js";import"./AccountMenu-Rflthn1L.js";import"./GlobalMenu-DAsJ4E4k.js";import"./ArrowUndo-kdrF5Cj9.js";import"./Globe-Cj3PifZU.js";import"./BreadcrumbsLink-Dll_MhVD.js";import"./ArrowRight-BGnV3_uY.js";import"./Footer-xUhwf7dH.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
