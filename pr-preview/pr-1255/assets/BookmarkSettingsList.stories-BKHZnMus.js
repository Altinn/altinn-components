import{a7 as t}from"./iframe-2h8IP8d3.js";import{B as a,u as n}from"./useBookmarks-D1KXwxYB.js";import{B as d}from"./BookmarkModal-CZpfZ893.js";import{L as c}from"./Layout-C20X-NGx.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DBT0rzRb.js";import"./BookmarkSettingsItem-Z-KEA29_.js";import"./QueryLabel-DZmICoZB.js";import"./Plus-VIPYJ0p2.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./SettingsItemBase-BIjnVYrZ.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./ChevronRight-Bz8Cr0I4.js";import"./ItemBase-Pkm_V99C.js";import"./ItemLink-CONNhs78.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./Typography-DY06DO0f.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./ContextMenu-JRPx45pc.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./SearchField-_MN_HrdV.js";import"./FieldBase-DGYDbbnf.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./MenuElipsisHorizontal-CeM94VAc.js";import"./Pencil-x_uSjeU0.js";import"./Trash-DgElRFQM.js";import"./SettingsModal-VYSSGws5.js";import"./ModalBody-BO_Js4U5.js";import"./Section-CJtHgorM.js";import"./Flex-CMEhZHn2.js";import"./ButtonGroup-Ct8EhDC8.js";import"./ButtonIcon-p_3bwngP.js";import"./ButtonLabel-BONSwqvL.js";import"./TextField-B-jWxqG0.js";import"./SkipLink-akMj12yM.js";import"./Banner-DAp-HVvT.js";import"./GlobalHeader-Dewm9U2Z.js";import"./useIsDesktop-BpM9fvc4.js";import"./GlobalAccountButton-CiVU53Gm.js";import"./Enter-DM5C-XCw.js";import"./GlobalMenuButton-ITQ51a2a.js";import"./MenuHamburger-t7pO2iZ9.js";import"./AccountSelector-LB0WlrvF.js";import"./Switch-CggvXl6Z.js";import"./AccountMenu-b-xdAwhQ.js";import"./GlobalMenu-gyGuqkpR.js";import"./ArrowUndo-P3YakjFB.js";import"./Globe-BK_-3aK-.js";import"./BreadcrumbsLink-BPPepTBp.js";import"./ArrowRight-DN3sEIAa.js";import"./Footer-BbDKvcxQ.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
