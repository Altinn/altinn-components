import{a7 as t}from"./iframe-DE6S9aZ4.js";import{B as a,u as n}from"./useBookmarks-D4t-iSWq.js";import{B as d}from"./BookmarkModal-D_NBj-J2.js";import{L as c}from"./Layout-XNEmL6rw.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BnFUnl7r.js";import"./BookmarkSettingsItem-BSIkEKRg.js";import"./QueryLabel-DQ8-tcRQ.js";import"./Plus-CwXksV0j.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./SettingsItemBase-BzAHYS6t.js";import"./ItemMedia-CpnAVdfr.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./ChevronUp-DiUn2hCV.js";import"./ChevronDown-BW8AfmI4.js";import"./ChevronRight-CaR2K8Z7.js";import"./ItemBase-LlpdCdPt.js";import"./ItemLink-BOsA1UC5.js";import"./ItemControls-BOAqxChM.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./Typography-Cfn_aMgf.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./ContextMenu-OB_xrmDU.js";import"./useDropdownMenuController-DjzmpwyV.js";import"./Dropdown-CtTBKP-C.js";import"./SearchField-DLpVp_NL.js";import"./FieldBase-Dqt8MJKx.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuListDivider-TgKUiY6a.js";import"./MenuListHeading-C_U_JJdE.js";import"./MenuItem-DIQqnyL7.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./InformationSquare-BoTINEEI.js";import"./MenuElipsisHorizontal-BBzbVmNF.js";import"./Pencil-1fSgiJZg.js";import"./Trash-DzwQmE5W.js";import"./SettingsModal-C8iA9LGz.js";import"./ModalBody-Buzt5Y32.js";import"./Section-y38TddTh.js";import"./Flex-DAi1mqH2.js";import"./ButtonGroup-DMo1vjo2.js";import"./ButtonIcon-BPhBRYr6.js";import"./ButtonLabel-BM1cuKZU.js";import"./TextField-kCiQvilu.js";import"./SkipLink-CMJXTqeb.js";import"./Banner-CgGn4ld8.js";import"./GlobalHeader-Cul3_W4N.js";import"./useIsDesktop-DHn9NFnV.js";import"./GlobalAccountButton-B1iyWna8.js";import"./Enter-BYRDYIIB.js";import"./GlobalMenuButton-CT08G8W9.js";import"./MenuHamburger-DXcMtlZO.js";import"./AccountSelector-_JFmhpGC.js";import"./Switch-D8OUSpth.js";import"./AccountMenu-CCss5l2L.js";import"./GlobalMenu-Dnq16ZSP.js";import"./ArrowUndo-0nTHxWEP.js";import"./Globe-I7v1GZNV.js";import"./BreadcrumbsLink-Bfs8jBLi.js";import"./ArrowRight-CYzhC7P8.js";import"./Footer-BFW489-_.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
