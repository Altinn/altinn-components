var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-C2TXN9Gt.js";import{B as a,u as d}from"./useBookmarks-DP7qDw6_.js";import{B as l}from"./BookmarkModal-CGV6p3e8.js";import{L as u}from"./Layout-Bvz-SivH.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-PLj8_L9k.js";import"./BookmarkSettingsItem-flHUYZxT.js";import"./QueryLabel-BIp5x35V.js";import"./Plus-B0fUlCfQ.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./SettingsItemBase-BX9GDQIH.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ChevronUp-JvKfy9Td.js";import"./ChevronDown-5BC-Ndiq.js";import"./ChevronRight-B3qMZH3P.js";import"./ItemBase-BD-PEDpX.js";import"./ItemLink-TS7sXC8k.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./Typography-DMeULRXh.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./ContextMenu-D21gp6hT.js";import"./useDropdownMenuController-DrcWKor_.js";import"./Dropdown-ClxCQ_oE.js";import"./SearchField-BhmsKdsU.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemLabel-zq6K58HK.js";import"./FieldBase-RJLhkwbG.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./MenuListDivider-DUsmtn09.js";import"./InformationSquare-CbcqUQld.js";import"./MenuElipsisHorizontal-BXDtGYaS.js";import"./Pencil-LBT1q3xJ.js";import"./Trash-DNndesK1.js";import"./SettingsModal-wFW86i0h.js";import"./ModalBody-BeoKrKeu.js";import"./Section-SNWVUlRZ.js";import"./Flex-DqWQ_o-P.js";import"./ButtonGroup-BxGjQybR.js";import"./ButtonIcon-CnGIKhPB.js";import"./ButtonLabel-BmgMOskN.js";import"./TextField-BNnZg02K.js";import"./SkipLink-D9WHILnJ.js";import"./CookieBanner-CmYHFQbt.js";import"./Link-CNf1JpN_.js";import"./Banner-BG5mY4Ol.js";import"./GlobalHeader-Dp7Me0N9.js";import"./useIsDesktop-B9YQzkYM.js";import"./GlobalAccountButton-B7erYIhQ.js";import"./Enter-Dfwb13hO.js";import"./GlobalMenuButton-B13INuuG.js";import"./MenuHamburger-C2-afPRI.js";import"./AccountSelector-B-CZ9esz.js";import"./Switch-jEIAPBE0.js";import"./AccountMenu-CC-oiwXq.js";import"./GlobalMenu-CauoPyWU.js";import"./Checkmark-BMKDsWEg.js";import"./ArrowUndo-DzLQVWV6.js";import"./Globe-CL4kQMhG.js";import"./BreadcrumbsLink-DMdCkvNu.js";import"./ArrowRight-CvKeCsQH.js";import"./Footer-DbmN-9Bb.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),qo=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,qo as __namedExportsOrder,Oo as default};
