import{a7 as t}from"./iframe-DWxW88Wb.js";import{B as a,u as n}from"./useBookmarks-CIvQFXkC.js";import{B as d}from"./BookmarkModal-BLU0sPBE.js";import{L as c}from"./Layout-BYPYvGug.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DXA38xVt.js";import"./BookmarkSettingsItem-zfkMZEvH.js";import"./QueryLabel-U07_SSTB.js";import"./Plus-DPgCKFUP.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./SettingsItemBase-C3RYc2hI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./ChevronUp-CEtfk9lQ.js";import"./ChevronDown-BB-XUZ3B.js";import"./ChevronRight-CaZE672G.js";import"./ItemBase-RbXLRpNl.js";import"./ItemLink-BIjbM8cf.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./Typography-Dvuik0pJ.js";import"./MagnifyingGlass-DeszhIH4.js";import"./ContextMenu-CS8Y-rHM.js";import"./useDropdownMenuController-D6SwXekY.js";import"./Dropdown-CCIsf4ws.js";import"./SearchField-DiX0tG9c.js";import"./FieldBase-CIL3pXPs.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";import"./MenuElipsisHorizontal-Cf3wHrhL.js";import"./Pencil-CSNyvO94.js";import"./Trash-D9-PBT3O.js";import"./SettingsModal-ZI_QNcze.js";import"./ModalBody-xWN5bJLh.js";import"./Section-B1-gfm2g.js";import"./Flex-DNJfc4Fp.js";import"./ButtonGroup-2XmunmNq.js";import"./ButtonIcon-BQmJIoeH.js";import"./ButtonLabel-B02-0FY2.js";import"./TextField-BJZMsOod.js";import"./SkipLink-DkjEsfbV.js";import"./Banner-BV8VXQU6.js";import"./GlobalHeader-C765PQS9.js";import"./useIsDesktop-BCueAbhV.js";import"./GlobalAccountButton-COsKF7Tf.js";import"./Enter-Fxl2xNK-.js";import"./GlobalMenuButton-Bg2p-r2N.js";import"./MenuHamburger-DJLRFmM-.js";import"./AccountSelector-EEHH-Kq6.js";import"./Switch-DePifvnb.js";import"./AccountMenu-Dfu0uW3u.js";import"./GlobalMenu-BUd0VjgT.js";import"./ArrowUndo-BNbnSrnn.js";import"./Globe-BJLo8sVQ.js";import"./BreadcrumbsLink-CNTXGuVE.js";import"./ArrowRight-DK82HgDq.js";import"./Footer-CDr_1NMF.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
