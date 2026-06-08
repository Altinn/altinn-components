import{a7 as t}from"./iframe-C3-39QZn.js";import{B as a,u as n}from"./useBookmarks-D66VZTLn.js";import{B as d}from"./BookmarkModal-DrzaAB3v.js";import{L as c}from"./Layout-_ZyhwWen.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-PdCJBcPZ.js";import"./BookmarkSettingsItem-060GFof5.js";import"./QueryLabel-CRUzB3YJ.js";import"./Plus-CD1Lx9Ec.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./SettingsItemBase-H74J4ETX.js";import"./ItemMedia-Dvk-rH5V.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./ChevronRight-C8E9q9OI.js";import"./ItemBase-BAbRxOK9.js";import"./ItemLink-B72RuPPU.js";import"./ItemControls-CvvFc83j.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./Typography-DzSxU3qn.js";import"./MagnifyingGlass-W4-YHK47.js";import"./ContextMenu-C49fggZX.js";import"./useDropdownMenuController-Ch-gS0ya.js";import"./Dropdown-DwcIrTVC.js";import"./SearchField-BHCumu4V.js";import"./FieldBase-CuUVQ-X3.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./MenuElipsisHorizontal-BDwvxdWn.js";import"./Pencil-BsCwV8ki.js";import"./Trash-Daess6ZY.js";import"./SettingsModal-BXOmvntj.js";import"./ModalBody-zCgDpQcI.js";import"./Section-B5UTl4N5.js";import"./Flex-cOQ4YkiH.js";import"./ButtonGroup-BudWnE7m.js";import"./ButtonIcon-BUSJeZxi.js";import"./ButtonLabel-DDZPkCx5.js";import"./TextField-CobAz6ps.js";import"./SkipLink-DI6dmZ0z.js";import"./Banner-CuBpCwm7.js";import"./GlobalHeader-BxC2Kzt0.js";import"./useIsDesktop-B_nl_2PG.js";import"./GlobalAccountButton-1c1oP4o_.js";import"./Enter-FSzNSatz.js";import"./GlobalMenuButton-lnjvOmqB.js";import"./MenuHamburger-BX-oMAjS.js";import"./AccountSelector-I9R229FX.js";import"./Switch-DF_iO8hw.js";import"./AccountMenu-CjG9lWO_.js";import"./GlobalMenu-LPr3bcCu.js";import"./ArrowUndo-CTGuYn12.js";import"./Globe-DapnUHe0.js";import"./BreadcrumbsLink-DDNJ-ZYG.js";import"./ArrowRight-CyqZHc8N.js";import"./Footer-DsHCDHEm.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
