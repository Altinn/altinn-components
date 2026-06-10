import{a7 as t}from"./iframe-CENvAP26.js";import{B as a,u as n}from"./useBookmarks-BQgdA5NU.js";import{B as d}from"./BookmarkModal-DbKbbhqM.js";import{L as c}from"./Layout-DAQpfuz2.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DmwlujsT.js";import"./BookmarkSettingsItem-B-v4RMVz.js";import"./QueryLabel-BP7BuKC8.js";import"./Plus-CWY-kAGj.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./SettingsItemBase-CcMWppnL.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./ChevronUp-BFUCM25K.js";import"./ChevronDown-88nFsQYK.js";import"./ChevronRight-CqCnB5Zg.js";import"./ItemBase-BmDbJFS_.js";import"./ItemLink-DEb6WuQs.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./Typography-BK5AylHP.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./ContextMenu-AeMGqdrL.js";import"./useDropdownMenuController-BbdnPNgS.js";import"./Dropdown-BZVY_4Wm.js";import"./SearchField-B76VS5jy.js";import"./FieldBase-IIcWSE0k.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuListHeading-BD0rgLCP.js";import"./MenuItem-Fa6rC5wV.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./index-BzTqrnLh.js";import"./InformationSquare-DfDfuKua.js";import"./MenuElipsisHorizontal-CQDhRMvW.js";import"./Pencil-D0UsiUm5.js";import"./Trash-Cs7D8kti.js";import"./SettingsModal-fj349tuh.js";import"./ModalBody-BPAT2cvX.js";import"./Section-Dfl51lKI.js";import"./Flex-yTAvUoR1.js";import"./ButtonGroup-C4l5taXG.js";import"./ButtonIcon-CfWllzoR.js";import"./ButtonLabel-CGMQv3HF.js";import"./TextField-fdkUYqPj.js";import"./SkipLink-CpJ5iCln.js";import"./Banner-DmmSmM5y.js";import"./GlobalHeader-BqqSQIP8.js";import"./useIsDesktop-C4w-DyYP.js";import"./GlobalAccountButton-C3e6i8a2.js";import"./Enter-CEXAJ-VY.js";import"./GlobalMenuButton-BJO4NSOM.js";import"./MenuHamburger-acEhsrwC.js";import"./AccountSelector-B1AzVeP1.js";import"./Switch-BB3pqrIE.js";import"./AccountMenu-BnAb9qBG.js";import"./GlobalMenu-tnZS_kWC.js";import"./ArrowUndo-DxMsWBCJ.js";import"./Globe-0uZUwFK3.js";import"./BreadcrumbsLink-A93bLAC6.js";import"./ArrowRight-Dz7-H-VC.js";import"./Footer-BqQW_uLB.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
