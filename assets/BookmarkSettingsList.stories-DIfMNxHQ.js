import{a7 as t}from"./iframe-cf7ESM3q.js";import{B as a,u as n}from"./useBookmarks-D0aKyk28.js";import{B as d}from"./BookmarkModal-DZBrF5pH.js";import{L as c}from"./Layout-CAIfVUrF.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-_swqW8No.js";import"./BookmarkSettingsItem-Ck4JhXUy.js";import"./QueryLabel-BBoHYekD.js";import"./Plus-DZ3k40hQ.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./SettingsItemBase-BrVj-ZUF.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./ChevronUp-B_u4FtrM.js";import"./ChevronDown-DOXFb4Ko.js";import"./ChevronRight-Dy1T7Tgm.js";import"./ItemBase-DBUySgC8.js";import"./ItemLink-C-gfXYm1.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./Typography-C5h-r7_j.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./ContextMenu-ZO1EGpdQ.js";import"./useDropdownMenuController-BITRw-0y.js";import"./Dropdown-pCaEySNe.js";import"./SearchField-B1yhNL-S.js";import"./FieldBase-D5M9JHnI.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuListHeading-0GDPIxXY.js";import"./MenuItem-CoaVEq9r.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./index-BVMz6Wm9.js";import"./InformationSquare-DtaIp5wP.js";import"./MenuElipsisHorizontal-BXY-RDWv.js";import"./Pencil-DpmUZKGH.js";import"./Trash-DdUwR8QG.js";import"./SettingsModal-DbIBSzvV.js";import"./ModalBody-VT_dxbpd.js";import"./Section-DoG5yznh.js";import"./Flex-BG_p9pKV.js";import"./ButtonGroup-7_JFosKC.js";import"./ButtonIcon-BkOaHRFK.js";import"./ButtonLabel-C2_4Zy3g.js";import"./TextField-Ujy-2-ni.js";import"./SkipLink-BDKZXt2s.js";import"./Banner-DsXTXxZS.js";import"./GlobalHeader-BmyywXpd.js";import"./useIsDesktop-COQTv6Fz.js";import"./GlobalAccountButton-DCQL49o3.js";import"./Enter-yIOjQNNu.js";import"./GlobalMenuButton-CkIATsWA.js";import"./MenuHamburger-34tTEjhH.js";import"./AccountSelector-CI8buLGW.js";import"./Switch-BB41QvVL.js";import"./AccountMenu-CaQbgFEk.js";import"./GlobalMenu-0enIjrbU.js";import"./ArrowUndo-CMsTXw-F.js";import"./Globe-Cxc02z3t.js";import"./BreadcrumbsLink-DZknAQKp.js";import"./ArrowRight-D9AexiPz.js";import"./Footer-1dKGm-oG.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
