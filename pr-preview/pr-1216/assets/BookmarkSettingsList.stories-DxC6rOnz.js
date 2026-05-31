import{p as t}from"./iframe-B0raGbVc.js";import{B as a,u as n}from"./useBookmarks-BxJyYLik.js";import{B as d}from"./BookmarkModal-CfRBFcMQ.js";import{L as c}from"./Layout-QCIecE9T.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DBDHaupH.js";import"./BookmarkSettingsItem-CNnkkj4K.js";import"./QueryLabel-DGYI0S1S.js";import"./Plus-Ddu_AJ6f.js";import"./useId-DjmMrSjF.js";import"./Heading-HwRbtbil.js";import"./index-BFPoepm_.js";import"./useHighlightedText-Cy927kZm.js";import"./Skeleton-Bie46BNt.js";import"./SettingsItemBase-KAndVJGv.js";import"./ItemMedia-vIK6hHXj.js";import"./XMark-Vu63tlKp.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./ChevronRight-B1cS3dE4.js";import"./ItemBase-BOE3ch8M.js";import"./ItemLink-CuY20mCv.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./tooltip-C563LrpG.js";import"./Typography-aMX_Xall.js";import"./MagnifyingGlass-M1myOHdK.js";import"./ContextMenu-BVVWzEzP.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./Button-DaZ5Xj9O.js";import"./SearchField-x-7DN5Df.js";import"./FieldBase-COYRg4qt.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./MenuElipsisHorizontal-1hmmtM6d.js";import"./Pencil-DS7stHdl.js";import"./Trash-Bu2Rqg9N.js";import"./SettingsModal-CrxZUlDd.js";import"./ModalBody-Bc7rXxzI.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";import"./ButtonGroup-DlKQjFoe.js";import"./ButtonIcon-BDD4AILi.js";import"./ButtonLabel-C6Vo5Tgm.js";import"./TextField-BfjlbdAL.js";import"./SkipLink-D2yrIW26.js";import"./Banner-CWW83XfK.js";import"./GlobalHeader-bJp6RkQU.js";import"./useIsDesktop-Cwvy_3Jm.js";import"./GlobalAccountButton-CHYERUMO.js";import"./Enter-Cd7cTmaf.js";import"./GlobalMenuButton--b7NNrkr.js";import"./MenuHamburger-Dba65Zbz.js";import"./AccountSelector-BH3UH1p6.js";import"./Switch-CQ1PRon6.js";import"./AccountMenu-BWc1PKxE.js";import"./GlobalMenu-tSekvntC.js";import"./ArrowUndo-Chz8G1hW.js";import"./Globe-_gdTWSw-.js";import"./BreadcrumbsLink-x04d0tcu.js";import"./ArrowRight-CdBEvmkm.js";import"./Footer-CqVjsfSk.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Oo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Oo as __namedExportsOrder,_o as default};
