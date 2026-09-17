import{a7 as t}from"./iframe-BlyVQ5Wf.js";import{B as a,u as n}from"./useBookmarks-DYsxiATt.js";import{B as d}from"./BookmarkModal-OBbyVsqO.js";import{L as c}from"./Layout-CSm99JqL.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DUnPL890.js";import"./BookmarkSettingsItem-BUXE2tFi.js";import"./QueryLabel-tiVAncWd.js";import"./Plus-BtBVLn4K.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./SettingsItemBase-kRcdW2Am.js";import"./ItemMedia-BlQhkodk.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./ChevronUp-CFGBj1-_.js";import"./ChevronDown-Bxa_Upno.js";import"./ChevronRight-C0zIwyjD.js";import"./ItemBase-hJkByUlC.js";import"./ItemLink-DBmDtdx9.js";import"./ItemControls-B0XNXszg.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./Typography-xETneU90.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./ContextMenu-CE0uRI4u.js";import"./useDropdownMenuController-9ebtaTAF.js";import"./Dropdown-D4yTY22u.js";import"./SearchField-DB7B9m_1.js";import"./FieldBase-CZEUpIPU.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuListDivider-DBzJeO3_.js";import"./MenuListHeading-HVvc_FIB.js";import"./MenuItem-Bv74nrne.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./InformationSquare-CSNu4leW.js";import"./MenuElipsisHorizontal-DyvtEdX9.js";import"./Pencil-BtzwbF3H.js";import"./Trash-Bw2W8ER7.js";import"./SettingsModal-CyjPTL0W.js";import"./ModalBody-ysC7XFdN.js";import"./Section-_AUVgHqB.js";import"./Flex-CGPMEzYL.js";import"./ButtonGroup-ksQ-pxhG.js";import"./ButtonIcon-DiHoEPkC.js";import"./ButtonLabel-z2FuEDUj.js";import"./TextField-Cw6le05T.js";import"./SkipLink-DJJ3N_5H.js";import"./CookieBanner-ryxflztk.js";import"./Banner-2iyITvcA.js";import"./GlobalHeader-kHvqGJRA.js";import"./useIsDesktop-Yp4QQdpa.js";import"./GlobalAccountButton-Dc4bMZ5Z.js";import"./Enter-Bs5XnApl.js";import"./GlobalMenuButton-DfWEpbEg.js";import"./MenuHamburger-AxvsS4Qu.js";import"./AccountSelector-cA0RmHyl.js";import"./Switch-BxXj1yyp.js";import"./AccountMenu-BJ9gl8cA.js";import"./GlobalMenu-nggbh2Kp.js";import"./ArrowUndo-Ds9fN1GT.js";import"./Globe-CZRqGhTL.js";import"./BreadcrumbsLink-C9AGufvm.js";import"./ArrowRight-BzKdGUr0.js";import"./Footer-DjkC2-ZK.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
