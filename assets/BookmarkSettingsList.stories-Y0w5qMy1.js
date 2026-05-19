import{j as t}from"./iframe-CPVbSj3C.js";import{B as a,u as n}from"./useBookmarks-DEHUOJFx.js";import{L as c}from"./Layout-DM7d4JGX.js";import{B as d}from"./BookmarkModal-B36h03Ki.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-CaGkRCUN.js";import"./QueryLabel-itsnj659.js";import"./Plus-ChI102rs.js";import"./useId-CeU55pH0.js";import"./Heading-Bxz0tryo.js";import"./index-B-yq3MoC.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Skeleton-O-y9i0gG.js";import"./SettingsItemBase-D1iPa5AE.js";import"./ChevronUp-26jjNeZQ.js";import"./ChevronDown-Dne2Ro5q.js";import"./ChevronRight-D8cN60Uo.js";import"./ItemLink-C2_R4otY.js";import"./ItemMedia-C5hW-xxB.js";import"./XMark-DWjKCZtX.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./ItemControls-DA5Yy7AS.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Typography-CiUpHFvi.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./ContextMenu-BpEtaE5j.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Dropdown-CWKVFS9V.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./MenuElipsisHorizontal-2MdITEPY.js";import"./SearchField-B-nnAALe.js";import"./FieldBase-COzHnWja.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./Checkmark-D2vzhSBC.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./Pencil-BX-ws17f.js";import"./Trash-CN9HTNng.js";import"./SkipLink-C9vS1cNP.js";import"./Banner-CP2Dj74D.js";import"./GlobalHeader-BGoCnhrS.js";import"./useIsDesktop-BZmvipjT.js";import"./GlobalAccountButton-CtFwuVqI.js";import"./Enter-CVOd6v7z.js";import"./GlobalMenuButton-DRqsafuN.js";import"./MenuHamburger-CAdTjq6-.js";import"./AccountSelector-rf5kfVpR.js";import"./heading-Byf1hlNK.js";import"./AccountMenu-BgkC_wNu.js";import"./Switch-kADCV8Cm.js";import"./GlobalMenu-C_-kd9LF.js";import"./ArrowUndo-BAwqFT7u.js";import"./Globe-B9YHqOf_.js";import"./BreadcrumbsLink-Cqbe4lvR.js";import"./ArrowRight-HvbH3AZa.js";import"./Footer-Br-nBrtw.js";import"./SettingsModal-BSXdfxkk.js";import"./ModalBody-BKlJM7ar.js";import"./Section-D88C7V2M.js";import"./Flex-DcepQHCt.js";import"./ButtonGroup-Cm_Y-nHl.js";import"./ButtonIcon-2zejLvFM.js";import"./ButtonLabel-DpmDeYsj.js";import"./TextField-B-bNJNaA.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
