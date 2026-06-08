import{a7 as t}from"./iframe-BkdCVhNa.js";import{B as a,u as n}from"./useBookmarks-v7v-yarR.js";import{B as d}from"./BookmarkModal-DXQ7UvPQ.js";import{L as c}from"./Layout-BPsUbmzN.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Dy3YaaUo.js";import"./BookmarkSettingsItem-Bo5CypG2.js";import"./QueryLabel-CnM4ONJq.js";import"./Plus-1oHAiQB4.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./SettingsItemBase-CySS0J0H.js";import"./ItemMedia-ZGWW7sv6.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./ChevronUp-5uVavT__.js";import"./ChevronDown-DHl1_IXJ.js";import"./ChevronRight-BWpY3hyQ.js";import"./ItemBase-CvuWU474.js";import"./ItemLink-DAE7sH1c.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./Typography-BbYlnfM1.js";import"./MagnifyingGlass-Dy-txje3.js";import"./ContextMenu-_PNq0coO.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./SearchField-ClkEO99z.js";import"./FieldBase-DIosJ8GZ.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuListHeading-ITzk-OYW.js";import"./MenuItem-DLDMkBQ4.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./MenuElipsisHorizontal-Bwh4aScC.js";import"./Pencil-BdWdfQVK.js";import"./Trash-DpXv8-T-.js";import"./SettingsModal-DpPyb3um.js";import"./ModalBody-DLY4BfUv.js";import"./Section-CCbnuMor.js";import"./Flex-0kNayUnl.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonIcon-BF0TueQT.js";import"./ButtonLabel-Bhmgk5ut.js";import"./TextField-B36IzlVh.js";import"./SkipLink-CZNC6AMl.js";import"./Banner-BtkWMuu4.js";import"./GlobalHeader-C0K-hU4h.js";import"./useIsDesktop-NTAS9CUx.js";import"./GlobalAccountButton-B6C1II4k.js";import"./Enter-DiGWFFtb.js";import"./GlobalMenuButton-CaKOaztv.js";import"./MenuHamburger-C33_VoLZ.js";import"./AccountSelector-DTLixZrl.js";import"./Switch-C8Xs5NQy.js";import"./AccountMenu-BTU2xb98.js";import"./GlobalMenu-mdYdEyJ4.js";import"./ArrowUndo-BT2qWUsa.js";import"./Globe-DlgMAhhy.js";import"./BreadcrumbsLink-C_aB2WWU.js";import"./ArrowRight-Eyt5oeY3.js";import"./Footer-Dh1VwpR_.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
