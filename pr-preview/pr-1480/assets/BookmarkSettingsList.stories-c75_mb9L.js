var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-M-0W2Kc9.js";import{B as a,u as d}from"./useBookmarks-DSQ7loJv.js";import{B as l}from"./BookmarkModal-CkuhbvSg.js";import{L as u}from"./Layout-v6Qt2V8K.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1I6Xbj7.js";import"./BookmarkSettingsItem-Cr33fwfq.js";import"./QueryLabel-B7kGTmjQ.js";import"./Plus-DyAe2qPf.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./SettingsItemBase-BCTOKKcn.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./ItemBase-F0Gk4WOT.js";import"./ItemLink-CCAm3_Nh.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./Typography-xHph4zf_.js";import"./MagnifyingGlass-BCQWJszI.js";import"./ContextMenu-BvjrPqZd.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemLabel-lDW_MVeZ.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./InformationSquare-DDYjH-iE.js";import"./Pencil-Dz6DWnFL.js";import"./Trash-DszqcR2r.js";import"./SettingsModal-QTOJw0zh.js";import"./ModalBody-D2JzRsow.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonIcon-B0Ww61Ca.js";import"./ButtonLabel-DaZOBcYC.js";import"./TextField-CHQPvnNv.js";import"./SkipLink-DntJm87m.js";import"./CookieBanner-CKoUg9tE.js";import"./Link-DAR5zBg4.js";import"./Banner-Bo7eGbbS.js";import"./GlobalHeader-Be6Dpmtw.js";import"./GlobalAccountButton-By-2tKoX.js";import"./Enter-DvPk9pty.js";import"./GlobalMenuButton-DjmeRY1w.js";import"./MenuHamburger-C2Da0bEq.js";import"./AccountSelector-DjZHSBhK.js";import"./Switch-rSPs52No.js";import"./AccountMenu-GyTJFnAZ.js";import"./GlobalMenu-gxscJUse.js";import"./Checkmark-v-SGYEEX.js";import"./ArrowUndo-BbhWyJt8.js";import"./Globe-BsQeD7rm.js";import"./BreadcrumbsLink-CRb6C2Tw.js";import"./ArrowRight-BaGs8lxe.js";import"./Footer-vBS3rioj.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
