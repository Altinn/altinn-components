import{p as t}from"./iframe-D7BK96qe.js";import{B as a,u as n}from"./useBookmarks-Cc_eZAYF.js";import{B as d}from"./BookmarkModal-Bqbar0-E.js";import{L as c}from"./Layout-D7xrS6Ks.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CRon1bQ1.js";import"./BookmarkSettingsItem-Bl-OyUi1.js";import"./QueryLabel-CFET3oqh.js";import"./Plus-C-8iSYwG.js";import"./useId-B1IjdNvC.js";import"./Heading-Q-ep_pj6.js";import"./index-CL9j6gFH.js";import"./useHighlightedText-C3262gRX.js";import"./Skeleton-C-TQnNEe.js";import"./SettingsItemBase-Dl_TEGd7.js";import"./ItemMedia-BmnjDO8T.js";import"./XMark-DKvmykI8.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";import"./ItemBase-BknciWr5.js";import"./ItemLink-BHcTvWw3.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";import"./Typography-CoOY9SxO.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./ContextMenu-CkW9u7kb.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./Button-UbmuloFB.js";import"./SearchField-D67W67ub.js";import"./FieldBase-DmZ-AQhF.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./MenuElipsisHorizontal-Cv2I31dy.js";import"./Pencil-CKFYHFX-.js";import"./Trash-CmRN9Bc1.js";import"./SettingsModal-ygENr3l7.js";import"./ModalBody-CO_In9L6.js";import"./Section-G7MRDbZ9.js";import"./Flex-DKrdkBVD.js";import"./ButtonGroup-DiPjg2lm.js";import"./ButtonIcon-DuHIMlrP.js";import"./ButtonLabel-fpKRE7dz.js";import"./TextField-CdGCjvMA.js";import"./SkipLink-Bg8vaqMH.js";import"./Banner-YynZTVZC.js";import"./GlobalHeader-CvXHZKKu.js";import"./useIsDesktop-PMHXXYUc.js";import"./GlobalAccountButton-BSlA4uPB.js";import"./Enter-DaYQWjuH.js";import"./GlobalMenuButton-D1XqvnHT.js";import"./MenuHamburger-Bs0s8Y7O.js";import"./AccountSelector-C8v5N-Us.js";import"./Switch-qdZlSErG.js";import"./AccountMenu-19aQyamh.js";import"./GlobalMenu-C8GOo16D.js";import"./ArrowUndo-DBwwr2s1.js";import"./Globe-Cpr4Y4_L.js";import"./BreadcrumbsLink-DIUVIcMw.js";import"./ArrowRight-C46TxStQ.js";import"./Footer-C_NfrQSv.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Oo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Oo as __namedExportsOrder,_o as default};
