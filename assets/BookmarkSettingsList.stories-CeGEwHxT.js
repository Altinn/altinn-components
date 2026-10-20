var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-uBWg0zsp.js";import{B as n,u as d}from"./useBookmarks-B9vlutD6.js";import{B as l}from"./BookmarkModal-Dh_LYm_B.js";import{L as u}from"./Layout-DZANu_Hh.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CXJ-cLkO.js";import"./BookmarkSettingsItem-DtAHEzr8.js";import"./QueryLabel-BuGqoiMg.js";import"./Plus-BMtrBUYo.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./SettingsItemBase-Dqw8W-AX.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";import"./ItemBase-DJIQNQsT.js";import"./ItemLink-DAu62COd.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./Typography-nYxE8-3g.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./ContextMenu-BmGKPgKH.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./FieldBase-Bze69qIO.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./InformationSquare-D-wVMUGu.js";import"./MenuElipsisHorizontal-PnMCFiJK.js";import"./Pencil-XwlAcQRE.js";import"./Trash-C1BuSK8u.js";import"./SettingsModal-BznIzZKL.js";import"./ModalBody-BN9ps4gr.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./ButtonGroup-C6ZuBQRD.js";import"./ButtonIcon-CRTvNn4A.js";import"./ButtonLabel-BCgwFtnQ.js";import"./TextField-Bm0uOHKU.js";import"./SkipLink-DgpJ_2v3.js";import"./CookieBanner-BjYHKuiX.js";import"./Banner-BfHzf1w4.js";import"./GlobalHeader-D5vHX9No.js";import"./useIsDesktop-DcTRZ5ZT.js";import"./GlobalAccountButton-Drtkc2-N.js";import"./Enter-DhpyhqgF.js";import"./GlobalMenuButton-DMNOqqY2.js";import"./MenuHamburger-mpc9gk08.js";import"./AccountSelector-CGZQPmIW.js";import"./Switch-dVR22df8.js";import"./AccountMenu-N2jjgUvV.js";import"./GlobalMenu-Bb3b-FRJ.js";import"./ArrowUndo--sIB0AY5.js";import"./Globe-BL8S-NB7.js";import"./BreadcrumbsLink-CxH1qZz5.js";import"./ArrowRight-DsN3MKzI.js";import"./Footer-DRDgkYE3.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
