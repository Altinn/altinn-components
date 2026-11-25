var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CZm9Z2L_.js";import{B as a,u as d}from"./useBookmarks-BNC0tNnT.js";import{B as l}from"./BookmarkModal-CUE70zmM.js";import{L as u}from"./Layout-CvCO9vht.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-czaSJY_k.js";import"./BookmarkSettingsItem-DMosChH6.js";import"./QueryLabel-CMhNYYFg.js";import"./Plus-B_1tuTHV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./SettingsItemBase-yCvB55PI.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";import"./ItemBase-CcZPPggP.js";import"./ItemLink-u7oYbdQM.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./Typography-99BUGcV3.js";import"./MagnifyingGlass-DwPErScE.js";import"./ContextMenu-Bv-2X2Z3.js";import"./useDropdownMenuController-B7YFssqT.js";import"./Dropdown-CjN8UIhd.js";import"./SearchField-Cj8KK4lS.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemLabel-B3mLAUUV.js";import"./FieldBase-BiQdP4ez.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./InformationSquare-C62nR7w8.js";import"./Pencil-BErA687C.js";import"./Trash-D-r-J8J3.js";import"./SettingsModal-C4kkBz7a.js";import"./ModalBody-B6uDomnX.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./ButtonGroup-7aJoGw6J.js";import"./ButtonIcon-C0K5IRwl.js";import"./ButtonLabel-CupeExgA.js";import"./TextField-BDbZi5gp.js";import"./SkipLink-Ccg6Z0HW.js";import"./CookieBanner-CJtaCpSr.js";import"./Link-C11OOuTG.js";import"./Banner-DSEj4-yB.js";import"./GlobalHeader-BfW7ctuA.js";import"./useIsDesktop-IAQovNa1.js";import"./GlobalAccountButton-B5kGcy7l.js";import"./Enter-Bs0dFK5F.js";import"./GlobalMenuButton-PWA8yxnN.js";import"./MenuHamburger-DLVH7hi6.js";import"./AccountSelector-KuPoNuS1.js";import"./Switch-Cf-4wIba.js";import"./AccountMenu-Xa7DSnYy.js";import"./GlobalMenu-KE6BDCkE.js";import"./Checkmark-CAMmZDSe.js";import"./ArrowUndo-Hp57fThJ.js";import"./Globe-CpZCrs52.js";import"./BreadcrumbsLink-BAkwvg6x.js";import"./ArrowRight-Bp4cspyp.js";import"./Footer-D97rfyOA.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
