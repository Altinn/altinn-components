import{j as t}from"./iframe-C6Awlou2.js";import{B as a,u as n}from"./useBookmarks-B3fOAFx0.js";import{L as c}from"./Layout-DkosuPlP.js";import{B as d}from"./BookmarkModal-BEHB3cKk.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-C42E8Abq.js";import"./QueryLabel-RNavFCKB.js";import"./Plus-CQfWxjRv.js";import"./useId-InpKFtFj.js";import"./Heading-CwC0m1gc.js";import"./index-DlBZqmFk.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./SettingsItemBase-XUMRuJ8B.js";import"./ChevronUp-CFyLtqTc.js";import"./ChevronDown-BaaUSGet.js";import"./ChevronRight-BPFGJ1iV.js";import"./ItemLink-sxVrkQm-.js";import"./ItemMedia-C094egTG.js";import"./XMark-BEbAfGHw.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./ItemControls-vVSkFb-5.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./tooltip-wBWP-9p3.js";import"./Typography-B5eitD86.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./ContextMenu-Bd4hTYBx.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Dropdown-A06NMf9H.js";import"./Button-xDUaTd0f.js";import"./MenuElipsisHorizontal-DVK_g9_l.js";import"./SearchField-BUnYpq_7.js";import"./FieldBase-D62sKxwt.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./Checkmark-dLQcEakJ.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./Pencil-sKWMbRPT.js";import"./Trash-Ccqpg617.js";import"./SkipLink-ClJhy9R4.js";import"./Banner-B2-xsWiw.js";import"./GlobalHeader-D9yJCn9E.js";import"./useIsDesktop-D-E7EXZk.js";import"./GlobalAccountButton-DR_MSRuC.js";import"./Enter-By-vbuTM.js";import"./GlobalMenuButton-zLuNCWIe.js";import"./MenuHamburger-BcKlYS8F.js";import"./AccountSelector-DOlRr3zX.js";import"./AccountMenu-BizNTwai.js";import"./Switch-gn6KCAh3.js";import"./GlobalMenu-DaKgjP9J.js";import"./ArrowUndo-CHAtcjGp.js";import"./Globe-CwfeybF1.js";import"./BreadcrumbsLink-BMloO8NQ.js";import"./ArrowRight-DqNeR1fr.js";import"./Footer-CBH_g3LI.js";import"./SettingsModal-D4o6h_BN.js";import"./ModalBody-B_QH7FJE.js";import"./Section-Bo2XNiOH.js";import"./Flex-CdwLgxBs.js";import"./ButtonGroup-wXquxLDR.js";import"./ButtonIcon-CsIFcTMm.js";import"./ButtonLabel-DV3CS5lX.js";import"./TextField-Cy0Mg42Y.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
