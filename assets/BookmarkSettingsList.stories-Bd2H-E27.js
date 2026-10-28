var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-BfD7syly.js";import{B as a,u as d}from"./useBookmarks-SGrGv6yG.js";import{B as l}from"./BookmarkModal-Jfot6IOV.js";import{L as u}from"./Layout-CHpZZy-N.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-o9JsDoVb.js";import"./BookmarkSettingsItem-B9NrKUkx.js";import"./QueryLabel-CaU1Vxco.js";import"./Plus-Oie_r0eR.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./SettingsItemBase-BtSbSFJ1.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";import"./ItemBase-ns7uWmGI.js";import"./ItemLink-B9RuLI2u.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./Typography-EJ3Vxj-4.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./ContextMenu-4kM9ynf9.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./FieldBase-fk0uyKjd.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./MenuElipsisHorizontal-BaU63blA.js";import"./Pencil-CvJAPEmt.js";import"./Trash-DKa5Tgj8.js";import"./SettingsModal-BAff8Jkt.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";import"./TextField-Gc8uNQmn.js";import"./SkipLink-BTv7syuZ.js";import"./CookieBanner-QVxSnXBQ.js";import"./Link-BuToNDy6.js";import"./Banner-wdoxvpRR.js";import"./GlobalHeader-lk5xpqdu.js";import"./useIsDesktop-Ba3et8z1.js";import"./GlobalAccountButton-B0Dl7laI.js";import"./Enter-CcW5u4Xu.js";import"./GlobalMenuButton-BPjq-f8K.js";import"./MenuHamburger-COAJxrWW.js";import"./AccountSelector-DOrv1x5T.js";import"./Switch-UQ3Ni1OJ.js";import"./AccountMenu-mY6CVbmC.js";import"./GlobalMenu-C4RLrARM.js";import"./ArrowUndo-C7PukArl.js";import"./Globe-BwTVQOT7.js";import"./BreadcrumbsLink-DYiILvvM.js";import"./ArrowRight-VmwRvciP.js";import"./Footer-CEdgTNjo.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
