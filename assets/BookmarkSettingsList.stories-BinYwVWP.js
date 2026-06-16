import{a7 as t}from"./iframe-5uZaoZDv.js";import{B as a,u as n}from"./useBookmarks-BI_BpPUP.js";import{B as d}from"./BookmarkModal-D_14--Md.js";import{L as c}from"./Layout-YlJjt3Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-ihj2gTIo.js";import"./BookmarkSettingsItem-BAZ-HzhF.js";import"./QueryLabel-soYM2iwT.js";import"./Plus-Niq-gKxO.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./SettingsItemBase-B0BSn8ZL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./ChevronRight-Bm7ufgRx.js";import"./ItemBase-CNx3m5cy.js";import"./ItemLink-1JWfbyN9.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./Typography-DIry-l26.js";import"./MagnifyingGlass-BhHVps8f.js";import"./ContextMenu-B6BhHYA_.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./FieldBase-D-wimfjV.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";import"./Pencil-LLi1GE-R.js";import"./Trash-2WKaOU1P.js";import"./SettingsModal-BVzJVcba.js";import"./ModalBody-DNZy-Qrb.js";import"./Section-BAWmKTu0.js";import"./Flex-n4FQi775.js";import"./ButtonGroup-BERBX_Ni.js";import"./ButtonIcon-DCP33fL5.js";import"./ButtonLabel-BsxQmxna.js";import"./TextField-BmUy1KEc.js";import"./SkipLink-BxsFb5Og.js";import"./Banner-n9wWpLew.js";import"./GlobalHeader-K2Vvsrfp.js";import"./useIsDesktop-BtoJpQh7.js";import"./GlobalAccountButton-D3YkeWN6.js";import"./Enter-BLjcmL9e.js";import"./GlobalMenuButton-UDYXjn0g.js";import"./MenuHamburger-Dp4fYPBF.js";import"./AccountSelector-DRG0v8TS.js";import"./Switch-DtoW_28_.js";import"./AccountMenu-oPXEEHya.js";import"./GlobalMenu-CQ0cRHDw.js";import"./ArrowUndo-DYsQqSN_.js";import"./Globe-BFCa4mjd.js";import"./BreadcrumbsLink-fOI1FWh4.js";import"./ArrowRight-Ucu-Xew7.js";import"./Footer-Cr5jeopI.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
