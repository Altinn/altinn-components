import{a7 as t}from"./iframe-CH-Rf2AI.js";import{B as a,u as n}from"./useBookmarks-DyzvDjir.js";import{B as d}from"./BookmarkModal-5RpAYdF5.js";import{L as c}from"./Layout-5CLSl6Qa.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-FkcUMU_-.js";import"./BookmarkSettingsItem-Pi8Ol1QT.js";import"./QueryLabel-BtHWbHzV.js";import"./Plus-BQYmFmTa.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./SettingsItemBase-Cht2WGOe.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";import"./ItemBase-B9tNoNOm.js";import"./ItemLink-FshzAh5h.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./Typography-CqA3kMNv.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./ContextMenu-ClDw9k8P.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./FieldBase-BRTqs99O.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./MenuElipsisHorizontal-BHY8BNqA.js";import"./Pencil-CGxgD_fG.js";import"./Trash-BAmIqX5W.js";import"./SettingsModal-Bx3rcEds.js";import"./ModalBody-DWS6WpdW.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonIcon-CIT11Yqm.js";import"./ButtonLabel-DngeK8JL.js";import"./TextField-B2WC8qDF.js";import"./SkipLink-BCjaOKFl.js";import"./Banner-CnAxrOLU.js";import"./GlobalHeader-sT_AjsbH.js";import"./useIsDesktop-Dgi44TjI.js";import"./GlobalAccountButton-CT8sX0Ns.js";import"./Enter-DkRJwzLX.js";import"./GlobalMenuButton-CnyqvQAO.js";import"./MenuHamburger-DrB2GaRw.js";import"./AccountSelector-BbFrD_97.js";import"./Switch-C3S78qS-.js";import"./AccountMenu-NcwbISGC.js";import"./GlobalMenu-BpjEBk4h.js";import"./ArrowUndo-DkUyPEkv.js";import"./Globe-QtnCWb3M.js";import"./BreadcrumbsLink-jByZbqzh.js";import"./ArrowRight-CDNjHBQ0.js";import"./Footer-AF14lKWa.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
