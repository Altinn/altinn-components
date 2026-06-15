import{a7 as t}from"./iframe-Dr1YYpI1.js";import{B as a,u as n}from"./useBookmarks-B9TrzIco.js";import{B as d}from"./BookmarkModal-gRbt8P4j.js";import{L as c}from"./Layout-5ZsbLQyX.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BbXnEU1n.js";import"./BookmarkSettingsItem-CPzN7RrS.js";import"./QueryLabel-BlT9TgCH.js";import"./Plus-BM0HHz2J.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./SettingsItemBase-DQ4J7FZj.js";import"./ItemMedia-BpxSm7tv.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./ChevronRight-F0aXUvpz.js";import"./ItemBase-0lWwxmT3.js";import"./ItemLink-DdXuuqzx.js";import"./ItemControls-DQl8k1jC.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./Typography-CAIidHgh.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./ContextMenu-DFPb-mjt.js";import"./useDropdownMenuController-lfZpt0cM.js";import"./Dropdown-CkHQtX7v.js";import"./SearchField-Cir7dqyx.js";import"./FieldBase-CyLGbTYK.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./index-CjeWyC4B.js";import"./InformationSquare-zR3kX6_5.js";import"./MenuElipsisHorizontal-DtCz34LC.js";import"./Pencil-_NjDtMgk.js";import"./Trash-CnTRL0Pz.js";import"./SettingsModal-rGIq4aQc.js";import"./ModalBody-F3dsMu5Q.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./ButtonGroup-B0d19ndD.js";import"./ButtonIcon-Bf7UK4aY.js";import"./ButtonLabel-Bo8mZTJ3.js";import"./TextField-r5jzqpCl.js";import"./SkipLink-5VbJH3DU.js";import"./Banner-DCxFdlmr.js";import"./GlobalHeader-B6ogT5nG.js";import"./useIsDesktop-Bu-RS-9i.js";import"./GlobalAccountButton-2zQ2__QA.js";import"./Enter-CZIDW6VQ.js";import"./GlobalMenuButton-B8j437rz.js";import"./MenuHamburger-CtKmesiU.js";import"./AccountSelector-DmgFSS3z.js";import"./Switch-ClYJWXJa.js";import"./AccountMenu-D2X5yeug.js";import"./GlobalMenu-DFS905tY.js";import"./ArrowUndo-DGVtmQoj.js";import"./Globe-AL5Vn8Uk.js";import"./BreadcrumbsLink-TVyeKM67.js";import"./ArrowRight-BcHhXBIz.js";import"./Footer-B5MO7C7H.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
