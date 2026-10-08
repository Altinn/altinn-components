import{a7 as t}from"./iframe-BKcGtkf2.js";import{B as a,u as n}from"./useBookmarks-CeRu8_Hm.js";import{B as d}from"./BookmarkModal-1JTgJ0JC.js";import{L as c}from"./Layout-D2RxrfYL.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D9Zi9nWU.js";import"./BookmarkSettingsItem-BJaTor9t.js";import"./QueryLabel-D_NsyksQ.js";import"./Plus-Rs3Q664C.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./SettingsItemBase-DaCpuJYC.js";import"./ItemMedia-DmxCD2ZI.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./ChevronUp-DoWxH2Yl.js";import"./ChevronDown-Jc6dKi_G.js";import"./ChevronRight-Bik0Rfts.js";import"./ItemBase-Bfyuppz6.js";import"./ItemLink-C63crec_.js";import"./ItemControls-sjDYc_Mm.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./Typography-CpSlwMZW.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./ContextMenu-CyK_A0eq.js";import"./useDropdownMenuController-BPyTaE6X.js";import"./Dropdown-CApDEdpz.js";import"./SearchField-c4c7eBD1.js";import"./FieldBase-kOxFDexg.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";import"./MenuListItem-q_h-S_lZ.js";import"./MenuListDivider-BA6y76AD.js";import"./MenuListHeading-MK0rACd0.js";import"./MenuItem-BPSVutJE.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./InformationSquare-7aD0sTi5.js";import"./MenuElipsisHorizontal-D9ZiNbMs.js";import"./Pencil-BxRjisEY.js";import"./Trash-Bcnjmr1n.js";import"./SettingsModal-D30D0iEp.js";import"./ModalBody-CG2c_jkx.js";import"./Section-DaRR8FNt.js";import"./Flex-xlDXZNwq.js";import"./ButtonGroup-Cf_eaZSI.js";import"./ButtonIcon-DQs2Pht3.js";import"./ButtonLabel-CUaD82Hk.js";import"./TextField-DDlenc7c.js";import"./SkipLink-DsT36hp0.js";import"./CookieBanner-DstP-3Y3.js";import"./Banner-CbDjvwqw.js";import"./GlobalHeader-DOZpIOT4.js";import"./useIsDesktop-qjVyTUOe.js";import"./GlobalAccountButton-BjFtBMmS.js";import"./Enter-C71FhnH-.js";import"./GlobalMenuButton-CX8FuP9n.js";import"./MenuHamburger-8h-PJWWI.js";import"./AccountSelector-ByuZnqmz.js";import"./Switch-CnB8xQ9k.js";import"./AccountMenu-CZN_US-M.js";import"./GlobalMenu-BmtCcnVS.js";import"./ArrowUndo-B99YefQU.js";import"./Globe-BzSsSW9E.js";import"./BreadcrumbsLink-evuRcHdY.js";import"./ArrowRight-q4VIdZC3.js";import"./Footer-BuRqkHrp.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
