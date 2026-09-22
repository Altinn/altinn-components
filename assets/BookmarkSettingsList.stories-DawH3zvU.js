import{a7 as t}from"./iframe-COBbWeA3.js";import{B as a,u as n}from"./useBookmarks-DpEhTSAG.js";import{B as d}from"./BookmarkModal-D04a9QGd.js";import{L as c}from"./Layout-BQN34pf_.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C3_JQO79.js";import"./BookmarkSettingsItem-ZYZpdD29.js";import"./QueryLabel-D7CnTiRm.js";import"./Plus-CZeME9An.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./SettingsItemBase-BUs3VcwU.js";import"./ItemMedia-CVZylXEj.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./ChevronUp-BDeeV8M4.js";import"./ChevronDown-DuT6TpEz.js";import"./ChevronRight-gAwtmJAo.js";import"./ItemBase-Dh7qzoHA.js";import"./ItemLink-DTMH6OJr.js";import"./ItemControls-DB9Qd_W5.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./Typography-BEwm6wl9.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./ContextMenu-CrIvz9QE.js";import"./useDropdownMenuController-BLmBdG76.js";import"./Dropdown-B2n1P303.js";import"./SearchField-C1W3zbfq.js";import"./FieldBase-DRB9b-3z.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./Input-BuLWJ9G8.js";import"./MenuListItem-BpH-lOdT.js";import"./MenuListDivider-C_auds-g.js";import"./MenuListHeading-BpdGMS_N.js";import"./MenuItem-nArOW8Hu.js";import"./Checkmark-nzyjGA6l.js";import"./ItemLabel-BFAcVwUa.js";import"./InformationSquare-DlnV5Jxm.js";import"./MenuElipsisHorizontal-CTMR9KRD.js";import"./Pencil-C81QQIQT.js";import"./Trash-C2miCmJW.js";import"./SettingsModal-QKjEc8Cf.js";import"./ModalBody-Ceid2vmt.js";import"./Section-4iuaFN40.js";import"./Flex-D1m969Q2.js";import"./ButtonGroup-BLVUIK36.js";import"./ButtonIcon-eJ5o8zW1.js";import"./ButtonLabel-EuAdkLCo.js";import"./TextField-BshP868l.js";import"./SkipLink-BAgXMzLq.js";import"./CookieBanner-CrHvGZUE.js";import"./Banner-DykrVk8_.js";import"./GlobalHeader-B5Gg2oRQ.js";import"./useIsDesktop-YnGGveQt.js";import"./GlobalAccountButton-BMBMFuTz.js";import"./Enter-BNlWh4Qh.js";import"./GlobalMenuButton-B88uOtkT.js";import"./MenuHamburger-Bzaj4enJ.js";import"./AccountSelector-BYptsVl6.js";import"./Switch-2hglO3ot.js";import"./AccountMenu-Bw7dQ1ke.js";import"./GlobalMenu-WbiDej2B.js";import"./ArrowUndo-CNM4Ftfy.js";import"./Globe-Yb8kgyab.js";import"./BreadcrumbsLink-BjFsUCUk.js";import"./ArrowRight-y8OQlwU9.js";import"./Footer-C-W1fgIq.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
