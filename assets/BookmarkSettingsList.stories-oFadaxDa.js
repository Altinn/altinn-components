import{a7 as t}from"./iframe-CAfDO4Rw.js";import{B as a,u as n}from"./useBookmarks-CA_2G5B7.js";import{B as d}from"./BookmarkModal-DQXRWtKn.js";import{L as c}from"./Layout-DP5CKFnX.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BpN0JSlm.js";import"./BookmarkSettingsItem-BpO7bMd4.js";import"./QueryLabel-AutZj0NM.js";import"./Plus-Do7Jzj4H.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./SettingsItemBase-dCqVkkCT.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./ChevronRight-CMD5YJ4n.js";import"./ItemBase-BuGGJ2CO.js";import"./ItemLink-CCPRI1Ze.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./Typography-CTt20h0e.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./ContextMenu-omywxW20.js";import"./useDropdownMenuController-gEOrHOh0.js";import"./Dropdown-BLYLo4fX.js";import"./SearchField-CVnH2ZZ_.js";import"./FieldBase-E5ODadVE.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./MenuItem-CDhdlBX8.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";import"./MenuElipsisHorizontal-Opnuvmqm.js";import"./Pencil-CbpHmaiu.js";import"./Trash-BW5FxSER.js";import"./SettingsModal-YVbPlhU4.js";import"./ModalBody-BswaS8cy.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./ButtonGroup-CUCgVY-r.js";import"./ButtonIcon-DGXgnp7S.js";import"./ButtonLabel-Dlfdkbnt.js";import"./TextField-Ds_w_q0K.js";import"./SkipLink-SRA93zox.js";import"./Banner-BvxYWovr.js";import"./GlobalHeader-BRzIT6WZ.js";import"./useIsDesktop-oe3Vmt84.js";import"./GlobalAccountButton-FGwVvji7.js";import"./Enter-5yhx44NG.js";import"./GlobalMenuButton-BQsSuGya.js";import"./MenuHamburger-DLotVjoT.js";import"./AccountSelector-B8jaN2Sa.js";import"./Switch-DrFSt_mm.js";import"./AccountMenu-BDuqlTQs.js";import"./GlobalMenu-D9bNvlFB.js";import"./ArrowUndo-C66w3eEr.js";import"./Globe-DM8Kx5I5.js";import"./BreadcrumbsLink-DqwDcFLk.js";import"./ArrowRight-GCZXQY6s.js";import"./Footer-B_H4Mosp.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
